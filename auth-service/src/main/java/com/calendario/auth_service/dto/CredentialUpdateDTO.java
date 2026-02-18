package com.calendario.auth_service.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

// All fields optional - can update username, email, password individually or together
public record CredentialUpdateDTO(
    @Size(min = 3, max = 50) @Pattern(regexp = "^[a-zA-Z0-9_]+$") String username,
    @Email String email,
    @Size(min = 8, max = 100)String password
) {}
