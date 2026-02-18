package com.calendario.poll_service.service;

import java.time.LocalDateTime;
import java.util.Collections;
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
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.calendario.poll_service.client.CalendarServiceClient;
import com.calendario.poll_service.client.UserServiceClient;
import com.calendario.poll_service.dto.PollCreateRequestDTO;
import com.calendario.poll_service.dto.PollDeleteRequestDTO;
import com.calendario.poll_service.dto.PollDeleteResponseDTO;
import com.calendario.poll_service.dto.PollOptionDTO;
import com.calendario.poll_service.dto.PollResponseDTO;
import com.calendario.poll_service.dto.PollVoteRequestDTO;
import com.calendario.poll_service.dto.UserInternalDTO;
import com.calendario.poll_service.exception.AlreadyVotedException;
import com.calendario.poll_service.exception.ForbiddenException;
import com.calendario.poll_service.exception.InvalidRequestException;
import com.calendario.poll_service.exception.ResourceNotFoundException;
import com.calendario.poll_service.model.Poll;
import com.calendario.poll_service.repository.PollRepository;

@ExtendWith(MockitoExtension.class)
class PollServiceTest {

    @Mock
    private PollRepository pollRepository;

    @Mock
    private UserServiceClient userServiceClient;

    @Mock
    private CalendarServiceClient calendarServiceClient;

    @InjectMocks
    private PollService pollService;

    private UserInternalDTO adminUser;
    private UserInternalDTO memberUser;
    private Poll testPoll;
    private PollCreateRequestDTO createDTO;

    @BeforeEach
    void setUp() {
        adminUser = new UserInternalDTO(
            "user-1", "admin", false,
            List.of(new UserInternalDTO.CalendarMembership("cal-1", true))
        );

        memberUser = new UserInternalDTO(
            "user-2", "member", false,
            List.of(new UserInternalDTO.CalendarMembership("cal-1", false))
        );

        testPoll = new Poll();
        testPoll.setId("poll-1");
        testPoll.setCalendarId("cal-1");
        testPoll.setTitle("Test Poll");
        testPoll.setStartTime(LocalDateTime.now().minusHours(1));
        testPoll.setEndTime(LocalDateTime.now().plusHours(1));
        testPoll.addOption("Option A");
        testPoll.addOption("Option B");

        createDTO = new PollCreateRequestDTO();
        createDTO.setUserId("user-1");
        createDTO.setCalendarId("cal-1");
        createDTO.setTitle("New Poll");
        createDTO.setStartTime(LocalDateTime.now().minusMinutes(1));
        createDTO.setEndTime(LocalDateTime.now().plusHours(2));
        createDTO.setOptions(List.of(
            new PollOptionDTO(null, "Option 1", null, null),
            new PollOptionDTO(null, "Option 2", null, null)
        ));
    }

    // ── createPoll ─────────────────────────────────────────────

    @Test
    void createPoll_Success() {
        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarServiceClient.calendarExists("cal-1")).thenReturn(true);
        when(pollRepository.save(any(Poll.class))).thenReturn(testPoll);

        PollResponseDTO result = pollService.createPoll(createDTO, "admin");

