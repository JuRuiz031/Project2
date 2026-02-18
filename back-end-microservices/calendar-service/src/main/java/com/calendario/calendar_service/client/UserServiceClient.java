package com.calendario.calendar_service.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.calendario.calendar_service.dto.AddCalendarMembershipDTO;
import com.calendario.calendar_service.dto.UserInternalDTO;

@FeignClient(name = "user-service")
public interface UserServiceClient {

    @GetMapping("/internal/users/{username}")
    UserInternalDTO getUserByUsername(@PathVariable String username);

    @PostMapping("/internal/users/{userId}/calendars")
    void addCalendarMembership(@PathVariable String userId, @RequestBody AddCalendarMembershipDTO dto);

    @PostMapping("/internal/users/{userId}/calendars/remove")
    void removeCalendarMembership(@PathVariable String userId, @RequestBody RemoveCalendarMembershipDTO dto);

    @GetMapping("/internal/calendars/{calendarId}/members")
    List<UserInternalDTO> getMembersByCalendar(@PathVariable String calendarId);

    record RemoveCalendarMembershipDTO(String calendarId) {}
}
