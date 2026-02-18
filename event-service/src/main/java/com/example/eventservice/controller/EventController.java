package com.example.eventservice.controller;

import java.util.List;

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

import com.example.eventservice.dto.event.EventCreateRequestDTO;
import com.example.eventservice.dto.event.EventDeleteResponseDTO;
import com.example.eventservice.dto.event.EventResponseDTO;
import com.example.eventservice.dto.event.EventUpdateRequestDTO;
import com.example.eventservice.model.Event;
import com.example.eventservice.service.EventService;

import jakarta.validation.Valid;

@RestController
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // ---------------------------------------------------------------
    // Public API endpoints (JWT required — enforced by SecurityConfig)
    // ---------------------------------------------------------------

    // POST /api/v1/events — create event
    @PostMapping("/api/v1/events")
    public ResponseEntity<EventResponseDTO> createEvent(@Valid @RequestBody EventCreateRequestDTO requestDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        EventResponseDTO response = eventService.createEvent(requestDTO, auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // PATCH /api/v1/events/{id} — update event
    @PatchMapping("/api/v1/events/{id}")
    public ResponseEntity<EventResponseDTO> updateEvent(
            @PathVariable("id") String eventId,
            @Valid @RequestBody EventUpdateRequestDTO requestDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        EventResponseDTO response = eventService.updateEvent(eventId, requestDTO, auth.getName());
        return ResponseEntity.ok(response);
    }

    // DELETE /api/v1/events/{id} — delete event
    @DeleteMapping("/api/v1/events/{id}")
    public ResponseEntity<EventDeleteResponseDTO> deleteEvent(@PathVariable("id") String eventId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        EventDeleteResponseDTO response = eventService.deleteEvent(eventId, auth.getName());
        return ResponseEntity.ok(response);
    }

    // GET /api/v1/events/{id} — get single event
    @GetMapping("/api/v1/events/{id}")
    public ResponseEntity<EventResponseDTO> getEvent(@PathVariable("id") String eventId) {
        Event event = eventService.getEventById(eventId);
        return ResponseEntity.ok(new EventResponseDTO(
                event.getId(), event.getCalendarId(), event.getTitle(),
                event.getStartTime(), event.getEndTime(),
                event.getDescription(), event.getNotes(), event.getTags()
        ));
    }

    // ---------------------------------------------------------------
    // Internal endpoints (no JWT — called by other microservices only)
    // Permitted without auth in SecurityConfig via /internal/**
    // ---------------------------------------------------------------

    // GET /internal/events/{id}
    @GetMapping("/internal/events/{id}")
    public ResponseEntity<EventResponseDTO> getEventInternal(@PathVariable("id") String eventId) {
        Event event = eventService.getEventById(eventId);
        return ResponseEntity.ok(new EventResponseDTO(
                event.getId(), event.getCalendarId(), event.getTitle(),
                event.getStartTime(), event.getEndTime(),
                event.getDescription(), event.getNotes(), event.getTags()
        ));
    }

    // GET /internal/events/by-calendar/{calendarId}
    // Called by Calendar Service to fetch all events for a calendar
    @GetMapping("/internal/events/by-calendar/{calendarId}")
    public ResponseEntity<List<EventResponseDTO>> getEventsByCalendar(
            @PathVariable("calendarId") String calendarId) {
        List<EventResponseDTO> events = eventService.getEventsByCalendarId(calendarId)
                .stream()
                .map(e -> new EventResponseDTO(
                        e.getId(), e.getCalendarId(), e.getTitle(),
                        e.getStartTime(), e.getEndTime(),
                        e.getDescription(), e.getNotes(), e.getTags()))
                .toList();
        return ResponseEntity.ok(events);
    }

    // POST /internal/events/by-calendar-ids
    // Body: list of calendarId strings
    @PostMapping("/internal/events/by-calendar-ids")
    public ResponseEntity<List<EventResponseDTO>> getEventsByCalendarIds(
            @RequestBody List<String> calendarIds) {
        List<EventResponseDTO> events = eventService.getEventsByCalendarIds(calendarIds)
                .stream()
                .map(e -> new EventResponseDTO(
                        e.getId(), e.getCalendarId(), e.getTitle(),
                        e.getStartTime(), e.getEndTime(),
                        e.getDescription(), e.getNotes(), e.getTags()))
                .toList();
        return ResponseEntity.ok(events);
    }

    // GET /internal/events/by-token/{token}
    // Called by invite flow to resolve an event invite link
    @GetMapping("/internal/events/by-token/{token}")
    public ResponseEntity<EventResponseDTO> getEventByToken(@PathVariable("token") String token) {
        return ResponseEntity.ok(eventService.getEventByInviteToken(token));
    }
}
