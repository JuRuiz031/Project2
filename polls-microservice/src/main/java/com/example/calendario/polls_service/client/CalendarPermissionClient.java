package com.example.calendario.polls_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "calendar-service")
public interface CalendarPermissionClient {

    @GetMapping("/api/v1/calendars/{id}/exists")
    void assertCalendarExists(@PathVariable("id") String calendarId);

    @GetMapping("/api/v1/calendars/{id}/permissions/manage")
    boolean canManagePolls(@PathVariable("id") String calendarId,
                           @RequestHeader("X-User") String requester);

    @GetMapping("/api/v1/calendars/{id}/permissions/vote")
    boolean canVote(@PathVariable("id") String calendarId,
                    @RequestHeader("X-User") String requester);
}
