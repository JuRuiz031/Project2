package com.calendario.auth_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LoginStatusDTO(
    @JsonProperty("authenticated") boolean authenticated,
    @JsonProperty("user") LoginUserDTO user,
    @JsonProperty("token_expires_at") String tokenExpiresAt
) {
    // Constructor for not authenticated response (user and tokenExpiresAt will be null)
    public LoginStatusDTO(boolean authenticated) {
        this(authenticated, null, null);
    }
}
