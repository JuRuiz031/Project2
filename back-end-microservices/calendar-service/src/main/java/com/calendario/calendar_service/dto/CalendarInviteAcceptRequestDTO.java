package com.calendario.calendar_service.dto;

import jakarta.validation.constraints.NotBlank;

public record CalendarInviteAcceptRequestDTO(
    @NotBlank String inviteToken
) {}
