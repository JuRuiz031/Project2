package com.calendario.user_service.dto;

import java.util.List;

import com.calendario.user_service.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;

public record UserResponseDTO(
    @JsonProperty("id") String id,
    @JsonProperty("username") String username,
    @JsonProperty("email") String email,
    @JsonProperty("calendar_ids") List<User.CalendarMembership> calendarIds
) {
    public UserResponseDTO(User user) {
        this(user.getId(), user.getUsername(), user.getEmail(), user.getCalendarIds());
    }
}
