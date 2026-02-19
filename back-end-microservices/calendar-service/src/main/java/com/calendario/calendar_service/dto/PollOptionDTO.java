package com.calendario.calendar_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PollOptionDTO(
    @JsonProperty("option_id") Integer optionId,
    @JsonProperty("description") String description,
    @JsonProperty("user_votes") List<String> userVotes,
    @JsonProperty("guest_votes") List<String> guestVotes
) {}
