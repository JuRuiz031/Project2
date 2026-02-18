package com.calendario.user_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.calendario.user_service.dto.CredentialCreateDTO;
import com.calendario.user_service.dto.CredentialUpdateDTO;

@FeignClient(name = "auth-service")
public interface AuthServiceClient {

    @PostMapping("/api/v1/credentials")
    void createCredentials(@RequestBody CredentialCreateDTO dto);

    @PatchMapping("/api/v1/credentials/{userId}")
    void updateCredentials(@PathVariable String userId, @RequestBody CredentialUpdateDTO dto);

    @DeleteMapping("/api/v1/credentials/{userId}")
    void deleteCredentials(@PathVariable String userId);
}
