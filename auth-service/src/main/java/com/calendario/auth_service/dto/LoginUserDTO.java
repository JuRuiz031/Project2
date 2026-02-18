package com.calendario.auth_service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record LoginUserDTO(
    @JsonProperty("user_id") String userId,
    @JsonProperty("username") String username
) {

}
