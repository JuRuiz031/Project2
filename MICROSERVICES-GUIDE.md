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

**Deployment Target:** AWS — EC2 containers for services, S3 for Angular frontend, Jenkins for CI/CD.

---

## Completed Services

### Auth Service (`:8081`) ✅
- Login (`POST /api/v1/login`), token status check (`GET /api/v1/login`)
- Internal credential CRUD (`/api/v1/credentials`) — called only by user-service via Feign
- JWT generation with BCrypt password hashing
- **Branch:** `auth-microservice`

### User Service (`:8082`) ✅
- User registration (`POST /api/v1/users/register`) — coordinates with auth-service
- User CRUD (`GET/PATCH/DELETE /api/v1/users/{id}`) — JWT protected
- Internal endpoints (`/api/v1/internal/**`) for calendar membership management — called by other services
- `FeignAuthInterceptor` for forwarding JWT on Feign calls
- **Branch:** `user-microservice`

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
- Spring Web (`spring-boot-starter-webmvc`)
- Spring Security (`spring-boot-starter-security`)
- Spring Data MongoDB (`spring-boot-starter-data-mongodb`)
- Eureka Discovery Client (`spring-cloud-starter-netflix-eureka-client`)
- OpenFeign (`spring-cloud-starter-openfeign`)
- Spring Boot DevTools
- Validation (`spring-boot-starter-validation`)

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

**Test dependencies (add to `pom.xml`):**
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-test</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-webmvc-test</artifactId>
    <scope>test</scope>
</dependency>
```

### Common Setup (All 3 Services)

Each service needs these **copied/adapted from user-service or auth-service**:

| File | Copy From | Notes |
|------|-----------|-------|
| `JwtUtil.java` | auth-service | Exact same file, same package structure |
| `JwtAuthenticationFilter.java` | user-service | Exact same file |
| `SecurityConfig.java` | user-service | **Customize** `permitAll()` routes per service |
| `GlobalExceptionHandler.java` | user-service | Same error handling pattern |
| `FeignAuthInterceptor.java` | user-service | **Required** — auto-forwards JWT on Feign calls |
| `ErrorResponse.java` | user-service | DTO for error responses |

Each service's `application.properties` must include:
```properties
# App
spring.application.name=<service-name>
server.port=<port-from-table-above>

# JWT — MUST be the exact same secret across ALL services
jwt.secret=your-super-secret-jwt-key-change-this-in-production
jwt.expiration=86400000

# MongoDB (change DB name per service)
spring.data.mongodb.uri=mongodb://localhost:27017/<service-specific-db-name>
spring.data.mongodb.auto-index-creation=true

# Eureka
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
eureka.instance.prefer-ip-address=true

# Feign timeouts
spring.cloud.openfeign.client.config.default.connect-timeout=5000
spring.cloud.openfeign.client.config.default.read-timeout=5000
```

> ⚠️ **CRITICAL**: The `jwt.secret` value MUST be identical across all services. If they don't match, tokens issued by auth-service won't validate in your service and every authenticated request will get a 401.
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

**Public Endpoints:**
- `POST /api/v1/calendars` — create calendar (authenticated)
- `GET /api/v1/calendars` — get user's calendars / homepage (authenticated)
- `GET /api/v1/calendars/{id}` — get calendar by ID with events/polls (authenticated)
- `PATCH /api/v1/calendars/{id}` — update calendar (admin only)
- `DELETE /api/v1/calendars/{id}` — delete calendar (admin only)

**Models:** `Calendar`

**Feign Client — User Service (internal endpoints, no JWT required):**
```java
@FeignClient("user-service")
public interface UserServiceClient {

    // Add calendar membership to user document
    @PostMapping("/api/v1/internal/users/{userId}/calendars")
    void addCalendarMembership(@PathVariable String userId,
                               @RequestBody CalendarMembershipDTO membership);

    // Remove calendar membership from user document
    @DeleteMapping("/api/v1/internal/users/{userId}/calendars/{calendarId}")
    void removeCalendarMembership(@PathVariable String userId,
                                  @PathVariable String calendarId);

    // Get user's calendar IDs (to build homepage)
    @GetMapping("/api/v1/internal/users/{userId}/calendars")
    List<String> getUserCalendarIds(@PathVariable String userId);

    // Check membership & admin status before allowing calendar operations
    @GetMapping("/api/v1/internal/users/{userId}/calendars/{calendarId}/membership")
    Map<String, Object> checkMembership(@PathVariable String userId,
                                        @PathVariable String calendarId);

