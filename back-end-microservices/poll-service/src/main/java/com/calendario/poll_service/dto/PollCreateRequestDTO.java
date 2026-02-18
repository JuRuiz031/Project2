package com.calendario.poll_service.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PollCreateRequestDTO {
    @JsonProperty("user_id") @NotBlank private String userId;
    @JsonProperty("calendar_id") @NotBlank private String calendarId;
    @JsonProperty("title") @NotBlank private String title;
    @JsonProperty("description") private String description;
    @JsonProperty("notes") private String notes;
    @JsonProperty("start_time") @NotNull private LocalDateTime startTime;
    @JsonProperty("end_time") @NotNull private LocalDateTime endTime;
    @JsonProperty("results_visible") private Boolean resultsVisible = false;
    @JsonProperty("allow_multiple_votes") private Boolean allowMultipleVotes = false;
    @JsonProperty("options") private List<PollOptionDTO> options;
    @JsonProperty("tags") private List<String> tags;

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public String getCalendarId() { return calendarId; }
    public void setCalendarId(String calendarId) { this.calendarId = calendarId; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
    public LocalDateTime getStartTime() { return startTime; }
    public void setStartTime(LocalDateTime startTime) { this.startTime = startTime; }
    public LocalDateTime getEndTime() { return endTime; }
    public void setEndTime(LocalDateTime endTime) { this.endTime = endTime; }
    public Boolean getResultsVisible() { return resultsVisible; }
    public void setResultsVisible(Boolean resultsVisible) { this.resultsVisible = resultsVisible; }
    public Boolean getAllowMultipleVotes() { return allowMultipleVotes; }
    public void setAllowMultipleVotes(Boolean allowMultipleVotes) { this.allowMultipleVotes = allowMultipleVotes; }
    public List<PollOptionDTO> getOptions() { return options; }
    public void setOptions(List<PollOptionDTO> options) { this.options = options; }
    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}
