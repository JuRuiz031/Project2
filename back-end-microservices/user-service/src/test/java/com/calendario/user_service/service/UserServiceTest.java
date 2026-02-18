package com.calendario.user_service.service;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

import com.calendario.user_service.client.AuthServiceClient;
import com.calendario.user_service.dto.UserDeleteResponseDTO;
import com.calendario.user_service.dto.UserRegistrationDTO;
import com.calendario.user_service.dto.UserUpdateDTO;
import com.calendario.user_service.exception.DuplicateEmailException;
import com.calendario.user_service.exception.DuplicateUsernameException;
import com.calendario.user_service.exception.ForbiddenException;
import com.calendario.user_service.exception.ResourceNotFoundException;
import com.calendario.user_service.model.User;
import com.calendario.user_service.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private AuthServiceClient authServiceClient;

    @InjectMocks
    private UserService userService;

    private User testUser;
    private UserRegistrationDTO registrationDTO;

    @BeforeEach
    void setUp() {
        testUser = new User("testuser", "test@example.com");
        testUser.setId("user-123");

        registrationDTO = new UserRegistrationDTO("testuser", "test@example.com", "password123");
    }

    // ── registerUser ──────────────────────────────────────────

    @Test
    void registerUser_Success() {
        when(userRepository.existsByUsername("testuser")).thenReturn(false);
        when(userRepository.existsByEmail("test@example.com")).thenReturn(false);
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        User result = userService.registerUser(registrationDTO);

        assertNotNull(result);
        assertEquals("testuser", result.getUsername());
        verify(userRepository, times(1)).save(any(User.class));
        verify(authServiceClient, times(1)).createCredentials(any());
    }

    @Test
    void registerUser_DuplicateUsername_ThrowsException() {
        when(userRepository.existsByUsername("testuser")).thenReturn(true);

        assertThrows(DuplicateUsernameException.class, () ->
            userService.registerUser(registrationDTO)
        );
        verify(userRepository, never()).save(any(User.class));
        verify(authServiceClient, never()).createCredentials(any());
    }

    @Test
    void registerUser_DuplicateEmail_ThrowsException() {
        when(userRepository.existsByUsername("testuser")).thenReturn(false);
        when(userRepository.existsByEmail("test@example.com")).thenReturn(true);

        assertThrows(DuplicateEmailException.class, () ->
            userService.registerUser(registrationDTO)
        );
        verify(userRepository, never()).save(any(User.class));
        verify(authServiceClient, never()).createCredentials(any());
    }

    // ── validateUserAccess ─────────────────────────────────────

    @Test
    void validateUserAccess_Success() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user-123")).thenReturn(Optional.of(testUser));

        User result = userService.validateUserAccess("user-123", "testuser");

        assertNotNull(result);
        assertEquals("user-123", result.getId());
    }

    @Test
    void validateUserAccess_WrongUser_ThrowsForbidden() {
        User otherUser = new User("otheruser", "other@example.com");
        otherUser.setId("user-999");

        when(userRepository.findByUsername("otheruser")).thenReturn(Optional.of(otherUser));

        assertThrows(ForbiddenException.class, () ->
            userService.validateUserAccess("user-123", "otheruser")
        );
    }

    @Test
    void validateUserAccess_AuthenticatedUserNotFound_ThrowsException() {
        when(userRepository.findByUsername("unknown")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () ->
            userService.validateUserAccess("user-123", "unknown")
        );
    }

    // ── updateUser ─────────────────────────────────────────────

    @Test
    void updateUser_Success() {
        UserUpdateDTO dto = new UserUpdateDTO("newname", "new@example.com", null);

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user-123")).thenReturn(Optional.of(testUser));
        when(userRepository.findByUsername("newname")).thenReturn(Optional.empty());
        when(userRepository.findByEmail("new@example.com")).thenReturn(Optional.empty());
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        User result = userService.updateUser("user-123", dto, "testuser");

        assertNotNull(result);
        verify(userRepository, times(1)).save(any(User.class));
        verify(authServiceClient, times(1)).updateCredentials(eq("user-123"), any());
    }

    @Test
    void updateUser_WrongUser_ThrowsForbidden() {
        User otherUser = new User("otheruser", "other@example.com");
        otherUser.setId("user-999");
        UserUpdateDTO dto = new UserUpdateDTO("newname", null, null);

        when(userRepository.findByUsername("otheruser")).thenReturn(Optional.of(otherUser));

        assertThrows(ForbiddenException.class, () ->
            userService.updateUser("user-123", dto, "otheruser")
        );
        verify(userRepository, never()).save(any(User.class));
    }

    // ── validateAndDeleteUser ──────────────────────────────────

    @Test
    void validateAndDeleteUser_Success() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user-123")).thenReturn(Optional.of(testUser));

        UserDeleteResponseDTO result = userService.validateAndDeleteUser("user-123", "testuser");

        assertTrue(result.deleted());
        assertEquals("user-123", result.id());
        verify(userRepository, times(1)).delete(testUser);
        verify(authServiceClient, times(1)).deleteCredentials("user-123");
    }

    @Test
    void validateAndDeleteUser_WrongUser_ThrowsForbidden() {
        User otherUser = new User("otheruser", "other@example.com");
        otherUser.setId("user-999");

        when(userRepository.findByUsername("otheruser")).thenReturn(Optional.of(otherUser));

        assertThrows(ForbiddenException.class, () ->
            userService.validateAndDeleteUser("user-123", "otheruser")
        );
        verify(userRepository, never()).delete(any(User.class));
        verify(authServiceClient, never()).deleteCredentials(anyString());
    }

    // ── addCalendarMembership ──────────────────────────────────

    @Test
    void addCalendarMembership_Success() {
        when(userRepository.findById("user-123")).thenReturn(Optional.of(testUser));
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        userService.addCalendarMembership("user-123", "cal-1", true);

        verify(userRepository, times(1)).save(testUser);
        assertTrue(testUser.isAdminOfCalendar("cal-1"));
    }

    @Test
    void addCalendarMembership_UserNotFound_ThrowsException() {
        when(userRepository.findById("user-999")).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () ->
            userService.addCalendarMembership("user-999", "cal-1", true)
        );
    }

    // ── removeCalendarMembership ───────────────────────────────

    @Test
    void removeCalendarMembership_Success() {
        testUser.addCalendarMembership("cal-1", true);
        when(userRepository.findById("user-123")).thenReturn(Optional.of(testUser));
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        userService.removeCalendarMembership("user-123", "cal-1");

        verify(userRepository, times(1)).save(testUser);
        assertTrue(testUser.getCalendarIds().stream()
            .noneMatch(cm -> cm.getCalendarId().equals("cal-1")));
    }

    // ── getUsersByCalendarMembership ───────────────────────────

    @Test
    void getUsersByCalendarMembership_ReturnsList() {
        List<User> members = List.of(testUser);
        when(userRepository.findByCalendarMembership("cal-1")).thenReturn(members);

        List<User> result = userService.getUsersByCalendarMembership("cal-1");

        assertEquals(1, result.size());
        assertEquals("testuser", result.get(0).getUsername());
    }
}
