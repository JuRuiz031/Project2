package com.example.calendario.polls_service.service;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.example.calendario.polls_service.client.CalendarPermissionClient;
import com.example.calendario.polls_service.dto.PollCreateRequestDTO;
import com.example.calendario.polls_service.dto.PollDeleteResponseDTO;
import com.example.calendario.polls_service.dto.PollOptionDTO;
import com.example.calendario.polls_service.dto.PollResponseDTO;
import com.example.calendario.polls_service.dto.PollUpdateRequestDTO;
import com.example.calendario.polls_service.dto.PollVoteRequestDTO;
import com.example.calendario.polls_service.exception.AlreadyVotedException;
import com.example.calendario.polls_service.exception.ForbiddenException;
import com.example.calendario.polls_service.exception.InvalidRequestException;
import com.example.calendario.polls_service.exception.ResourceNotFoundException;
import com.example.calendario.polls_service.model.Poll;
import com.example.calendario.polls_service.repository.PollRepository;

@Service
public class PollService {

  private final PollRepository pollRepository;
  private final CalendarPermissionClient calendarPerms;

  public PollService(PollRepository pollRepository, CalendarPermissionClient calendarPerms) {
    this.pollRepository = pollRepository;
    this.calendarPerms = calendarPerms;
  }

  public PollResponseDTO createPoll(PollCreateRequestDTO dto, String requester) {
    validateCreate(dto);

    // Optional: existence check (can also be skipped to avoid extra calls)
    calendarPerms.assertCalendarExists(dto.getCalendarId());

    // AuthZ: must be admin to create
    if (!calendarPerms.canManagePolls(dto.getCalendarId(), requester)) {
      throw new ForbiddenException("You do not have permission to create polls in this calendar");
    }

    Poll poll = new Poll();
    poll.setCalendarId(dto.getCalendarId());
    poll.setTitle(dto.getTitle());
    poll.setDescription(dto.getDescription());
    poll.setNotes(dto.getNotes());
    poll.setStartTime(dto.getStartTime());
    poll.setEndTime(dto.getEndTime());
    poll.setResultsVisible(dto.getResultsVisible());
    poll.setAllowMultipleVotes(dto.getAllowMultipleVotes());
    poll.setTags(dto.getTags());

    if (dto.getOptions() != null) {
      for (PollOptionDTO opt : dto.getOptions()) {
        if (opt != null && opt.getDescription() != null && !opt.getDescription().isBlank()) {
          poll.addOption(opt.getDescription());
        }
      }
    }

    Poll saved = pollRepository.save(poll);
    return toResponse(saved);
  }

  public PollResponseDTO updatePoll(String pollId, PollUpdateRequestDTO dto, String requester) {
    validateUpdate(dto);

    Poll existing = pollRepository.findById(pollId)
        .orElseThrow(() -> new ResourceNotFoundException("Poll not found"));

    // If calendar is changing, permission should be checked for the target calendar
    String targetCalendarId = dto.getCalendarId() != null ? dto.getCalendarId() : existing.getCalendarId();

    if (!calendarPerms.canManagePolls(targetCalendarId, requester)) {
      throw new ForbiddenException("You do not have permission to edit this poll");
    }

    // Apply changes (null-safe if you want partial updates)
    existing.setCalendarId(targetCalendarId);
    existing.setTitle(dto.getTitle());
    existing.setDescription(dto.getDescription());
    existing.setNotes(dto.getNotes());
    existing.setStartTime(dto.getStartTime());
    existing.setEndTime(dto.getEndTime());
    existing.setResultsVisible(dto.getResultsVisible());
    existing.setAllowMultipleVotes(dto.getAllowMultipleVotes());
    existing.setTags(dto.getTags());

    // Options update logic (your current logic is fine, keep it)
    applyOptionsUpdate(existing, dto.getOptions());

    Poll updated = pollRepository.save(existing);
    return toResponse(updated);
  }

  public PollDeleteResponseDTO deletePoll(String pollId, String requester) {
    Poll existing = pollRepository.findById(pollId)
        .orElseThrow(() -> new ResourceNotFoundException("Poll not found"));

    if (!calendarPerms.canManagePolls(existing.getCalendarId(), requester)) {
      throw new ForbiddenException("You do not have permission to delete this poll");
    }

    pollRepository.delete(existing);
    return new PollDeleteResponseDTO(pollId, true);
  }