        assertNotNull(result);
        verify(pollRepository, times(1)).save(any(Poll.class));
    }

    @Test
    void createPoll_WrongUser_ThrowsForbidden() {
        UserInternalDTO differentUser = new UserInternalDTO(
            "user-999", "other", false, Collections.emptyList()
        );
        when(userServiceClient.getUserByUsername("other")).thenReturn(differentUser);

        assertThrows(ForbiddenException.class, () ->
            pollService.createPoll(createDTO, "other")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    @Test
    void createPoll_CalendarNotFound_ThrowsException() {
        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarServiceClient.calendarExists("cal-1")).thenReturn(false);

        assertThrows(ResourceNotFoundException.class, () ->
            pollService.createPoll(createDTO, "admin")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    @Test
    void createPoll_NotAdmin_ThrowsForbidden() {
        PollCreateRequestDTO memberDto = new PollCreateRequestDTO();
        memberDto.setUserId("user-2");
        memberDto.setCalendarId("cal-1");
        memberDto.setTitle("Poll");
        memberDto.setStartTime(LocalDateTime.now().minusMinutes(1));
        memberDto.setEndTime(LocalDateTime.now().plusHours(1));

        when(userServiceClient.getUserByUsername("member")).thenReturn(memberUser);
        when(calendarServiceClient.calendarExists("cal-1")).thenReturn(true);

        assertThrows(ForbiddenException.class, () ->
            pollService.createPoll(memberDto, "member")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    @Test
    void createPoll_InvalidTimeRange_ThrowsException() {
        createDTO.setStartTime(LocalDateTime.now().plusHours(2));
        createDTO.setEndTime(LocalDateTime.now().plusHours(1));

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(calendarServiceClient.calendarExists("cal-1")).thenReturn(true);

        assertThrows(InvalidRequestException.class, () ->
            pollService.createPoll(createDTO, "admin")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    // ── deletePoll ─────────────────────────────────────────────

    @Test
    void deletePoll_Success() {
        PollDeleteRequestDTO dto = new PollDeleteRequestDTO();
        dto.setUserId("user-1");

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));

        PollDeleteResponseDTO result = pollService.deletePoll("poll-1", dto, "admin");

        assertTrue(result.deleted());
        assertEquals("poll-1", result.id());
        verify(pollRepository, times(1)).delete(testPoll);
    }

    @Test
    void deletePoll_WrongUser_ThrowsForbidden() {
        PollDeleteRequestDTO dto = new PollDeleteRequestDTO();
        dto.setUserId("user-999");

        UserInternalDTO wrongUser = new UserInternalDTO(
            "user-2", "member", false, Collections.emptyList()
        );
        when(userServiceClient.getUserByUsername("member")).thenReturn(wrongUser);

        assertThrows(ForbiddenException.class, () ->
            pollService.deletePoll("poll-1", dto, "member")
        );
        verify(pollRepository, never()).delete(any(Poll.class));
    }

    @Test
    void deletePoll_PollNotFound_ThrowsException() {
        PollDeleteRequestDTO dto = new PollDeleteRequestDTO();
        dto.setUserId("user-1");

        when(userServiceClient.getUserByUsername("admin")).thenReturn(adminUser);
        when(pollRepository.findById("nonexistent")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () ->
            pollService.deletePoll("nonexistent", dto, "admin")
        );
    }

    // ── voteOnPoll ─────────────────────────────────────────────

    @Test
    void voteOnPoll_Success() {
        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-2");
        dto.setCalendarId("cal-1");
        dto.setOptions(List.of(0));

        when(userServiceClient.getUserByUsername("member")).thenReturn(memberUser);
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));
        when(pollRepository.save(any(Poll.class))).thenReturn(testPoll);

        PollResponseDTO result = pollService.voteOnPoll("poll-1", dto, "member");

        assertNotNull(result);
        verify(pollRepository, times(1)).save(testPoll);
    }

    @Test
    void voteOnPoll_WrongUser_ThrowsForbidden() {
        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-999");
        dto.setCalendarId("cal-1");
        dto.setOptions(List.of(0));

        UserInternalDTO wrongUser = new UserInternalDTO(
            "user-2", "member", false,
            List.of(new UserInternalDTO.CalendarMembership("cal-1", false))
        );
        when(userServiceClient.getUserByUsername("member")).thenReturn(wrongUser);

        assertThrows(ForbiddenException.class, () ->
            pollService.voteOnPoll("poll-1", dto, "member")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    @Test
    void voteOnPoll_NotMember_ThrowsForbidden() {
        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-2");
        dto.setCalendarId("cal-1");
        dto.setOptions(List.of(0));

        UserInternalDTO nonMember = new UserInternalDTO(
            "user-2", "member", false, Collections.emptyList()
        );
        when(userServiceClient.getUserByUsername("member")).thenReturn(nonMember);

        assertThrows(ForbiddenException.class, () ->
            pollService.voteOnPoll("poll-1", dto, "member")
        );
    }

    @Test
    void voteOnPoll_AlreadyVoted_ThrowsException() {
        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-2");
        dto.setCalendarId("cal-1");
        dto.setOptions(List.of(0));

        // Pre-populate a vote for user-2 in option 0
        testPoll.getOptionsMap().get(0).getUserVotes().add("user-2");

        when(userServiceClient.getUserByUsername("member")).thenReturn(memberUser);
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));

        assertThrows(AlreadyVotedException.class, () ->
            pollService.voteOnPoll("poll-1", dto, "member")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    @Test
    void voteOnPoll_MultipleVotesNotAllowed_ThrowsException() {
        testPoll.setAllowMultipleVotes(false);

        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-2");
        dto.setCalendarId("cal-1");
        dto.setOptions(List.of(0, 1));

        when(userServiceClient.getUserByUsername("member")).thenReturn(memberUser);
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));

        assertThrows(InvalidRequestException.class, () ->
            pollService.voteOnPoll("poll-1", dto, "member")
        );
        verify(pollRepository, never()).save(any(Poll.class));
    }

    @Test
    void voteOnPoll_NoOptionsSelected_ThrowsException() {
        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-2");
        dto.setCalendarId("cal-1");
        dto.setOptions(Collections.emptyList());

        when(userServiceClient.getUserByUsername("member")).thenReturn(memberUser);
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));

        assertThrows(InvalidRequestException.class, () ->
            pollService.voteOnPoll("poll-1", dto, "member")
        );
    }

    @Test
    void voteOnPoll_InvalidOptionId_ThrowsException() {
        PollVoteRequestDTO dto = new PollVoteRequestDTO();
        dto.setUserId("user-2");
        dto.setCalendarId("cal-1");
        dto.setOptions(List.of(999));

        when(userServiceClient.getUserByUsername("member")).thenReturn(memberUser);
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));

        assertThrows(InvalidRequestException.class, () ->
            pollService.voteOnPoll("poll-1", dto, "member")
        );
    }

    // ── getPollById ─────────────────────────────────────────────

    @Test
    void getPollById_Success() {
        when(pollRepository.findById("poll-1")).thenReturn(Optional.of(testPoll));

        Poll result = pollService.getPollById("poll-1");

        assertNotNull(result);
        assertEquals("poll-1", result.getId());
    }

    @Test
    void getPollById_NotFound_ThrowsException() {
        when(pollRepository.findById("nonexistent")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () ->
            pollService.getPollById("nonexistent")
        );
    }
}
