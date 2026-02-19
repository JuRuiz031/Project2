package com.calendario.calendar_service.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PollResponseDTO(
    @JsonProperty("poll_id") String id,
    @JsonProperty("calendar_id") String calendarId,
    @JsonProperty("title") String title,
    @JsonProperty("description") String description,
    @JsonProperty("notes") String notes,
    @JsonProperty("start_time") LocalDateTime startTime,
    @JsonProperty("end_time") LocalDateTime endTime,
    @JsonProperty("results_visible") boolean resultsVisible,
    @JsonProperty("allow_multiple_votes") boolean allowMultipleVotes,
    @JsonProperty("options") List<PollOptionDTO> options,
    @JsonProperty("tags") List<String> tags
) {}
