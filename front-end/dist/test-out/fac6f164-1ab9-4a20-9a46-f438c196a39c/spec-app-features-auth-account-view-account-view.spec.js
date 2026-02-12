import {
  NavigationService,
  init_navigation_service
} from "./chunk-RFKE2Q4H.js";
import {
  UserApiService,
  init_user_api_service
} from "./chunk-JPU7CSC5.js";
import {
  ActivatedRoute,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/auth/account-view/account-view.ts
function AccountView_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 15);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Profile updated successfully! ");
    \u0275\u0275domElementEnd();
  }
}
function AccountView_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
var AccountView;
var init_account_view = __esm({
  "src/app/features/auth/account-view/account-view.ts"() {
    "use strict";
    init_core();
    init_common();
    init_router();
    init_user_api_service();
    init_navigation_service();
    init_core();
    AccountView = class _AccountView {
      navigation = inject(NavigationService);
      userApi = inject(UserApiService);
      route = inject(ActivatedRoute);
      router = inject(Router);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      showNotification = signal(false, ...ngDevMode ? [{ debugName: "showNotification" }] : []);
      user = signal({
        id: "",
        name: "",
        email: "",
        role: ""
      }, ...ngDevMode ? [{ debugName: "user" }] : []);
      constructor() {
        this.loadUserData();
      }
      ngOnInit() {
        const navigation = this.router.getCurrentNavigation();
        const state = navigation?.extras?.state || window.history.state;
        if (state?.["success"]) {
          this.showNotification.set(true);
          setTimeout(() => this.showNotification.set(false), 3e3);
        }
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
          if (!userId) {
            this.apiError.set("Invalid user data");
            return;
          }
          this.userApi.getUserById(userId).subscribe({
            next: (fullUser) => {
              this.user.set({
                id: String(fullUser.user_id ?? ""),
                name: String(fullUser.username ?? ""),
                email: String(fullUser.email ?? ""),
                role: String(fullUser.role ?? "User")
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
      goToDashboard() {
        this.navigation.goToHome();
      }
      goToEditUser() {
        this.navigation.goToEditUser();
      }
      logOut() {
        localStorage.clear();
        this.navigation.goToLogin();
      }
      static \u0275fac = function AccountView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AccountView)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountView, selectors: [["app-account-view"]], decls: 24, vars: 4, consts: [[1, "container", "py-4", "app-page"], [1, "h3", "mb-3"], [1, "success-notification"], [1, "card", "app-card", "shadow-sm"], [1, "card-body"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label"], ["disabled", "", 1, "form-control", "app-input", 3, "value"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "card-footer", "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "gap-2"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "d-flex", "gap-2", "ms-auto"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "notification-icon"]], template: function AccountView_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0)(1, "h1", 1);
          \u0275\u0275text(2, "Profile");
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(3, AccountView_Conditional_3_Template, 4, 0, "div", 2);
          \u0275\u0275domElementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
          \u0275\u0275text(9, "Username");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElement(10, "input", 8);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(11, "div", 6)(12, "label", 7);
          \u0275\u0275text(13, "Email");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElement(14, "input", 8);
          \u0275\u0275domElementEnd()();
          \u0275\u0275conditionalCreate(15, AccountView_Conditional_15_Template, 2, 1, "div", 9);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(16, "div", 10)(17, "button", 11);
          \u0275\u0275domListener("click", function AccountView_Template_button_click_17_listener() {
            return ctx.logOut();
          });
          \u0275\u0275text(18, " Log Out ");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(19, "div", 12)(20, "button", 13);
          \u0275\u0275domListener("click", function AccountView_Template_button_click_20_listener() {
            return ctx.goToDashboard();
          });
          \u0275\u0275text(21, " Back ");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(22, "button", 14);
          \u0275\u0275domListener("click", function AccountView_Template_button_click_22_listener() {
            return ctx.goToEditUser();
          });
          \u0275\u0275text(23, " Edit Profile ");
          \u0275\u0275domElementEnd()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.showNotification() ? 3 : -1);
          \u0275\u0275advance(7);
          \u0275\u0275domProperty("value", ctx.user().name);
          \u0275\u0275advance(4);
          \u0275\u0275domProperty("value", ctx.user().email);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.apiError() ? 15 : -1);
        }
      }, dependencies: [CommonModule], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.success-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  z-index: 1050;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.notification-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=account-view.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountView, [{
        type: Component,
        args: [{ selector: "app-account-view", standalone: true, imports: [CommonModule], template: '<div class="container py-4 app-page">\n  <h1 class="h3 mb-3">Profile</h1>\n\n  <!-- Success Notification Toast -->\n  @if (showNotification()) {\n    <div class="success-notification">\n      <span class="notification-icon">\u2713</span>\n      Profile updated successfully!\n    </div>\n  }\n\n  <div class="card app-card shadow-sm">\n    <div class="card-body">\n      <div class="row g-3">\n        <div class="col-12">\n          <label class="form-label">Username</label>\n          <input class="form-control app-input" [value]="user().name" disabled />\n        </div>\n\n        <div class="col-12">\n          <label class="form-label">Email</label>\n          <input class="form-control app-input" [value]="user().email" disabled />\n        </div>\n      </div>\n\n      @if (apiError()) {\n        <div class="alert alert-danger mt-3 mb-0">\n          {{ apiError() }}\n        </div>\n      }\n    </div>\n\n    <div\n      class="card-footer d-flex flex-wrap justify-content-between align-items-center gap-2"\n    >\n      <!-- Left-side action -->\n      <button\n        class="btn btn-outline-danger"\n        type="button"\n        (click)="logOut()"\n      >\n        Log Out\n      </button>\n\n      <!-- Right-side actions -->\n      <div class="d-flex gap-2 ms-auto">\n        <button\n          class="btn btn-outline-secondary"\n          type="button"\n          (click)="goToDashboard()"\n        >\n          Back\n        </button>\n\n        <button\n          class="btn btn-primary"\n          type="button"\n          (click)="goToEditUser()"\n        >\n          Edit Profile\n        </button>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n', styles: ["/* src/app/features/auth/account-view/account-view.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.success-notification {\n  position: fixed;\n  top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  z-index: 1050;\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.notification-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=account-view.css.map */\n"] }]
      }], () => [], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountView, { className: "AccountView", filePath: "src/app/features/auth/account-view/account-view.ts", lineNumber: 21 });
    })();
  }
});

