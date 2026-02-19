package com.calendario.event_service.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.calendario.event_service.client.CalendarServiceClient;
import com.calendario.event_service.client.UserServiceClient;
import com.calendario.event_service.dto.event.EventCreateRequestDTO;
import com.calendario.event_service.dto.event.EventDeleteResponseDTO;
import com.calendario.event_service.dto.event.EventResponseDTO;
import com.calendario.event_service.dto.event.EventUpdateRequestDTO;
import com.calendario.event_service.exception.ForbiddenException;
import com.calendario.event_service.exception.ResourceNotFoundException;
import com.calendario.event_service.filter.JwtAuthenticationFilter;
import com.calendario.event_service.model.Event;
import com.calendario.event_service.service.EventService;
import com.calendario.event_service.util.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(EventController.class)
@AutoConfigureMockMvc(addFilters = false)
class EventControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private EventService eventService;

    @SuppressWarnings("unused")
    @MockitoBean
    private UserServiceClient userServiceClient;

    @SuppressWarnings("unused")
    @MockitoBean
    private CalendarServiceClient calendarServiceClient;

    @SuppressWarnings("unused")
    @MockitoBean
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @SuppressWarnings("unused")
    @MockitoBean
    private JwtUtil jwtUtil;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private EventCreateRequestDTO createDTO;
    private EventUpdateRequestDTO updateDTO;
    private EventResponseDTO eventResponseDTO;
    private EventDeleteResponseDTO deleteResponseDTO;
    private Event testEvent;

    @BeforeEach
    void setUp() {
        startTime = LocalDateTime.of(2025, 6, 1, 10, 0);
        endTime   = LocalDateTime.of(2025, 6, 1, 11, 0);

        createDTO = new EventCreateRequestDTO("cal-1", "Team Meeting", startTime, endTime, "Desc", null, List.of("work"));
        updateDTO = new EventUpdateRequestDTO("Updated Meeting", startTime, endTime, "Updated desc", null, null);

        eventResponseDTO  = new EventResponseDTO("event-1", "cal-1", "Team Meeting", startTime, endTime, "Desc", null, List.of("work"));
        deleteResponseDTO = new EventDeleteResponseDTO("event-1", "cal-1", true);

        testEvent = new Event();
        testEvent.setId("event-1");
        testEvent.setCalendarId("cal-1");
        testEvent.setTitle("Team Meeting");
        testEvent.setStartTime(startTime);
        testEvent.setEndTime(endTime);
        testEvent.setDescription("Desc");
    }

    // ============= POST /api/v1/events =============

    @Test
    @WithMockUser(username = "admin")
    void testCreateEvent_Success() throws Exception {
        when(eventService.createEvent(any(EventCreateRequestDTO.class), eq("admin")))
                .thenReturn(eventResponseDTO);

        mockMvc.perform(post("/api/v1/events")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(createDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.event_id").value("event-1"))
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.title").value("Team Meeting"));

        verify(eventService, times(1)).createEvent(any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testCreateEvent_Forbidden() throws Exception {
        when(eventService.createEvent(any(), eq("regular")))
                .thenThrow(new ForbiddenException("Not a calendar admin"));

        mockMvc.perform(post("/api/v1/events")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(createDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testCreateEvent_InvalidRequest() throws Exception {
        EventCreateRequestDTO invalidDTO = new EventCreateRequestDTO(null, "", null, null, null, null, null);

        mockMvc.perform(post("/api/v1/events")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDTO)))
                .andExpect(status().isBadRequest());
    }

    // ============= PATCH /api/v1/events/{id} =============

    @Test
    @WithMockUser(username = "admin")
    void testUpdateEvent_Success() throws Exception {
        EventResponseDTO updatedResponse = new EventResponseDTO("event-1", "cal-1", "Updated Meeting", startTime, endTime, "Updated desc", null, null);
        when(eventService.updateEvent(eq("event-1"), any(EventUpdateRequestDTO.class), eq("admin")))
                .thenReturn(updatedResponse);

        mockMvc.perform(patch("/api/v1/events/event-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.event_id").value("event-1"))
                .andExpect(jsonPath("$.title").value("Updated Meeting"));

        verify(eventService, times(1)).updateEvent(eq("event-1"), any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testUpdateEvent_Forbidden() throws Exception {
        when(eventService.updateEvent(eq("event-1"), any(), eq("regular")))
                .thenThrow(new ForbiddenException("Not a calendar admin"));

        mockMvc.perform(patch("/api/v1/events/event-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testUpdateEvent_NotFound() throws Exception {
        when(eventService.updateEvent(eq("bad-id"), any(), eq("admin")))
                .thenThrow(new ResourceNotFoundException("Event not found"));

        mockMvc.perform(patch("/api/v1/events/bad-id")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Event not found"));
    }

    // ============= DELETE /api/v1/events/{id} =============

    @Test
    @WithMockUser(username = "admin")
    void testDeleteEvent_Success() throws Exception {
        when(eventService.deleteEvent(eq("event-1"), eq("admin"))).thenReturn(deleteResponseDTO);

        mockMvc.perform(delete("/api/v1/events/event-1").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.event_id").value("event-1"))
                .andExpect(jsonPath("$.deleted").value(true));

        verify(eventService, times(1)).deleteEvent("event-1", "admin");
    }

    @Test
    @WithMockUser(username = "regular")
    void testDeleteEvent_Forbidden() throws Exception {
        when(eventService.deleteEvent(eq("event-1"), eq("regular")))
                .thenThrow(new ForbiddenException("Not a calendar admin"));

        mockMvc.perform(delete("/api/v1/events/event-1").with(csrf()))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testDeleteEvent_NotFound() throws Exception {
        when(eventService.deleteEvent(eq("bad-id"), eq("admin")))
                .thenThrow(new ResourceNotFoundException("Event not found"));

        mockMvc.perform(delete("/api/v1/events/bad-id").with(csrf()))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Event not found"));
    }

    // ============= GET /api/v1/events/{id} =============

    @Test
    void testGetEvent_Success() throws Exception {
        when(eventService.getEventById(eq("event-1"))).thenReturn(testEvent);

        mockMvc.perform(get("/api/v1/events/event-1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.event_id").value("event-1"))
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.title").value("Team Meeting"));

        verify(eventService, times(1)).getEventById("event-1");
    }

    @Test
    void testGetEvent_NotFound() throws Exception {
        when(eventService.getEventById(eq("bad-id")))
                .thenThrow(new ResourceNotFoundException("Event not found"));

        mockMvc.perform(get("/api/v1/events/bad-id"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Event not found"));
    }
}
