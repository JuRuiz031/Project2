package com.example.calendario.polls_service;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.calendario.polls_service.client.CalendarPermissionClient;
import com.example.calendario.polls_service.dto.PollCreateRequestDTO;
import com.example.calendario.polls_service.dto.PollDeleteResponseDTO;
import com.example.calendario.polls_service.dto.PollResponseDTO;
import com.example.calendario.polls_service.dto.PollVoteRequestDTO;
import com.example.calendario.polls_service.exception.AlreadyVotedException;
import com.example.calendario.polls_service.exception.ForbiddenException;
import com.example.calendario.polls_service.exception.InvalidRequestException;
import com.example.calendario.polls_service.exception.ResourceNotFoundException;
import com.example.calendario.polls_service.model.Poll;
import com.example.calendario.polls_service.repository.PollRepository;
import com.example.calendario.polls_service.service.PollService;
import com.example.calendario.polls_service.util.TestData;



@ExtendWith(MockitoExtension.class)
class PollServiceTest {

  @Mock PollRepository pollRepository;
  @Mock CalendarPermissionClient calendarPerms;

  @InjectMocks PollService pollService;

  @Test
  void createPoll_forbidden_whenNotAdmin() {
    PollCreateRequestDTO dto = TestData.createValidPollCreateDto();
    when(calendarPerms.canManagePolls(dto.getCalendarId(), "sean")).thenReturn(false);

    assertThrows(ForbiddenException.class,
        () -> pollService.createPoll(dto, "sean"));
  }

  @Test
  void createPoll_shouldThrowWhenInvalidTime() {
      PollCreateRequestDTO dto = TestData.createInvalidTimeDto();

      assertThrows(InvalidRequestException.class,
          () -> pollService.createPoll(dto, "sean"));
  }

  @Test
  void deletePoll_deletes_whenAdmin() {
    Poll poll = TestData.pollWithCalendar("cal1");
    when(pollRepository.findById("p1")).thenReturn(Optional.of(poll));
    when(calendarPerms.canManagePolls("cal1", "sean")).thenReturn(true);

    PollDeleteResponseDTO resp = pollService.deletePoll("p1", "sean");

    assertTrue(resp.getDeleted()); // or getSuccess()
    verify(pollRepository).delete(poll);
  }

  @Test
  void createPoll_saves_whenAdmin_andMapsOptions() {
    PollCreateRequestDTO dto = TestData.createValidPollCreateDto();
    when(calendarPerms.canManagePolls(dto.getCalendarId(), "sean")).thenReturn(true);

    // Capture the Poll passed to save()
    ArgumentCaptor<Poll> captor = ArgumentCaptor.forClass(Poll.class);

    // Make repository return the saved poll (with id)
    Poll saved = TestData.pollWithCalendar(dto.getCalendarId());
    saved.setId("p1");
    when(pollRepository.save(any(Poll.class))).thenReturn(saved);

    PollResponseDTO resp = pollService.createPoll(dto, "sean");

    verify(pollRepository).save(captor.capture());
    Poll toSave = captor.getValue();

    assertEquals(dto.getCalendarId(), toSave.getCalendarId());
    assertEquals(dto.getTitle(), toSave.getTitle());
    assertNotNull(resp);
    assertEquals("p1", resp.getPollId());
    assertEquals(dto.getCalendarId(), resp.getCalendarId());
    assertNotNull(resp.getOptions());
    assertTrue(resp.getOptions().size() >= 1);
  }

  @Test
  void createPoll_throws_whenTitleMissing() {
    PollCreateRequestDTO dto = TestData.createValidPollCreateDto();
    dto.setTitle("   ");

    assertThrows(InvalidRequestException.class,
        () -> pollService.createPoll(dto, "sean"));

    verifyNoInteractions(pollRepository);
  }

  @Test
  void deletePoll_forbidden_whenNotAdmin() {
    Poll poll = TestData.pollWithCalendar("cal1");
    when(pollRepository.findById("p1")).thenReturn(Optional.of(poll));
    when(calendarPerms.canManagePolls("cal1", "sean")).thenReturn(false);

    assertThrows(ForbiddenException.class,
        () -> pollService.deletePoll("p1", "sean"));

    verify(pollRepository, never()).delete(any());
  }

