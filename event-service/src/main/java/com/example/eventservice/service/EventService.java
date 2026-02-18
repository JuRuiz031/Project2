package com.example.eventservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.eventservice.client.CalendarServiceClient;
import com.example.eventservice.client.UserServiceClient;
import com.example.eventservice.dto.UserAuthDTO;
import com.example.eventservice.dto.event.EventCreateRequestDTO;
import com.example.eventservice.dto.event.EventDeleteResponseDTO;
import com.example.eventservice.dto.event.EventResponseDTO;
import com.example.eventservice.dto.event.EventUpdateRequestDTO;
import com.example.eventservice.exception.ForbiddenException;
import com.example.eventservice.exception.InvalidRequestException;
import com.example.eventservice.exception.ResourceNotFoundException;
import com.example.eventservice.model.Event;
import com.example.eventservice.repository.EventRepository;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final UserServiceClient userServiceClient;
    private final CalendarServiceClient calendarServiceClient;

    public EventService(EventRepository eventRepository,
                        UserServiceClient userServiceClient,
                        CalendarServiceClient calendarServiceClient) {
        this.eventRepository = eventRepository;
        this.userServiceClient = userServiceClient;
        this.calendarServiceClient = calendarServiceClient;
    }

    // Create a new event
    public EventResponseDTO createEvent(EventCreateRequestDTO dto, String authenticatedUsername) {
        // Verify user exists and get their auth info from User Service
        UserAuthDTO user = userServiceClient.getUserAuthInfo(authenticatedUsername);

        // Verify calendar exists via Calendar Service
        Boolean calendarExists = calendarServiceClient.calendarExists(dto.getCalendarId());
        if (calendarExists == null || !calendarExists) {
            throw new ResourceNotFoundException("Calendar not found: " + dto.getCalendarId());
        }

        // Check if authenticated user is admin of this calendar (or superuser)
        if (!user.isAdminOfCalendar(dto.getCalendarId()) && !user.isSuperuser()) {
            throw new ForbiddenException("You do not have permission to create events in this calendar");
        }

        Event event = new Event();
        event.setCalendarId(dto.getCalendarId());
        event.setTitle(dto.getTitle());
        event.setStartTime(dto.getStartTime());
        event.setEndTime(dto.getEndTime());
        event.setDescription(dto.getDescription());
        event.setNotes(dto.getNotes());
        event.setTags(dto.getTags());

        Event saved = eventRepository.save(event);

        return toResponseDTO(saved);
    }

    // Get event by ID
    public Event getEventById(String eventId) {
        return eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found: " + eventId));
    }

    // Update an event
    public EventResponseDTO updateEvent(String eventId, EventUpdateRequestDTO dto, String authenticatedUsername) {
        UserAuthDTO user = userServiceClient.getUserAuthInfo(authenticatedUsername);

        Event event = getEventById(eventId);

        if (!user.isAdminOfCalendar(event.getCalendarId()) && !user.isSuperuser()) {
            throw new ForbiddenException("You do not have permission to update this event");
        }

        if (dto.getTitle() != null && !dto.getTitle().isBlank()) {
            event.setTitle(dto.getTitle());
        }
        if (dto.getStartTime() != null) {
            event.setStartTime(dto.getStartTime());
        }
        if (dto.getEndTime() != null) {
            event.setEndTime(dto.getEndTime());
        }
        if (dto.getDescription() != null) {
            event.setDescription(dto.getDescription());
        }
        if (dto.getNotes() != null) {
            event.setNotes(dto.getNotes());
        }
        if (dto.getTags() != null) {
            event.setTags(dto.getTags());
        }

        Event updated = eventRepository.save(event);

        return toResponseDTO(updated);
    }

    // Delete an event
    public EventDeleteResponseDTO deleteEvent(String eventId, String authenticatedUsername) {
        UserAuthDTO user = userServiceClient.getUserAuthInfo(authenticatedUsername);

        Event event = getEventById(eventId);

        if (!user.isAdminOfCalendar(event.getCalendarId()) && !user.isSuperuser()) {
            throw new ForbiddenException("You do not have permission to delete this event");
        }

        eventRepository.deleteById(eventId);

        return new EventDeleteResponseDTO(event.getId(), event.getCalendarId(), true);
    }

    // Get events by a list of IDs (used internally by other services)
    public List<Event> getEventsByIds(List<String> eventIds) {
        return eventRepository.findByIdIn(eventIds);
    }

    // Get events belonging to a calendar (used internally by Calendar Service)
    public List<Event> getEventsByCalendarId(String calendarId) {
        return eventRepository.findByCalendarId(calendarId);
    }

    // Get events across multiple calendars (used internally by Calendar Service)
    public List<Event> getEventsByCalendarIds(List<String> calendarIds) {
        return eventRepository.findByCalendarIdIn(calendarIds);
    }

    // Get event by invite token (used internally by invite flow)
    public EventResponseDTO getEventByInviteToken(String token) {
        Event event = eventRepository.findByInviteLinksToken(token)
                .orElseThrow(() -> new InvalidRequestException("Invalid or expired invite token"));
        return toResponseDTO(event);
    }

    // Map Event entity to response DTO
    private EventResponseDTO toResponseDTO(Event event) {
        return new EventResponseDTO(
                event.getId(),
                event.getCalendarId(),
                event.getTitle(),
                event.getStartTime(),
                event.getEndTime(),
                event.getDescription(),
                event.getNotes(),
                event.getTags()
        );
    }
}
