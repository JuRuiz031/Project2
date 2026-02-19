package com.calendario.calendar_service.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.calendario.calendar_service.dto.user.LoginStatusDTO;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "auth-service")
public interface AuthFeignClient {

    @GetMapping("/api/v1/login")
    LoginStatusDTO validateToken(@RequestHeader("Authorization") String authorizationHeader);

}
