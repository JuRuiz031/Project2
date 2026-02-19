package com.calendario.calendar_service.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CalendarUpdateResponseDTO(
    @JsonProperty("calendar_id") String id,
    @JsonProperty("name") String name,
    @JsonProperty("admins") List<String> promotedAdmins
) {}
