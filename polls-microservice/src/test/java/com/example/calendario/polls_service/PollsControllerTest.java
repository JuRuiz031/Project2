package com.example.calendario.polls_service;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.calendario.polls_service.controller.PollsController;
import com.example.calendario.polls_service.dto.PollCreateRequestDTO;
import com.example.calendario.polls_service.dto.PollDeleteResponseDTO;
import com.example.calendario.polls_service.dto.PollOptionDTO;
import com.example.calendario.polls_service.dto.PollResponseDTO;
import com.example.calendario.polls_service.dto.PollUpdateRequestDTO;
import com.example.calendario.polls_service.dto.PollVoteRequestDTO;
import com.example.calendario.polls_service.exception.AlreadyVotedException;
import com.example.calendario.polls_service.exception.ForbiddenException;
import com.example.calendario.polls_service.exception.GlobalExceptionHandler;
import com.example.calendario.polls_service.exception.InvalidRequestException;
import com.example.calendario.polls_service.exception.ResourceNotFoundException;
import com.example.calendario.polls_service.service.PollService;
import com.fasterxml.jackson.databind.ObjectMapper;


@WebMvcTest(PollsController.class)
@Import(GlobalExceptionHandler.class) // make sure your ControllerAdvice is active
class PollsControllerTest {

  @Autowired MockMvc mockMvc;
  @Autowired ObjectMapper objectMapper;

  @MockitoBean PollService pollService;

  @Test
  void createPoll_returns201_andBody() throws Exception {
    PollCreateRequestDTO req = new PollCreateRequestDTO();
    req.setCalendarId("cal1");
    req.setTitle("Test Poll");
    req.setDescription("desc");
    req.setNotes("notes");
    req.setStartTime(LocalDateTime.now().minusDays(1));
    req.setEndTime(LocalDateTime.now().plusDays(1));
    req.setResultsVisible(true);
    req.setAllowMultipleVotes(false);
    req.setUserId("sean");


    PollOptionDTO o1 = new PollOptionDTO(); o1.setDescription("Option A");
    req.setOptions(List.of(o1));
    req.setTags(List.of("tag1"));

    PollResponseDTO resp = new PollResponseDTO(
        "p1", "cal1", "Test Poll", "desc", "notes",
        req.getStartTime(), req.getEndTime(),
        true, false,
        List.of(o1),
        List.of("tag1")
    );

    when(pollService.createPoll(any(PollCreateRequestDTO.class), eq("sean"))).thenReturn(resp);

    mockMvc.perform(post("/api/v1/polls")
        .with(jwt().jwt(j -> j.subject("sean")))
        .with(csrf())
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isCreated())
      .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
      .andExpect(jsonPath("$.poll_id").value("p1"))
      .andExpect(jsonPath("$.calendar_id").value("cal1"))
      .andExpect(jsonPath("$.title").value("Test Poll"))
      .andExpect(jsonPath("$.options[0].description").value("Option A"));
  }

  @Test
  void createPoll_returns400_whenValidationFails() throws Exception {
    // missing calendarId + options triggers @Valid constraints
    PollCreateRequestDTO req = new PollCreateRequestDTO();
    req.setTitle("Test Poll");

    mockMvc.perform(post("/api/v1/polls")
        .with(jwt().jwt(j -> j.subject("sean")))
        .with(csrf())
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isBadRequest())
      .andExpect(jsonPath("$.status").value(400));
  }

