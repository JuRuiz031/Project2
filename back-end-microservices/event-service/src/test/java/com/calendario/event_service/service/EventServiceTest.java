package com.calendario.event_service.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.calendario.event_service.client.CalendarServiceClient;
import com.calendario.event_service.client.UserServiceClient;
import com.calendario.event_service.dto.UserAuthDTO;
import com.calendario.event_service.dto.event.EventCreateRequestDTO;
import com.calendario.event_service.dto.event.EventDeleteResponseDTO;
import com.calendario.event_service.dto.event.EventResponseDTO;
import com.calendario.event_service.dto.event.EventUpdateRequestDTO;
import com.calendario.event_service.exception.ForbiddenException;
import com.calendario.event_service.exception.ResourceNotFoundException;
import com.calendario.event_service.model.Event;
import com.calendario.event_service.repository.EventRepository;

@ExtendWith(MockitoExtension.class)
class EventServiceTest {

    @Mock
    private EventRepository eventRepository;

    @Mock
    private UserServiceClient userServiceClient;

    @Mock
    private CalendarServiceClient calendarServiceClient;

    @InjectMocks
    private EventService eventService;

    private UserAuthDTO adminUser;
    private UserAuthDTO regularUser;
    private Event testEvent;
    private EventCreateRequestDTO createRequestDTO;

    @BeforeEach
    void setUp() {
        // Admin user — is admin of cal-123
        UserAuthDTO.CalendarMembershipDTO membership = new UserAuthDTO.CalendarMembershipDTO();
        membership.setCalendarId("cal-123");
        membership.setAdmin(true);

        adminUser = new UserAuthDTO();
        adminUser.setId("admin-123");
        adminUser.setUsername("adminuser");
        adminUser.setSuperuser(false);
        adminUser.setCalendarMemberships(List.of(membership));

        // Regular user — no calendar memberships
        regularUser = new UserAuthDTO();
        regularUser.setId("user-456");
        regularUser.setUsername("regularuser");
        regularUser.setSuperuser(false);
        regularUser.setCalendarMemberships(List.of());

        // Test event
        testEvent = new Event();
        testEvent.setId("event-123");
        testEvent.setCalendarId("cal-123");
        testEvent.setTitle("Test Event");
        testEvent.setStartTime(LocalDateTime.now());
        testEvent.setEndTime(LocalDateTime.now().plusHours(1));
        testEvent.setDescription("Test description");

        // Create request
        createRequestDTO = new EventCreateRequestDTO();
        createRequestDTO.setCalendarId("cal-123");
        createRequestDTO.setTitle("New Event");
        createRequestDTO.setStartTime(LocalDateTime.now());
        createRequestDTO.setEndTime(LocalDateTime.now().plusHours(2));
        createRequestDTO.setDescription("New event description");
    }

    @Test
    void testCreateEvent_Success() {
        when(userServiceClient.getUserAuthInfo("adminuser")).thenReturn(adminUser);
        when(calendarServiceClient.calendarExists("cal-123")).thenReturn(true);
        when(eventRepository.save(any(Event.class))).thenAnswer(inv -> {
            Event e = inv.getArgument(0);
            e.setId("new-event-123");
            return e;
        });

        EventResponseDTO result = eventService.createEvent(createRequestDTO, "adminuser");

        assertNotNull(result);
        assertEquals("new-event-123", result.getEventId());
        assertEquals("New Event", result.getTitle());
        assertEquals("cal-123", result.getCalendarId());
        verify(eventRepository, times(1)).save(any(Event.class));
    }

    @Test
    void testCreateEvent_NotAdmin_ThrowsForbidden() {
        when(userServiceClient.getUserAuthInfo("regularuser")).thenReturn(regularUser);
        when(calendarServiceClient.calendarExists("cal-123")).thenReturn(true);

        ForbiddenException ex = assertThrows(ForbiddenException.class,
                () -> eventService.createEvent(createRequestDTO, "regularuser"));

        assertEquals("You do not have permission to create events in this calendar", ex.getMessage());
        verify(eventRepository, never()).save(any(Event.class));
    }

    @Test
    void testCreateEvent_CalendarNotFound_ThrowsResourceNotFound() {
        when(userServiceClient.getUserAuthInfo("adminuser")).thenReturn(adminUser);
        when(calendarServiceClient.calendarExists("cal-123")).thenReturn(false);

        ResourceNotFoundException ex = assertThrows(ResourceNotFoundException.class,
                () -> eventService.createEvent(createRequestDTO, "adminuser"));

        assertTrue(ex.getMessage().contains("Calendar not found"));
        verify(eventRepository, never()).save(any(Event.class));
    }

