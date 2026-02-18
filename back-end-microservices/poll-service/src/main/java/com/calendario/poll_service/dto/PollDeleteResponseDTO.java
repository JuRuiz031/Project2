package com.calendario.poll_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PollDeleteResponseDTO(
    @JsonProperty("id") String id,
    @JsonProperty("deleted") boolean deleted
) {}
