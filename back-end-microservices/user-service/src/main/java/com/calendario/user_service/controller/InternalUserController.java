package com.calendario.user_service.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.user_service.dto.CalendarMembershipDTO;
import com.calendario.user_service.dto.UserInternalDTO;
import com.calendario.user_service.exception.ResourceNotFoundException;
import com.calendario.user_service.model.User;
import com.calendario.user_service.service.UserService;

/**
 * Internal endpoints for inter-service communication via Feign.
 * These are NOT exposed to the frontend — they are called by
 * calendar-service, event-service, and poll-service.
 *
 * Security: These routes are permitAll() in SecurityConfig since
 * they are only reachable within the internal Docker network (not
 * through the API Gateway). In production, restrict by network policy.
 */
@RestController
@RequestMapping("/internal")
public class InternalUserController {

    private final UserService userService;

    public InternalUserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * Look up a user by username.
     * Called by calendar-service, poll-service, and event-service for auth checks.
     */
    @GetMapping("/users/{username}")
    public ResponseEntity<UserInternalDTO> getUserByUsername(@PathVariable String username) {
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + username));
        return ResponseEntity.ok(new UserInternalDTO(user));
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
    @PostMapping("/users/{userId}/calendars/remove")
    public ResponseEntity<Void> removeCalendarMembership(
            @PathVariable String userId,
            @RequestBody CalendarMembershipDTO dto) {
        userService.removeCalendarMembership(userId, dto.calendarId());
        return ResponseEntity.ok().build();
    }

    /**
     * Get all users who are members of a calendar.
     * Called by calendar-service to list all members.
     */
    @GetMapping("/calendars/{calendarId}/members")
    public ResponseEntity<List<UserInternalDTO>> getMembersByCalendar(@PathVariable String calendarId) {
        List<UserInternalDTO> members = userService.getUsersByCalendarMembership(calendarId)
                .stream().map(UserInternalDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok(members);
    }

    /**
     * Get all calendar IDs for a user (without auth check).
     * Called by calendar-service to list a user's calendars.
     */
    @GetMapping("/users/{userId}/calendars")
    public ResponseEntity<List<String>> getCalendarIds(@PathVariable String userId) {
        User user = userService.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
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
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        boolean isMember = user.isMemberOfCalendar(calendarId);
        if (!isMember) {
            throw new ResourceNotFoundException("User is not a member of calendar: " + calendarId);
        }

        boolean isAdmin = user.isAdminOfCalendar(calendarId);
        return ResponseEntity.ok(new CalendarMembershipDTO(calendarId, isAdmin));
    }
}
