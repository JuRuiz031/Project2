# Project2 - Calendario Microservices

## Branch Structure
- **monolith**: Contains the original Project1 monolith application as a reference
- **dev**: Main development branch for microservices
- **auth-microservice**: Auth service implementation (credentials & JWT)
- **user-microservice**: User service implementation (profiles, calendar membership, Feign → auth-service)

## Purpose
Microservices architecture for the Calendario app. Will be deployed to AWS (EC2 containers, S3 for frontend) with Jenkins CI/CD.

The frontend will remain as a monolithic Angular application (no micro-frontend architecture).

> **For detailed setup instructions, Feign client patterns, and inter-service communication, see [MICROSERVICES-GUIDE.md](MICROSERVICES-GUIDE.md).**

---

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

---

## Microservices Overview

### Auth Service (Port: 8081)
Handles authentication credentials (username, password) and JWT token generation/validation.

**For Frontend:**
- **Registration**: Call `POST /api/v1/users/register` on **user-service** (which coordinates with auth-service internally)
- **Login**: `POST /api/v1/login` with credentials → receive JWT token
- **Check Token Status**: `GET /api/v1/login` with Authorization header → check if token is still valid

**For Backend Services:**
- **Registration**: User-service calls auth-service internally via Feign to create credentials
- **JWT Validation**: Validate tokens locally using the shared JWT secret (no need to call auth-service)
- **Do NOT call** `/api/v1/credentials` endpoints directly — those are internal to user-service ↔ auth-service communication

**Database**: MongoDB (`calendario-auth`)

---

### User Service (Port: 8082)
Handles user profiles, calendar membership tracking, and coordinates with auth-service for registration/credential management.

**For Frontend (via API Gateway):**
- `POST /api/v1/users/register` — register new user (public, no JWT needed)
- `GET /api/v1/users/{id}` — get your own profile (JWT required)
- `PATCH /api/v1/users/{id}` — update your profile (JWT required)
- `DELETE /api/v1/users/{id}` — delete your account (JWT required)

**For Backend Services (internal Feign calls, no JWT needed):**
- `GET /api/v1/internal/users/{userId}` — look up a user by ID
- `POST /api/v1/internal/users/{userId}/calendars` — add calendar membership to user
- `DELETE /api/v1/internal/users/{userId}/calendars/{calendarId}` — remove calendar membership
- `GET /api/v1/internal/users/{userId}/calendars` — get user's calendar IDs
- `GET /api/v1/internal/users/{userId}/calendars/{calendarId}/membership` — check membership & admin status

**Database**: MongoDB (`calendario-users`)

---

### Shared JWT Configuration (ALL Services)

Every microservice **must** share the exact same JWT secret. Tokens issued by auth-service must be validatable by all other services.

**application.properties** (copy these exact values):
```properties
jwt.secret=your-super-secret-jwt-key-change-this-in-production
jwt.expiration=86400000
```

**Required Classes** (copy from auth-service or user-service):
- `JwtUtil.java` — validates JWT tokens
- `JwtAuthenticationFilter.java` — extracts tokens from request headers
- `SecurityConfig.java` — configure which endpoints need authentication (customize per service)
- `GlobalExceptionHandler.java` — shared error handling pattern
- `FeignAuthInterceptor.java` — auto-forwards JWT on outgoing Feign calls (copy from user-service)

**Dependencies needed:**
- `spring-boot-starter-security`
- `jjwt-api`, `jjwt-impl`, `jjwt-jackson` (version 0.12.6)
- `spring-cloud-starter-openfeign` (for inter-service calls)
- `spring-cloud-starter-netflix-eureka-client` (for service discovery)

**Note**: Only auth-service needs `BCryptPasswordEncoder` for password hashing.

---

### Remaining Services (Teammate Responsibility)
- **Calendar Service (Port: 8083)** — calendar CRUD, calls user-service internally
- **Event Service (Port: 8084)** — event CRUD + invite links, calls user-service & calendar-service
- **Poll Service (Port: 8085)** — poll CRUD + voting, calls user-service & calendar-service

See [MICROSERVICES-GUIDE.md](MICROSERVICES-GUIDE.md) for detailed instructions on each service.