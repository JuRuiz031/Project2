import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-CV6DAH2P.js";
import {
  UserApiService,
  init_user_api_service
} from "./chunk-JPU7CSC5.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-52DSKCZD.js";
import "./chunk-5EHNMWHP.js";
import "./chunk-FYSHOF5T.js";

// src/app/shared/services/api/user-api.service.spec.ts
init_testing();
init_user_api_service();
describe("UserApiService", () => {
  let service;
  let httpMock;
  const baseUrl = "http://localhost:8080/api/v1";
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserApiService]
    });
    service = TestBed.inject(UserApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("login() should POST /login and return LoginSuccessDTO", () => {
    const body = { username: "alice_c", password: "password123" };
    const mockResponse = {
      token: "fake.jwt.token",
      user: { user_id: "3", username: "alice_c", email: "alice@example.com" },
      expires_at: "2024-04-01T12:00:00Z"
    };
    service.login(body).subscribe((res) => {
      expect(res.token).toBe("fake.jwt.token");
      expect(res.user.user_id).toBe("3");
      expect(res.user.username).toBe("alice_c");
    });
    const req = httpMock.expectOne(`${baseUrl}/login`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(body);
    req.flush(mockResponse);
  });
  it("getLoginStatus() should GET /login", () => {
    const mockStatus = {
      authenticated: true,
      user: { user_id: "3", username: "alice_c" },
      token_expires_at: "2024-04-01T12:00:00Z"
    };
    service.getLoginStatus().subscribe((res) => {
      expect(res.authenticated).toBe(true);
      expect(res.user?.user_id).toBe("3");
      expect(res.user?.username).toBe("alice_c");
      expect(res.token_expires_at).toBe("2024-04-01T12:00:00Z");
    });
    const req = httpMock.expectOne(`${baseUrl}/login`);
    expect(req.request.method).toBe("GET");
    req.flush(mockStatus);
  });
  it("register() should POST /users and return UserResponseDTO", () => {
    const dto = {
      username: "new_user",
      email: "new_user@example.com",
      password: "password123"
    };
    const mockResponse = {
      user_id: "10",
      username: "new_user",
      email: "new_user@example.com"
    };
    service.register(dto).subscribe((res) => {
      expect(res.user_id).toBe("10");
      expect(res.username).toBe("new_user");
      expect(res.email).toBe("new_user@example.com");
    });
    const req = httpMock.expectOne(`${baseUrl}/users`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
  it("getUserById() should GET /users/{id}", () => {
    const mockResponse = {
      user_id: "3",
      username: "alice_c",
      email: "alice@example.com"
    };
    service.getUserById("3").subscribe((res) => {
      expect(res.user_id).toBe("3");
      expect(res.email).toBe("alice@example.com");
    });
    const req = httpMock.expectOne(`${baseUrl}/users/3`);
    expect(req.request.method).toBe("GET");
    req.flush(mockResponse);
  });
  it("updateUser() should PATCH /users/{id}", () => {
    const dto = { email: "alice2@example.com" };
    const mockResponse = {
      user_id: "3",
      username: "alice_c",
      email: "alice2@example.com"
    };
    service.updateUser("3", dto).subscribe((res) => {
      expect(res.user_id).toBe("3");
      expect(res.email).toBe("alice2@example.com");
    });
    const req = httpMock.expectOne(`${baseUrl}/users/3`);
    expect(req.request.method).toBe("PATCH");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
  it("deleteUser() should DELETE /users/{id}", () => {
    const mockResponse = { user_id: "3", deleted: true };
    service.deleteUser("3").subscribe((res) => {
      expect(res.user_id).toBe("3");
      expect(res.deleted).toBe(true);
    });
    const req = httpMock.expectOne(`${baseUrl}/users/3`);
    expect(req.request.method).toBe("DELETE");
    req.flush(mockResponse);
  });
});
//# sourceMappingURL=spec-app-shared-services-api-user-api.service.spec.js.map
