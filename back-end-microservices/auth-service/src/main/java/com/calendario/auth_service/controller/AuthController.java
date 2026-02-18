package com.calendario.auth_service.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.calendario.auth_service.dto.CredentialCreateDTO;
import com.calendario.auth_service.dto.CredentialUpdateDTO;
import com.calendario.auth_service.dto.LoginRequestDTO;
import com.calendario.auth_service.dto.LoginStatusDTO;
import com.calendario.auth_service.dto.LoginSuccessDTO;
import com.calendario.auth_service.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@Validated
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // POST Login
    @PostMapping("/login")
    public ResponseEntity<LoginSuccessDTO> login(@Valid @RequestBody LoginRequestDTO loginDTO) {
        LoginSuccessDTO response = authService.authenticateUser(loginDTO);
        return ResponseEntity.ok(response);
    }

    // GET Login Status
    @GetMapping("/login")
    public ResponseEntity<LoginStatusDTO> getLoginStatus(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.replace("Bearer ", "");
        LoginStatusDTO response = authService.checkLoginStatus(token);
        return ResponseEntity.ok(response);
    }

    // POST Create Credentials (called by user-service)
    @PostMapping("/credentials")
    public ResponseEntity<Void> createCredentials(@Valid @RequestBody CredentialCreateDTO credentialDTO) {
        authService.createCredentials(credentialDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    // PATCH Update Credentials
    @PatchMapping("/credentials/{userId}")
    public ResponseEntity<Void> updateCredentials(@PathVariable String userId, 
                                                   @Valid @RequestBody CredentialUpdateDTO updateDTO) {
        authService.updateCredentials(userId, updateDTO);
        return ResponseEntity.ok().build();
    }

    // DELETE Credentials
    @DeleteMapping("/credentials/{userId}")
    public ResponseEntity<Void> deleteCredentials(@PathVariable String userId) {
        authService.deleteCredentials(userId);
        return ResponseEntity.noContent().build();
    }
}
