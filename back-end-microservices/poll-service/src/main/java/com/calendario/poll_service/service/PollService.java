package com.calendario.poll_service.service;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.calendario.poll_service.client.CalendarServiceClient;
import com.calendario.poll_service.client.UserServiceClient;
import com.calendario.poll_service.dto.PollCreateRequestDTO;
import com.calendario.poll_service.dto.PollDeleteRequestDTO;
import com.calendario.poll_service.dto.PollDeleteResponseDTO;
import com.calendario.poll_service.dto.PollOptionDTO;
import com.calendario.poll_service.dto.PollResponseDTO;
import com.calendario.poll_service.dto.PollUpdateRequestDTO;
import com.calendario.poll_service.dto.PollVoteRequestDTO;
import com.calendario.poll_service.dto.UserInternalDTO;
import com.calendario.poll_service.exception.AlreadyVotedException;
import com.calendario.poll_service.exception.ForbiddenException;
import com.calendario.poll_service.exception.InvalidRequestException;
import com.calendario.poll_service.exception.ResourceNotFoundException;
import com.calendario.poll_service.model.Poll;
import com.calendario.poll_service.repository.PollRepository;

@Service
public class PollService {

    private final PollRepository pollRepository;
    private final UserServiceClient userServiceClient;
    private final CalendarServiceClient calendarServiceClient;

    public PollService(PollRepository pollRepository,
                       UserServiceClient userServiceClient,
                       CalendarServiceClient calendarServiceClient) {
        this.pollRepository = pollRepository;
        this.userServiceClient = userServiceClient;
        this.calendarServiceClient = calendarServiceClient;
    }

    public PollResponseDTO createPoll(PollCreateRequestDTO dto, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        if (!dto.getUserId().equals(user.id())) {
            throw new ForbiddenException("You do not have permission to create a poll for another user");
        }

        if (!Boolean.TRUE.equals(calendarServiceClient.calendarExists(dto.getCalendarId()))) {
            throw new ResourceNotFoundException("Calendar not found: " + dto.getCalendarId());
        }

        if (!user.isAdminOfCalendar(dto.getCalendarId())) {
            throw new ForbiddenException("You do not have permission to create polls in this calendar");
        }

        if (!dto.getStartTime().isBefore(dto.getEndTime())) {
            throw new InvalidRequestException("Poll start time must be before end time");
        }

        Poll poll = new Poll();
        poll.setCalendarId(dto.getCalendarId());
        poll.setTitle(dto.getTitle());
        poll.setDescription(dto.getDescription());
        poll.setNotes(dto.getNotes());
        poll.setStartTime(dto.getStartTime());
        poll.setEndTime(dto.getEndTime());
        poll.setResultsVisible(Boolean.TRUE.equals(dto.getResultsVisible()));
        poll.setAllowMultipleVotes(Boolean.TRUE.equals(dto.getAllowMultipleVotes()));
        poll.setTags(dto.getTags());

        if (dto.getOptions() != null) {
            for (PollOptionDTO opt : dto.getOptions()) {
                if (opt != null && opt.getDescription() != null && !opt.getDescription().isBlank()) {
                    poll.addOption(opt.getDescription());
                }
            }
        }

        Poll saved = pollRepository.save(poll);
        return toResponseDTO(saved);
    }

    public PollResponseDTO updatePoll(String pollId, PollUpdateRequestDTO dto, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        if (!dto.getUserId().equals(user.id())) {
            throw new ForbiddenException("You do not have permission to edit this poll");
        }

        if (!Boolean.TRUE.equals(calendarServiceClient.calendarExists(dto.getCalendarId()))) {
            throw new ResourceNotFoundException("Calendar not found: " + dto.getCalendarId());
        }

        if (!user.isAdminOfCalendar(dto.getCalendarId())) {
            throw new ForbiddenException("You do not have permission to move the poll to this calendar");
        }

        Poll existingPoll = pollRepository.findById(pollId)
                .orElseThrow(() -> new ResourceNotFoundException("Poll not found"));

        existingPoll.setCalendarId(dto.getCalendarId());
        if (dto.getTitle() != null) existingPoll.setTitle(dto.getTitle());
        if (dto.getDescription() != null) existingPoll.setDescription(dto.getDescription());
        if (dto.getNotes() != null) existingPoll.setNotes(dto.getNotes());
        if (dto.getStartTime() != null) existingPoll.setStartTime(dto.getStartTime());
        if (dto.getEndTime() != null) existingPoll.setEndTime(dto.getEndTime());
        if (dto.getResultsVisible() != null) existingPoll.setResultsVisible(dto.getResultsVisible());
        if (dto.getAllowMultipleVotes() != null) existingPoll.setAllowMultipleVotes(dto.getAllowMultipleVotes());
        if (dto.getTags() != null) existingPoll.setTags(dto.getTags());

        if (dto.getOptions() != null) {
            Map<Integer, Poll.Option> optionsMap = existingPoll.getOptionsMap();
            Set<Integer> originalIds = new HashSet<>(optionsMap.keySet());
            Set<Integer> incomingIds = new HashSet<>();

            for (PollOptionDTO opt : dto.getOptions()) {
                if (opt == null) continue;
                Integer optId = opt.getOptionId();
                if (optId == null) {
                    if (opt.getDescription() != null && !opt.getDescription().isBlank()) {
                        existingPoll.addOption(opt.getDescription(),
                                opt.getUserVotes(), opt.getGuestVotes());
                    }
                } else {
                    incomingIds.add(optId);
                    Poll.Option existing = optionsMap.get(optId);
                    if (existing != null && opt.getDescription() != null && !opt.getDescription().isBlank()) {
                        existing.setDescription(opt.getDescription());
                    }
                }
            }
            for (Integer originalId : originalIds) {
                if (!incomingIds.contains(originalId)) {
                    existingPoll.removeOption(originalId);
                }
            }
        }

        Poll updated = pollRepository.save(existingPoll);
        return toResponseDTO(updated);
    }