    @Test
    void testCreateEvent_Superuser_CanCreateInAnyCalendar() {
        UserAuthDTO superUser = new UserAuthDTO();
        superUser.setId("super-999");
        superUser.setUsername("superuser");
        superUser.setSuperuser(true);
        superUser.setCalendarMemberships(List.of());

        when(userServiceClient.getUserAuthInfo("superuser")).thenReturn(superUser);
        when(calendarServiceClient.calendarExists("cal-123")).thenReturn(true);
        when(eventRepository.save(any(Event.class))).thenAnswer(inv -> {
            Event e = inv.getArgument(0);
            e.setId("super-event-001");
            return e;
        });

        EventResponseDTO result = eventService.createEvent(createRequestDTO, "superuser");

        assertNotNull(result);
        assertEquals("super-event-001", result.getEventId());
    }

    @Test
    void testGetEventById_Success() {
        when(eventRepository.findById("event-123")).thenReturn(Optional.of(testEvent));

        Event result = eventService.getEventById("event-123");

        assertNotNull(result);
        assertEquals("event-123", result.getId());
        assertEquals("Test Event", result.getTitle());
    }

    @Test
    void testGetEventById_NotFound_ThrowsResourceNotFound() {
        when(eventRepository.findById("bad-id")).thenReturn(Optional.empty());

        ResourceNotFoundException ex = assertThrows(ResourceNotFoundException.class,
                () -> eventService.getEventById("bad-id"));

        assertTrue(ex.getMessage().contains("Event not found"));
    }

    @Test
    void testUpdateEvent_Success() {
        EventUpdateRequestDTO updateDTO = new EventUpdateRequestDTO();
        updateDTO.setTitle("Updated Title");
        updateDTO.setDescription("Updated description");

        when(userServiceClient.getUserAuthInfo("adminuser")).thenReturn(adminUser);
        when(eventRepository.findById("event-123")).thenReturn(Optional.of(testEvent));
        when(eventRepository.save(any(Event.class))).thenAnswer(inv -> inv.getArgument(0));

        EventResponseDTO result = eventService.updateEvent("event-123", updateDTO, "adminuser");

        assertNotNull(result);
        assertEquals("Updated Title", result.getTitle());
        assertEquals("Updated description", result.getDescription());
        verify(eventRepository, times(1)).save(testEvent);
    }

    @Test
    void testUpdateEvent_NotAdmin_ThrowsForbidden() {
        EventUpdateRequestDTO updateDTO = new EventUpdateRequestDTO();
        updateDTO.setTitle("Hacked Title");

        when(userServiceClient.getUserAuthInfo("regularuser")).thenReturn(regularUser);
        when(eventRepository.findById("event-123")).thenReturn(Optional.of(testEvent));

        ForbiddenException ex = assertThrows(ForbiddenException.class,
                () -> eventService.updateEvent("event-123", updateDTO, "regularuser"));

        assertEquals("You do not have permission to update this event", ex.getMessage());
        verify(eventRepository, never()).save(any(Event.class));
    }

    @Test
    void testDeleteEvent_Success() {
        when(userServiceClient.getUserAuthInfo("adminuser")).thenReturn(adminUser);
        when(eventRepository.findById("event-123")).thenReturn(Optional.of(testEvent));
        doNothing().when(eventRepository).deleteById("event-123");

        EventDeleteResponseDTO result = eventService.deleteEvent("event-123", "adminuser");

        assertNotNull(result);
        assertEquals("event-123", result.getEventId());
        assertEquals("cal-123", result.getCalendarId());
        assertTrue(result.getDeleted());
        verify(eventRepository, times(1)).deleteById("event-123");
    }

    @Test
    void testDeleteEvent_NotAdmin_ThrowsForbidden() {
        when(userServiceClient.getUserAuthInfo("regularuser")).thenReturn(regularUser);
        when(eventRepository.findById("event-123")).thenReturn(Optional.of(testEvent));

        ForbiddenException ex = assertThrows(ForbiddenException.class,
                () -> eventService.deleteEvent("event-123", "regularuser"));

        assertEquals("You do not have permission to delete this event", ex.getMessage());
        verify(eventRepository, never()).deleteById(any());
    }

    @Test
    void testGetEventsByCalendarIds_ReturnsList() {
        List<String> calendarIds = List.of("cal-123", "cal-456");
        when(eventRepository.findByCalendarIdIn(calendarIds)).thenReturn(List.of(testEvent));

        List<Event> result = eventService.getEventsByCalendarIds(calendarIds);

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("event-123", result.get(0).getId());
    }

    @Test
    void testGetEventsByCalendarId_ReturnsList() {
        when(eventRepository.findByCalendarId("cal-123")).thenReturn(List.of(testEvent));

        List<Event> result = eventService.getEventsByCalendarId("cal-123");

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("cal-123", result.get(0).getCalendarId());
    }
}
