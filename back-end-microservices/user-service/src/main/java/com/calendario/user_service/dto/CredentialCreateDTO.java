package com.calendario.user_service.dto;

public record CredentialCreateDTO(
    String username,
    String email,
    String password,
    String userId
) {}
