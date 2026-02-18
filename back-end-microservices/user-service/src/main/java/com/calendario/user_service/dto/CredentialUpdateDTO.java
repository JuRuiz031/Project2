package com.calendario.user_service.dto;

public record CredentialUpdateDTO(
    String username,
    String email,
    String password
) {}
