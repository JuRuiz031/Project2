package com.calendario.poll_service.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.poll_service.dto.PollCreateRequestDTO;
import com.calendario.poll_service.dto.PollDeleteRequestDTO;
import com.calendario.poll_service.dto.PollDeleteResponseDTO;
import com.calendario.poll_service.dto.PollResponseDTO;
import com.calendario.poll_service.dto.PollUpdateRequestDTO;
import com.calendario.poll_service.dto.PollVoteRequestDTO;
import com.calendario.poll_service.model.Poll;
import com.calendario.poll_service.service.PollService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class PollController {

    private final PollService pollService;

    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    // POST Create Poll
    @PostMapping("/polls")
    public ResponseEntity<PollResponseDTO> createPoll(@Valid @RequestBody PollCreateRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        PollResponseDTO response = pollService.createPoll(dto, auth.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // PATCH Update Poll
    @PatchMapping("/polls/{id}")
    public ResponseEntity<PollResponseDTO> updatePoll(
            @PathVariable String id,
            @Valid @RequestBody PollUpdateRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        PollResponseDTO response = pollService.updatePoll(id, dto, auth.getName());
        return ResponseEntity.ok(response);
    }

    // DELETE Poll
    @DeleteMapping("/polls/{id}")
    public ResponseEntity<PollDeleteResponseDTO> deletePoll(
            @PathVariable String id,
            @Valid @RequestBody PollDeleteRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        PollDeleteResponseDTO response = pollService.deletePoll(id, dto, auth.getName());
        return ResponseEntity.ok(response);
    }

    // POST Vote on Poll
    @PostMapping("/polls/{id}/vote")
    public ResponseEntity<PollResponseDTO> voteOnPoll(
            @PathVariable String id,
            @Valid @RequestBody PollVoteRequestDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        PollResponseDTO response = pollService.voteOnPoll(id, dto, auth.getName());
        return ResponseEntity.ok(response);
    }

    // GET Internal: get poll by ID (for event-service invite link resolution)
    @GetMapping("/internal/polls/{pollId}")
    public ResponseEntity<Poll> getPollById(@PathVariable String pollId) {
        return ResponseEntity.ok(pollService.getPollById(pollId));
    }
}