    // Get user info (for display purposes)
    @GetMapping("/api/v1/internal/users/{userId}")
    UserResponseDTO getUser(@PathVariable String userId);
}
```

> **Note:** These `/api/v1/internal/**` endpoints are already built and live in user-service's `InternalUserController`. They are unauthenticated (no JWT needed) because they are only reachable via service-to-service calls through Eureka. The API Gateway should NOT route `/api/v1/internal/**` to prevent external access.

**Workflow — Creating a Calendar:**
1. User sends `POST /api/v1/calendars` with JWT
2. Calendar-service creates the calendar in its own DB
3. Calendar-service calls `POST /api/v1/internal/users/{userId}/calendars` on user-service to add the membership (with `is_admin: true` for the creator)

**Workflow — Deleting a Calendar:**
1. User sends `DELETE /api/v1/calendars/{id}` with JWT
2. Calendar-service calls `GET /api/v1/internal/users/{userId}/calendars/{calendarId}/membership` to verify admin status
3. Calendar-service deletes the calendar from its DB
4. Calendar-service calls `DELETE /api/v1/internal/users/{userId}/calendars/{calendarId}` for each member

**Steps:**
1. Generate project from start.spring.io (group: `com.calendario`, artifact: `calendar-service`)
2. Add all common dependencies + JWT dependencies
3. Copy security classes from user-service (`JwtUtil`, `JwtAuthenticationFilter`, `SecurityConfig`, `FeignAuthInterceptor`, `GlobalExceptionHandler`, `ErrorResponse`)
4. Create `Calendar` model adapted from monolith
5. Create `CalendarRepository` (extends `MongoRepository`)
6. Create the `UserServiceClient` Feign interface (above)
7. Create `CalendarService` — use Feign client for user membership operations instead of direct service calls
8. Create `CalendarController` with the endpoints listed above
9. Configure `SecurityConfig` — all `/api/v1/calendars/**` endpoints require authentication
10. Write JUnit5/Mockito unit tests (use `@WebMvcTest` for controller, `@ExtendWith(MockitoExtension.class)` for service)
11. Create Dockerfile
12. Create Postman collection
13. JMeter load test

---

### Event Service (`:8084`)

**Database:** `calendario-events`

**Public Endpoints:**
- `POST /api/v1/events` — create event (authenticated, must be calendar member)
- `GET /api/v1/events/{id}` — get event (authenticated)
- `PATCH /api/v1/events/{id}` — update event (authenticated, must be calendar admin)
- `DELETE /api/v1/events/{id}` — delete event (authenticated, must be calendar admin)
- `POST /api/v1/invite` — generate invite link for event or poll (authenticated)
- `GET /api/v1/invitelink` — view event/poll by invite token (**public, no JWT**)

**Note:** Invite logic from the monolith's `InviteService` lives here. It handles invite links for both events and polls. For poll invites, it calls poll-service via Feign.

**Models:** `Event`, `InviteLink`

**Feign Clients Needed:**
```java
@FeignClient("user-service")
public interface UserServiceClient {
    // Check membership in calendar before allowing event CRUD
    @GetMapping("/api/v1/internal/users/{userId}/calendars/{calendarId}/membership")
    Map<String, Object> checkMembership(@PathVariable String userId,
                                        @PathVariable String calendarId);
}

@FeignClient("calendar-service")
public interface CalendarServiceClient {
    // Get calendar details (to find which calendar an event belongs to)
    @GetMapping("/api/v1/calendars/{id}")
    CalendarResponseDTO getCalendar(@PathVariable String id);
}

@FeignClient("poll-service")
public interface PollServiceClient {
    // For invite links: look up poll by ID or save invite token to poll
    @GetMapping("/api/v1/polls/{id}")
    PollResponseDTO getPoll(@PathVariable String id);
}
```

**Workflow — Creating an Event:**
1. User sends `POST /api/v1/events` with JWT and `calendar_id`
2. Event-service calls user-service internal endpoint to verify user is a member of that calendar
3. Event-service creates the event in its own DB

**Steps:**
1. Generate project from start.spring.io (group: `com.calendario`, artifact: `event-service`)
2. Add all common dependencies + JWT dependencies
3. Copy security classes from user-service
4. Create `Event` and `InviteLink` models from monolith
5. Create repositories
6. Create Feign client interfaces (above)
7. Create `EventService` and `InviteService` — refactor monolith calls to Feign clients
8. Create `EventController` and `InviteController`
9. Configure `SecurityConfig` — permit `GET /api/v1/invitelink/**` (public), authenticate everything else
10. Write JUnit5/Mockito unit tests
11. Create Dockerfile
12. Create Postman collection
13. JMeter load test

---

### Poll Service (`:8085`)

**Database:** `calendario-polls`

**Public Endpoints:**
- `POST /api/v1/polls` — create poll (authenticated, must be calendar member)
- `GET /api/v1/polls/{id}` — get poll (authenticated)
- `PATCH /api/v1/polls/{id}` — update poll (authenticated, must be calendar admin)
- `DELETE /api/v1/polls/{id}` — delete poll (authenticated, must be calendar admin)
- `POST /api/v1/polls/{id}/vote` — vote on poll (authenticated, must be calendar member)

**Models:** `Poll`

**Feign Clients Needed:**
```java
@FeignClient("user-service")
public interface UserServiceClient {
    @GetMapping("/api/v1/internal/users/{userId}/calendars/{calendarId}/membership")
    Map<String, Object> checkMembership(@PathVariable String userId,
                                        @PathVariable String calendarId);
}

@FeignClient("calendar-service")
public interface CalendarServiceClient {
    @GetMapping("/api/v1/calendars/{id}")
    CalendarResponseDTO getCalendar(@PathVariable String id);
}
```

**Steps:**
1. Generate project from start.spring.io (group: `com.calendario`, artifact: `poll-service`)
2. Add all common dependencies + JWT dependencies
3. Copy security classes from user-service
4. Create `Poll` model from monolith
5. Create `PollRepository`
6. Create Feign client interfaces (above)
7. Create `PollService` — refactor monolith calls to Feign clients
8. Create `PollsController`
9. Configure `SecurityConfig` — all endpoints authenticated
10. Write JUnit5/Mockito unit tests
11. Create Dockerfile
12. Create Postman collection
13. JMeter load test

---

## Important Notes

### FeignAuthInterceptor (Already Implemented)

`FeignAuthInterceptor.java` is already built in user-service. **Copy it into every service that makes Feign calls.** It automatically grabs the incoming JWT from the original HTTP request and attaches it to outgoing Feign calls so you don't have to manually pass `@RequestHeader("Authorization")` everywhere.

```java
@Component
public class FeignAuthInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate template) {
        ServletRequestAttributes attrs =
            (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attrs != null) {
            String auth = attrs.getRequest().getHeader("Authorization");
            if (auth != null) {
                template.header("Authorization", auth);
            }
        }
    }
}
```

### Internal Endpoints — Security

The `/api/v1/internal/**` endpoints on user-service are **not** JWT-protected. They are meant for service-to-service communication only. Make sure the API Gateway does **NOT** route any `/api/v1/internal/**` paths, so these endpoints are unreachable from the public internet.

### Testing Tips (Spring Boot 4.0)

- **Controller tests**: Use `@WebMvcTest(YourController.class)` — import from `org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest` (Spring Boot 4.0 moved this package)
- **Service tests**: Use `@ExtendWith(MockitoExtension.class)` with `@Mock` / `@InjectMocks` — no Spring context needed
- **Mock beans**: Use `@MockitoBean` (not `@MockBean`, which is deprecated in Boot 4.0)
- **MongoDB exclusion**: If a test loads the full context, exclude MongoDB auto-config:
  ```java
  @SpringBootTest(properties = {
      "spring.autoconfigure.exclude=org.springframework.boot.mongodb.autoconfigure.MongoAutoConfiguration,"
      + "org.springframework.boot.data.mongodb.autoconfigure.DataMongoAutoConfiguration,"
      + "org.springframework.boot.data.mongodb.autoconfigure.DataMongoRepositoriesAutoConfiguration",
      "eureka.client.enabled=false"
  })
  ```

---

## Startup Order

1. **MongoDB** — must be running on `localhost:27017`
2. **eureka-server** — wait for dashboard at `http://localhost:8761`
3. **api-gateway** + all microservices (any order — they retry Eureka registration)

## Quick Port Reference

| Service | Port | DB Name | Status |
|---|---|---|---|
| eureka-server | 8761 | — | Not started |
| api-gateway | 8080 | — | Not started |
| auth-service | 8081 | calendario-auth | ✅ Done |
| user-service | 8082 | calendario-users | ✅ Done |
| calendar-service | 8083 | calendario-calendars | Teammate |
| event-service | 8084 | calendario-events | Teammate |
| poll-service | 8085 | calendario-polls | Teammate |
