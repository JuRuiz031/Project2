package com.example.calendario.polls_service.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.calendario.polls_service.dto.PollCreateRequestDTO;
import com.example.calendario.polls_service.dto.PollDeleteResponseDTO;
import com.example.calendario.polls_service.dto.PollResponseDTO;
import com.example.calendario.polls_service.dto.PollUpdateRequestDTO;
import com.example.calendario.polls_service.dto.PollVoteRequestDTO;
import com.example.calendario.polls_service.service.PollService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class PollsController {

	private final PollService pollService;

	public PollsController(PollService pollService) {
		this.pollService = pollService;
	}

	// POST Create Poll
	@PostMapping("/polls")
	public ResponseEntity<PollResponseDTO> createPoll(@Valid @RequestBody PollCreateRequestDTO requestDTO) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String authenticatedUsername = authentication.getName();

		PollResponseDTO response = pollService.createPoll(requestDTO, authenticatedUsername);
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

	// PATCH Update Poll
	@PatchMapping("/polls/{id}")
	public ResponseEntity<PollResponseDTO> updatePoll(
			@PathVariable("id") String pollId,
			@Valid @RequestBody PollUpdateRequestDTO requestDTO) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String authenticatedUsername = authentication.getName();

		PollResponseDTO response = pollService.updatePoll(pollId, requestDTO, authenticatedUsername);
		return ResponseEntity.ok(response);
	}

	// DELETE Delete Poll
	@DeleteMapping("/polls/{id}")
	public ResponseEntity<PollDeleteResponseDTO> deletePoll(
			@PathVariable("id") String pollId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String authenticatedUsername = authentication.getName();

		PollDeleteResponseDTO response = pollService.deletePoll(pollId, authenticatedUsername);
		return ResponseEntity.ok(response);
	}

    //Vote on a Poll
    @PostMapping("/polls/{id}/vote")
    public ResponseEntity<PollResponseDTO> voteOnPoll(
            @PathVariable("id") String pollId,
            @Valid @RequestBody PollVoteRequestDTO requestDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String authenticatedUsername = authentication.getName();

        PollResponseDTO response = pollService.voteOnPoll(pollId, requestDTO, authenticatedUsername);
        return ResponseEntity.ok(response);
    }
    
}
