import {
  HttpTestingController,
  provideHttpClientTesting
} from "./chunk-CV6DAH2P.js";
import {
  Router,
  init_router
} from "./chunk-LOQZ2SCF.js";
import "./chunk-G625OUTR.js";
import {
  HttpClient,
  init_http,
  provideHttpClient,
  withInterceptors
} from "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  catchError,
  init_core,
  init_esm,
  inject,
  throwError
} from "./chunk-5EHNMWHP.js";
import "./chunk-FYSHOF5T.js";

// src/app/shared/interceptors/auth.interceptor.spec.ts
init_testing();
init_http();

// src/app/shared/interceptors/auth.interceptor.ts
init_core();
init_router();
init_esm();
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const isPublicEndpoint = req.method === "POST" && req.url.endsWith("/api/v1/users") || req.method === "POST" && req.url.endsWith("/api/v1/login") || req.method === "POST" && req.url.includes("/api/v1/invites/events/guest/");
  if (isPublicEndpoint) {
    return next(req);
  }
  const token = localStorage.getItem("token");
  if (!token) {
    return next(req);
  }
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      console.warn("[Auth] Unauthorized - logging out...");
      localStorage.clear();
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/shared/interceptors/auth.interceptor.spec.ts
describe("authInterceptor", () => {
  let http;
  let httpMock;
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting()
      ]
    });
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });
  it("should NOT add Authorization header for POST /api/v1/login (public endpoint)", () => {
    localStorage.setItem("token", "abc123");
    http.post("http://localhost:8080/api/v1/login", { username: "a", password: "b" }).subscribe();
    const req = httpMock.expectOne("http://localhost:8080/api/v1/login");
    expect(req.request.method).toBe("POST");
    expect(req.request.headers.has("Authorization")).toBe(false);
    req.flush({ ok: true });
  });
  it("should NOT add Authorization header for POST /api/v1/users (public endpoint)", () => {
    localStorage.setItem("token", "abc123");
    http.post("http://localhost:8080/api/v1/users", { username: "a", email: "e", password: "b" }).subscribe();
    const req = httpMock.expectOne("http://localhost:8080/api/v1/users");
    expect(req.request.method).toBe("POST");
    expect(req.request.headers.has("Authorization")).toBe(false);
    req.flush({ ok: true });
  });
  it("should add Authorization header for non-public endpoints when token exists", () => {
    localStorage.setItem("token", "abc123");
    http.get("http://localhost:8080/api/v1/calendar").subscribe();
    const req = httpMock.expectOne("http://localhost:8080/api/v1/calendar");
    expect(req.request.method).toBe("GET");
    expect(req.request.headers.get("Authorization")).toBe("Bearer abc123");
    req.flush({ ok: true });
  });
  it("should add Authorization header for GET /api/v1/login when token exists (NOT a public POST endpoint)", () => {
    localStorage.setItem("token", "abc123");
    http.get("http://localhost:8080/api/v1/login").subscribe();
    const req = httpMock.expectOne("http://localhost:8080/api/v1/login");
    expect(req.request.method).toBe("GET");
    expect(req.request.headers.get("Authorization")).toBe("Bearer abc123");
    req.flush({ ok: true });
  });
  it("should NOT add Authorization header when token does not exist", () => {
    http.get("http://localhost:8080/api/v1/calendar").subscribe();
    const req = httpMock.expectOne("http://localhost:8080/api/v1/calendar");
    expect(req.request.method).toBe("GET");
    expect(req.request.headers.has("Authorization")).toBe(false);
    req.flush({ ok: true });
  });
});
//# sourceMappingURL=spec-app-shared-interceptors-auth.interceptor.spec.js.map
