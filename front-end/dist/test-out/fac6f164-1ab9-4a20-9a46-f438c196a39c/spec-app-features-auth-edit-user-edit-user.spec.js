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
  beforeEach,
  describe,
  globalExpect,
  init_dist,
  it,
  vi
} from "./chunk-OODRAGTF.js";
import {
  NavigationService,
  init_navigation_service
} from "./chunk-RFKE2Q4H.js";
import {
  UserApiService,
  init_user_api_service
} from "./chunk-JPU7CSC5.js";
import {
  Router,
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
  catchError,
  computed,
  finalize,
  init_core,
  init_esm,
  inject,
  of,
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
  __esm,
  __spreadValues
} from "./chunk-FYSHOF5T.js";

// src/app/features/auth/edit-user/edit-user.ts
function EditUser_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
var EditUser;
var init_edit_user = __esm({
  "src/app/features/auth/edit-user/edit-user.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_esm();
    init_user_api_service();
    init_navigation_service();
    init_core();
    init_forms();
    EditUser = class _EditUser {
      fb = inject(FormBuilder);
      navigation = inject(NavigationService);
      userApi = inject(UserApiService);
      form;
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
      userId = signal("", ...ngDevMode ? [{ debugName: "userId" }] : []);
      originalUsername = signal("", ...ngDevMode ? [{ debugName: "originalUsername" }] : []);
      originalEmail = signal("", ...ngDevMode ? [{ debugName: "originalEmail" }] : []);
      // Convert form value changes to a signal (initialized after form)
      formValues = signal({}, ...ngDevMode ? [{ debugName: "formValues" }] : []);
      // Computed: check if any actual changes were made
      hasChanges = computed(() => {
        const values = this.formValues();
        const currentName = values?.name || "";
        const currentEmail = values?.email || "";
        const newPassword = values?.newPassword || "";
        return currentName !== this.originalUsername() || currentEmail !== this.originalEmail() || newPassword.length > 0;
      }, ...ngDevMode ? [{ debugName: "hasChanges" }] : []);
      constructor() {
        this.form = this.fb.group({
          name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
          email: ["", [Validators.required, Validators.email, Validators.maxLength(120)]],
          currentPassword: ["", [Validators.required, Validators.minLength(8)]],
          newPassword: ["", [Validators.minLength(8)]]
        });
        this.form.valueChanges.subscribe((values) => {
          this.formValues.set(values);
        });
        this.loadUserData();
      }
      loadUserData() {
        try {
          const userString = localStorage.getItem("user");
          if (!userString) {
            this.apiError.set("No user found in session");
            return;
          }
          const userData = JSON.parse(userString);
          const userId = String(userData.user_id ?? "");
          this.userId.set(userId);
          if (!userId) {
            this.apiError.set("Invalid user data");
            return;
          }
          this.userApi.getUserById(userId).subscribe({
            next: (fullUser) => {
              this.originalUsername.set(fullUser.username ?? "");
              this.originalEmail.set(fullUser.email ?? "");
              this.form.patchValue({
                name: fullUser.username ?? "",
                email: fullUser.email ?? ""
              });
            },
            error: (err) => {
              console.error("Failed to fetch user details:", err);
              this.apiError.set("Failed to load user details");
            }
          });
        } catch (err) {
          this.apiError.set("Failed to load user data");
        }
      }
      hasError(name) {
        const c = this.form.get(name);
        return !!c && c.touched && c.invalid;
      }
      save() {
        this.apiError.set("");
        if (this.form.invalid) {
          this.form.markAllAsTouched();
          return;
        }
        const { name, email, currentPassword, newPassword } = this.form.getRawValue();
        const usernameChanged = name !== this.originalUsername();
        this.isSubmitting.set(true);
        this.userApi.login({
          username: this.originalUsername(),
          password: currentPassword || ""
        }).pipe(catchError((err) => {
          this.isSubmitting.set(false);
          this.apiError.set("Incorrect password.");
          return of(null);
        })).subscribe((loginResult) => {
          if (!loginResult)
            return;
          const dto = __spreadValues({
            username: name,
            email
          }, newPassword ? { password: newPassword } : {});
          this.userApi.updateUser(this.userId(), dto).pipe(catchError((err) => {
            this.apiError.set("Could not update profile. Please try again.");
            return of(null);
          }), finalize(() => this.isSubmitting.set(false))).subscribe((res) => {
            if (res) {
              if (usernameChanged) {
                const loginDto = {
                  username: name,
                  password: newPassword || currentPassword || ""
                };
                this.userApi.login(loginDto).subscribe({
                  next: (loginResponse) => {
                    localStorage.setItem("token", loginResponse.token);
                    localStorage.setItem("user", JSON.stringify(loginResponse.user));
                    localStorage.setItem("expiresAt", loginResponse.expires_at);
                    this.navigation.goToAccount({ success: true });
                  },
                  error: () => {
                    this.apiError.set("Profile updated but could not re-authenticate. Please login again.");
                    setTimeout(() => {
                      localStorage.clear();
                      this.navigation.goToLogin();
                    }, 2e3);
                  }
                });
              } else {
                localStorage.setItem("user", JSON.stringify(res));
                this.navigation.goToAccount({ success: true });
              }
            }
          });
        });
      }
      cancel() {
        this.navigation.goToAccount();
      }
      deleteProfile() {
        this.navigation.goToDeleteUser();
      }
      static \u0275fac = function EditUser_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EditUser)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditUser, selectors: [["app-edit-user"]], decls: 39, vars: 12, consts: [[1, "container", "py-4", "app-page"], [1, "h3", "mb-3"], [1, "card", "app-card", "shadow-sm"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label"], ["type", "text", "formControlName", "name", "placeholder", "Your username", 1, "form-control", "app-input"], [1, "invalid-feedback"], ["type", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control", "app-input"], ["type", "password", "formControlName", "currentPassword", "placeholder", "Enter your current password", 1, "form-control", "app-input"], ["type", "password", "formControlName", "newPassword", "placeholder", "Leave blank to keep current password", 1, "form-control", "app-input"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "card-footer", "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function EditUser_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
          \u0275\u0275text(2, "Edit Profile");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "form", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
          \u0275\u0275text(9, "Username");
          \u0275\u0275elementEnd();
          \u0275\u0275element(10, "input", 8);
          \u0275\u0275elementStart(11, "div", 9);
          \u0275\u0275text(12, "Username is required.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(13, "div", 6)(14, "label", 7);
          \u0275\u0275text(15, "Email");
          \u0275\u0275elementEnd();
          \u0275\u0275element(16, "input", 10);
          \u0275\u0275elementStart(17, "div", 9);
          \u0275\u0275text(18, "Enter a valid email.");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(19, "div", 6)(20, "label", 7);
          \u0275\u0275text(21, "Current Password");
          \u0275\u0275elementEnd();
          \u0275\u0275element(22, "input", 11);
          \u0275\u0275elementStart(23, "div", 9);
          \u0275\u0275text(24, " Current password is required (minimum 8 characters). ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(25, "div", 6)(26, "label", 7);
          \u0275\u0275text(27, "New Password (Optional)");
          \u0275\u0275elementEnd();
          \u0275\u0275element(28, "input", 12);
          \u0275\u0275elementStart(29, "div", 9);
          \u0275\u0275text(30, " Password must be at least 8 characters. ");
          \u0275\u0275elementEnd()()();
          \u0275\u0275conditionalCreate(31, EditUser_Conditional_31_Template, 2, 1, "div", 13);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(32, "div", 14)(33, "button", 15);
          \u0275\u0275listener("click", function EditUser_Template_button_click_33_listener() {
            return ctx.cancel();
          });
          \u0275\u0275text(34, " Cancel ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(35, "button", 16);
          \u0275\u0275listener("click", function EditUser_Template_button_click_35_listener() {
            return ctx.save();
          });
          \u0275\u0275text(36);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(37, "button", 17);
          \u0275\u0275listener("click", function EditUser_Template_button_click_37_listener() {
            return ctx.deleteProfile();
          });
          \u0275\u0275text(38, " Delete Profile ");
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
          \u0275\u0275classProp("is-invalid", ctx.hasError("currentPassword"));
          \u0275\u0275advance(6);
          \u0275\u0275classProp("is-invalid", ctx.hasError("newPassword"));
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.apiError() ? 31 : -1);
          \u0275\u0275advance(4);
          \u0275\u0275property("disabled", ctx.isSubmitting() || !ctx.hasChanges());
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? "Saving..." : "Save Changes", " ");
        }
      }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background-color: #6c757d !important;\n  border-color: #6c757d !important;\n}\n.success-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  z-index: 1050;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=edit-user.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditUser, [{
        type: Component,
        args: [{ selector: "app-edit-user", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="container py-4 app-page">
  <h1 class="h3 mb-3">Edit Profile</h1>

  <div class="card app-card shadow-sm">
    <div class="card-body">
      <form [formGroup]="form" novalidate>
        <div class="row g-3">
          <!-- Username -->
          <div class="col-12">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control app-input"
              formControlName="name"
              placeholder="Your username"
              [class.is-invalid]="hasError('name')"
            />
            <div class="invalid-feedback">Username is required.</div>
          </div>

          <!-- Email -->
          <div class="col-12">
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

          <!-- Current Password -->
          <div class="col-12">
            <label class="form-label">Current Password</label>
            <input
              type="password"
              class="form-control app-input"
              formControlName="currentPassword"
              placeholder="Enter your current password"
              [class.is-invalid]="hasError('currentPassword')"
            />
            <div class="invalid-feedback">
              Current password is required (minimum 8 characters).
            </div>
          </div>

          <!-- New Password -->
          <div class="col-12">
            <label class="form-label">New Password (Optional)</label>
            <input
              type="password"
              class="form-control app-input"
              formControlName="newPassword"
              placeholder="Leave blank to keep current password"
              [class.is-invalid]="hasError('newPassword')"
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
        (click)="save()"
        [disabled]="isSubmitting() || !hasChanges()"
      >
        {{ isSubmitting() ? 'Saving...' : 'Save Changes' }}
      </button>

      <button
        class="btn btn-danger"
        type="button"
        (click)="deleteProfile()"
      >
        Delete Profile
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/auth/edit-user/edit-user.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background-color: #6c757d !important;\n  border-color: #6c757d !important;\n}\n.success-notification {\n  position: fixed;\n  top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  z-index: 1050;\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.notification-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=edit-user.css.map */\n"] }]
      }], () => [], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditUser, { className: "EditUser", filePath: "src/app/features/auth/edit-user/edit-user.ts", lineNumber: 17 });
    })();
  }
});

