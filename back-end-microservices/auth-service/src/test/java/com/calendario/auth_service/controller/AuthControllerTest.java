package com.calendario.auth_service.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.calendario.auth_service.dto.CredentialCreateDTO;
import com.calendario.auth_service.dto.CredentialUpdateDTO;
import com.calendario.auth_service.dto.LoginRequestDTO;
import com.calendario.auth_service.dto.LoginStatusDTO;
import com.calendario.auth_service.dto.LoginSuccessDTO;
import com.calendario.auth_service.dto.LoginUserDTO;
import com.calendario.auth_service.exception.DuplicateEmailException;
import com.calendario.auth_service.exception.DuplicateUsernameException;
import com.calendario.auth_service.exception.InvalidCredentialsException;
import com.calendario.auth_service.exception.ResourceNotFoundException;
import com.calendario.auth_service.service.AuthService;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private AuthService authService;

    private LoginRequestDTO loginRequestDTO;
    private LoginSuccessDTO loginSuccessDTO;
    private CredentialCreateDTO credentialCreateDTO;

    @BeforeEach
    public void setUp() {
        loginRequestDTO = new LoginRequestDTO("testuser", "password123");
        
        LoginUserDTO userDTO = new LoginUserDTO("user-123", "testuser");
        loginSuccessDTO = new LoginSuccessDTO("jwt-token-123", userDTO, "2026-02-18T12:00:00");
        
        credentialCreateDTO = new CredentialCreateDTO("newuser", "new@example.com", "newpassword123", "user-456");
    }

    @Test
    void testLogin_Success() throws Exception {
        // Arrange
        when(authService.authenticateUser(any(LoginRequestDTO.class))).thenReturn(loginSuccessDTO);

        // Act & Assert
        mockMvc.perform(post("/api/v1/login")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginRequestDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").value("jwt-token-123"))
                .andExpect(jsonPath("$.user.user_id").value("user-123"))
                .andExpect(jsonPath("$.user.username").value("testuser"));

        verify(authService, times(1)).authenticateUser(any(LoginRequestDTO.class));
    }

    @Test
    void testLogin_InvalidCredentials() throws Exception {
        // Arrange
        when(authService.authenticateUser(any(LoginRequestDTO.class)))
                .thenThrow(new InvalidCredentialsException("Invalid username or password"));

        // Act & Assert
        mockMvc.perform(post("/api/v1/login")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginRequestDTO)))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.message").value("Invalid username or password"));
    }

    @Test
    void testLogin_MissingUsername() throws Exception {
        // Arrange
        LoginRequestDTO invalidDTO = new LoginRequestDTO("", "password123");

        // Act & Assert
        mockMvc.perform(post("/api/v1/login")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    @WithMockUser
    void testGetLoginStatus_Authenticated() throws Exception {
        // Arrange
        LoginUserDTO userDTO = new LoginUserDTO("user-123", "testuser");
        LoginStatusDTO statusDTO = new LoginStatusDTO(true, userDTO, "2026-02-18T12:00:00");
        when(authService.checkLoginStatus(anyString())).thenReturn(statusDTO);

        // Act & Assert
        mockMvc.perform(get("/api/v1/login")
                .header("Authorization", "Bearer jwt-token-123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.authenticated").value(true))
                .andExpect(jsonPath("$.user.user_id").value("user-123"))
                .andExpect(jsonPath("$.user.username").value("testuser"));
    }

    @Test
    @WithMockUser
    void testGetLoginStatus_NotAuthenticated() throws Exception {
        // Arrange
        LoginStatusDTO statusDTO = new LoginStatusDTO(false);
        when(authService.checkLoginStatus(anyString())).thenReturn(statusDTO);

        // Act & Assert
        mockMvc.perform(get("/api/v1/login")
                .header("Authorization", "Bearer invalid-token"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.authenticated").value(false));
    }

    @Test
    void testCreateCredentials_Success() throws Exception {
        // Arrange
        doNothing().when(authService).createCredentials(any(CredentialCreateDTO.class));

        // Act & Assert
        mockMvc.perform(post("/api/v1/credentials")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(credentialCreateDTO)))
                .andExpect(status().isCreated());

        verify(authService, times(1)).createCredentials(any(CredentialCreateDTO.class));
    }

    @Test
    void testCreateCredentials_DuplicateUsername() throws Exception {
        // Arrange
        doThrow(new DuplicateUsernameException("Username already exists"))
                .when(authService).createCredentials(any(CredentialCreateDTO.class));

        // Act & Assert
        mockMvc.perform(post("/api/v1/credentials")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(credentialCreateDTO)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.message").value("Username already exists"));
    }

    @Test
    void testCreateCredentials_DuplicateEmail() throws Exception {
        // Arrange
        doThrow(new DuplicateEmailException("Email already exists"))
                .when(authService).createCredentials(any(CredentialCreateDTO.class));

        // Act & Assert
        mockMvc.perform(post("/api/v1/credentials")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(credentialCreateDTO)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.message").value("Email already exists"));
    }

    @Test
    void testCreateCredentials_ValidationError() throws Exception {
        // Arrange
        CredentialCreateDTO invalidDTO = new CredentialCreateDTO("ab", "invalid-email", "short", "user-456");

        // Act & Assert
        mockMvc.perform(post("/api/v1/credentials")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    @WithMockUser
    void testUpdateCredentials_Success() throws Exception {
        // Arrange
        CredentialUpdateDTO updateDTO = new CredentialUpdateDTO("updateduser", "updated@example.com", "newpassword");
        doNothing().when(authService).updateCredentials(anyString(), any(CredentialUpdateDTO.class));

        // Act & Assert
        mockMvc.perform(patch("/api/v1/credentials/user-123")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isOk());

        verify(authService, times(1)).updateCredentials(anyString(), any(CredentialUpdateDTO.class));
    }

    @Test
    @WithMockUser
    void testUpdateCredentials_NotFound() throws Exception {
        // Arrange
        CredentialUpdateDTO updateDTO = new CredentialUpdateDTO("updateduser", null, null);
        doThrow(new ResourceNotFoundException("Credential not found for user ID: user-123"))
                .when(authService).updateCredentials(anyString(), any(CredentialUpdateDTO.class));

        // Act & Assert
        mockMvc.perform(patch("/api/v1/credentials/user-123")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Credential not found for user ID: user-123"));
    }

    @Test
    @WithMockUser
    void testDeleteCredentials_Success() throws Exception {
        // Arrange
        doNothing().when(authService).deleteCredentials(anyString());

        // Act & Assert
        mockMvc.perform(delete("/api/v1/credentials/user-123")
                .with(csrf()))
                .andExpect(status().isNoContent());

        verify(authService, times(1)).deleteCredentials("user-123");
    }

    @Test
    @WithMockUser
    void testDeleteCredentials_NotFound() throws Exception {
        // Arrange
        doThrow(new ResourceNotFoundException("Credential not found for user ID: user-123"))
                .when(authService).deleteCredentials(anyString());

        // Act & Assert
        mockMvc.perform(delete("/api/v1/credentials/user-123")
                .with(csrf()))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Credential not found for user ID: user-123"));
    }
}