  @Test
  void updatePoll_returns200() throws Exception {
    PollUpdateRequestDTO req = new PollUpdateRequestDTO();
    req.setCalendarId("cal1");
    req.setTitle("Updated");
    req.setStartTime(LocalDateTime.now().minusDays(1));
    req.setEndTime(LocalDateTime.now().plusDays(1));
    req.setUserId("sean");


    PollResponseDTO resp = new PollResponseDTO(
        "p1", "cal1", "Updated", null, null,
        req.getStartTime(), req.getEndTime(),
        true, false,
        List.of(), List.of()
    );

    when(pollService.updatePoll(eq("p1"), any(PollUpdateRequestDTO.class), eq("sean"))).thenReturn(resp);

    mockMvc.perform(patch("/api/v1/polls/p1")
        .with(jwt().jwt(j -> j.subject("sean")))
        .with(csrf())
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.poll_id").value("p1"))
      .andExpect(jsonPath("$.title").value("Updated"));
  }

  @Test
  void deletePoll_returns200() throws Exception {
    PollDeleteResponseDTO resp = new PollDeleteResponseDTO("p1", true);
    when(pollService.deletePoll(eq("p1"), eq("sean"))).thenReturn(resp);

    mockMvc.perform(delete("/api/v1/polls/p1")
        .with(jwt().jwt(j -> j.subject("sean"))))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.poll_id").value("p1"))
      .andExpect(jsonPath("$.deleted").value(true));
  }

  @Test
  void vote_returns409_whenAlreadyVoted() throws Exception {
    PollVoteRequestDTO req = new PollVoteRequestDTO();
    req.setCalendarId("cal1");
    req.setOptions(List.of(0));
    req.setUserId("sean");


    when(pollService.voteOnPoll(eq("p1"), any(PollVoteRequestDTO.class), eq("sean")))
      .thenThrow(new AlreadyVotedException("User has already voted"));

    mockMvc.perform(post("/api/v1/polls/p1/vote")
        .with(jwt().jwt(j -> j.subject("sean")))
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isConflict())
      .andExpect(jsonPath("$.status").value(409))
      .andExpect(jsonPath("$.message").value("User has already voted"));
  }

  @Test
  void returns404_whenServiceThrowsNotFound() throws Exception {
    PollUpdateRequestDTO req = new PollUpdateRequestDTO();
    req.setCalendarId("cal1");
    req.setTitle("Updated");
    req.setStartTime(LocalDateTime.now().minusDays(1));
    req.setEndTime(LocalDateTime.now().plusDays(1));
    req.setUserId("sean");


    when(pollService.updatePoll(eq("missing"), any(PollUpdateRequestDTO.class), eq("sean")))
      .thenThrow(new ResourceNotFoundException("Poll not found"));

    mockMvc.perform(patch("/api/v1/polls/missing")
        .with(jwt().jwt(j -> j.subject("sean")))
        .with(csrf())
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isNotFound())
      .andExpect(jsonPath("$.status").value(404))
      .andExpect(jsonPath("$.message").value("Poll not found"));
  }

  @Test
  void returns403_whenServiceThrowsForbidden() throws Exception {
    PollCreateRequestDTO req = new PollCreateRequestDTO();
    req.setCalendarId("cal1");
    req.setTitle("Test Poll");
    req.setStartTime(LocalDateTime.now().minusDays(1));
    req.setEndTime(LocalDateTime.now().plusDays(1));

    PollOptionDTO o1 = new PollOptionDTO(); o1.setDescription("Option A");
    req.setOptions(List.of(o1));
    req.setUserId("sean");


    when(pollService.createPoll(any(PollCreateRequestDTO.class), eq("sean")))
      .thenThrow(new ForbiddenException("No permission"));

    mockMvc.perform(post("/api/v1/polls")
        .with(jwt().jwt(j -> j.subject("sean")))
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isForbidden())
      .andExpect(jsonPath("$.status").value(403))
      .andExpect(jsonPath("$.message").value("No permission"));
  }

  @Test
  void returns400_whenServiceThrowsInvalidRequest() throws Exception {
    PollVoteRequestDTO req = new PollVoteRequestDTO();
    req.setCalendarId("cal1");
    req.setOptions(List.of(999));
    req.setUserId("sean");


    when(pollService.voteOnPoll(eq("p1"), any(PollVoteRequestDTO.class), eq("sean")))
      .thenThrow(new InvalidRequestException("Invalid poll option"));

    mockMvc.perform(post("/api/v1/polls/p1/vote")
        .with(jwt().jwt(j -> j.subject("sean")))
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(req)))
      .andExpect(status().isBadRequest())
      .andExpect(jsonPath("$.status").value(400))
      .andExpect(jsonPath("$.message").value("Invalid poll option"));
  }
}
