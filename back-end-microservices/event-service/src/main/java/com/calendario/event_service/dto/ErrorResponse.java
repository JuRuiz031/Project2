package com.calendario.event_service.dto;

import java.time.LocalDateTime;

public record ErrorResponse(
    String message,
    int status,
    String timestamp
) {
    public ErrorResponse(String message, int status) {
        this(message, status, LocalDateTime.now().toString());
    }
}
