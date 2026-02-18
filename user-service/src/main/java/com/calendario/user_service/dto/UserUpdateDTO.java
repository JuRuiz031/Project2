package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UserUpdateDTO(
    @Size(min = 3, max = 25, message = "Username must be between 3 and 25 characters")
    @JsonProperty("username")
    String username,

    @Email(message = "Invalid email format")
    @JsonProperty("email")
    String email
) {}

// NOTE: Password updates are handled by auth-service, not here
