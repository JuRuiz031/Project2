package com.calendario.calendar_service.client;

import com.calendario.calendar_service.dto.calendar.CalendarMembershipDTO;
import com.calendario.calendar_service.dto.user.UserResponseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "user-service")
public interface UserFeignClient {
    @GetMapping("/api/v1/internal/users/username/{username}")
    public UserResponseDTO findByUsername(
            @PathVariable String username
    );

    @GetMapping("api/v1/internal/users/{userId}/calendars")
    public List<String> getCalendarIdsForUser(
            @PathVariable String userId
    );

    @PostMapping("/api/v1/internal/users/{userId}/calendars")
    public void addCalendarMembership(
            @PathVariable String userId,
            @RequestBody CalendarMembershipDTO dto);

    @GetMapping("/api/v1/internal/users/{userId}/calendars/{calendarId}/membership")
    public CalendarMembershipDTO checkMembership(
            @PathVariable String userId,
            @PathVariable String calendarId);

    @GetMapping("/users/{userId}")
    public UserResponseDTO findById(
            @PathVariable String userId);
}
