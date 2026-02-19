package com.example.calendario.polls_service.util;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.example.calendario.polls_service.dto.PollCreateRequestDTO;
import com.example.calendario.polls_service.dto.PollOptionDTO;
import com.example.calendario.polls_service.dto.PollUpdateRequestDTO;
import com.example.calendario.polls_service.model.Poll;

public class TestData {

    // -------------------------------
    // POLL MODEL BUILDERS
    // -------------------------------

    public static Poll pollWithCalendar(String calendarId) {
        Poll poll = new Poll();
        poll.setId("poll-1");
        poll.setCalendarId(calendarId);
        poll.setTitle("Test Poll");
        poll.setDescription("Test Description");
        poll.setNotes("Test Notes");
        poll.setStartTime(LocalDateTime.now().minusDays(1));
        poll.setEndTime(LocalDateTime.now().plusDays(1));
        poll.setResultsVisible(true);
        poll.setAllowMultipleVotes(false);

        poll.addOption("Option A");
        poll.addOption("Option B");

        return poll;
    }

    public static Poll pollAllowingMultipleVotes(String calendarId) {
        Poll poll = pollWithCalendar(calendarId);
        poll.setAllowMultipleVotes(true);
        return poll;
    }

    public static Poll pollWithExistingVote(String calendarId, String voter) {
        Poll poll = pollWithCalendar(calendarId);
        poll.getOptionsMap().get(0).getUserVotes().add(voter);
        return poll;
    }

    // -------------------------------
    // CREATE DTO BUILDERS
    // -------------------------------

    public static PollCreateRequestDTO createValidPollCreateDto() {
        PollCreateRequestDTO dto = new PollCreateRequestDTO();

        dto.setCalendarId("cal-1");
        dto.setTitle("Weekly Standup");
        dto.setDescription("Vote for best time");
        dto.setNotes("Be honest");
        dto.setStartTime(LocalDateTime.now().minusDays(1));
        dto.setEndTime(LocalDateTime.now().plusDays(1));
        dto.setResultsVisible(true);
        dto.setAllowMultipleVotes(false);
        dto.setTags(List.of("work", "meeting"));

        dto.setOptions(validOptionList());

        return dto;
    }

    public static PollCreateRequestDTO createInvalidTimeDto() {
        PollCreateRequestDTO dto = createValidPollCreateDto();
        dto.setStartTime(LocalDateTime.now().plusDays(2));
        dto.setEndTime(LocalDateTime.now().plusDays(1));
        return dto;
    }

    public static PollCreateRequestDTO createNoOptionsDto() {
        PollCreateRequestDTO dto = createValidPollCreateDto();
        dto.setOptions(new ArrayList<>());
        return dto;
    }

    // -------------------------------
    // UPDATE DTO BUILDERS
    // -------------------------------

    public static PollUpdateRequestDTO createValidUpdateDto() {
        PollUpdateRequestDTO dto = new PollUpdateRequestDTO();

        dto.setCalendarId("cal-1");
        dto.setTitle("Updated Title");
        dto.setDescription("Updated Desc");
        dto.setNotes("Updated Notes");
        dto.setStartTime(LocalDateTime.now().minusHours(2));
        dto.setEndTime(LocalDateTime.now().plusHours(2));
        dto.setResultsVisible(true);
        dto.setAllowMultipleVotes(true);
        dto.setTags(List.of("updated"));

        dto.setOptions(validOptionList());

        return dto;
    }

    // -------------------------------
    // OPTION BUILDERS
    // -------------------------------

    public static List<PollOptionDTO> validOptionList() {
        PollOptionDTO option1 = new PollOptionDTO();
        option1.setDescription("Option A");

        PollOptionDTO option2 = new PollOptionDTO();
        option2.setDescription("Option B");

        return List.of(option1, option2);
    }
}
