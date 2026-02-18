package com.calendario.poll_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "calendar-service")
public interface CalendarServiceClient {

    @GetMapping("/internal/calendars/{calendarId}/exists")
    Boolean calendarExists(@PathVariable String calendarId);
}
