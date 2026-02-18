package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ErrorResponse(
    @JsonProperty("message") String message,
    @JsonProperty("status") int status
) {}
