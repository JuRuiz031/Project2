import {
  RouterTestingModule,
  init_testing as init_testing2
} from "./chunk-GDINLYB5.js";
import "./chunk-WXXO5RLW.js";
import {
  BRAND_CONFIG,
  init_brand_config
} from "./chunk-7G4T4RDU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  init_forms,
  ɵNgNoValidate
} from "./chunk-RYBDXJGT.js";
import {
  NavigationService,
  init_navigation_service
} from "./chunk-RFKE2Q4H.js";
import {
  UserApiService,
  init_user_api_service
} from "./chunk-JPU7CSC5.js";
import {
  RouterLink,
  init_router
} from "./chunk-LOQZ2SCF.js";
import "./chunk-G625OUTR.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  Component,
  init_core,
  init_esm,
  inject,
  of,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import "./chunk-FYSHOF5T.js";

// src/app/features/auth/login/login.spec.ts
init_testing();
init_testing2();
init_esm();

// src/app/features/auth/login/login.ts
init_common();
init_core();
init_router();
init_forms();
init_brand_config();
init_user_api_service();
init_navigation_service();
init_core();
init_forms();
function Login_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Username must be at least 3 characters");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Password must be at least 5 characters");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
var Login = class _Login {
  BYPASS_AUTH = false;
  userApi = inject(UserApiService);
  navigation = inject(NavigationService);
  fb = inject(FormBuilder);
  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", [Validators.required, Validators.minLength(5)]]
  });
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  siteName = BRAND_CONFIG.siteName;
  onLogin(event) {
    event?.preventDefault();
    this.errorMessage.set("");
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.BYPASS_AUTH) {
      localStorage.setItem("token", "dev-bypass-token");
      localStorage.setItem("user", JSON.stringify({
        user_id: 0,
        username: String(this.form.value.username ?? "dev"),
        email: "dev@example.com",
        is_superuser: true
      }));
      this.navigation.goToHome();
      return;
    }
    const dto = {
      username: String(this.form.value.username ?? ""),
      password: String(this.form.value.password ?? "")
    };
    this.userApi.login(dto).subscribe({
      next: (response) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("expiresAt", response.expires_at);
        this.navigation.goToHome();
      },
      error: (err) => {
        if ([401, 403].includes(err?.status)) {
          this.errorMessage.set("Invalid username or password");
        } else {
          this.errorMessage.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Login failed");
        }
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 31, vars: 8, consts: [[1, "page-container"], [1, "container", "py-4", "d-flex", "flex-column", "align-items-center", "gap-3"], [1, "card", "title-box", "shadow-sm", "w-100"], [1, "card-body", "text-center", "py-3"], [1, "m-0"], [1, "card", "login-box", "shadow-sm", "w-100"], [1, "card-body", "p-4"], [1, "welcome-text", "text-center", "mb-3"], [1, "text-center", "mb-3"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "placeholder", "Enter username", "formControlName", "username", 1, "form-control", "app-input"], [1, "error-text"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "placeholder", "Enter password", "formControlName", "password", 1, "form-control", "app-input"], [1, "alert", "alert-danger", "mb-3"], [1, "d-grid", "gap-2", "justify-content-center"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sign-in"], ["type", "button", "routerLink", "/create-account", 1, "btn", "btn-primary", "btn-create"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "p", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h2", 8);
      \u0275\u0275text(11, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "form", 9);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_12_listener($event) {
        return ctx.onLogin($event);
      });
      \u0275\u0275elementStart(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 12);
      \u0275\u0275conditionalCreate(17, Login_Conditional_17_Template, 2, 0, "span", 13);
      \u0275\u0275conditionalCreate(18, Login_Conditional_18_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10)(20, "label", 14);
      \u0275\u0275text(21, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275conditionalCreate(23, Login_Conditional_23_Template, 2, 0, "span", 13);
      \u0275\u0275conditionalCreate(24, Login_Conditional_24_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, Login_Conditional_25_Template, 2, 1, "div", 16);
      \u0275\u0275elementStart(26, "div", 17)(27, "button", 18);
      \u0275\u0275text(28, " Sign In ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 19);
      \u0275\u0275text(30, " Create Account ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.siteName);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Welcome to ", ctx.siteName, "! Please sign in or create an account to manage your schedule. ");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_3_0 = ctx.form.get("username")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("username")) == null ? null : tmp_3_0.hasError("required")) ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.form.get("username")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.form.get("username")) == null ? null : tmp_4_0.hasError("minlength")) ? 18 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.hasError("required")) ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.form.get("password")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.form.get("password")) == null ? null : tmp_6_0.hasError("minlength")) ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 25 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 32px 16px;\n  background:\n    radial-gradient(\n      circle at top,\n      var(--color-background-secondary) 0%,\n      var(--color-background-primary) 55%,\n      var(--color-background-primary) 100%);\n  color: var(--color-text-primary);\n}\n.title-box[_ngcontent-%COMP%], \n.login-box[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n  border: 2px solid var(--color-border-default);\n  background: var(--color-background-secondary);\n}\n.title-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--color-text-primary);\n}\n.login-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-text-primary);\n}\n.welcome-text[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  line-height: 1.35;\n}\n.error-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6px;\n  color: var(--color-feedback-error);\n  font-size: 12px;\n}\n.app-input[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-default);\n  background: var(--color-background-primary);\n  color: var(--color-text-primary);\n}\n.btn-sign-in[_ngcontent-%COMP%], \n.btn-create[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 36px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, RouterLink, ReactiveFormsModule], template: `<div class="page-container">
  <div class="container py-4 d-flex flex-column align-items-center gap-3">

    <!-- Title Card -->
    <div class="card title-box shadow-sm w-100">
      <div class="card-body text-center py-3">
        <h1 class="m-0">{{ siteName }}</h1>
      </div>
    </div>

    <!-- Login Card -->
    <div class="card login-box shadow-sm w-100">
      <div class="card-body p-4">

        <p class="welcome-text text-center mb-3">
          Welcome to {{ siteName }}! Please sign in or create an account to manage your schedule.
        </p>

        <h2 class="text-center mb-3">Sign In</h2>

        <form [formGroup]="form" (ngSubmit)="onLogin($event)">

          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              class="form-control app-input"
              placeholder="Enter username"
              formControlName="username"
            >
            @if (form.get('username')?.touched && form.get('username')?.hasError('required')) {
              <span class="error-text">Username is required</span>
            }
            @if (form.get('username')?.touched && form.get('username')?.hasError('minlength')) {
              <span class="error-text">Username must be at least 3 characters</span>
            }
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              class="form-control app-input"
              placeholder="Enter password"
              formControlName="password"
            >
            @if (form.get('password')?.touched && form.get('password')?.hasError('required')) {
              <span class="error-text">Password is required</span>
            }
            @if (form.get('password')?.touched && form.get('password')?.hasError('minlength')) {
              <span class="error-text">Password must be at least 5 characters</span>
            }
          </div>

          @if (errorMessage()) {
            <div class="alert alert-danger mb-3">
              {{ errorMessage() }}
            </div>
          }

          <!-- Stacked buttons (like old) -->
          <div class="d-grid gap-2 justify-content-center">
            <button type="submit" class="btn btn-outline-primary btn-sign-in">
              Sign In
            </button>

            <button type="button" class="btn btn-primary btn-create" routerLink="/create-account">
              Create Account
            </button>
          </div>

        </form>

      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/auth/login/login.css */\n.page-container {\n  min-height: 100vh;\n  padding: 32px 16px;\n  background:\n    radial-gradient(\n      circle at top,\n      var(--color-background-secondary) 0%,\n      var(--color-background-primary) 55%,\n      var(--color-background-primary) 100%);\n  color: var(--color-text-primary);\n}\n.title-box,\n.login-box {\n  max-width: 520px;\n  margin: 0 auto;\n  border: 2px solid var(--color-border-default);\n  background: var(--color-background-secondary);\n}\n.title-box h1 {\n  font-size: 32px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--color-text-primary);\n}\n.login-box h2 {\n  font-size: 20px;\n  color: var(--color-text-primary);\n}\n.welcome-text {\n  color: var(--color-text-secondary);\n  font-size: 13px;\n  line-height: 1.35;\n}\n.error-text {\n  display: inline-block;\n  margin-top: 6px;\n  color: var(--color-feedback-error);\n  font-size: 12px;\n}\n.app-input {\n  border: 1px solid var(--color-border-default);\n  background: var(--color-background-primary);\n  color: var(--color-text-primary);\n}\n.btn-sign-in,\n.btn-create {\n  width: 200px;\n  height: 36px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/features/auth/login/login.ts", lineNumber: 17 });
})();

// src/app/features/auth/login/login.spec.ts
init_user_api_service();
init_navigation_service();
describe("Login", () => {
  let fixture;
  let component;
  let userApiMock;
  let navigationMock;
  beforeEach(() => {
    localStorage.clear();
    userApiMock = jasmine.createSpyObj("UserApiService", ["login"]);
    navigationMock = jasmine.createSpyObj("NavigationService", ["goToHome"]);
    TestBed.configureTestingModule({
      imports: [
        Login,
        RouterTestingModule.withRoutes([])
        // ✅ provides Router + ActivatedRoute for routerLink
      ],
      providers: [
        { provide: UserApiService, useValue: userApiMock },
        { provide: NavigationService, useValue: navigationMock }
      ]
    });
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    localStorage.clear();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should not call login endpoint when form is invalid, and should mark controls as touched", () => {
    const touchedSpy = spyOn(component.form, "markAllAsTouched").and.callThrough();
    component.form.patchValue({ username: "", password: "" });
    component.onLogin();
    expect(userApiMock.login).not.toHaveBeenCalled();
    expect(touchedSpy).toHaveBeenCalled();
  });
  it("should call login endpoint with correct DTO and navigate on success", () => {
    userApiMock.login.and.returnValue(of({
      token: "t123",
      user: { user_id: 1, username: "alice" },
      expires_at: "2099-01-01T00:00:00Z"
    }));
    component.form.setValue({ username: "alice", password: "password" });
    component.onLogin();
    expect(userApiMock.login).toHaveBeenCalledWith({ username: "alice", password: "password" });
    expect(localStorage.getItem("token")).toBe("t123");
    expect(localStorage.getItem("expiresAt")).toBe("2099-01-01T00:00:00Z");
    expect(navigationMock.goToHome).toHaveBeenCalled();
  });
  it("should set errorMessage and not navigate when login endpoint fails (401/403 -> invalid username/password)", () => {
    userApiMock.login.and.returnValue(throwError(() => ({ status: 401 })));
    component.form.setValue({ username: "alice", password: "password" });
    component.onLogin();
    expect(navigationMock.goToHome).not.toHaveBeenCalled();
    expect(component.errorMessage()).toBe("Invalid username or password");
  });
  it("should set errorMessage using err.error.message for non-auth failures", () => {
    userApiMock.login.and.returnValue(throwError(() => ({
      status: 500,
      error: { message: "Server blew up" }
    })));
    component.form.setValue({ username: "alice", password: "password" });
    component.onLogin();
    expect(navigationMock.goToHome).not.toHaveBeenCalled();
    expect(component.errorMessage()).toBe("Server blew up");
  });
});
//# sourceMappingURL=spec-app-features-auth-login-login.spec.js.map
