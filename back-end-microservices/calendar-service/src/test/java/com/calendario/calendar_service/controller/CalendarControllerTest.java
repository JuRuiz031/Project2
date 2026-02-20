package com.calendario.calendar_service.controller;

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

import com.calendario.calendar_service.client.UserServiceClient;
import com.calendario.calendar_service.dto.CalendarCreateRequestDTO;
import com.calendario.calendar_service.dto.CalendarDeleteResponseDTO;
import com.calendario.calendar_service.dto.CalendarInviteAcceptRequestDTO;
import com.calendario.calendar_service.dto.CalendarInviteAcceptResponseDTO;
import com.calendario.calendar_service.dto.CalendarInviteResponseDTO;
import com.calendario.calendar_service.dto.CalendarResponseDTO;
import com.calendario.calendar_service.dto.CalendarUpdateRequestDTO;
import com.calendario.calendar_service.dto.CalendarUpdateResponseDTO;
import com.calendario.calendar_service.exception.ForbiddenException;
import com.calendario.calendar_service.exception.ResourceNotFoundException;
import com.calendario.calendar_service.filter.JwtAuthenticationFilter;
import com.calendario.calendar_service.service.CalendarService;
import com.calendario.calendar_service.util.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(CalendarController.class)
@AutoConfigureMockMvc(addFilters = false)
class CalendarControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private CalendarService calendarService;

    @SuppressWarnings("unused")
    @MockitoBean
    private UserServiceClient userServiceClient;

    @SuppressWarnings("unused")
    @MockitoBean
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @SuppressWarnings("unused")
    @MockitoBean
    private JwtUtil jwtUtil;

    private CalendarResponseDTO calendarResponseDTO;
    private CalendarUpdateResponseDTO updateResponseDTO;
    private CalendarDeleteResponseDTO deleteResponseDTO;
    private CalendarInviteResponseDTO inviteResponseDTO;
    private CalendarInviteAcceptResponseDTO acceptResponseDTO;

    @BeforeEach
    void setUp() {
        calendarResponseDTO = new CalendarResponseDTO("cal-1", "Test Calendar");
        updateResponseDTO   = new CalendarUpdateResponseDTO("cal-1", "Updated Calendar", List.of());
        deleteResponseDTO   = new CalendarDeleteResponseDTO("cal-1", true);
        inviteResponseDTO   = new CalendarInviteResponseDTO("cal-1", "http://invite-link");
        acceptResponseDTO   = new CalendarInviteAcceptResponseDTO("cal-1", "Test Calendar");
    }

    // ============= POST /api/v1/calendars =============

    @Test
    @WithMockUser(username = "admin")
    void testCreateCalendar_Success() throws Exception {
        when(calendarService.createCalendar(any(CalendarCreateRequestDTO.class), eq("admin")))
                .thenReturn(calendarResponseDTO);

        mockMvc.perform(post("/api/v1/calendars")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarCreateRequestDTO("Test Calendar"))))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.name").value("Test Calendar"));

        verify(calendarService, times(1)).createCalendar(any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testCreateCalendar_Forbidden() throws Exception {
        when(calendarService.createCalendar(any(), eq("regular")))
                .thenThrow(new ForbiddenException("Forbidden"));

        mockMvc.perform(post("/api/v1/calendars")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarCreateRequestDTO("Test Calendar"))))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Forbidden"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testCreateCalendar_InvalidRequest() throws Exception {
        mockMvc.perform(post("/api/v1/calendars")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"\"}"))
                .andExpect(status().isBadRequest());
    }

    // ============= PATCH /api/v1/calendars/{calendarId} =============

    @Test
    @WithMockUser(username = "admin")
    void testUpdateCalendar_Success() throws Exception {
        when(calendarService.updateCalendar(eq("cal-1"), any(CalendarUpdateRequestDTO.class), eq("admin")))
                .thenReturn(updateResponseDTO);

        mockMvc.perform(patch("/api/v1/calendars/cal-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarUpdateRequestDTO("Updated Calendar", null))))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.name").value("Updated Calendar"));

        verify(calendarService, times(1)).updateCalendar(eq("cal-1"), any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testUpdateCalendar_Forbidden() throws Exception {
        when(calendarService.updateCalendar(eq("cal-1"), any(), eq("regular")))
                .thenThrow(new ForbiddenException("Not an admin"));

        mockMvc.perform(patch("/api/v1/calendars/cal-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarUpdateRequestDTO("Updated", null))))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not an admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testUpdateCalendar_NotFound() throws Exception {
        when(calendarService.updateCalendar(eq("bad-id"), any(), eq("admin")))
                .thenThrow(new ResourceNotFoundException("Calendar not found"));

        mockMvc.perform(patch("/api/v1/calendars/bad-id")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarUpdateRequestDTO("Updated", null))))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Calendar not found"));
    }

    // ============= DELETE /api/v1/calendars/{calendarId} =============

    @Test
    @WithMockUser(username = "admin")
    void testDeleteCalendar_Success() throws Exception {
        when(calendarService.deleteCalendar(eq("cal-1"), eq("admin"))).thenReturn(deleteResponseDTO);

        mockMvc.perform(delete("/api/v1/calendars/cal-1").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.deleted").value(true));

        verify(calendarService, times(1)).deleteCalendar("cal-1", "admin");
    }

    @Test
    @WithMockUser(username = "regular")
    void testDeleteCalendar_Forbidden() throws Exception {
        when(calendarService.deleteCalendar(eq("cal-1"), eq("regular")))
                .thenThrow(new ForbiddenException("Not an admin"));

        mockMvc.perform(delete("/api/v1/calendars/cal-1").with(csrf()))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not an admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testDeleteCalendar_NotFound() throws Exception {
        when(calendarService.deleteCalendar(eq("bad-id"), eq("admin")))
                .thenThrow(new ResourceNotFoundException("Calendar not found"));

        mockMvc.perform(delete("/api/v1/calendars/bad-id").with(csrf()))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Calendar not found"));
    }

    // ============= GET /api/v1/calendars/{calendarId}/invite =============

    @Test
    @WithMockUser(username = "admin")
    void testGenerateInviteLink_Success() throws Exception {
        when(calendarService.generateInviteLink(eq("cal-1"), eq("admin"))).thenReturn(inviteResponseDTO);

        mockMvc.perform(get("/api/v1/calendars/cal-1/invite").with(csrf()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.invite_link").value("http://invite-link"));

        verify(calendarService, times(1)).generateInviteLink("cal-1", "admin");
    }

    @Test
    @WithMockUser(username = "regular")
    void testGenerateInviteLink_Forbidden() throws Exception {
        when(calendarService.generateInviteLink(eq("cal-1"), eq("regular")))
                .thenThrow(new ForbiddenException("Not an admin"));

        mockMvc.perform(get("/api/v1/calendars/cal-1/invite").with(csrf()))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not an admin"));
    }

    // ============= POST /api/v1/calendars/invite/accept =============

    @Test
    @WithMockUser(username = "newuser")
    void testAcceptInvite_Success() throws Exception {
        when(calendarService.acceptInvite(eq("valid-token"), eq("newuser"))).thenReturn(acceptResponseDTO);

        mockMvc.perform(post("/api/v1/calendars/invite/accept")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarInviteAcceptRequestDTO("valid-token"))))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.calendar_name").value("Test Calendar"));

        verify(calendarService, times(1)).acceptInvite("valid-token", "newuser");
    }

    @Test
    @WithMockUser(username = "newuser")
    void testAcceptInvite_InvalidToken() throws Exception {
        when(calendarService.acceptInvite(eq("bad-token"), eq("newuser")))
                .thenThrow(new ResourceNotFoundException("Invalid or expired invite token"));

        mockMvc.perform(post("/api/v1/calendars/invite/accept")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new CalendarInviteAcceptRequestDTO("bad-token"))))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Invalid or expired invite token"));
    }
}
