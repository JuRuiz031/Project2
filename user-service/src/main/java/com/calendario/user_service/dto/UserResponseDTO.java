package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

// User profile response - basic user information only
// Calendar details are managed by calendar-service
public record UserResponseDTO(
    @JsonProperty("user_id")
    String id,

    @JsonProperty("username")
    String username,

    @JsonProperty("email")
    String email
) {}
