package com.calendario.event_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * Feign client for the Calendar Service.
 *
 * The Calendar Service must expose:
 *   GET /internal/calendars/{calendarId}/exists  ->  Boolean
 *
 * Eureka resolves "calendar-service" to a live instance automatically.
 */
@FeignClient(name = "calendar-service")
public interface CalendarServiceClient {

    @GetMapping("/internal/calendars/{calendarId}/exists")
    Boolean calendarExists(@PathVariable("calendarId") String calendarId);
}
