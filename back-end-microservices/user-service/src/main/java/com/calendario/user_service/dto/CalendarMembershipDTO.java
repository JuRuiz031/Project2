package com.calendario.user_service.dto;

public record CalendarMembershipDTO(
    String calendarId,
    Boolean isAdmin
) {}
