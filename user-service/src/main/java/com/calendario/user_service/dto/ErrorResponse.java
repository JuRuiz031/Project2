package com.calendario.user_service.dto;

public record ErrorResponse(
    String message,
    int status
) {}
