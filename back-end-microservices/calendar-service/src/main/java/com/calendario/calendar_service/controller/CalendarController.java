package com.calendario.calendar_service.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.calendario.calendar_service.dto.CalendarCreateRequestDTO;
import com.calendario.calendar_service.dto.CalendarDeleteResponseDTO;
import com.calendario.calendar_service.dto.CalendarInviteAcceptRequestDTO;
import com.calendario.calendar_service.dto.CalendarInviteAcceptResponseDTO;
import com.calendario.calendar_service.dto.CalendarInviteResponseDTO;
import com.calendario.calendar_service.dto.CalendarResponseDTO;
import com.calendario.calendar_service.dto.CalendarUpdateRequestDTO;
import com.calendario.calendar_service.dto.CalendarUpdateResponseDTO;
import com.calendario.calendar_service.service.CalendarService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class CalendarController {

    private final CalendarService calendarService;

    public CalendarController(CalendarService calendarService) {
        this.calendarService = calendarService;
    }

    // POST Create Calendar
    @PostMapping("/calendars")
    public ResponseEntity<CalendarResponseDTO> createCalendar(@Valid @RequestBody CalendarCreateRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarResponseDTO response = calendarService.createCalendar(dto, auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // PATCH Update Calendar
    @PatchMapping("/calendars/{calendarId}")
    public ResponseEntity<CalendarUpdateResponseDTO> updateCalendar(
            @PathVariable String calendarId,
            @RequestBody CalendarUpdateRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarUpdateResponseDTO response = calendarService.updateCalendar(calendarId, dto, auth.getName());
        return ResponseEntity.ok(response);
    }

    // DELETE Calendar
    @DeleteMapping("/calendars/{calendarId}")
    public ResponseEntity<CalendarDeleteResponseDTO> deleteCalendar(@PathVariable String calendarId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarDeleteResponseDTO response = calendarService.deleteCalendar(calendarId, auth.getName());
        return ResponseEntity.ok(response);
    }

    // GET Generate Invite Link
    @GetMapping("/calendars/{calendarId}/invite")
    public ResponseEntity<CalendarInviteResponseDTO> generateInviteLink(@PathVariable String calendarId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarInviteResponseDTO response = calendarService.generateInviteLink(calendarId, auth.getName());
        return ResponseEntity.ok(response);
    }

    // POST Accept Invite
    @PostMapping("/calendars/invite/accept")
    public ResponseEntity<CalendarInviteAcceptResponseDTO> acceptInvite(
            @Valid @RequestBody CalendarInviteAcceptRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        CalendarInviteAcceptResponseDTO response = calendarService.acceptInvite(dto.inviteToken(), auth.getName());
        return ResponseEntity.ok(response);
    }

    // GET Internal: check if calendar exists (called by event-service and poll-service)
    @GetMapping("/internal/calendars/{calendarId}/exists")
    public ResponseEntity<Boolean> calendarExists(@PathVariable String calendarId) {
        return ResponseEntity.ok(calendarService.calendarExists(calendarId));
    }
}
