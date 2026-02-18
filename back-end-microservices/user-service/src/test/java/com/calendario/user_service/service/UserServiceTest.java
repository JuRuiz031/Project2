package com.calendario.user_service.service;

import java.util.ArrayList;
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
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;

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

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private AuthServiceClient authServiceClient;

    @InjectMocks
    private UserService userService;

    private UserRegistrationDTO validRegistrationDTO;
    private User testUser;

    @SuppressWarnings("unused")
    @BeforeEach
    void setUp() {
        validRegistrationDTO = new UserRegistrationDTO("testuser", "test@example.com", "password123");

        testUser = new User();
        testUser.setId("user123");
        testUser.setUsername("testuser");
        testUser.setEmail("test@example.com");
        testUser.setCalendarIds(new ArrayList<>());
    }

    // ============= registerUser Tests =============

    @Test
    void testRegisterUser_Success() {
        when(userRepository.existsByUsername("testuser")).thenReturn(false);
        when(userRepository.existsByEmail("test@example.com")).thenReturn(false);
        when(userRepository.save(any(User.class))).thenReturn(testUser);
        doNothing().when(authServiceClient).createCredentials(any(CredentialCreateDTO.class));

        UserResponseDTO result = userService.registerUser(validRegistrationDTO);

        assertNotNull(result);
        assertEquals("user123", result.id());
        assertEquals("testuser", result.username());
        assertEquals("test@example.com", result.email());
        verify(userRepository, times(1)).save(any(User.class));
        verify(authServiceClient, times(1)).createCredentials(any(CredentialCreateDTO.class));
    }

    @Test
    void testRegisterUser_DuplicateUsername() {
        when(userRepository.existsByUsername("testuser")).thenReturn(true);

        DuplicateUsernameException exception = assertThrows(DuplicateUsernameException.class, () ->
                userService.registerUser(validRegistrationDTO));
        assertEquals("Username already exists: testuser", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
        verify(authServiceClient, never()).createCredentials(any(CredentialCreateDTO.class));
    }

    @Test
    void testRegisterUser_DuplicateEmail() {
        when(userRepository.existsByUsername("testuser")).thenReturn(false);
        when(userRepository.existsByEmail("test@example.com")).thenReturn(true);

        DuplicateEmailException exception = assertThrows(DuplicateEmailException.class, () ->
                userService.registerUser(validRegistrationDTO));
        assertEquals("Email already exists: test@example.com", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
        verify(authServiceClient, never()).createCredentials(any(CredentialCreateDTO.class));
    }

    @Test
    void testRegisterUser_AuthServiceFailure_Rollback() {
        when(userRepository.existsByUsername("testuser")).thenReturn(false);
        when(userRepository.existsByEmail("test@example.com")).thenReturn(false);
        when(userRepository.save(any(User.class))).thenReturn(testUser);
        doThrow(new RuntimeException("Auth service error"))
                .when(authServiceClient).createCredentials(any(CredentialCreateDTO.class));

        RuntimeException exception = assertThrows(RuntimeException.class, () ->
                userService.registerUser(validRegistrationDTO));
        assertEquals("Failed to create credentials: Auth service error", exception.getMessage());
        verify(userRepository, times(1)).save(any(User.class));
        verify(authServiceClient, times(1)).createCredentials(any(CredentialCreateDTO.class));
        verify(userRepository, times(1)).delete(testUser);
    }

    // ============= updateUser Tests =============

    @Test
    void testUpdateUser_Success_UpdatesUsernameAndEmail() {
        UserUpdateDTO updateDTO = new UserUpdateDTO("newusername", "newemail@example.com", null);
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));
        when(userRepository.findByUsername("newusername")).thenReturn(Optional.empty());
        when(userRepository.findByEmail("newemail@example.com")).thenReturn(Optional.empty());

        User updatedUser = new User();
        updatedUser.setId("user123");
        updatedUser.setUsername("newusername");
        updatedUser.setEmail("newemail@example.com");
        updatedUser.setCalendarIds(new ArrayList<>());

        when(userRepository.save(any(User.class))).thenReturn(updatedUser);
        doNothing().when(authServiceClient).updateCredentials(eq("user123"), any(CredentialUpdateDTO.class));

        UserResponseDTO result = userService.updateUser("user123", updateDTO, "testuser");

        assertNotNull(result);
        assertEquals("newusername", result.username());
        assertEquals("newemail@example.com", result.email());
        verify(userRepository, times(1)).save(any(User.class));
        verify(authServiceClient, times(1)).updateCredentials(eq("user123"), any(CredentialUpdateDTO.class));
    }

    @Test
    void testUpdateUser_AuthenticatedUserNotFound() {
        UserUpdateDTO updateDTO = new UserUpdateDTO("newusername", null, null);
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () ->
                userService.updateUser("user123", updateDTO, "testuser"));
        assertEquals("Authenticated user not found", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
        verify(authServiceClient, never()).updateCredentials(anyString(), any(CredentialUpdateDTO.class));
    }

    @Test
    void testUpdateUser_ForbiddenAccess() {
        UserUpdateDTO updateDTO = new UserUpdateDTO("newusername", null, null);
        User differentUser = new User();
        differentUser.setId("different123");
        differentUser.setUsername("differentuser");

        when(userRepository.findByUsername("differentuser")).thenReturn(Optional.of(differentUser));

        ForbiddenException exception = assertThrows(ForbiddenException.class, () ->
                userService.updateUser("user123", updateDTO, "differentuser"));
        assertEquals("Can only update your own account", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void testUpdateUser_DuplicateUsername() {
        UserUpdateDTO updateDTO = new UserUpdateDTO("existinguser", null, null);
        User existingUser = new User();
        existingUser.setId("other123");
        existingUser.setUsername("existinguser");

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));
        when(userRepository.findByUsername("existinguser")).thenReturn(Optional.of(existingUser));

        DuplicateUsernameException exception = assertThrows(DuplicateUsernameException.class, () ->
                userService.updateUser("user123", updateDTO, "testuser"));
        assertEquals("Username already exists: existinguser", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void testUpdateUser_DuplicateEmail() {
        UserUpdateDTO updateDTO = new UserUpdateDTO(null, "existing@example.com", null);
        User existingUser = new User();
        existingUser.setId("other123");
        existingUser.setEmail("existing@example.com");

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));
        when(userRepository.findByEmail("existing@example.com")).thenReturn(Optional.of(existingUser));

        DuplicateEmailException exception = assertThrows(DuplicateEmailException.class, () ->
                userService.updateUser("user123", updateDTO, "testuser"));
        assertEquals("Email already exists: existing@example.com", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void testUpdateUser_OnlyUsername() {
        UserUpdateDTO updateDTO = new UserUpdateDTO("newusername", null, null);
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));
        when(userRepository.findByUsername("newusername")).thenReturn(Optional.empty());

        User updatedUser = new User();
        updatedUser.setId("user123");
        updatedUser.setUsername("newusername");
        updatedUser.setEmail("test@example.com");
        updatedUser.setCalendarIds(new ArrayList<>());

        when(userRepository.save(any(User.class))).thenReturn(updatedUser);
        doNothing().when(authServiceClient).updateCredentials(eq("user123"), any(CredentialUpdateDTO.class));

        UserResponseDTO result = userService.updateUser("user123", updateDTO, "testuser");

        assertEquals("newusername", result.username());
        assertEquals("test@example.com", result.email());
        verify(authServiceClient, times(1)).updateCredentials(eq("user123"), any(CredentialUpdateDTO.class));
    }

    // ============= validateAndDeleteUser Tests =============

    @Test
    void testValidateAndDeleteUser_Success() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));
        doNothing().when(authServiceClient).deleteCredentials("user123");
        doNothing().when(userRepository).delete(testUser);

        UserDeleteResponseDTO result = userService.validateAndDeleteUser("user123", "testuser");

        assertNotNull(result);
        assertEquals("user123", result.userId());
        assertEquals("testuser", result.username());
        assertTrue(result.deleted());
        verify(authServiceClient, times(1)).deleteCredentials("user123");
        verify(userRepository, times(1)).delete(testUser);
    }

    @Test
    void testValidateAndDeleteUser_AuthenticatedUserNotFound() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () ->
                userService.validateAndDeleteUser("user123", "testuser"));
        assertEquals("Authenticated user not found", exception.getMessage());
        verify(authServiceClient, never()).deleteCredentials(anyString());
        verify(userRepository, never()).delete(any(User.class));
    }

    @Test
    void testValidateAndDeleteUser_ForbiddenAccess() {
        User differentUser = new User();
        differentUser.setId("different123");
        differentUser.setUsername("differentuser");

        when(userRepository.findByUsername("differentuser")).thenReturn(Optional.of(differentUser));

        ForbiddenException exception = assertThrows(ForbiddenException.class, () ->
                userService.validateAndDeleteUser("user123", "differentuser"));
        assertEquals("You can only delete your own user account", exception.getMessage());
        verify(authServiceClient, never()).deleteCredentials(anyString());
        verify(userRepository, never()).delete(any(User.class));
    }

    // ============= validateUserAccess Tests =============

    @Test
    void testValidateUserAccess_Success() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));

        User result = userService.validateUserAccess("user123", "testuser");

        assertNotNull(result);
        assertEquals("user123", result.getId());
        assertEquals("testuser", result.getUsername());
    }

    @Test
    void testValidateUserAccess_AuthenticatedUserNotFound() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () ->
                userService.validateUserAccess("user123", "testuser"));
        assertEquals("Authenticated user not found", exception.getMessage());
    }

    @Test
    void testValidateUserAccess_ForbiddenAccess() {
        User differentUser = new User();
        differentUser.setId("different123");
        differentUser.setUsername("differentuser");

        when(userRepository.findByUsername("differentuser")).thenReturn(Optional.of(differentUser));

        ForbiddenException exception = assertThrows(ForbiddenException.class, () ->
                userService.validateUserAccess("user123", "differentuser"));
        assertEquals("You can only access your own user data", exception.getMessage());
    }

    // ============= Calendar Membership Tests =============

    @Test
    void testGetCalendarIdsForUser_Success() {
        User.CalendarMembership membership1 = new User.CalendarMembership("cal1", true);
        User.CalendarMembership membership2 = new User.CalendarMembership("cal2", false);
        testUser.setCalendarIds(List.of(membership1, membership2));

        when(userRepository.findByUsername("testuser")).thenReturn(Optional.of(testUser));
        when(userRepository.findById("user123")).thenReturn(Optional.of(testUser));

        List<String> result = userService.getCalendarIdsForUser("user123", "testuser");

        assertNotNull(result);
        assertEquals(2, result.size());
        assertTrue(result.contains("cal1"));
        assertTrue(result.contains("cal2"));
    }

    @Test
    void testGetCalendarIdsForUser_AuthenticatedUserNotFound() {
        when(userRepository.findByUsername("testuser")).thenReturn(Optional.empty());

        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () ->
                userService.getCalendarIdsForUser("user123", "testuser"));
        assertEquals("Authenticated user not found", exception.getMessage());
    }

    @Test
    void testGetUsersByCalendarMembership_Success() {
        List<User> users = List.of(testUser);
        when(userRepository.findByCalendarIdsMembershipCalendarId("cal123")).thenReturn(users);

        List<User> result = userService.getUsersByCalendarMembership("cal123");

        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("testuser", result.get(0).getUsername());
    }

    @Test
    void testGetUsersByCalendarMembership_EmptyList() {
        when(userRepository.findByCalendarIdsMembershipCalendarId("cal123")).thenReturn(new ArrayList<>());

        List<User> result = userService.getUsersByCalendarMembership("cal123");

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }
}
