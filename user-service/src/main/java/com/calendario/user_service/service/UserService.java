package com.calendario.user_service.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.calendario.user_service.client.AuthServiceClient;
import com.calendario.user_service.dto.CredentialCreateDTO;
import com.calendario.user_service.dto.CredentialUpdateDTO;
import com.calendario.user_service.dto.UserDeleteResponseDTO;
import com.calendario.user_service.dto.UserRegistrationDTO;
import com.calendario.user_service.dto.UserResponseDTO;
import com.calendario.user_service.dto.UserUpdateDTO;
import com.calendario.user_service.exception.DuplicateEmailException;
import com.calendario.user_service.exception.DuplicateUsernameException;
import com.calendario.user_service.exception.ForbiddenException;
import com.calendario.user_service.exception.ResourceNotFoundException;
import com.calendario.user_service.model.User;
import com.calendario.user_service.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final AuthServiceClient authServiceClient;

    // Constructor
    public UserService(UserRepository userRepository, AuthServiceClient authServiceClient) {
        this.userRepository = userRepository;
        this.authServiceClient = authServiceClient;
    }

    // Helper method to convert User entity to UserResponseDTO
    private UserResponseDTO toUserResponseDTO(User user) {
        return new UserResponseDTO(
            user.getId(),
            user.getUsername(),
            user.getEmail()
        );
    }

    // Register new User
    public UserResponseDTO registerUser(UserRegistrationDTO dto) {
        // Check if username or email already exists
        if (userRepository.existsByUsername(dto.username())) {
            throw new DuplicateUsernameException("Username already exists: " + dto.username());
        }

        if (userRepository.existsByEmail(dto.email())) {
            throw new DuplicateEmailException("Email already exists: " + dto.email());
        }

        // Create User entity (without password - that goes to auth-service)
        User newUser = new User(dto.username(), dto.email());
        User savedUser = userRepository.save(newUser);

        // Call auth-service to create credentials
        try {
            CredentialCreateDTO credentialDTO = new CredentialCreateDTO(
                dto.username(),
                dto.email(),
                dto.password(),
                savedUser.getId()
            );
            authServiceClient.createCredentials(credentialDTO);
        } catch (Exception e) {
            // Rollback user creation if credential creation fails
            userRepository.delete(savedUser);
            throw new RuntimeException("Failed to create credentials: " + e.getMessage());
        }

        return toUserResponseDTO(savedUser);
    }

    // Find by user ID
    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    // Update User details
    public UserResponseDTO updateUser(String id, UserUpdateDTO dto, String authenticatedUsername) {
        User authenticatedUser = findByUsername(authenticatedUsername)
            .orElseThrow(() -> new ResourceNotFoundException("Authenticated user not found"));
        
        if (!id.equals(authenticatedUser.getId())) {
            throw new ForbiddenException("Can only update your own account");
        }

        User userToUpdate = findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        boolean needsCredentialUpdate = false;
        CredentialUpdateDTO credentialUpdateDTO = new CredentialUpdateDTO(null, null, null);

        // Update username if provided
        if (dto.username() != null && !dto.username().isEmpty()) {
            // Check for duplicate username
            userRepository.findByUsername(dto.username()).ifPresent(existingUser -> {
                if (!existingUser.getId().equals(id)) {
                    throw new DuplicateUsernameException("Username already exists: " + dto.username());
                }
            });
            userToUpdate.setUsername(dto.username());
            credentialUpdateDTO = new CredentialUpdateDTO(dto.username(), credentialUpdateDTO.email(), credentialUpdateDTO.password());
            needsCredentialUpdate = true;
        }

        // Update email if provided
        if (dto.email() != null && !dto.email().isEmpty()) {
            // Check for duplicate email
            userRepository.findByEmail(dto.email()).ifPresent(existingUser -> {
                if (!existingUser.getId().equals(id)) {
                    throw new DuplicateEmailException("Email already exists: " + dto.email());
                }
            });
            userToUpdate.setEmail(dto.email());
            credentialUpdateDTO = new CredentialUpdateDTO(credentialUpdateDTO.username(), dto.email(), credentialUpdateDTO.password());
            needsCredentialUpdate = true;
        }

        // Save user updates
        User updatedUser = userRepository.save(userToUpdate);

        // Update credentials in auth-service if needed
        if (needsCredentialUpdate) {
            try {
                authServiceClient.updateCredentials(id, credentialUpdateDTO);
            } catch (Exception e) {
                // Log error but don't rollback user update
                // In production, you might want more sophisticated error handling
                System.err.println("Warning: Failed to update credentials in auth-service: " + e.getMessage());
            }
        }

        return toUserResponseDTO(updatedUser);
    }

    // Find by username
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // Save user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Batch save multiple users (more efficient than saving one by one)
    public Iterable<User> saveAllUsers(Iterable<User> users) {
        return userRepository.saveAll(users);
    }

    // Get all users (for cascade delete operations)
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Validate user access - check authorization for viewing user data
    public User validateUserAccess(String requestedUserId, String authenticatedUsername) {
        // Step 1: Find the authenticated user
        User authenticatedUser = findByUsername(authenticatedUsername)
            .orElseThrow(() -> new ResourceNotFoundException("Authenticated user not found"));
        
        // Step 2: Check authorization - user can only access their own data
        if (!authenticatedUser.getId().equals(requestedUserId)) {
            throw new ForbiddenException("You can only access your own user data");
        }
        
        // Step 3: Return the requested user
        return findById(requestedUserId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + requestedUserId));
    }

    // Validate and delete user
    public UserDeleteResponseDTO validateAndDeleteUser(String requestedUserId, String authenticatedUsername) {
        // Step 1: Find the authenticated user
        User authenticatedUser = findByUsername(authenticatedUsername)
            .orElseThrow(() -> new ResourceNotFoundException("Authenticated user not found"));
        
        // Step 2: Check authorization - user can only delete their own account
        if (!authenticatedUser.getId().equals(requestedUserId)) {
            throw new ForbiddenException("You can only delete your own user account");
        }
        
        // Step 3: Find the user to be deleted
        User userToDelete = findById(requestedUserId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + requestedUserId));
        
        // Step 4: Delete credentials in auth-service first
        try {
            authServiceClient.deleteCredentials(userToDelete.getId());
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete credentials: " + e.getMessage());
        }

        // Step 5: Delete the user
        userRepository.delete(userToDelete);
        
        // Step 6: Return response DTO
        return new UserDeleteResponseDTO(userToDelete.getId(), userToDelete.getUsername(), true);
    }

    // Get all calendar IDs that belong to a user
    public List<String> getCalendarIdsForUser(String userId, String authenticatedUsername) {
        User user = validateUserAccess(userId, authenticatedUsername);

        if (user.getCalendarIds() == null) {
            return Collections.emptyList();
        }

        return user.getCalendarIds().stream()
                .map(User.CalendarMembership::getCalendarId)
                .collect(Collectors.toList());
    }

    // Get users by calendar membership (optimized query)
    public List<User> getUsersByCalendarMembership(String calendarId) {
        return userRepository.findByCalendarIdsMembershipCalendarId(calendarId);
    }

    // Add a calendar membership to a user (called internally by calendar-service)
    public void addCalendarMembership(String userId, String calendarId, Boolean isAdmin) {
        User user = findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        user.addCalendarMembership(calendarId, isAdmin);
        userRepository.save(user);
    }

    // Remove a calendar membership from a user (called internally by calendar-service)
    public void removeCalendarMembership(String userId, String calendarId) {
        User user = findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        user.removeCalendarMembership(calendarId);
        userRepository.save(user);
    }
}
