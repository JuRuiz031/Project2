# Calendario Microservices Guide

## Architecture Overview

```
Angular (S3) → API Gateway (:8080) → Eureka Lookup → Microservices
                                        ├── auth-service     (:8081) → calendario-auth DB
                                        ├── user-service     (:8082) → calendario-users DB
                                        ├── calendar-service (:8083) → calendario-calendars DB
                                        ├── event-service    (:8084) → calendario-events DB  (also handles invite links)
                                        └── poll-service     (:8085) → calendario-polls DB
```

---

## Shared Infrastructure (Team Responsibility)

### Eureka Server (`:8761`)

**Spring Initializr Dependencies:**
- Eureka Server
- Spring Boot DevTools

**Steps:**
1. Generate project from start.spring.io (group: `com.calendario`, artifact: `eureka-server`)
2. Add `@EnableEurekaServer` to main class
3. Configure `application.properties`:
   ```properties
   server.port=8761
   eureka.client.register-with-eureka=false
   eureka.client.fetch-registry=false
   ```
4. Dockerfile it, deploy to EC2

---

### API Gateway (`:8080`)

**Spring Initializr Dependencies:**
- Gateway
- Eureka Discovery Client
- Spring Boot DevTools

**Steps:**
1. Generate project (group: `com.calendario`, artifact: `api-gateway`)
2. Configure routes in `application.properties`:
   ```properties
   server.port=8080

   # Eureka
   eureka.client.service-url.defaultZone=http://localhost:8761/eureka/

   # Route: Auth Service
   spring.cloud.gateway.routes[0].id=auth-service
   spring.cloud.gateway.routes[0].uri=lb://auth-service
   spring.cloud.gateway.routes[0].predicates[0]=Path=/api/v1/login/**

   # Route: User Service
   spring.cloud.gateway.routes[1].id=user-service
   spring.cloud.gateway.routes[1].uri=lb://user-service
   spring.cloud.gateway.routes[1].predicates[0]=Path=/api/v1/users/**

   # Route: Calendar Service
   spring.cloud.gateway.routes[2].id=calendar-service
   spring.cloud.gateway.routes[2].uri=lb://calendar-service
   spring.cloud.gateway.routes[2].predicates[0]=Path=/api/v1/calendars/**

   # Route: Event Service
   spring.cloud.gateway.routes[3].id=event-service
   spring.cloud.gateway.routes[3].uri=lb://event-service
   spring.cloud.gateway.routes[3].predicates[0]=Path=/api/v1/events/**

   # Route: Poll Service
   spring.cloud.gateway.routes[4].id=poll-service
   spring.cloud.gateway.routes[4].uri=lb://poll-service
   spring.cloud.gateway.routes[4].predicates[0]=Path=/api/v1/polls/**

   # Route: Invite Link Generation (goes to Event Service)
   spring.cloud.gateway.routes[5].id=invite-create
   spring.cloud.gateway.routes[5].uri=lb://event-service
   spring.cloud.gateway.routes[5].predicates[0]=Path=/api/v1/invite/**

   # Route: Invite Link Resolution (goes to Event Service)
   spring.cloud.gateway.routes[6].id=invite-resolve
   spring.cloud.gateway.routes[6].uri=lb://event-service
   spring.cloud.gateway.routes[6].predicates[0]=Path=/api/v1/invitelink/**
   ```
3. Add CORS config (since frontend hits gateway only)
4. Dockerfile it, deploy to EC2

---

## Teammate Microservices

> **All three services below follow the same pattern.** Each gets the same base dependencies and the same JWT security setup. The only differences are the domain logic, endpoints, and which Feign clients they need.

### Common Dependencies (All 3 Services)

**Spring Initializr:**
- Spring Web
- Spring Security
- Spring Data MongoDB
- Eureka Discovery Client
- OpenFeign
- Spring Boot DevTools

**Manually add to `pom.xml`:**
```xml
<!-- JWT -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.6</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>
```

### Common Setup (All 3 Services)

Each service needs these **copied/adapted from the monolith**:
- `JwtUtil.java` — token validation (same across all services)
- `JwtAuthenticationFilter.java` — extracts & validates JWT from `Authorization` header
- `SecurityConfig.java` — customized per service for which routes are public vs protected
- `GlobalExceptionHandler.java` — shared error handling pattern

Each service's `application.properties` must include:
```properties
# JWT (same secret across ALL services)
jwt.secret=<SAME_SECRET_AS_AUTH_SERVICE>
jwt.expiration=86400000

# MongoDB (change DB name per service)
spring.data.mongodb.uri=mongodb://localhost:27017/<service-specific-db-name>

# Eureka
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/

# Service name (change per service)
spring.application.name=<service-name>
```

Each service's main class needs:
```java
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
```

---

### Calendar Service (`:8083`)

**Database:** `calendario-calendars`

