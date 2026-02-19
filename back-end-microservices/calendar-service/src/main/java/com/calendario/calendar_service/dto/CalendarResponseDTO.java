package com.calendario.calendar_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarResponseDTO(
    @JsonProperty("calendar_id") String id,
    @JsonProperty("name") String name
) {}
