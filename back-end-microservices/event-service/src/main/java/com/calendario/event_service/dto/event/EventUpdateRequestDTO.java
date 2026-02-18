package com.calendario.event_service.dto.event;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventUpdateRequestDTO {

    @JsonProperty("title")
    private String title;

    @JsonProperty("start_time")
    private LocalDateTime startTime;

    @JsonProperty("end_time")
    private LocalDateTime endTime;

    @JsonProperty("description")
    private String description;

    @JsonProperty("notes")
    private String notes;

    @JsonProperty("tags")
    private List<String> tags;

    public EventUpdateRequestDTO() {}

    public EventUpdateRequestDTO(String title, LocalDateTime startTime, LocalDateTime endTime,
                                 String description, String notes, List<String> tags) {
        this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
        this.notes = notes;
        this.tags = tags;
    }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }

    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}
