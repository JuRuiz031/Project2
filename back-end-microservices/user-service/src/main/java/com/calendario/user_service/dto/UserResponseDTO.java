package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserResponseDTO(
    @JsonProperty("user_id") String id,
    @JsonProperty("username") String username,
    @JsonProperty("email") String email
) {}