// src/app/features/auth/account-view/account-view.spec.ts
var require_account_view_spec = __commonJS({
  "src/app/features/auth/account-view/account-view.spec.ts"(exports) {
    init_testing();
    init_esm();
    init_router();
    init_account_view();
    init_user_api_service();
    init_navigation_service();
    describe("AccountView", () => {
      let fixture;
      let component;
      const navigationMock = {
        goToHome: jasmine.createSpy("goToHome"),
        goToEditUser: jasmine.createSpy("goToEditUser"),
        goToLogin: jasmine.createSpy("goToLogin")
      };
      const userApiMock = {
        getUserById: jasmine.createSpy("getUserById")
      };
      const routerMock = {
        getCurrentNavigation: jasmine.createSpy("getCurrentNavigation").and.returnValue(null)
      };
      const activatedRouteMock = {
        snapshot: { params: {} }
      };
      beforeEach(() => __async(null, null, function* () {
        localStorage.clear();
        navigationMock.goToHome.calls.reset();
        navigationMock.goToEditUser.calls.reset();
        navigationMock.goToLogin.calls.reset();
        userApiMock.getUserById.calls.reset();
        routerMock.getCurrentNavigation.calls.reset();
        yield TestBed.configureTestingModule({
          imports: [AccountView],
          providers: [
            { provide: NavigationService, useValue: navigationMock },
            { provide: UserApiService, useValue: userApiMock },
            { provide: Router, useValue: routerMock },
            { provide: ActivatedRoute, useValue: activatedRouteMock }
          ]
        }).compileComponents();
      }));
      function createComponentWithSessionUser(sessionUser, fullUserResponse) {
        localStorage.setItem("user", JSON.stringify(sessionUser));
        userApiMock.getUserById.and.returnValue(of(fullUserResponse ?? {
          user_id: sessionUser.user_id,
          username: sessionUser.username ?? "Alice",
          email: sessionUser.email ?? "alice@example.com",
          role: sessionUser.role ?? "User"
        }));
        fixture = TestBed.createComponent(AccountView);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }
      it("should create", () => {
        createComponentWithSessionUser({ user_id: "u1", username: "Alice" });
        expect(component).toBeTruthy();
      });
      it("should call UserApiService.getUserById using the user_id from localStorage", () => {
        createComponentWithSessionUser({ user_id: "123", username: "Alice" });
        expect(userApiMock.getUserById).toHaveBeenCalledTimes(1);
        expect(userApiMock.getUserById).toHaveBeenCalledWith("123");
      });
      it("should populate user signal from API response", () => {
        createComponentWithSessionUser({ user_id: "123" }, { user_id: "123", username: "Ben", email: "ben@test.com", role: "Admin" });
        expect(component.apiError()).toBe("");
        expect(component.user()).toEqual({
          id: "123",
          name: "Ben",
          email: "ben@test.com",
          role: "Admin"
        });
      });
      it("should set apiError when no user exists in localStorage", () => {
        userApiMock.getUserById.and.returnValue(of({}));
        fixture = TestBed.createComponent(AccountView);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(userApiMock.getUserById).not.toHaveBeenCalled();
        expect(component.apiError()).toBe("No user found in session");
      });
      it("should set apiError when API call fails", () => {
        localStorage.setItem("user", JSON.stringify({ user_id: "123" }));
        userApiMock.getUserById.and.returnValue(throwError(() => new Error("boom")));
        fixture = TestBed.createComponent(AccountView);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(userApiMock.getUserById).toHaveBeenCalledTimes(1);
        expect(component.apiError()).toBe("Failed to load user details");
      });
      it("goToDashboard should navigate to home", () => {
        createComponentWithSessionUser({ user_id: "123" });
        component.goToDashboard();
        expect(navigationMock.goToHome).toHaveBeenCalledTimes(1);
      });
      it("goToEditUser should navigate to edit user", () => {
        createComponentWithSessionUser({ user_id: "123" });
        component.goToEditUser();
        expect(navigationMock.goToEditUser).toHaveBeenCalledTimes(1);
      });
      it("logOut should clear localStorage and navigate to login", () => {
        createComponentWithSessionUser({ user_id: "123" });
        localStorage.setItem("token", "t");
        localStorage.setItem("expiresAt", "x");
        component.logOut();
        expect(localStorage.getItem("user")).toBeNull();
        expect(localStorage.getItem("token")).toBeNull();
        expect(localStorage.getItem("expiresAt")).toBeNull();
        expect(navigationMock.goToLogin).toHaveBeenCalledTimes(1);
      });
    });
  }
});
export default require_account_view_spec();
//# sourceMappingURL=spec-app-features-auth-account-view-account-view.spec.js.map