    public PollDeleteResponseDTO deletePoll(String pollId, PollDeleteRequestDTO dto, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        if (!dto.getUserId().equals(user.id())) {
            throw new ForbiddenException("You do not have permission to delete this poll");
        }

        Poll poll = pollRepository.findById(pollId)
                .orElseThrow(() -> new ResourceNotFoundException("Poll not found"));

        if (!user.isAdminOfCalendar(poll.getCalendarId())) {
            throw new ForbiddenException("You do not have permission to delete this poll");
        }

        pollRepository.delete(poll);
        return new PollDeleteResponseDTO(pollId, true);
    }

    public PollResponseDTO voteOnPoll(String pollId, PollVoteRequestDTO dto, String authenticatedUsername) {
        UserInternalDTO user = userServiceClient.getUserByUsername(authenticatedUsername);

        if (!dto.getUserId().equals(user.id())) {
            throw new ForbiddenException("You do not have permission to vote on this poll");
        }

        if (!user.isMemberOfCalendar(dto.getCalendarId())) {
            throw new ForbiddenException("You do not have permission to vote in this calendar");
        }

        Poll poll = pollRepository.findById(pollId)
                .orElseThrow(() -> new ResourceNotFoundException("Poll not found"));

        List<Integer> selectedOptions = dto.getOptions();
        if (selectedOptions == null || selectedOptions.isEmpty()) {
            throw new InvalidRequestException("At least one poll option must be selected");
        }
        if (selectedOptions.size() > 1 && !poll.isAllowMultipleVotes()) {
            throw new InvalidRequestException("Multiple votes are not allowed in this poll");
        }

        Map<Integer, Poll.Option> optionsMap = poll.getOptionsMap();

        for (Poll.Option option : optionsMap.values()) {
            if (option.getUserVotes().contains(dto.getUserId())) {
                throw new AlreadyVotedException("User has already voted in this poll");
            }
        }

        for (Integer optionId : selectedOptions) {
            Poll.Option option = optionsMap.get(optionId);
            if (option == null) {
                throw new InvalidRequestException("Invalid poll option: " + optionId);
            }
            if (!option.getUserVotes().contains(dto.getUserId())) {
                option.getUserVotes().add(dto.getUserId());
            }
        }

        pollRepository.save(poll);
        return toResponseDTO(poll);
    }

    // Internal endpoint: get poll by ID (called by event-service for invite links)
    public Poll getPollById(String pollId) {
        return pollRepository.findById(pollId)
                .orElseThrow(() -> new ResourceNotFoundException("Poll not found: " + pollId));
    }

    private PollResponseDTO toResponseDTO(Poll poll) {
        List<PollOptionDTO> optionDTOs = poll.getOptions() == null ? null :
                poll.getOptions().stream().map(o -> new PollOptionDTO(
                        o.getOptionId(), o.getDescription(), o.getUserVotes(), o.getGuestVotes()
                )).collect(Collectors.toList());

        return new PollResponseDTO(
                poll.getId(), poll.getCalendarId(), poll.getTitle(),
                poll.getDescription(), poll.getNotes(),
                poll.getStartTime(), poll.getEndTime(),
                poll.isResultsVisible(), poll.isAllowMultipleVotes(),
                optionDTOs, poll.getTags()
        );
    }
}
