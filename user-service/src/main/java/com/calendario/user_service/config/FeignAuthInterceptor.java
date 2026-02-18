package com.calendario.user_service.config;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import feign.RequestInterceptor;
import feign.RequestTemplate;

/**
 * Automatically forwards the incoming JWT Authorization header
 * to all outgoing Feign client requests.
 * 
 * This ensures inter-service calls (e.g., user-service → auth-service)
 * carry the original user's JWT token for authentication.
 */
@Component
public class FeignAuthInterceptor implements RequestInterceptor {

    @Override
    public void apply(RequestTemplate template) {
        ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attrs != null) {
            String auth = attrs.getRequest().getHeader("Authorization");
            if (auth != null) {
                template.header("Authorization", auth);
            }
        }
    }
}
