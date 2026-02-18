package com.calendario.auth_service.service;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.calendario.auth_service.dto.CredentialCreateDTO;
import com.calendario.auth_service.dto.CredentialUpdateDTO;
import com.calendario.auth_service.dto.LoginRequestDTO;
import com.calendario.auth_service.dto.LoginStatusDTO;
import com.calendario.auth_service.dto.LoginSuccessDTO;
import com.calendario.auth_service.exception.DuplicateEmailException;
import com.calendario.auth_service.exception.DuplicateUsernameException;
import com.calendario.auth_service.exception.InvalidCredentialsException;
import com.calendario.auth_service.exception.ResourceNotFoundException;
import com.calendario.auth_service.model.Credential;
import com.calendario.auth_service.repository.CredentialRepository;
import com.calendario.auth_service.util.JwtUtil;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private CredentialRepository credentialRepository;

    @Mock
    private JwtUtil jwtUtil;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @InjectMocks
    private AuthService authService;

    private Credential testCredential;
    private LoginRequestDTO loginRequestDTO;
    private CredentialCreateDTO credentialCreateDTO;

    @BeforeEach
    public void setUp() {
        testCredential = new Credential("testuser", "test@example.com", "hashedPassword123", "user-123");
        testCredential.setId("cred-123");

        loginRequestDTO = new LoginRequestDTO("testuser", "password123");
        credentialCreateDTO = new CredentialCreateDTO("newuser", "new@example.com", "newpass", "user-456");
    }

    @Test
    void testAuthenticateUser_Success() {
        // Arrange
        String token = "jwt-token-123";
        Date expiration = new Date(System.currentTimeMillis() + 3600000);
        
        when(credentialRepository.findByUsername("testuser")).thenReturn(Optional.of(testCredential));
        when(passwordEncoder.matches("password123", "hashedPassword123")).thenReturn(true);
        when(jwtUtil.generateToken("testuser")).thenReturn(token);
        when(jwtUtil.extractExpiration(token)).thenReturn(expiration);

        // Act
        LoginSuccessDTO result = authService.authenticateUser(loginRequestDTO);

        // Assert
        assertNotNull(result);
        assertEquals(token, result.token());
        assertEquals("user-123", result.user().userId());
        assertEquals("testuser", result.user().username());
        assertNotNull(result.tokenExpiresAt());
        verify(jwtUtil, times(1)).generateToken("testuser");
    }

    @Test
    void testAuthenticateUser_UserNotFound() {
        // Arrange
        when(credentialRepository.findByUsername("testuser")).thenReturn(Optional.empty());

        // Act & Assert
        InvalidCredentialsException exception = assertThrows(InvalidCredentialsException.class, () -> {
            authService.authenticateUser(loginRequestDTO);
        });
        assertEquals("Invalid username or password", exception.getMessage());
        verify(passwordEncoder, never()).matches(anyString(), anyString());
    }

    @Test
    void testAuthenticateUser_InvalidPassword() {
        // Arrange
        when(credentialRepository.findByUsername("testuser")).thenReturn(Optional.of(testCredential));
        when(passwordEncoder.matches("password123", "hashedPassword123")).thenReturn(false);

        // Act & Assert
        InvalidCredentialsException exception = assertThrows(InvalidCredentialsException.class, () -> {
            authService.authenticateUser(loginRequestDTO);
        });
        assertEquals("Invalid username or password", exception.getMessage());
        verify(jwtUtil, never()).generateToken(anyString());
    }

    @Test
    void testCheckLoginStatus_ValidToken() {
        // Arrange
        String token = "valid-jwt-token";
        Date expiration = new Date(System.currentTimeMillis() + 3600000);
        
        when(jwtUtil.extractUsername(token)).thenReturn("testuser");
        when(jwtUtil.validateToken(token)).thenReturn(true);
        when(credentialRepository.findByUsername("testuser")).thenReturn(Optional.of(testCredential));
        when(jwtUtil.extractExpiration(token)).thenReturn(expiration);

        // Act
        LoginStatusDTO result = authService.checkLoginStatus(token);

        // Assert
        assertTrue(result.authenticated());
        assertNotNull(result.user());
        assertEquals("user-123", result.user().userId());
        assertEquals("testuser", result.user().username());
    }

    @Test
    void testCheckLoginStatus_InvalidToken() {
        // Arrange
        String token = "invalid-token";
        when(jwtUtil.extractUsername(token)).thenReturn("testuser");
        when(jwtUtil.validateToken(token)).thenReturn(false);

        // Act
        LoginStatusDTO result = authService.checkLoginStatus(token);

        // Assert
        assertFalse(result.authenticated());
        verify(credentialRepository, never()).findByUsername(anyString());
    }

    @Test
    void testCheckLoginStatus_ExpiredToken() {
        // Arrange
        String token = "expired-token";
        when(jwtUtil.extractUsername(token)).thenThrow(new RuntimeException("Token expired"));

        // Act
        LoginStatusDTO result = authService.checkLoginStatus(token);

        // Assert
        assertFalse(result.authenticated());
    }

    @Test
    void testCreateCredentials_Success() {
        // Arrange
        when(credentialRepository.existsByUsername("newuser")).thenReturn(false);
        when(credentialRepository.existsByEmail("new@example.com")).thenReturn(false);
        when(passwordEncoder.encode("newpass")).thenReturn("hashedNewPass");
        when(credentialRepository.save(any(Credential.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        authService.createCredentials(credentialCreateDTO);

        // Assert
        verify(credentialRepository, times(1)).save(any(Credential.class));
        verify(passwordEncoder, times(1)).encode("newpass");
    }

    @Test
    void testCreateCredentials_DuplicateUsername() {
        // Arrange
        when(credentialRepository.existsByUsername("newuser")).thenReturn(true);

        // Act & Assert
        DuplicateUsernameException exception = assertThrows(DuplicateUsernameException.class, () -> {
            authService.createCredentials(credentialCreateDTO);
        });
        assertEquals("Username already exists", exception.getMessage());
        verify(credentialRepository, never()).save(any(Credential.class));
    }

    @Test
    void testCreateCredentials_DuplicateEmail() {
        // Arrange
        when(credentialRepository.existsByUsername("newuser")).thenReturn(false);
        when(credentialRepository.existsByEmail("new@example.com")).thenReturn(true);

        // Act & Assert
        DuplicateEmailException exception = assertThrows(DuplicateEmailException.class, () -> {
            authService.createCredentials(credentialCreateDTO);
        });
        assertEquals("Email already exists", exception.getMessage());
        verify(credentialRepository, never()).save(any(Credential.class));
    }

    @Test
    void testUpdateCredentials_Success() {
        // Arrange
        CredentialUpdateDTO updateDTO = new CredentialUpdateDTO("updateduser", "updated@example.com", "newpassword");
        
        when(credentialRepository.findByUserId("user-123")).thenReturn(Optional.of(testCredential));
        when(credentialRepository.existsByUsername("updateduser")).thenReturn(false);
        when(credentialRepository.existsByEmail("updated@example.com")).thenReturn(false);
        when(passwordEncoder.encode("newpassword")).thenReturn("hashedNewPassword");
        when(credentialRepository.save(any(Credential.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        authService.updateCredentials("user-123", updateDTO);

        // Assert
        verify(credentialRepository, times(1)).save(any(Credential.class));
        verify(passwordEncoder, times(1)).encode("newpassword");
    }

    @Test
    void testUpdateCredentials_UserNotFound() {
        // Arrange
        CredentialUpdateDTO updateDTO = new CredentialUpdateDTO("updateduser", null, null);
        when(credentialRepository.findByUserId("user-123")).thenReturn(Optional.empty());

        // Act & Assert
        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> {
            authService.updateCredentials("user-123", updateDTO);
        });
        assertTrue(exception.getMessage().contains("Credential not found"));
        verify(credentialRepository, never()).save(any(Credential.class));
    }

    @Test
    void testUpdateCredentials_DuplicateUsername() {
        // Arrange
        CredentialUpdateDTO updateDTO = new CredentialUpdateDTO("existinguser", null, null);
        
        when(credentialRepository.findByUserId("user-123")).thenReturn(Optional.of(testCredential));
        when(credentialRepository.existsByUsername("existinguser")).thenReturn(true);

        // Act & Assert
        DuplicateUsernameException exception = assertThrows(DuplicateUsernameException.class, () -> {
            authService.updateCredentials("user-123", updateDTO);
        });
        assertEquals("Username already exists", exception.getMessage());
        verify(credentialRepository, never()).save(any(Credential.class));
    }

    @Test
    void testUpdateCredentials_PartialUpdate() {
        // Arrange
        CredentialUpdateDTO updateDTO = new CredentialUpdateDTO(null, null, "newpassword");
        
        when(credentialRepository.findByUserId("user-123")).thenReturn(Optional.of(testCredential));
        when(passwordEncoder.encode("newpassword")).thenReturn("hashedNewPassword");
        when(credentialRepository.save(any(Credential.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Act
        authService.updateCredentials("user-123", updateDTO);

        // Assert
        verify(credentialRepository, times(1)).save(any(Credential.class));
        verify(passwordEncoder, times(1)).encode("newpassword");
        verify(credentialRepository, never()).existsByUsername(anyString());
        verify(credentialRepository, never()).existsByEmail(anyString());
    }

    @Test
    void testDeleteCredentials_Success() {
        // Arrange
        when(credentialRepository.findByUserId("user-123")).thenReturn(Optional.of(testCredential));

        // Act
        authService.deleteCredentials("user-123");

        // Assert
        verify(credentialRepository, times(1)).deleteByUserId("user-123");
    }

    @Test
    void testDeleteCredentials_NotFound() {
        // Arrange
        when(credentialRepository.findByUserId("user-123")).thenReturn(Optional.empty());

        // Act & Assert
        ResourceNotFoundException exception = assertThrows(ResourceNotFoundException.class, () -> {
            authService.deleteCredentials("user-123");
        });
        assertTrue(exception.getMessage().contains("Credential not found"));
        verify(credentialRepository, never()).deleteByUserId(anyString());
    }
}
