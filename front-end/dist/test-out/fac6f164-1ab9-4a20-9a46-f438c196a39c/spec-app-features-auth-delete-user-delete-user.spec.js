import {
  NavigationService,
  init_navigation_service
} from "./chunk-RFKE2Q4H.js";
import {
  UserApiService,
  init_user_api_service
} from "./chunk-JPU7CSC5.js";
import {
  By,
  init_platform_browser
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

// src/app/features/auth/delete-user/delete-user.ts
function DeleteUser_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function DeleteUser_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Deleting... ");
  }
}
function DeleteUser_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirm ");
  }
}
var DeleteUser;
var init_delete_user = __esm({
  "src/app/features/auth/delete-user/delete-user.ts"() {
    "use strict";
    init_core();
    init_common();
    init_user_api_service();
    init_navigation_service();
    init_core();
    DeleteUser = class _DeleteUser {
      navigation = inject(NavigationService);
      userApi = inject(UserApiService);
      userName = signal("", ...ngDevMode ? [{ debugName: "userName" }] : []);
      userId = signal("", ...ngDevMode ? [{ debugName: "userId" }] : []);
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isDeleting = signal(false, ...ngDevMode ? [{ debugName: "isDeleting" }] : []);
      constructor() {
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
          const username = String(userData.username ?? "");
          this.userId.set(userId);
          this.userName.set(username);
          if (!userId) {
            this.apiError.set("Invalid user data");
          }
        } catch (err) {
          this.apiError.set("Failed to load user data");
        }
      }
      confirmDelete() {
        this.apiError.set("");
        const userId = this.userId();
        if (!userId) {
          this.apiError.set("Cannot delete: No user ID found");
          return;
        }
        this.isDeleting.set(true);
        this.userApi.deleteUser(userId).subscribe({
          next: () => {
            localStorage.clear();
            this.navigation.goToLogin();
          },
          error: (err) => {
            console.error("Failed to delete user:", err);
            this.apiError.set("Failed to delete profile. Please try again.");
            this.isDeleting.set(false);
          }
        });
      }
      cancelDelete() {
        this.navigation.goToEditUser();
      }
      static \u0275fac = function DeleteUser_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DeleteUser)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteUser, selectors: [["app-delete-user"]], decls: 20, vars: 5, consts: [[1, "container", "py-4", "app-page"], [1, "h3", "mb-3"], [1, "card", "app-card", "shadow-sm"], [1, "card-body"], [1, "delete-user__message"], [1, "text-muted"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "card-footer", "d-flex", "justify-content-center", "gap-5"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-light", 3, "click", "disabled"]], template: function DeleteUser_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0)(1, "h1", 1);
          \u0275\u0275text(2, "Delete Profile");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
          \u0275\u0275text(6, " Are you sure you want to delete your profile ");
          \u0275\u0275domElementStart(7, "strong");
          \u0275\u0275text(8);
          \u0275\u0275domElementEnd();
          \u0275\u0275text(9, "? ");
          \u0275\u0275domElement(10, "br");
          \u0275\u0275domElementStart(11, "span", 5);
          \u0275\u0275text(12, "This action cannot be undone.");
          \u0275\u0275domElementEnd()();
          \u0275\u0275conditionalCreate(13, DeleteUser_Conditional_13_Template, 2, 1, "div", 6);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(14, "div", 7)(15, "button", 8);
          \u0275\u0275domListener("click", function DeleteUser_Template_button_click_15_listener() {
            return ctx.confirmDelete();
          });
          \u0275\u0275conditionalCreate(16, DeleteUser_Conditional_16_Template, 1, 0)(17, DeleteUser_Conditional_17_Template, 1, 0);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(18, "button", 9);
          \u0275\u0275domListener("click", function DeleteUser_Template_button_click_18_listener() {
            return ctx.cancelDelete();
          });
          \u0275\u0275text(19, " Cancel ");
          \u0275\u0275domElementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275textInterpolate1('"', ctx.userName(), '"');
          \u0275\u0275advance(5);
          \u0275\u0275conditional(ctx.apiError() ? 13 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275domProperty("disabled", ctx.isDeleting());
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isDeleting() ? 16 : 17);
          \u0275\u0275advance(2);
          \u0275\u0275domProperty("disabled", ctx.isDeleting());
        }
      }, dependencies: [CommonModule], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-user__message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-user.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteUser, [{
        type: Component,
        args: [{ selector: "app-delete-user", standalone: true, imports: [CommonModule], template: '<div class="container py-4 app-page">\n  <h1 class="h3 mb-3">Delete Profile</h1>\n\n  <div class="card app-card shadow-sm">\n    <div class="card-body">\n      <div class="delete-user__message">\n        Are you sure you want to delete your profile\n        <strong>"{{ userName() }}"</strong>?\n        <br />\n        <span class="text-muted">This action cannot be undone.</span>\n      </div>\n\n      @if (apiError()) {\n        <div class="alert alert-danger mt-3 mb-0">\n          {{ apiError() }}\n        </div>\n      }\n    </div>\n\n    <div class="card-footer d-flex justify-content-center gap-5">\n      <button\n        type="button"\n        class="btn btn-danger"\n        (click)="confirmDelete()"\n        [disabled]="isDeleting()"\n      >\n        @if (isDeleting()) { Deleting... } @else { Confirm }\n      </button>\n\n      <button\n        type="button"\n        class="btn btn-outline-light"\n        (click)="cancelDelete()"\n        [disabled]="isDeleting()"\n      >\n        Cancel\n      </button>\n\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/features/auth/delete-user/delete-user.css */\n.card {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-user__message {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-user.css.map */\n"] }]
      }], () => [], null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteUser, { className: "DeleteUser", filePath: "src/app/features/auth/delete-user/delete-user.ts", lineNumber: 13 });
    })();
  }
});

