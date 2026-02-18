package com.example.eventservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.eventservice.dto.UserAuthDTO;

/**
 * Feign client for the User Service.
 *
 * The User Service must expose:
 *   GET /internal/users/{username}  ->  UserAuthDTO
 *
 * Eureka resolves "user-service" to a live instance automatically.
 */
@FeignClient(name = "user-service")
public interface UserServiceClient {

    @GetMapping("/internal/users/{username}")
    UserAuthDTO getUserAuthInfo(@PathVariable("username") String username);
}
