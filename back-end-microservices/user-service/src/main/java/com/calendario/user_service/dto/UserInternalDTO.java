package com.calendario.user_service.dto;

import java.util.List;

import com.calendario.user_service.model.User;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Internal DTO returned to other microservices via /internal/users/{username}.
 * Contains everything needed for authorization checks in other services.
 */
public record UserInternalDTO(
    @JsonProperty("id") String id,
    @JsonProperty("username") String username,
    @JsonProperty("is_superuser") boolean isSuperuser,
    @JsonProperty("calendar_ids") List<User.CalendarMembership> calendarIds
) {
    public UserInternalDTO(User user) {
        this(user.getId(), user.getUsername(), user.isSuperuser(), user.getCalendarIds());
    }

    public boolean isAdminOfCalendar(String calendarId) {
        if (isSuperuser) return true;
        return calendarIds.stream()
                .filter(cm -> cm.getCalendarId().equals(calendarId))
                .findFirst()
                .map(User.CalendarMembership::getIsAdmin)
                .orElse(false);
    }

    public boolean isMemberOfCalendar(String calendarId) {
        if (isSuperuser) return true;
        return calendarIds.stream()
                .anyMatch(cm -> cm.getCalendarId().equals(calendarId));
    }
}
