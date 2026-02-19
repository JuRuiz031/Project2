package com.calendario.calendar_service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.calendario.calendar_service.dto.EventResponseDTO;

@FeignClient(name = "event-service")
public interface EventServiceClient {

    @PostMapping("/internal/events/by-calendar-ids")
    List<EventResponseDTO> getEventsByCalendarIds(@RequestBody List<String> calendarIds);
}
