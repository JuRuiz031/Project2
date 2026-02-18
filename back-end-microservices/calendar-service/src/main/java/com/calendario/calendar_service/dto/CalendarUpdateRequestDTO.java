package com.calendario.calendar_service.dto;

import java.util.List;

public record CalendarUpdateRequestDTO(
    String name,
    List<String> admins
) {}
