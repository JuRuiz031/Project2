package com.calendario.calendar_service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.calendario.calendar_service.dto.PollResponseDTO;

@FeignClient(name = "poll-service")
public interface PollServiceClient {

    @PostMapping("/internal/polls/by-calendar-ids")
    List<PollResponseDTO> getPollsByCalendarIds(@RequestBody List<String> calendarIds);
}
