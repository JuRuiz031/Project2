package com.calendario.poll_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PollVoteRequestDTO {
    @JsonProperty("user_id") @NotBlank private String userId;
    @JsonProperty("calendar_id") @NotBlank private String calendarId;
    @JsonProperty("options") @NotNull private List<Integer> options;

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public String getCalendarId() { return calendarId; }
    public void setCalendarId(String calendarId) { this.calendarId = calendarId; }
    public List<Integer> getOptions() { return options; }
    public void setOptions(List<Integer> options) { this.options = options; }
}
