package com.calendario.poll_service.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.poll_service.dto.PollOptionDTO;
import com.calendario.poll_service.dto.PollResponseDTO;
import com.calendario.poll_service.model.Poll;
import com.calendario.poll_service.repository.PollRepository;

@RestController
@RequestMapping("/internal")
public class InternalPollController {

    private final PollRepository pollRepository;

    public InternalPollController(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    @PostMapping("/polls/by-calendar-ids")
    public ResponseEntity<List<PollResponseDTO>> getPollsByCalendarIds(
            @RequestBody List<String> calendarIds) {
        List<Poll> polls = pollRepository.findByCalendarIdIn(calendarIds);
        List<PollResponseDTO> dtos = polls.stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    private PollResponseDTO toResponseDTO(Poll poll) {
        List<PollOptionDTO> optionDTOs = poll.getOptions() == null ? null :
                poll.getOptions().stream().map(o -> new PollOptionDTO(
                        o.getOptionId(), o.getDescription(),
                        o.getUserVotes(), o.getGuestVotes()
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
