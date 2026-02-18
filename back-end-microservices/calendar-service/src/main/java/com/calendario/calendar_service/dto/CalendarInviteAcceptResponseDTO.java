package com.calendario.calendar_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarInviteAcceptResponseDTO(
    @JsonProperty("calendar_id") String calendarId,
    @JsonProperty("calendar_name") String calendarName
) {}