**Endpoints (from monolith):**
- `POST /api/v1/calendars` — create calendar
- `GET /api/v1/calendars` — get user's calendars (homepage)
- `GET /api/v1/calendars/{id}` — get calendar by ID with events/polls
- `PATCH /api/v1/calendars/{id}` — update calendar
- `DELETE /api/v1/calendars/{id}` — delete calendar

**Models:** `Calendar`

**Feign Clients Needed:**
```java
@FeignClient("user-service")
public interface UserClient {
    @GetMapping("/api/v1/users/{id}")
    UserResponseDTO getUserById(@PathVariable String id, @RequestHeader("Authorization") String token);
}
```
- Calls **user-service** to look up users, update calendar memberships on user documents

**Steps:**
1. Generate project, add dependencies
2. Copy `Calendar` model from monolith, adapt for own DB
3. Copy `CalendarRepository` from monolith
4. Copy `CalendarController` and `CalendarService` — refactor all `userService.xxx()` calls to use Feign client instead
5. Copy JWT security classes (`JwtUtil`, `JwtAuthenticationFilter`, `SecurityConfig`)
6. Configure `SecurityConfig` — all endpoints authenticated
7. Copy relevant DTOs and exceptions
8. Write JUnit5/Mockito tests for `CalendarService`
9. Create Dockerfile
10. Create Postman collection for calendar endpoints
11. JMeter load test

---

### Event Service (`:8084`)

**Database:** `calendario-events`

**Endpoints (from monolith):**
- `POST /api/v1/events` — create event
- `GET /api/v1/events/{id}` — get event
- `PATCH /api/v1/events/{id}` — update event
- `DELETE /api/v1/events/{id}` — delete event
- `POST /api/v1/invite` — generate invite link for event or poll (authenticated)
- `GET /api/v1/invitelink` — view event/poll by invite token (public, no JWT)

**Note:** Invite logic from the monolith's `InviteService` lives here. It handles invite links for both events and polls. For poll invites, it calls poll-service via Feign.

**Models:** `Event`, `InviteLink`

**Feign Clients Needed:**
```java
@FeignClient("user-service")
public interface UserClient {
    // look up user for authorization checks
}

@FeignClient("calendar-service")
public interface CalendarClient {
    // verify user is member/admin of calendar before creating event
}

@FeignClient("poll-service")
public interface PollClient {
    // for invite links: look up poll by ID, save invite token to poll
}
```
- Calls **user-service** to validate the authenticated user
- Calls **calendar-service** to check calendar membership/admin status
- Calls **poll-service** for poll invite link generation/lookup

**Steps:**
1. Generate project, add dependencies
2. Copy `Event` model from monolith
3. Copy `EventRepository`
4. Copy `EventController` and `EventService` — refactor `calendarService.xxx()` and `userService.xxx()` calls to Feign clients
5. Copy `InviteController` and `InviteService` — refactor to Feign clients for poll lookups
6. Copy JWT security classes
7. Configure `SecurityConfig` — permit `GET /api/v1/invitelink**` (public), authenticate everything else
8. Copy relevant DTOs and exceptions
9. Write JUnit5/Mockito tests for `EventService`
10. Create Dockerfile
11. Create Postman collection
12. JMeter load test

---

### Poll Service (`:8085`)

**Database:** `calendario-polls`

**Endpoints (from monolith):**
- `POST /api/v1/polls` — create poll
- `GET /api/v1/polls/{id}` — get poll
- `PATCH /api/v1/polls/{id}` — update poll
- `DELETE /api/v1/polls/{id}` — delete poll
- `POST /api/v1/polls/{id}/vote` — vote on poll

**Models:** `Poll`

**Feign Clients Needed:**
```java
@FeignClient("user-service")
public interface UserClient { ... }

@FeignClient("calendar-service")
public interface CalendarClient { ... }
```
- Same pattern as Event Service — needs user validation and calendar membership checks

**Steps:**
1. Generate project, add dependencies
2. Copy `Poll` model from monolith
3. Copy `PollRepository`
4. Copy `PollsController` and `PollService` — refactor to Feign clients
5. Copy JWT security classes
6. Configure `SecurityConfig` — all endpoints authenticated
7. Copy relevant DTOs and exceptions
8. Write JUnit5/Mockito tests for `PollService`
9. Create Dockerfile
10. Create Postman collection
11. JMeter load test

---

## Feign Client Tip: Passing the JWT

When Service A calls Service B via Feign, the JWT doesn't forward automatically. Add a Feign request interceptor in each service:

```java
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
```

This grabs the incoming JWT from the original request and attaches it to outgoing Feign calls.

---

## Startup Order

1. `eureka-server` (wait for it to be up)
2. `api-gateway` + all microservices (any order, they retry Eureka registration)

## Quick Port Reference

| Service | Port | DB Name |
|---|---|---|
| eureka-server | 8761 | — |
| api-gateway | 8080 | — |
| auth-service | 8081 | calendario-auth |
| user-service | 8082 | calendario-users |
| calendar-service | 8083 | calendario-calendars |
| event-service | 8084 | calendario-events |
| poll-service | 8085 | calendario-polls |
