package com.calendario.user_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.user_service.dto.CalendarMembershipDTO;
import com.calendario.user_service.dto.UserDeleteResponseDTO;
import com.calendario.user_service.dto.UserInternalDTO;
import com.calendario.user_service.dto.UserRegistrationDTO;
import com.calendario.user_service.dto.UserResponseDTO;
import com.calendario.user_service.dto.UserUpdateDTO;
import com.calendario.user_service.exception.ResourceNotFoundException;
import com.calendario.user_service.model.User;
import com.calendario.user_service.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // POST Register
    @PostMapping("/users")
    public ResponseEntity<UserResponseDTO> registerUser(@Valid @RequestBody UserRegistrationDTO dto) {
        User created = userService.registerUser(dto);
        return ResponseEntity.ok(new UserResponseDTO(created));
    }

    // GET View User
    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable String id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.validateUserAccess(id, auth.getName());
        return ResponseEntity.ok(new UserResponseDTO(user));
    }

    // PATCH Update User
    @PatchMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable String id,
            @Valid @RequestBody UserUpdateDTO dto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User updated = userService.updateUser(id, dto, auth.getName());
        return ResponseEntity.ok(new UserResponseDTO(updated));
    }

    // DELETE User
    @DeleteMapping("/users/{id}")
    public ResponseEntity<UserDeleteResponseDTO> deleteUser(@PathVariable String id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDeleteResponseDTO response = userService.validateAndDeleteUser(id, auth.getName());
        return ResponseEntity.ok(response);
    }

    // GET Internal: look up user by username for other microservices
    @GetMapping("/internal/users/{username}")
    public ResponseEntity<UserInternalDTO> getUserByUsername(@PathVariable String username) {
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + username));
        return ResponseEntity.ok(new UserInternalDTO(user));
    }

    // POST Internal: add calendar membership to a user (called by calendar-service)
    @PostMapping("/internal/users/{userId}/calendars")
    public ResponseEntity<Void> addCalendarMembership(
            @PathVariable String userId,
            @RequestBody CalendarMembershipDTO dto) {
        userService.addCalendarMembership(userId, dto.calendarId(), dto.isAdmin());
        return ResponseEntity.ok().build();
    }

    // POST Internal: remove calendar membership from a user (called by calendar-service)
    @PostMapping("/internal/users/{userId}/calendars/remove")
    public ResponseEntity<Void> removeCalendarMembership(
            @PathVariable String userId,
            @RequestBody CalendarMembershipDTO dto) {
        userService.removeCalendarMembership(userId, dto.calendarId());
        return ResponseEntity.ok().build();
    }

    // GET Internal: get all users who are members of a calendar (called by calendar-service)
    @GetMapping("/internal/calendars/{calendarId}/members")
    public ResponseEntity<java.util.List<UserInternalDTO>> getMembersByCalendar(@PathVariable String calendarId) {
        java.util.List<UserInternalDTO> members = userService.getUsersByCalendarMembership(calendarId)
                .stream().map(UserInternalDTO::new).toList();
        return ResponseEntity.ok(members);
    }
}
