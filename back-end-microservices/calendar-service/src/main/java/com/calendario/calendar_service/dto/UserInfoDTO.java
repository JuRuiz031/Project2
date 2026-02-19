package com.calendario.calendar_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserInfoDTO(
    @JsonProperty("user_id") String userId,
    @JsonProperty("username") String username,
    @JsonProperty("is_admin") boolean isAdmin
) {}
