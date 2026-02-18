package com.calendario.calendar_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarResponseDTO(
    @JsonProperty("id") String id,
    @JsonProperty("name") String name
) {}
