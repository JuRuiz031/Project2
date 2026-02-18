package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DTO for adding or removing a calendar membership on a user.
 * Used by calendar-service via internal Feign calls.
 */
public record CalendarMembershipDTO(
    @JsonProperty("calendar_id") String calendarId,
    @JsonProperty("is_admin") Boolean isAdmin
) {}
