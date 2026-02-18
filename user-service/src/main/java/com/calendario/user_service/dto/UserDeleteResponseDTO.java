package com.calendario.user_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UserDeleteResponseDTO(
    @JsonProperty("user_id")
    String userId,
    
    @JsonProperty("username")
    String username,
    
    @JsonProperty("deleted")
    boolean deleted
) {}
