package com.calendario.poll_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.calendario.poll_service.dto.UserInternalDTO;

@FeignClient(name = "user-service")
public interface UserServiceClient {

    @GetMapping("/internal/users/{username}")
    UserInternalDTO getUserByUsername(@PathVariable String username);
}
