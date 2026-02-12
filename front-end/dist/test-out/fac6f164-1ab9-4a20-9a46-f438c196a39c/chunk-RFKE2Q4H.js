import {
  Router,
  init_router
} from "./chunk-LOQZ2SCF.js";
import {
  Location,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Injectable,
  init_core,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/shared/services/navigation.service.ts
var NavigationService;
var init_navigation_service = __esm({
  "src/app/shared/services/navigation.service.ts"() {
    "use strict";
    init_core();
    init_router();
    init_common();
    init_core();
    NavigationService = class _NavigationService {
      router = inject(Router);
      location = inject(Location);
      // Navigate to any route with optional query parameters
      // example: this.navigation.navigateTo(['/edit-event', eventId])
      navigateTo(route, queryParams) {
        if (Array.isArray(route)) {
          this.router.navigate(route, { queryParams });
        } else {
          this.router.navigateByUrl(route);
        }
      }
      // Go back in history, fallback to /main-page if no history exists
      goBack(fallbackUrl = "/main-page") {
        if (window.history.length > 1) {
          this.location.back();
        } else {
          this.navigateTo(fallbackUrl);
        }
      }
      // ===== CONVENIENCE METHODS FOR COMMON ROUTES =====
      // Navigate to dashboard home
      goToHome() {
        this.navigateTo("/dashboard/main-page");
      }
      // Navigate to login page
      goToLogin() {
        this.navigateTo("/login");
      }
      // Navigate to user account/profile view
      goToAccount(state) {
        this.router.navigate(["/account"], { state });
      }
      // Navigate to edit user/profile page
      goToEditUser() {
        this.navigateTo("/edit-user");
      }
      // Navigate to delete user account page
      goToDeleteUser() {
        this.navigateTo("/delete-user");
      }
      static \u0275fac = function NavigationService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NavigationService)();
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavigationService, factory: _NavigationService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
  }
});

export {
  NavigationService,
  init_navigation_service
};
//# sourceMappingURL=chunk-RFKE2Q4H.js.map
