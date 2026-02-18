# Project2 - Microservices Development Branch

This is the `dev` branch for developing the microservices architecture.

## Branch Structure
- **monolith**: Contains the original Project1 monolith application as a reference
- **dev**: Main development branch for microservices
- **auth-microservice**: Auth service implementation (credentials & JWT)

## Purpose
This branch will be used to develop and test microservices before deployment to AWS EC2 containers.

The frontend will remain as a monolithic application (no micro-frontend architecture).

## Microservices Architecture

### Auth Service (Port: TBD)
Handles authentication credentials (username, password) and JWT token generation/validation.

**For Frontend:**
- **Registration**: Call user-service registration endpoint (coming soon)
- **Login**: `POST /api/v1/login` with credentials → receive JWT token
- **Check Token Status**: `GET /api/v1/login` with Authorization header → check if token is still valid

**For Backend Services:**
- **Registration**: User-service calls auth-service internally to create credentials
- **JWT Validation**: Validate tokens locally using the shared JWT secret (no need to call auth-service)
- **Do NOT call** `/api/v1/credentials` endpoints directly - those are internal to user-service

**Database**: MongoDB (`calendario-auth`)
### Shared JWT Configuration (All Services)
Each microservice that needs to validate JWT tokens must include:

**application.properties** (copy these exact values):
```properties
jwt.secret=your-256-bit-secret-key-here-make-it-long-and-random-for-production
jwt.expiration=86400000
```

**Required Classes** (copy from auth-service):
- `JwtUtil.java` - validates JWT tokens
- `JwtAuthenticationFilter.java` - extracts tokens from requests
- `SecurityConfig.java` - configure which endpoints need authentication (customize per service)

**Dependencies needed:**
- `spring-boot-starter-security`
- `jjwt-api`, `jjwt-impl`, `jjwt-jackson` (version 0.12.6)

**Note**: Only auth-service needs `BCryptPasswordEncoder` for password hashing.

### User Service (Port: TBD)
Coming soon - handles user profiles and coordinates with auth-service for registration.