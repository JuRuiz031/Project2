package com.calendario.user_service.controller;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
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

import com.calendario.user_service.client.AuthServiceClient;
import com.calendario.user_service.dto.UserDeleteResponseDTO;
import com.calendario.user_service.dto.UserRegistrationDTO;
import com.calendario.user_service.dto.UserResponseDTO;
import com.calendario.user_service.dto.UserUpdateDTO;
import com.calendario.user_service.exception.DuplicateEmailException;
import com.calendario.user_service.exception.DuplicateUsernameException;
import com.calendario.user_service.exception.ForbiddenException;
import com.calendario.user_service.exception.ResourceNotFoundException;
import com.calendario.user_service.filter.JwtAuthenticationFilter;
import com.calendario.user_service.model.User;
import com.calendario.user_service.service.UserService;
import com.calendario.user_service.util.JwtUtil;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(UserController.class)
@AutoConfigureMockMvc(addFilters = false)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private UserService userService;

    @SuppressWarnings("unused")
    @MockitoBean
    private AuthServiceClient authServiceClient;

    @SuppressWarnings("unused")
    @MockitoBean
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @SuppressWarnings("unused")
    @MockitoBean
    private JwtUtil jwtUtil;

    private UserRegistrationDTO registrationDTO;
    private UserResponseDTO userResponseDTO;
    private UserUpdateDTO updateDTO;
    private UserDeleteResponseDTO deleteResponseDTO;
    private User testUser;

    @SuppressWarnings("unused")
    @BeforeEach
    void setUp() {
        registrationDTO = new UserRegistrationDTO("testuser", "test@example.com", "password123");

        userResponseDTO = new UserResponseDTO("user123", "testuser", "test@example.com");

        updateDTO = new UserUpdateDTO("updateduser", "updated@example.com", null);

        deleteResponseDTO = new UserDeleteResponseDTO("user123", "testuser", true);

        testUser = new User();
        testUser.setId("user123");
        testUser.setUsername("testuser");
        testUser.setEmail("test@example.com");
        testUser.setCalendarIds(new ArrayList<>());
    }

    // ============= POST /api/v1/users/register Tests =============

    @Test
    void testRegisterUser_Success() throws Exception {
        when(userService.registerUser(any(UserRegistrationDTO.class))).thenReturn(userResponseDTO);

        mockMvc.perform(post("/api/v1/users/register")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registrationDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.user_id").value("user123"))
                .andExpect(jsonPath("$.username").value("testuser"))
                .andExpect(jsonPath("$.email").value("test@example.com"));

        verify(userService, times(1)).registerUser(any(UserRegistrationDTO.class));
    }

    @Test
    void testRegisterUser_DuplicateUsername() throws Exception {
        when(userService.registerUser(any(UserRegistrationDTO.class)))
                .thenThrow(new DuplicateUsernameException("Username already exists"));

        mockMvc.perform(post("/api/v1/users/register")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registrationDTO)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.message").value("Username already exists"))
                .andExpect(jsonPath("$.status").value(409));

        verify(userService, times(1)).registerUser(any(UserRegistrationDTO.class));
    }

    @Test
    void testRegisterUser_DuplicateEmail() throws Exception {
        when(userService.registerUser(any(UserRegistrationDTO.class)))
                .thenThrow(new DuplicateEmailException("Email already exists"));

        mockMvc.perform(post("/api/v1/users/register")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registrationDTO)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.message").value("Email already exists"))
                .andExpect(jsonPath("$.status").value(409));

        verify(userService, times(1)).registerUser(any(UserRegistrationDTO.class));
    }

    @Test
    void testRegisterUser_InvalidRequest() throws Exception {
        UserRegistrationDTO invalidDTO = new UserRegistrationDTO(null, null, null);

        mockMvc.perform(post("/api/v1/users/register")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidDTO)))
                .andExpect(status().isBadRequest());

        verify(userService, never()).registerUser(any(UserRegistrationDTO.class));
    }

    // ============= GET /api/v1/users/{id} Tests =============

    @Test
    @WithMockUser(username = "testuser")
    void testGetUserById_Success() throws Exception {
        when(userService.validateUserAccess(eq("user123"), eq("testuser"))).thenReturn(testUser);

        mockMvc.perform(get("/api/v1/users/user123")
                .with(csrf()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user_id").value("user123"))
                .andExpect(jsonPath("$.username").value("testuser"))
                .andExpect(jsonPath("$.email").value("test@example.com"));

        verify(userService, times(1)).validateUserAccess("user123", "testuser");
    }

    @Test
    @WithMockUser(username = "testuser")
    void testGetUserById_NotFound() throws Exception {
        when(userService.validateUserAccess(eq("user123"), eq("testuser")))
                .thenThrow(new ResourceNotFoundException("User not found"));

        mockMvc.perform(get("/api/v1/users/user123")
                .with(csrf()))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("User not found"))
                .andExpect(jsonPath("$.status").value(404));

        verify(userService, times(1)).validateUserAccess("user123", "testuser");
    }

    @Test
    @WithMockUser(username = "differentuser")
    void testGetUserById_ForbiddenAccess() throws Exception {
        when(userService.validateUserAccess(eq("user123"), eq("differentuser")))
                .thenThrow(new ForbiddenException("Access denied"));

        mockMvc.perform(get("/api/v1/users/user123")
                .with(csrf()))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Access denied"))
                .andExpect(jsonPath("$.status").value(403));

        verify(userService, times(1)).validateUserAccess("user123", "differentuser");
    }

    // ============= PATCH /api/v1/users/{id} Tests =============

    @Test
    @WithMockUser(username = "testuser")
    void testUpdateUser_Success() throws Exception {
        UserResponseDTO updatedResponse = new UserResponseDTO("user123", "updateduser", "updated@example.com");
        when(userService.updateUser(eq("user123"), any(UserUpdateDTO.class), eq("testuser")))
                .thenReturn(updatedResponse);

        mockMvc.perform(patch("/api/v1/users/user123")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user_id").value("user123"))
                .andExpect(jsonPath("$.username").value("updateduser"))
                .andExpect(jsonPath("$.email").value("updated@example.com"));

        verify(userService, times(1)).updateUser(eq("user123"), any(UserUpdateDTO.class), eq("testuser"));
    }

    @Test
    @WithMockUser(username = "testuser")
    void testUpdateUser_DuplicateUsername() throws Exception {
        when(userService.updateUser(eq("user123"), any(UserUpdateDTO.class), eq("testuser")))
                .thenThrow(new DuplicateUsernameException("Username already exists"));

        mockMvc.perform(patch("/api/v1/users/user123")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.message").value("Username already exists"))
                .andExpect(jsonPath("$.status").value(409));

        verify(userService, times(1)).updateUser(eq("user123"), any(UserUpdateDTO.class), eq("testuser"));
    }

    @Test
    @WithMockUser(username = "differentuser")
    void testUpdateUser_ForbiddenAccess() throws Exception {
        when(userService.updateUser(eq("user123"), any(UserUpdateDTO.class), eq("differentuser")))
                .thenThrow(new ForbiddenException("Access denied"));

        mockMvc.perform(patch("/api/v1/users/user123")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateDTO)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Access denied"))
                .andExpect(jsonPath("$.status").value(403));

        verify(userService, times(1)).updateUser(eq("user123"), any(UserUpdateDTO.class), eq("differentuser"));
    }

    // ============= DELETE /api/v1/users/{id} Tests =============

    @Test
    @WithMockUser(username = "testuser")
    void testDeleteUser_Success() throws Exception {
        when(userService.validateAndDeleteUser(eq("user123"), eq("testuser"))).thenReturn(deleteResponseDTO);

        mockMvc.perform(delete("/api/v1/users/user123")
                .with(csrf()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user_id").value("user123"))
                .andExpect(jsonPath("$.username").value("testuser"))
                .andExpect(jsonPath("$.deleted").value(true));

        verify(userService, times(1)).validateAndDeleteUser("user123", "testuser");
    }

    @Test
    @WithMockUser(username = "testuser")
    void testDeleteUser_NotFound() throws Exception {
        when(userService.validateAndDeleteUser(eq("user123"), eq("testuser")))
                .thenThrow(new ResourceNotFoundException("User not found"));

        mockMvc.perform(delete("/api/v1/users/user123")
                .with(csrf()))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("User not found"))
                .andExpect(jsonPath("$.status").value(404));

        verify(userService, times(1)).validateAndDeleteUser("user123", "testuser");
    }

    @Test
    @WithMockUser(username = "differentuser")
    void testDeleteUser_ForbiddenAccess() throws Exception {
        when(userService.validateAndDeleteUser(eq("user123"), eq("differentuser")))
                .thenThrow(new ForbiddenException("Access denied"));

        mockMvc.perform(delete("/api/v1/users/user123")
                .with(csrf()))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.message").value("Access denied"))
                .andExpect(jsonPath("$.status").value(403));

        verify(userService, times(1)).validateAndDeleteUser("user123", "differentuser");
    }
}
