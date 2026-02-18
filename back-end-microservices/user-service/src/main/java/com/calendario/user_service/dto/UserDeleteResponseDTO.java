package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserDeleteResponseDTO(
    @JsonProperty("id") String id,
    @JsonProperty("username") String username,
    @JsonProperty("deleted") boolean deleted
) {}