// src/app/features/auth/delete-user/delete-user.spec.ts
var require_delete_user_spec = __commonJS({
  "src/app/features/auth/delete-user/delete-user.spec.ts"(exports) {
    init_testing();
    init_platform_browser();
    init_esm();
    init_delete_user();
    init_user_api_service();
    init_navigation_service();
    describe("DeleteUser", () => {
      let fixture;
      let component;
      const navigationMock = {
        goToLogin: jasmine.createSpy("goToLogin"),
        goToEditUser: jasmine.createSpy("goToEditUser")
      };
      const userApiMock = {
        deleteUser: jasmine.createSpy("deleteUser")
      };
      beforeEach(() => __async(null, null, function* () {
        localStorage.clear();
        navigationMock.goToLogin.calls.reset();
        navigationMock.goToEditUser.calls.reset();
        userApiMock.deleteUser.calls.reset();
        yield TestBed.configureTestingModule({
          imports: [DeleteUser],
          providers: [
            { provide: NavigationService, useValue: navigationMock },
            { provide: UserApiService, useValue: userApiMock }
          ]
        }).compileComponents();
      }));
      function createComponentWithUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
        fixture = TestBed.createComponent(DeleteUser);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }
      it("should create", () => {
        createComponentWithUser({ user_id: "u-1", username: "Alice" });
        expect(component).toBeTruthy();
      });
      it("should load userName and userId from localStorage on construction", () => {
        createComponentWithUser({ user_id: "u-999", username: "Alice" });
        expect(component.userId()).toBe("u-999");
        expect(component.userName()).toBe("Alice");
        expect(component.apiError()).toBe("");
      });
      it('should show "No user found in session" when localStorage has no user', () => {
        fixture = TestBed.createComponent(DeleteUser);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.apiError()).toBe("No user found in session");
        const alertEl = fixture.debugElement.query(By.css(".alert.alert-danger"));
        expect(alertEl).not.toBeNull();
        expect(alertEl.nativeElement.textContent).toContain("No user found in session");
      });
      it("should render the username in the confirmation message", () => {
        createComponentWithUser({ user_id: "u-2", username: "Ben" });
        const strongEl = fixture.debugElement.query(By.css(".delete-user__message strong"));
        expect(strongEl).not.toBeNull();
        expect(strongEl.nativeElement.textContent).toContain('"Ben"');
      });
      it("confirmDelete should call deleteUser with userId and navigate to login on success", () => {
        createComponentWithUser({ user_id: "u-123", username: "Alice" });
        localStorage.setItem("extra", "value");
        userApiMock.deleteUser.and.returnValue(of({}));
        component.confirmDelete();
        expect(component.isDeleting()).toBe(true);
        expect(userApiMock.deleteUser).toHaveBeenCalledTimes(1);
        expect(userApiMock.deleteUser).toHaveBeenCalledWith("u-123");
        expect(localStorage.getItem("user")).toBeNull();
        expect(localStorage.getItem("extra")).toBeNull();
        expect(navigationMock.goToLogin).toHaveBeenCalledTimes(1);
      });
      it("confirmDelete should set apiError if no userId exists", () => {
        createComponentWithUser({ user_id: "", username: "Alice" });
        component.confirmDelete();
        expect(userApiMock.deleteUser).not.toHaveBeenCalled();
        expect(component.apiError()).toBe("Cannot delete: No user ID found");
        expect(component.isDeleting()).toBe(false);
        fixture.detectChanges();
        const alertEl = fixture.debugElement.query(By.css(".alert.alert-danger"));
        expect(alertEl).not.toBeNull();
        expect(alertEl.nativeElement.textContent).toContain("Cannot delete: No user ID found");
      });
      it("confirmDelete should show failure message and reset isDeleting on error", () => {
        createComponentWithUser({ user_id: "u-500", username: "Alice" });
        userApiMock.deleteUser.and.returnValue(throwError(() => new Error("boom")));
        component.confirmDelete();
        expect(userApiMock.deleteUser).toHaveBeenCalledWith("u-500");
        expect(component.apiError()).toBe("Failed to delete profile. Please try again.");
        expect(component.isDeleting()).toBe(false);
        fixture.detectChanges();
        const alertEl = fixture.debugElement.query(By.css(".alert.alert-danger"));
        expect(alertEl).not.toBeNull();
        expect(alertEl.nativeElement.textContent).toContain("Failed to delete profile. Please try again.");
      });
      it("cancelDelete should navigate to edit user", () => {
        createComponentWithUser({ user_id: "u-7", username: "Alice" });
        component.cancelDelete();
        expect(navigationMock.goToEditUser).toHaveBeenCalledTimes(1);
      });
    });
  }
});
export default require_delete_user_spec();
//# sourceMappingURL=spec-app-features-auth-delete-user-delete-user.spec.js.map