  public PollResponseDTO voteOnPoll(String pollId, PollVoteRequestDTO dto, String requester) {
    if (dto.getCalendarId() == null || dto.getCalendarId().isBlank()) {
      throw new InvalidRequestException("Calendar ID is required");
    }

    if (!calendarPerms.canVote(dto.getCalendarId(), requester)) {
      throw new ForbiddenException("You do not have permission to vote in this calendar");
    }

    Poll poll = pollRepository.findById(pollId)
        .orElseThrow(() -> new ResourceNotFoundException("Poll not found"));

    if (!poll.getCalendarId().equals(dto.getCalendarId())) {
      throw new InvalidRequestException("Poll does not belong to the provided calendarId");
    }

    List<Integer> selected = dto.getOptions();
    if (selected == null || selected.isEmpty()) {
      throw new InvalidRequestException("At least one poll option must be selected");
    }
    if (selected.size() > 1 && !poll.isAllowMultipleVotes()) {
      throw new InvalidRequestException("Multiple votes are not allowed in this poll");
    }

    // store requester identity in userVotes as string
    Map<Integer, Poll.Option> map = poll.getOptionsMap();
    for (Poll.Option opt : map.values()) {
      if (opt.getUserVotes().contains(requester)) {
        throw new AlreadyVotedException("User has already voted in this poll");
      }
    }

    for (Integer optionId : selected) {
      Poll.Option opt = map.get(optionId);
      if (opt == null) throw new InvalidRequestException("Invalid poll option: " + optionId);
      opt.getUserVotes().add(requester);
    }

    pollRepository.save(poll);
    return toResponse(poll);
  }

  // --- helpers ---
  private void validateCreate(PollCreateRequestDTO dto) {
    if (dto.getCalendarId() == null || dto.getCalendarId().isBlank()) throw new InvalidRequestException("Calendar ID is required");
    if (dto.getTitle() == null || dto.getTitle().isBlank()) throw new InvalidRequestException("Title is required");
    if (dto.getStartTime() == null || dto.getEndTime() == null) throw new InvalidRequestException("Start and end time are required");
    if (!dto.getStartTime().isBefore(dto.getEndTime())) throw new InvalidRequestException("Poll start time must be before end time");
    if (dto.getOptions() == null || dto.getOptions().isEmpty()) throw new InvalidRequestException("At least one option is required");
  }

  private void validateUpdate(PollUpdateRequestDTO dto) {
    if (dto.getCalendarId() == null || dto.getCalendarId().isBlank()) throw new InvalidRequestException("Calendar ID is required");
    if (dto.getStartTime() != null && dto.getEndTime() != null && !dto.getStartTime().isBefore(dto.getEndTime())) {
      throw new InvalidRequestException("Poll start time must be before end time");
    }
  }

  private void applyOptionsUpdate(Poll existing, List<PollOptionDTO> incoming) {
    if (incoming == null) return;

    Map<Integer, Poll.Option> map = existing.getOptionsMap();
    Set<Integer> originalIds = new HashSet<>(map.keySet());
    Set<Integer> incomingIds = new HashSet<>();

    for (PollOptionDTO opt : incoming) {
        if (opt == null) continue;

        Integer id = opt.getOptionId();
        String desc = opt.getDescription();

        if (id == null) {
            if (desc != null && !desc.isBlank()) {
                existing.addOption(desc, opt.getUserVotes(), opt.getGuestVotes());
            }
        } else {
            incomingIds.add(id);
            Poll.Option existingOpt = map.get(id);
            if (existingOpt != null) {
                if (desc != null && !desc.isBlank()) existingOpt.setDescription(desc);
                if (opt.getUserVotes() != null) existingOpt.setUserVotes(opt.getUserVotes());
                if (opt.getGuestVotes() != null) existingOpt.setGuestVotes(opt.getGuestVotes());
            }
        }
    }

    for (Integer originalId : originalIds) {
        if (!incomingIds.contains(originalId)) {
            existing.removeOption(originalId);
        }
    }
}


  private PollResponseDTO toResponse(Poll p) {
    List<PollOptionDTO> options = null;
    if (p.getOptions() != null) {
        options = p.getOptions().stream().map(o -> {
            PollOptionDTO dto = new PollOptionDTO();
            dto.setOptionId(o.getOptionId());
            dto.setDescription(o.getDescription());
            dto.setUserVotes(o.getUserVotes());
            dto.setGuestVotes(o.getGuestVotes());
            return dto;
        }).toList();
    }

    return new PollResponseDTO(
        p.getId(),
        p.getCalendarId(),
        p.getTitle(),
        p.getDescription(),
        p.getNotes(),
        p.getStartTime(),
        p.getEndTime(),
        p.isResultsVisible(),
        p.isAllowMultipleVotes(),
        options,
        p.getTags()
    );
}

}
