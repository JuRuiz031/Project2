package com.calendario.calendar_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarFilterResponseDTO(
    @JsonProperty("events") List<EventResponseDTO> events,
    @JsonProperty("polls") List<PollResponseDTO> polls
) {}
