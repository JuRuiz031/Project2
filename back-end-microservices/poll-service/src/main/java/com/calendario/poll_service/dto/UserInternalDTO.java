package com.calendario.poll_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserInternalDTO(
    @JsonProperty("id") String id,
    @JsonProperty("username") String username,
    @JsonProperty("is_superuser") boolean isSuperuser,
    @JsonProperty("calendar_ids") List<CalendarMembership> calendarIds
) {
    public record CalendarMembership(
        @JsonProperty("calendarId") String calendarId,
        @JsonProperty("isAdmin") Boolean isAdmin
    ) {}

    public boolean isAdminOfCalendar(String calendarId) {
        if (isSuperuser) return true;
        return calendarIds.stream()
                .filter(cm -> cm.calendarId().equals(calendarId))
                .findFirst()
                .map(cm -> Boolean.TRUE.equals(cm.isAdmin()))
                .orElse(false);
    }

    public boolean isMemberOfCalendar(String calendarId) {
        if (isSuperuser) return true;
        return calendarIds.stream().anyMatch(cm -> cm.calendarId().equals(calendarId));
    }
}
