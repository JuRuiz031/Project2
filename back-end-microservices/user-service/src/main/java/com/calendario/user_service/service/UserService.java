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

    public UserService(UserRepository userRepository, AuthServiceClient authServiceClient) {
        this.userRepository = userRepository;
        this.authServiceClient = authServiceClient;
    }

    private UserResponseDTO toUserResponseDTO(User user) {
        return new UserResponseDTO(user.getId(), user.getUsername(), user.getEmail());
    }

    public UserResponseDTO registerUser(UserRegistrationDTO dto) {
        if (userRepository.existsByUsername(dto.username())) {
            throw new DuplicateUsernameException("Username already exists: " + dto.username());
        }
        if (userRepository.existsByEmail(dto.email())) {
            throw new DuplicateEmailException("Email already exists: " + dto.email());
        }

        User newUser = new User(dto.username(), dto.email());
        User savedUser = userRepository.save(newUser);

        try {
            authServiceClient.createCredentials(new CredentialCreateDTO(
                    dto.username(), dto.email(), dto.password(), savedUser.getId()
            ));
        } catch (Exception e) {
            userRepository.delete(savedUser);
            throw new RuntimeException("Failed to create credentials: " + e.getMessage());
        }

        return toUserResponseDTO(savedUser);
    }

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User validateUserAccess(String requestedUserId, String authenticatedUsername) {
        User authenticatedUser = userRepository.findByUsername(authenticatedUsername)
                .orElseThrow(() -> new ResourceNotFoundException("Authenticated user not found"));

        if (!authenticatedUser.getId().equals(requestedUserId)) {
            throw new ForbiddenException("You can only access your own user data");
        }

        return userRepository.findById(requestedUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + requestedUserId));
    }

    public UserResponseDTO updateUser(String id, UserUpdateDTO dto, String authenticatedUsername) {
        User authenticatedUser = userRepository.findByUsername(authenticatedUsername)
                .orElseThrow(() -> new ResourceNotFoundException("Authenticated user not found"));

        if (!authenticatedUser.getId().equals(id)) {
            throw new ForbiddenException("Can only update your own account");
        }

        User userToUpdate = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        boolean needsCredentialUpdate = false;
        CredentialUpdateDTO credentialUpdateDTO = new CredentialUpdateDTO(null, null, null);

        if (dto.username() != null && !dto.username().isEmpty()) {
            userRepository.findByUsername(dto.username()).ifPresent(existing -> {
                if (!existing.getId().equals(id)) {
                    throw new DuplicateUsernameException("Username already exists: " + dto.username());
                }
            });
            userToUpdate.setUsername(dto.username());
            credentialUpdateDTO = new CredentialUpdateDTO(dto.username(), credentialUpdateDTO.email(), credentialUpdateDTO.password());
            needsCredentialUpdate = true;
        }

        if (dto.email() != null && !dto.email().isEmpty()) {
            userRepository.findByEmail(dto.email()).ifPresent(existing -> {
                if (!existing.getId().equals(id)) {
                    throw new DuplicateEmailException("Email already exists: " + dto.email());
                }
            });
            userToUpdate.setEmail(dto.email());
            credentialUpdateDTO = new CredentialUpdateDTO(credentialUpdateDTO.username(), dto.email(), credentialUpdateDTO.password());
            needsCredentialUpdate = true;
        }

        User updated = userRepository.save(userToUpdate);

        if (needsCredentialUpdate) {
            try {
                authServiceClient.updateCredentials(id, credentialUpdateDTO);
            } catch (Exception e) {
                System.err.println("Warning: Failed to update credentials in auth-service: " + e.getMessage());
            }
        }

        return toUserResponseDTO(updated);
    }

    public UserDeleteResponseDTO validateAndDeleteUser(String requestedUserId, String authenticatedUsername) {
        User authenticatedUser = userRepository.findByUsername(authenticatedUsername)
                .orElseThrow(() -> new ResourceNotFoundException("Authenticated user not found"));

        if (!authenticatedUser.getId().equals(requestedUserId)) {
            throw new ForbiddenException("You can only delete your own user account");
        }

        User userToDelete = userRepository.findById(requestedUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + requestedUserId));

        try {
            authServiceClient.deleteCredentials(userToDelete.getId());
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete credentials: " + e.getMessage());
        }

        userRepository.delete(userToDelete);

        return new UserDeleteResponseDTO(userToDelete.getId(), userToDelete.getUsername(), true);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Iterable<User> saveAllUsers(Iterable<User> users) {
        return userRepository.saveAll(users);
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<String> getCalendarIdsForUser(String userId, String authenticatedUsername) {
        User user = validateUserAccess(userId, authenticatedUsername);
        if (user.getCalendarIds() == null) return Collections.emptyList();
        return user.getCalendarIds().stream()
                .map(User.CalendarMembership::getCalendarId)
                .collect(Collectors.toList());
    }

    public List<User> getUsersByCalendarMembership(String calendarId) {
        return userRepository.findByCalendarMembership(calendarId);
    }

    public void addCalendarMembership(String userId, String calendarId, Boolean isAdmin) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));
        user.addCalendarMembership(calendarId, isAdmin);
        userRepository.save(user);
    }

    public void removeCalendarMembership(String userId, String calendarId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found: " + userId));
        user.removeCalendarMembership(calendarId);
        userRepository.save(user);
    }
}
