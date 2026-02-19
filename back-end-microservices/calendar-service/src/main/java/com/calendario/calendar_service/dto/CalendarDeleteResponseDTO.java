package com.calendario.calendar_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarDeleteResponseDTO(
    @JsonProperty("calendar_id") String id,
    @JsonProperty("deleted") boolean deleted
) {}