// src/app/features/auth/edit-user/edit-user.spec.ts
var require_edit_user_spec = __commonJS({
  "src/app/features/auth/edit-user/edit-user.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_router();
    init_edit_user();
    init_user_api_service();
    init_dist();
    describe("EditUser", () => {
      let fixture;
      let component;
      const routerMock = {
        navigate: vi.fn()
      };
      const userApiMock = {
        updateUser: vi.fn()
      };
      beforeEach(() => __async(null, null, function* () {
        vi.clearAllMocks();
        yield TestBed.configureTestingModule({
          imports: [EditUser],
          providers: [
            { provide: Router, useValue: routerMock },
            { provide: UserApiService, useValue: userApiMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(EditUser);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        globalExpect(component).toBeTruthy();
        globalExpect(component.form).toBeTruthy();
      });
      it("cancel() should navigate to /account", () => {
        component.cancel();
        globalExpect(routerMock.navigate).toHaveBeenCalledWith(["/account"]);
      });
      it("deleteProfile() should navigate to /delete-user", () => {
        component.deleteProfile();
        globalExpect(routerMock.navigate).toHaveBeenCalledWith(["/delete-user"]);
      });
      it("save() should block submit when form invalid, mark touched, and show apiError", () => {
        component.form.patchValue({ name: "", email: "" });
        component.save();
        globalExpect(userApiMock.updateUser).not.toHaveBeenCalled();
        globalExpect(component.apiError).toBe("Please fix validation errors.");
        globalExpect(component.form.get("name")?.touched).toBe(true);
        globalExpect(component.form.get("email")?.touched).toBe(true);
      });
      it("save() should call PATCH /users/{id} via updateUser() and navigate to /account on success", () => {
        userApiMock.updateUser.mockReturnValue(of({ user_id: 3, username: "Jane Doe", email: "jane@example.com" }));
        component.form.patchValue({
          name: "Jane Doe",
          email: "jane@example.com",
          newPassword: ""
        });
        component.save();
        globalExpect(userApiMock.updateUser).toHaveBeenCalledTimes(1);
        globalExpect(userApiMock.updateUser).toHaveBeenCalledWith("3", { username: "Jane Doe", email: "jane@example.com" });
        globalExpect(routerMock.navigate).toHaveBeenCalledWith(["/account"]);
      });
      it("save() should include password when newPassword is provided", () => {
        userApiMock.updateUser.mockReturnValue(of({ user_id: "3", username: "Jane Doe", email: "jane@example.com" }));
        component.form.patchValue({
          name: "Jane Doe",
          email: "jane@example.com",
          newPassword: "password123"
        });
        component.save();
        globalExpect(userApiMock.updateUser).toHaveBeenCalledWith("3", { username: "Jane Doe", email: "jane@example.com", password: "password123" });
      });
      it("save() should set apiError and not navigate when updateUser() fails", () => {
        userApiMock.updateUser.mockReturnValue(throwError(() => new Error("boom")));
        component.form.patchValue({
          name: "Jane Doe",
          email: "jane@example.com",
          newPassword: ""
        });
        component.save();
        globalExpect(component.apiError).toBe("Could not update profile. Please try again.");
        globalExpect(routerMock.navigate).not.toHaveBeenCalledWith(["/account"]);
      });
    });
  }
});
export default require_edit_user_spec();
//# sourceMappingURL=spec-app-features-auth-edit-user-edit-user.spec.js.map
