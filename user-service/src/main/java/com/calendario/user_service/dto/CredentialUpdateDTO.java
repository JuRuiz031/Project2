package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CredentialUpdateDTO(
    @JsonProperty("username")
    String username,
    
    @JsonProperty("email")
    String email,
    
    @JsonProperty("password")
    String password
) {}
