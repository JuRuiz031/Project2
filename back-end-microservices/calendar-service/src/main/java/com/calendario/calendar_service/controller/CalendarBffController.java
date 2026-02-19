package com.calendario.calendar_service.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.calendar_service.client.EventServiceClient;
import com.calendario.calendar_service.client.PollServiceClient;
import com.calendario.calendar_service.client.UserServiceClient;
import com.calendario.calendar_service.dto.CalendarCreateRequestDTO;
import com.calendario.calendar_service.dto.CalendarDeleteResponseDTO;
import com.calendario.calendar_service.dto.CalendarFilterResponseDTO;
import com.calendario.calendar_service.dto.CalendarHomeResponseDTO;
import com.calendario.calendar_service.dto.CalendarResponseDTO;
import com.calendario.calendar_service.dto.CalendarSummaryDTO;
import com.calendario.calendar_service.dto.CalendarUpdateRequestDTO;
import com.calendario.calendar_service.dto.CalendarUpdateResponseDTO;
import com.calendario.calendar_service.dto.EventResponseDTO;
import com.calendario.calendar_service.dto.PollResponseDTO;
import com.calendario.calendar_service.dto.UserInfoDTO;
import com.calendario.calendar_service.dto.UserInternalDTO;
import com.calendario.calendar_service.model.Calendar;
import com.calendario.calendar_service.repository.CalendarRepository;
import com.calendario.calendar_service.service.CalendarService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/calendar")
public class CalendarBffController {

    private final CalendarService calendarService;
    private final CalendarRepository calendarRepository;
    private final UserServiceClient userServiceClient;
    private final EventServiceClient eventServiceClient;
    private final PollServiceClient pollServiceClient;

    public CalendarBffController(CalendarService calendarService,
                                  CalendarRepository calendarRepository,
                                  UserServiceClient userServiceClient,
                                  EventServiceClient eventServiceClient,
                                  PollServiceClient pollServiceClient) {
        this.calendarService = calendarService;
        this.calendarRepository = calendarRepository;
        this.userServiceClient = userServiceClient;
        this.eventServiceClient = eventServiceClient;
        this.pollServiceClient = pollServiceClient;
    }

    /**
     * GET /api/v1/calendar         -> CalendarHomeResponseDTO (calendars + tags)
     * GET /api/v1/calendar?calendarIds=x,y -> CalendarFilterResponseDTO (events + polls)
     */
    @GetMapping
    public ResponseEntity<?> getCalendar(
            @RequestParam(required = false) String calendarIds) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        if (calendarIds == null || calendarIds.isBlank()) {
            return ResponseEntity.ok(getCalendarHome(username));
        } else {
            List<String> ids = List.of(calendarIds.split(","));
            return ResponseEntity.ok(getFilteredData(ids));
        }
    }

    // === Composite: Homepage ===

    private CalendarHomeResponseDTO getCalendarHome(String username) {
        // 1. Get user info with calendar memberships
        UserInternalDTO user = userServiceClient.getUserByUsername(username);

        // 2. Extract calendar IDs
        List<UserInternalDTO.CalendarMembership> memberships = user.calendarIds();
        List<String> calendarIdList = memberships.stream()
                .map(UserInternalDTO.CalendarMembership::calendarId)
                .collect(Collectors.toList());

        // 3. Fetch calendar documents from local DB
        List<Calendar> calendars = calendarRepository.findAllById(calendarIdList);

        // 4. Build CalendarSummaryDTO for each calendar (with members)
        List<CalendarSummaryDTO> summaries = new ArrayList<>();
        for (Calendar cal : calendars) {
            boolean isAdmin = user.isAdminOfCalendar(cal.getId());

            List<UserInternalDTO> members = userServiceClient.getMembersByCalendar(cal.getId());
            List<UserInfoDTO> userInfos = members.stream()
                    .map(m -> new UserInfoDTO(
                            m.id(),
                            m.username(),
                            m.isAdminOfCalendar(cal.getId())
                    ))
                    .collect(Collectors.toList());

            summaries.add(new CalendarSummaryDTO(
                    cal.getId(), cal.getName(), isAdmin, userInfos));
        }

        // 5. Fetch all events for user's calendars to collect unique tags
        List<String> tags = new ArrayList<>();
        if (!calendarIdList.isEmpty()) {
            try {
                List<EventResponseDTO> events = eventServiceClient
                        .getEventsByCalendarIds(calendarIdList);
                Set<String> tagSet = new HashSet<>();
                for (EventResponseDTO event : events) {
                    if (event.tags() != null) {
                        tagSet.addAll(event.tags());
                    }
                }
                tags = tagSet.stream().sorted().collect(Collectors.toList());
            } catch (Exception e) {
                // If event-service is down, return empty tags gracefully
                tags = new ArrayList<>();
            }
        }

        return new CalendarHomeResponseDTO(summaries, tags);
    }

    // === Composite: Filtered view ===

    private CalendarFilterResponseDTO getFilteredData(List<String> calendarIds) {
        List<EventResponseDTO> events;
        List<PollResponseDTO> polls;

        try {
            events = eventServiceClient.getEventsByCalendarIds(calendarIds);
        } catch (Exception e) {
            events = new ArrayList<>();
        }

        try {
            polls = pollServiceClient.getPollsByCalendarIds(calendarIds);
        } catch (Exception e) {
            polls = new ArrayList<>();
        }

        return new CalendarFilterResponseDTO(events, polls);
    }

    // === CRUD pass-throughs (singular /calendar path for frontend compatibility) ===

    @PostMapping
    public ResponseEntity<CalendarResponseDTO> createCalendar(
            @Valid @RequestBody CalendarCreateRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarResponseDTO response = calendarService.createCalendar(dto, auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PatchMapping("/{calendarId}")
    public ResponseEntity<CalendarUpdateResponseDTO> updateCalendar(
            @PathVariable String calendarId,
            @RequestBody CalendarUpdateRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarUpdateResponseDTO response = calendarService.updateCalendar(
                calendarId, dto, auth.getName());
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{calendarId}")
    public ResponseEntity<CalendarDeleteResponseDTO> deleteCalendar(
            @PathVariable String calendarId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarDeleteResponseDTO response = calendarService.deleteCalendar(
                calendarId, auth.getName());
        return ResponseEntity.ok(response);
    }
}
