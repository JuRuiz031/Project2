package com.calendario.calendar_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarHomeResponseDTO(
    @JsonProperty("calendars") List<CalendarSummaryDTO> calendars,
    @JsonProperty("tags") List<String> tags
) {}
