package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CredentialCreateDTO(
    @JsonProperty("username")
    String username,
    
    @JsonProperty("email")
    String email,
    
    @JsonProperty("password")
    String password,
    
    @JsonProperty("userId")
    String userId
) {}
