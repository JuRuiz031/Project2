package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRegistrationDTO(
    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 25, message = "Username must be between 3 and 25 characters")
    @JsonProperty("username")
    String username,

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @JsonProperty("email")
    String email,

    @NotBlank(message = "Password is required")
    @Size(min = 5, max = 25, message = "Password must be between 5 and 25 characters")
    @JsonProperty("password")
    String password
) {}
