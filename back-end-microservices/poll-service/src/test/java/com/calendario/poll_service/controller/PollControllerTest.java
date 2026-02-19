package com.calendario.poll_service.controller;

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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.calendario.poll_service.client.CalendarServiceClient;
import com.calendario.poll_service.client.UserServiceClient;
import com.calendario.poll_service.dto.PollCreateRequestDTO;
import com.calendario.poll_service.dto.PollDeleteRequestDTO;
import com.calendario.poll_service.dto.PollDeleteResponseDTO;
import com.calendario.poll_service.dto.PollResponseDTO;
import com.calendario.poll_service.dto.PollUpdateRequestDTO;
import com.calendario.poll_service.dto.PollVoteRequestDTO;
import com.calendario.poll_service.exception.AlreadyVotedException;
import com.calendario.poll_service.exception.ForbiddenException;
import com.calendario.poll_service.exception.ResourceNotFoundException;
import com.calendario.poll_service.filter.JwtAuthenticationFilter;
import com.calendario.poll_service.service.PollService;
import com.calendario.poll_service.util.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(PollController.class)
@AutoConfigureMockMvc(addFilters = false)
class PollControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private PollService pollService;

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
    private PollCreateRequestDTO createDTO;
    private PollUpdateRequestDTO updateDTO;
    private PollDeleteRequestDTO deleteDTO;
    private PollVoteRequestDTO voteDTO;
    private PollResponseDTO pollResponseDTO;
    private PollDeleteResponseDTO deleteResponseDTO;

    @BeforeEach
    void setUp() {
        startTime = LocalDateTime.of(2025, 6, 1, 10, 0);
        endTime   = LocalDateTime.of(2025, 6, 1, 11, 0);

        createDTO = new PollCreateRequestDTO();
        createDTO.setUserId("user-1");
        createDTO.setCalendarId("cal-1");
        createDTO.setTitle("Best Meeting Time?");
        createDTO.setStartTime(startTime);
        createDTO.setEndTime(endTime);

        updateDTO = new PollUpdateRequestDTO();
        updateDTO.setUserId("user-1");
        updateDTO.setCalendarId("cal-1");
        updateDTO.setTitle("Updated Poll Title");

        deleteDTO = new PollDeleteRequestDTO();
        deleteDTO.setUserId("user-1");

        voteDTO = new PollVoteRequestDTO();
        voteDTO.setUserId("user-1");
        voteDTO.setCalendarId("cal-1");
        voteDTO.setOptions(List.of(0));

        pollResponseDTO   = new PollResponseDTO("poll-1", "cal-1", "Best Meeting Time?",
                null, null, startTime, endTime, false, false, List.of(), List.of());
        deleteResponseDTO = new PollDeleteResponseDTO("poll-1", true);
    }

    // ============= POST /api/v1/polls =============

    @Test
    @WithMockUser(username = "admin")
    void testCreatePoll_Success() throws Exception {
        when(pollService.createPoll(any(PollCreateRequestDTO.class), eq("admin")))
                .thenReturn(pollResponseDTO);

        mockMvc.perform(post("/api/v1/polls")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(createDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.poll_id").value("poll-1"))
                .andExpect(jsonPath("$.calendar_id").value("cal-1"))
                .andExpect(jsonPath("$.title").value("Best Meeting Time?"));

        verify(pollService, times(1)).createPoll(any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testCreatePoll_Forbidden() throws Exception {
        when(pollService.createPoll(any(), eq("regular")))
                .thenThrow(new ForbiddenException("Not a calendar admin"));

        mockMvc.perform(post("/api/v1/polls")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(createDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testCreatePoll_InvalidRequest() throws Exception {
        PollCreateRequestDTO invalidDTO = new PollCreateRequestDTO();
        // Missing required fields: user_id, calendar_id, title, start_time, end_time

        mockMvc.perform(post("/api/v1/polls")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDTO)))
                .andExpect(status().isBadRequest());
    }

    // ============= PATCH /api/v1/polls/{id} =============

    @Test
    @WithMockUser(username = "admin")
    void testUpdatePoll_Success() throws Exception {
        PollResponseDTO updatedResponse = new PollResponseDTO("poll-1", "cal-1", "Updated Poll Title",
                null, null, startTime, endTime, false, false, List.of(), List.of());
        when(pollService.updatePoll(eq("poll-1"), any(PollUpdateRequestDTO.class), eq("admin")))
                .thenReturn(updatedResponse);

        mockMvc.perform(patch("/api/v1/polls/poll-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.poll_id").value("poll-1"))
                .andExpect(jsonPath("$.title").value("Updated Poll Title"));

        verify(pollService, times(1)).updatePoll(eq("poll-1"), any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testUpdatePoll_Forbidden() throws Exception {
        when(pollService.updatePoll(eq("poll-1"), any(), eq("regular")))
                .thenThrow(new ForbiddenException("Not a calendar admin"));

        mockMvc.perform(patch("/api/v1/polls/poll-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testUpdatePoll_NotFound() throws Exception {
        when(pollService.updatePoll(eq("bad-id"), any(), eq("admin")))
                .thenThrow(new ResourceNotFoundException("Poll not found"));

        mockMvc.perform(patch("/api/v1/polls/bad-id")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Poll not found"));
    }

    // ============= DELETE /api/v1/polls/{id} =============

    @Test
    @WithMockUser(username = "admin")
    void testDeletePoll_Success() throws Exception {
        when(pollService.deletePoll(eq("poll-1"), any(PollDeleteRequestDTO.class), eq("admin")))
                .thenReturn(deleteResponseDTO);

        mockMvc.perform(delete("/api/v1/polls/poll-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deleteDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("poll-1"))
                .andExpect(jsonPath("$.deleted").value(true));

        verify(pollService, times(1)).deletePoll(eq("poll-1"), any(), eq("admin"));
    }

    @Test
    @WithMockUser(username = "regular")
    void testDeletePoll_Forbidden() throws Exception {
        when(pollService.deletePoll(eq("poll-1"), any(), eq("regular")))
                .thenThrow(new ForbiddenException("Not a calendar admin"));

        mockMvc.perform(delete("/api/v1/polls/poll-1")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deleteDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar admin"));
    }

    @Test
    @WithMockUser(username = "admin")
    void testDeletePoll_NotFound() throws Exception {
        when(pollService.deletePoll(eq("bad-id"), any(), eq("admin")))
                .thenThrow(new ResourceNotFoundException("Poll not found"));

        mockMvc.perform(delete("/api/v1/polls/bad-id")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(deleteDTO)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Poll not found"));
    }

    // ============= POST /api/v1/polls/{id}/vote =============

    @Test
    @WithMockUser(username = "member")
    void testVoteOnPoll_Success() throws Exception {
        when(pollService.voteOnPoll(eq("poll-1"), any(PollVoteRequestDTO.class), eq("member")))
                .thenReturn(pollResponseDTO);

        mockMvc.perform(post("/api/v1/polls/poll-1/vote")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(voteDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.poll_id").value("poll-1"));

        verify(pollService, times(1)).voteOnPoll(eq("poll-1"), any(), eq("member"));
    }

    @Test
    @WithMockUser(username = "nonmember")
    void testVoteOnPoll_Forbidden() throws Exception {
        when(pollService.voteOnPoll(eq("poll-1"), any(), eq("nonmember")))
                .thenThrow(new ForbiddenException("Not a calendar member"));

        mockMvc.perform(post("/api/v1/polls/poll-1/vote")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(voteDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Not a calendar member"));
    }

    @Test
    @WithMockUser(username = "member")
    void testVoteOnPoll_AlreadyVoted() throws Exception {
        when(pollService.voteOnPoll(eq("poll-1"), any(), eq("member")))
                .thenThrow(new AlreadyVotedException("User has already voted in this poll"));

        mockMvc.perform(post("/api/v1/polls/poll-1/vote")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(voteDTO)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.message").value("User has already voted in this poll"));
    }
}
