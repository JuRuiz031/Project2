package com.calendario.calendar_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarInviteResponseDTO(
    @JsonProperty("calendar_id") String calendarId,
    @JsonProperty("invite_link") String inviteLink
) {}
