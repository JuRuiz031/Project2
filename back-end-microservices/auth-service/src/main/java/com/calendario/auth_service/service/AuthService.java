package com.calendario.auth_service.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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
import com.calendario.auth_service.model.Credential;
import com.calendario.auth_service.repository.CredentialRepository;
import com.calendario.auth_service.util.JwtUtil;

@Service
public class AuthService {
    private final CredentialRepository credentialRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(CredentialRepository credentialRepository, JwtUtil jwtUtil, BCryptPasswordEncoder passwordEncoder) {
        this.credentialRepository = credentialRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    // POST /api/v1/login - Authenticate user and return JWT token
    public LoginSuccessDTO authenticateUser(LoginRequestDTO request) {
        // Find credential by username
        Credential credential = credentialRepository.findByUsername(request.username())
            .orElseThrow(() -> new InvalidCredentialsException("Invalid username or password"));
        
        // Validate password using BCrypt
        // matches(plainPassword, hashedPassword) returns true if they match
        if (!passwordEncoder.matches(request.password(), credential.getPassword())) {
            throw new InvalidCredentialsException("Invalid username or password");
        }
        
        // Generate JWT token
        String token = jwtUtil.generateToken(credential.getUsername());
        
        // Get token expiration time
        String expiresAt = jwtUtil.extractExpiration(token).toString();
        
        // Build response with user info
        LoginUserDTO user = new LoginUserDTO(credential.getUserId(), credential.getUsername());
        
        return new LoginSuccessDTO(token, user, expiresAt);
    }

    // GET /api/v1/login - Check if JWT token is valid and return user info
    public LoginStatusDTO checkLoginStatus(String token) {
        try {
            // Extract username from token
            String username = jwtUtil.extractUsername(token);
            
            // Validate token
            if (!jwtUtil.validateToken(token)) {
                return new LoginStatusDTO(false);
            }
            
            // Find credential to get user info
            Credential credential = credentialRepository.findByUsername(username)
                .orElse(null);
            
            if (credential == null) {
                return new LoginStatusDTO(false);
            }
            
            // Get token expiration
            String expiresAt = jwtUtil.extractExpiration(token).toString();
            
            // Build authenticated response
            LoginUserDTO user = new LoginUserDTO(credential.getUserId(), credential.getUsername());
            return new LoginStatusDTO(true, user, expiresAt);
            
        } catch (Exception e) {
            // Token is invalid or expired
            return new LoginStatusDTO(false);
        }
    }

    // POST /api/v1/credentials - Create new credentials (called by user-service)
    public void createCredentials(CredentialCreateDTO dto) {
        // Check for duplicate username
        if (credentialRepository.existsByUsername(dto.username())) {
            throw new DuplicateUsernameException("Username already exists");
        }
        
        // Check for duplicate email
        if (credentialRepository.existsByEmail(dto.email())) {
            throw new DuplicateEmailException("Email already exists");
        }
        
        // Hash the password using BCrypt
        // encode(plainPassword) returns the hashed version
        String hashedPassword = passwordEncoder.encode(dto.password());
        
        // Create credential with hashed password
        Credential credential = new Credential(
            dto.username(),
            dto.email(),
            hashedPassword,  // Store hashed password, NOT plain text
            dto.userId()
        );
        
        credentialRepository.save(credential);
    }

    // PATCH /api/v1/credentials/{userId} - Update credentials
    public void updateCredentials(String userId, CredentialUpdateDTO dto) {
        // Find existing credential
        Credential credential = credentialRepository.findByUserId(userId)
            .orElseThrow(() -> new ResourceNotFoundException("Credential not found for user ID: " + userId));
        
        // Update username if provided
        if (dto.username() != null && !dto.username().equals(credential.getUsername())) {
            // Check if new username is already taken by another user
            if (credentialRepository.existsByUsername(dto.username())) {
                throw new DuplicateUsernameException("Username already exists");
            }
            credential.setUsername(dto.username());
        }
        
        // Update email if provided
        if (dto.email() != null && !dto.email().equals(credential.getEmail())) {
            // Check if new email is already taken by another user
            if (credentialRepository.existsByEmail(dto.email())) {
                throw new DuplicateEmailException("Email already exists");
            }
            credential.setEmail(dto.email());
        }
        
        // Update password if provided
        if (dto.password() != null) {
            // Hash the new password before storing
            String hashedPassword = passwordEncoder.encode(dto.password());
            credential.setPassword(hashedPassword);
        }
        
        // Update timestamp
        credential.setUpdatedAt(LocalDateTime.now());
        
        credentialRepository.save(credential);
    }

    // DELETE /api/v1/credentials/{userId} - Delete credentials
    public void deleteCredentials(String userId) {
        // Check if credential exists
        if (!credentialRepository.findByUserId(userId).isPresent()) {
            throw new ResourceNotFoundException("Credential not found for user ID: " + userId);
        }
        
        credentialRepository.deleteByUserId(userId);
    }
}
