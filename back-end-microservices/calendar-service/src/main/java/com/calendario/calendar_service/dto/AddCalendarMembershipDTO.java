package com.calendario.calendar_service.dto;

public record AddCalendarMembershipDTO(
    String calendarId,
    Boolean isAdmin
) {}
