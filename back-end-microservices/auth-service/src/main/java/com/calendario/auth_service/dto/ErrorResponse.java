package com.calendario.auth_service.dto;

import java.time.LocalDateTime;

public record ErrorResponse(
    String message,
    int status,
    String timestamp
) {
    // Custom constructor that auto-sets timestamp
    public ErrorResponse(String message, int status) {
        this(message, status, LocalDateTime.now().toString());
    }
}