package com.calendario.auth_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LoginSuccessDTO(
    @JsonProperty("token") String token,
    @JsonProperty("user") LoginUserDTO user,
    @JsonProperty("token_expires_at") String tokenExpiresAt
) {}