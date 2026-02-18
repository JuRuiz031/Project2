package com.calendario.user_service.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.user_service.dto.UserDeleteResponseDTO;
import com.calendario.user_service.dto.UserRegistrationDTO;
import com.calendario.user_service.dto.UserResponseDTO;
import com.calendario.user_service.dto.UserUpdateDTO;
import com.calendario.user_service.model.User;
import com.calendario.user_service.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@Validated
public class UserController {

    private final UserService userService;

    // Constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // POST Register Users
    @PostMapping("/users/register")
    public ResponseEntity<UserResponseDTO> registerUser(@Valid @RequestBody UserRegistrationDTO registrationDTO) {
        UserResponseDTO response = userService.registerUser(registrationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // GET View User by ID
    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable String id) {
        // Get authenticated username from JWT
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String authenticatedUsername = authentication.getName();

        // Validate access and get user (authorization check done in service)
        User user = userService.validateUserAccess(id, authenticatedUsername);
        
        // Convert to DTO
        UserResponseDTO response = new UserResponseDTO(
            user.getId(),
            user.getUsername(),
            user.getEmail()
        );
        return ResponseEntity.ok(response);
    }

    // DELETE User by ID
    @DeleteMapping("/users/{id}")
    public ResponseEntity<UserDeleteResponseDTO> deleteUserById(@PathVariable String id) {
        // Get authenticated username from JWT
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String authenticatedUsername = authentication.getName();

        // Validate access and delete user (authorization check done in service)
        UserDeleteResponseDTO deletedUser = userService.validateAndDeleteUser(id, authenticatedUsername);
        
        return ResponseEntity.ok(deletedUser);
    }

    // PATCH User
    @PatchMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable String id, @Valid @RequestBody UserUpdateDTO updateDTO) {
        // Get authenticated username from JWT
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String authenticatedUsername = authentication.getName();
        
        UserResponseDTO response = userService.updateUser(id, updateDTO, authenticatedUsername);
        return ResponseEntity.ok(response);
    }
}
