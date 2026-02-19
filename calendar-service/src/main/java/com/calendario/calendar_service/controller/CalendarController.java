package com.calendario.calendar_service.controller;

import java.util.List;

import com.calendario.calendar_service.client.AuthFeignClient;
import com.calendario.calendar_service.dto.user.LoginStatusDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.calendario.dto.calendar.CalendarCreateRequestDTO;
import com.example.calendario.dto.calendar.CalendarDeleteResponseDTO;
import com.example.calendario.dto.calendar.CalendarFilterResponseDTO;
import com.example.calendario.dto.calendar.CalendarHomepageResponseDTO;
import com.example.calendario.dto.calendar.CalendarInviteAcceptRequestDTO;
import com.example.calendario.dto.calendar.CalendarInviteAcceptResponseDTO;
import com.example.calendario.dto.calendar.CalendarInviteResponseDTO;
import com.example.calendario.dto.calendar.CalendarResponseDTO;
import com.example.calendario.dto.calendar.CalendarUpdateRequestDTO;
import com.example.calendario.dto.calendar.CalendarUpdateResponseDTO;
import com.example.calendario.service.CalendarService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/v1")
public class CalendarController {

    private final CalendarService calendarService;
    private final AuthFeignClient authFeignClient;

    // Constructor
    public CalendarController(CalendarService calendarService, AuthFeignClient authFeignClient) {
        this.calendarService = calendarService;
        this.authFeignClient = authFeignClient;
    }

    private String getAuthenticatedUsername(String authorizationHeader) {
        LoginStatusDTO response =
                authFeignClient.validateToken(authorizationHeader);

        if (response == null || !response.isAuthenticated()) {
            throw new RuntimeException("Invalid or expired token");
        }

        return response.getUser().getUsername();
    }

    // GET Calendar Homepage (calendars + tags)
    @GetMapping("/calendar")
    public ResponseEntity<?> getCalendar(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestParam(required = false) String calendarIds,
            @RequestParam(required = false) String eventIds,
            @RequestParam(required = false) String pollIds,
            @RequestParam(required = false) String tags) {
        // Get authenticated username from JWT
        String authenticatedUsername = getAuthenticatedUsername(authorizationHeader);

        List<String> calendarIdList = java.util.Collections.emptyList();
        List<String> eventIdList = java.util.Collections.emptyList();
        List<String> pollIdList = java.util.Collections.emptyList();
        List<String> tagList = java.util.Collections.emptyList();
        if (calendarIds == null && eventIds == null && pollIds == null && tags == null) {
            // Homepage - return calendars and tags
            CalendarHomepageResponseDTO response = calendarService.getCalendarHomepage(authenticatedUsername);
            return ResponseEntity.ok(response);
        }
        if (calendarIds != null) {
            calendarIdList = java.util.Arrays.asList(calendarIds.split(","));
        }
        if (eventIds != null) {
            eventIdList = java.util.Arrays.asList(eventIds.split(","));
        }
        if (pollIds != null) {
            pollIdList = java.util.Arrays.asList(pollIds.split(","));
        }
        if (tags != null) {
            tagList = java.util.Arrays.asList(tags.split(","));
        }
        // Filtered view - return events, polls, and users based on filters
        CalendarFilterResponseDTO response = calendarService.getFilteredCalendarView(
                calendarIdList,
                eventIdList,
                pollIdList,
                tagList,
                authenticatedUsername);
        return ResponseEntity.ok(response);
    }

    // POST Create Calendar
    @PostMapping("/calendar")
    public ResponseEntity<CalendarResponseDTO> createCalendar(
            @RequestHeader("Authorization") String authorizationHeader,
            @Valid @RequestBody CalendarCreateRequestDTO requestDTO) {
        // Get authenticated username from JWT
        String authenticatedUsername = getAuthenticatedUsername(authorizationHeader);

        CalendarResponseDTO response = calendarService.createCalendar(requestDTO, authenticatedUsername);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // PATCH Update Calendar
    @PatchMapping("/calendar/{calendar_id}")
    public ResponseEntity<CalendarUpdateResponseDTO> updateCalendar(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable("calendar_id") String calendarId,
            @Valid @RequestBody CalendarUpdateRequestDTO requestDTO) {
        // Get authenticated username from JWT
        String authenticatedUsername = getAuthenticatedUsername(authorizationHeader);

        CalendarUpdateResponseDTO response = calendarService.updateCalendar(calendarId, requestDTO, authenticatedUsername);
        return ResponseEntity.ok(response);
    }

    // DELETE Delete Calendar
    @DeleteMapping("/calendar/{calendar_id}")
    public ResponseEntity<CalendarDeleteResponseDTO> deleteCalendar(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable("calendar_id") String calendarId) {
        // Get authenticated username from JWT
        String authenticatedUsername = getAuthenticatedUsername(authorizationHeader);

        CalendarDeleteResponseDTO response = calendarService.deleteCalendar(calendarId, authenticatedUsername);
        return ResponseEntity.ok(response);
    }

    // GET Generate Invite Link
    @GetMapping("/calendars/{calendar_id}/invite")
    public ResponseEntity<CalendarInviteResponseDTO> generateInviteLink(
            @RequestHeader("Authorization") String authorizationHeader,
            @PathVariable("calendar_id") String calendarId) {
        // Get authenticated username from JWT
        String authenticatedUsername = getAuthenticatedUsername(authorizationHeader);

        CalendarInviteResponseDTO response = calendarService.generateInviteLink(calendarId, authenticatedUsername);
        return ResponseEntity.ok(response);
    }

    // POST Accept Calendar Invite
    @PostMapping("/calendars/invite/accept")
    public ResponseEntity<CalendarInviteAcceptResponseDTO> acceptInvite(
            @RequestHeader("Authorization") String authorizationHeader,
            @Valid @RequestBody CalendarInviteAcceptRequestDTO requestDTO) {
        // Get authenticated username from JWT
        String authenticatedUsername = getAuthenticatedUsername(authorizationHeader);

        CalendarInviteAcceptResponseDTO response = calendarService.acceptInvite(requestDTO.getInviteToken(), authenticatedUsername);
        return ResponseEntity.ok(response);
    }

}
