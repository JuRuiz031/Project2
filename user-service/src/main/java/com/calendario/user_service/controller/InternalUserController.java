package com.calendario.user_service.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.user_service.dto.CalendarMembershipDTO;
import com.calendario.user_service.model.User;
import com.calendario.user_service.service.UserService;

/**
 * Internal endpoints for inter-service communication via Feign.
 * These are NOT exposed to the frontend — they are called by
 * calendar-service, event-service, and poll-service.
 * 
 * Security: These routes are permitAll() in SecurityConfig since
 * they are only reachable within the internal network (not through
 * the API Gateway). In production, restrict by network policy.
 */
@RestController
@RequestMapping("/api/v1/internal")
public class InternalUserController {

    private final UserService userService;

    public InternalUserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Add a calendar membership to a user.
     * Called by calendar-service when a calendar is created or a user is added.
     */
    @PostMapping("/users/{userId}/calendars")
    public ResponseEntity<Void> addCalendarMembership(
            @PathVariable String userId,
            @RequestBody CalendarMembershipDTO dto) {
        userService.addCalendarMembership(userId, dto.calendarId(), dto.isAdmin());
        return ResponseEntity.ok().build();
    }

    /**
     * Remove a calendar membership from a user.
     * Called by calendar-service when a calendar is deleted or a user is removed.
     */
    @DeleteMapping("/users/{userId}/calendars/{calendarId}")
    public ResponseEntity<Void> removeCalendarMembership(
            @PathVariable String userId,
            @PathVariable String calendarId) {
        userService.removeCalendarMembership(userId, calendarId);
        return ResponseEntity.ok().build();
    }

    /**
     * Get all calendar IDs for a user (without auth check).
     * Called by calendar-service to list a user's calendars for the homepage.
     */
    @GetMapping("/users/{userId}/calendars")
    public ResponseEntity<List<String>> getCalendarIds(@PathVariable String userId) {
        User user = userService.findById(userId)
                .orElseThrow(() -> new com.calendario.user_service.exception.ResourceNotFoundException(
                        "User not found with id: " + userId));

        List<String> calendarIds = user.getCalendarIds().stream()
                .map(User.CalendarMembership::getCalendarId)
                .collect(Collectors.toList());
        return ResponseEntity.ok(calendarIds);
    }

    /**
     * Check if a user is a member of a specific calendar.
     * Called by event-service and poll-service for authorization.
     */
    @GetMapping("/users/{userId}/calendars/{calendarId}/membership")
    public ResponseEntity<CalendarMembershipDTO> checkMembership(
            @PathVariable String userId,
            @PathVariable String calendarId) {
        User user = userService.findById(userId)
                .orElseThrow(() -> new com.calendario.user_service.exception.ResourceNotFoundException(
                        "User not found with id: " + userId));

        boolean isMember = user.isMemberOfCalendar(calendarId);
        if (!isMember) {
            throw new com.calendario.user_service.exception.ResourceNotFoundException(
                    "User is not a member of calendar: " + calendarId);
        }

        boolean isAdmin = user.isAdminOfCalendar(calendarId);
        return ResponseEntity.ok(new CalendarMembershipDTO(calendarId, isAdmin));
    }

    /**
     * Look up a user by ID (internal, no auth check).
     * Called by other services that need basic user info.
     */
    @GetMapping("/users/{userId}")
    public ResponseEntity<com.calendario.user_service.dto.UserResponseDTO> getUserInternal(
            @PathVariable String userId) {
        User user = userService.findById(userId)
                .orElseThrow(() -> new com.calendario.user_service.exception.ResourceNotFoundException(
                        "User not found with id: " + userId));

        return ResponseEntity.ok(new com.calendario.user_service.dto.UserResponseDTO(
                user.getId(), user.getUsername(), user.getEmail()));
    }
}