  @Test
  void deletePoll_throws_whenPollNotFound() {
    when(pollRepository.findById("missing")).thenReturn(Optional.empty());

    assertThrows(ResourceNotFoundException.class,
        () -> pollService.deletePoll("missing", "sean"));

    verify(pollRepository, never()).delete(any());
  }

  @Test
  void voteOnPoll_forbidden_whenCannotVote() {
    PollVoteRequestDTO dto = new PollVoteRequestDTO();
    dto.setCalendarId("cal1");
    dto.setOptions(List.of(0));

    when(calendarPerms.canVote("cal1", "sean")).thenReturn(false);

    assertThrows(ForbiddenException.class,
        () -> pollService.voteOnPoll("p1", dto, "sean"));

    verifyNoInteractions(pollRepository);
  }

  @Test
  void voteOnPoll_throws_whenCalendarIdMismatch() {
    Poll poll = TestData.pollWithCalendar("cal-REAL");
    poll.setId("p1");

    PollVoteRequestDTO dto = new PollVoteRequestDTO();
    dto.setCalendarId("cal-OTHER");
    dto.setOptions(List.of(0));

    when(calendarPerms.canVote("cal-OTHER", "sean")).thenReturn(true);
    when(pollRepository.findById("p1")).thenReturn(Optional.of(poll));

    assertThrows(InvalidRequestException.class,
        () -> pollService.voteOnPoll("p1", dto, "sean"));

    verify(pollRepository, never()).save(any());
  }

  @Test
  void voteOnPoll_throws_whenMultipleSelectedButNotAllowed() {
    Poll poll = TestData.pollWithCalendar("cal1");
    poll.setAllowMultipleVotes(false);
    poll.setId("p1");

    PollVoteRequestDTO dto = new PollVoteRequestDTO();
    dto.setCalendarId("cal1");
    dto.setOptions(List.of(0, 1));

    when(calendarPerms.canVote("cal1", "sean")).thenReturn(true);
    when(pollRepository.findById("p1")).thenReturn(Optional.of(poll));

    assertThrows(InvalidRequestException.class,
        () -> pollService.voteOnPoll("p1", dto, "sean"));

    verify(pollRepository, never()).save(any());
  }

  @Test
  void voteOnPoll_throws_whenAlreadyVoted() {
    Poll poll = TestData.pollWithExistingVote("cal1", "sean");
    poll.setId("p1");

    PollVoteRequestDTO dto = new PollVoteRequestDTO();
    dto.setCalendarId("cal1");
    dto.setOptions(List.of(1)); // any option

    when(calendarPerms.canVote("cal1", "sean")).thenReturn(true);
    when(pollRepository.findById("p1")).thenReturn(Optional.of(poll));

    assertThrows(AlreadyVotedException.class,
        () -> pollService.voteOnPoll("p1", dto, "sean"));

    verify(pollRepository, never()).save(any());
  }

  @Test
  void voteOnPoll_addsVote_andSaves() {
    Poll poll = TestData.pollWithCalendar("cal1");
    poll.setAllowMultipleVotes(true);
    poll.setId("p1");

    PollVoteRequestDTO dto = new PollVoteRequestDTO();
    dto.setCalendarId("cal1");
    dto.setOptions(List.of(0, 1));

    when(calendarPerms.canVote("cal1", "sean")).thenReturn(true);
    when(pollRepository.findById("p1")).thenReturn(Optional.of(poll));
    when(pollRepository.save(any(Poll.class))).thenAnswer(inv -> inv.getArgument(0));

    PollResponseDTO resp = pollService.voteOnPoll("p1", dto, "sean");

    verify(pollRepository).save(poll);

    // Confirm the vote actually got recorded
    assertTrue(poll.getOptionsMap().get(0).getUserVotes().contains("sean"));
    assertTrue(poll.getOptionsMap().get(1).getUserVotes().contains("sean"));
    assertEquals("p1", resp.getPollId());
  }

}
