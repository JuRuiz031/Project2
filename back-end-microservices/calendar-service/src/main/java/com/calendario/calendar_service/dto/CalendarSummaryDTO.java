package com.calendario.calendar_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarSummaryDTO(
    @JsonProperty("calendar_id") String calendarId,
    @JsonProperty("name") String name,
    @JsonProperty("is_admin") boolean isAdmin,
    @JsonProperty("users") List<UserInfoDTO> users
) {}
