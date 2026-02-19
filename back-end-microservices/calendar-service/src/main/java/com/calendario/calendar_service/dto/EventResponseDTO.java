package com.calendario.calendar_service.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record EventResponseDTO(
    @JsonProperty("event_id") String eventId,
    @JsonProperty("calendar_id") String calendarId,
    @JsonProperty("title") String title,
    @JsonProperty("start_time") LocalDateTime startTime,
    @JsonProperty("end_time") LocalDateTime endTime,
    @JsonProperty("description") String description,
    @JsonProperty("notes") String notes,
    @JsonProperty("tags") List<String> tags
) {}
