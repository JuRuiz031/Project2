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
import "./chunk-LOQZ2SCF.js";
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
  Subject,
  finalize,
  init_core,
  init_esm,
  inject,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/auth/create-account/create-account.ts
function CreateAccount_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
var CreateAccount;
var init_create_account = __esm({
  "src/app/features/auth/create-account/create-account.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_esm();
    init_user_api_service();
    init_navigation_service();
    init_core();
    init_forms();
    CreateAccount = class _CreateAccount {
      fb = inject(FormBuilder);
      navigation = inject(NavigationService);
      userApi = inject(UserApiService);
      form = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
        email: ["", [Validators.required, Validators.email, Validators.maxLength(120)]],
        password: ["", [Validators.required, Validators.minLength(8)]]
      });
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      hasError(name) {
        const c = this.form.get(name);
        return !!c && c.touched && c.invalid;
      }
      createAccount() {
        this.apiError.set("");
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          this.apiError.set("Please fix validation errors.");
          return;
        }
        const raw = this.form.getRawValue();
        const dto = {
          username: String(raw.name ?? ""),
          email: String(raw.email ?? ""),
          password: String(raw.password ?? "")
        };
        this.isSubmitting.set(true);
        this.userApi.register(dto).pipe(finalize(() => this.isSubmitting.set(false))).subscribe({
          next: () => {
            this.navigation.goToLogin();
          },
          error: (err) => {
            const message = err?.error && typeof err.error === "string" && err.error || err?.error?.message || err?.message;
            this.apiError.set(message || "Failed to create account. Please try again.");
          }
        });
      }
      cancel() {
        this.navigation.goToLogin();
      }
      static \u0275fac = function CreateAccount_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CreateAccount)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateAccount, selectors: [["app-create-account"]], decls: 31, vars: 10, consts: [[1, "container", "py-4", "app-page"], [1, "h3", "mb-3"], [1, "card", "app-card", "shadow-sm"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "d-flex", "flex-column", "gap-3"], [1, "form-label"], ["type", "text", "formControlName", "name", "placeholder", "Choose a username", 1, "form-control", "app-input"], [1, "invalid-feedback"], ["type", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control", "app-input"], ["type", "password", "formControlName", "password", "placeholder", "At least 8 characters", 1, "form-control", "app-input"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "card-footer", "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]], template: function CreateAccount_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
          \u0275\u0275text(2, "Create Account");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div")(8, "label", 6);
          \u0275\u0275text(9, "Username");
          \u0275\u0275elementEnd();
          \u0275\u0275element(10, "input", 7);
          \u0275\u0275elementStart(11, "div", 8);
          \u0275\u0275text(12, "Username is required.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(13, "div")(14, "label", 6);
          \u0275\u0275text(15, "Email");
          \u0275\u0275elementEnd();
          \u0275\u0275element(16, "input", 9);
          \u0275\u0275elementStart(17, "div", 8);
          \u0275\u0275text(18, "Enter a valid email.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(19, "div")(20, "label", 6);
          \u0275\u0275text(21, "Password");
          \u0275\u0275elementEnd();
          \u0275\u0275element(22, "input", 10);
          \u0275\u0275elementStart(23, "div", 8);
          \u0275\u0275text(24, " Password must be at least 8 characters. ");
          \u0275\u0275elementEnd()()();
          \u0275\u0275conditionalCreate(25, CreateAccount_Conditional_25_Template, 2, 1, "div", 11);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(26, "div", 12)(27, "button", 13);
          \u0275\u0275listener("click", function CreateAccount_Template_button_click_27_listener() {
            return ctx.cancel();
          });
          \u0275\u0275text(28, " Cancel ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(29, "button", 14);
          \u0275\u0275listener("click", function CreateAccount_Template_button_click_29_listener() {
            return ctx.createAccount();
          });
          \u0275\u0275text(30);
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(5);
          \u0275\u0275property("formGroup", ctx.form);
          \u0275\u0275advance(5);
          \u0275\u0275classProp("is-invalid", ctx.hasError("name"));
          \u0275\u0275advance(6);
          \u0275\u0275classProp("is-invalid", ctx.hasError("email"));
          \u0275\u0275advance(6);
          \u0275\u0275classProp("is-invalid", ctx.hasError("password"));
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.apiError() ? 25 : -1);
          \u0275\u0275advance(4);
          \u0275\u0275property("disabled", ctx.isSubmitting());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Creating..." : "Create Account", " ");
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=create-account.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateAccount, [{
        type: Component,
        args: [{ selector: "app-create-account", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="container py-4 app-page">
  <h1 class="h3 mb-3">Create Account</h1>

  <div class="card app-card shadow-sm">
    <div class="card-body">
      <form [formGroup]="form" novalidate>
        <div class="d-flex flex-column gap-3">
          <!-- Username -->
          <div>
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control app-input"
              formControlName="name"
              placeholder="Choose a username"
              [class.is-invalid]="hasError('name')"
            />
            <div class="invalid-feedback">Username is required.</div>
          </div>

          <!-- Email -->
          <div>
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control app-input"
              formControlName="email"
              placeholder="name@example.com"
              [class.is-invalid]="hasError('email')"
            />
            <div class="invalid-feedback">Enter a valid email.</div>
          </div>

          <!-- Password -->
          <div>
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control app-input"
              formControlName="password"
              placeholder="At least 8 characters"
              [class.is-invalid]="hasError('password')"
            />
            <div class="invalid-feedback">
              Password must be at least 8 characters.
            </div>
          </div>
        </div>

        @if (apiError()) {
          <div class="alert alert-danger mt-3 mb-0">
            {{ apiError() }}
          </div>
        }
      </form>
    </div>

    <!-- Footer actions -->
    <div class="card-footer d-flex justify-content-end gap-2">
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="cancel()"
      >
        Cancel
      </button>

      <button
        class="btn btn-primary"
        type="button"
        (click)="createAccount()"
        [disabled]="isSubmitting()"
      >
        {{ isSubmitting() ? 'Creating...' : 'Create Account' }}
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/auth/create-account/create-account.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=create-account.css.map */\n"] }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateAccount, { className: "CreateAccount", filePath: "src/app/features/auth/create-account/create-account.ts", lineNumber: 16 });
    })();
  }
});

// src/app/features/auth/create-account/create-account.spec.ts
var require_create_account_spec = __commonJS({
  "src/app/features/auth/create-account/create-account.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_create_account();
    init_user_api_service();
    init_navigation_service();
    describe("CreateAccount", () => {
      let fixture;
      let component;
      let navigationMock;
      let userApiMock;
      beforeEach(() => __async(null, null, function* () {
        navigationMock = jasmine.createSpyObj("NavigationService", ["goToLogin"]);
        userApiMock = jasmine.createSpyObj("UserApiService", ["register"]);
        yield TestBed.configureTestingModule({
          imports: [CreateAccount],
          providers: [
            { provide: NavigationService, useValue: navigationMock },
            { provide: UserApiService, useValue: userApiMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateAccount);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should block submission when form is invalid, show validation apiError, and not call register()", () => {
        component.form.patchValue({ name: "", email: "bad", password: "123" });
        component.createAccount();
        fixture.detectChanges();
        expect(component.form.invalid).toBe(true);
        expect(component.apiError()).toBe("Please fix validation errors.");
        expect(userApiMock.register).not.toHaveBeenCalled();
        const alert = fixture.nativeElement.querySelector(".alert.alert-danger");
        expect(alert).toBeTruthy();
      });
      it("should call UserApiService.register with correct DTO mapping (name -> username) and navigate on success", () => {
        const subj = new Subject();
        userApiMock.register.and.returnValue(subj.asObservable());
        component.form.patchValue({
          name: "Alice C",
          email: "alice@example.com",
          password: "password123"
        });
        component.createAccount();
        expect(component.isSubmitting()).toBe(true);
        expect(component.apiError()).toBe("");
        expect(userApiMock.register).toHaveBeenCalledTimes(1);
        expect(userApiMock.register).toHaveBeenCalledWith({
          username: "Alice C",
          email: "alice@example.com",
          password: "password123"
        });
        subj.next({ user_id: "u1" });
        subj.complete();
        fixture.detectChanges();
        expect(component.isSubmitting()).toBe(false);
        expect(navigationMock.goToLogin).toHaveBeenCalledTimes(1);
      });
      it("should handle API error response: show apiError, stop submitting, and not navigate", () => {
        userApiMock.register.and.returnValue(throwError(() => ({ error: { message: "Username already exists" } })));
        component.form.patchValue({
          name: "Alice C",
          email: "alice@example.com",
          password: "password123"
        });
        component.createAccount();
        fixture.detectChanges();
        expect(component.isSubmitting()).toBe(false);
        expect(component.apiError()).toBe("Username already exists");
        expect(navigationMock.goToLogin).not.toHaveBeenCalled();
        const alert = fixture.nativeElement.querySelector(".alert.alert-danger");
        expect(alert).toBeTruthy();
      });
      it("cancel() should navigate back to /login", () => {
        component.cancel();
        expect(navigationMock.goToLogin).toHaveBeenCalledTimes(1);
      });
    });
  }
});
export default require_create_account_spec();
//# sourceMappingURL=spec-app-features-auth-create-account-create-account.spec.js.map
