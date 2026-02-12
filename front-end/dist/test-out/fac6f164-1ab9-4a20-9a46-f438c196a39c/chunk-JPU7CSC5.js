import {
  HttpClient,
  init_http
} from "./chunk-DD5LJ5SS.js";
import {
  Injectable,
  init_core,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/shared/services/api/user-api.service.ts
var UserApiService;
var init_user_api_service = __esm({
  "src/app/shared/services/api/user-api.service.ts"() {
    "use strict";
    init_core();
    init_core();
    init_http();
    UserApiService = class _UserApiService {
      http;
      baseUrl = "http://localhost:8080/api/v1";
      constructor(http) {
        this.http = http;
      }
      /**
       * POST /users
       */
      register(dto) {
        return this.http.post(`${this.baseUrl}/users`, dto);
      }
      /**
       * POST /login
       */
      login(dto) {
        return this.http.post(`${this.baseUrl}/login`, dto);
      }
      /**
       * GET /login
       */
      getLoginStatus() {
        return this.http.get(`${this.baseUrl}/login`);
      }
      /**
       * GET /users/{id}
       */
      getUserById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}`);
      }
      /**
       * PATCH /users/{id}
       */
      updateUser(id, dto) {
        return this.http.patch(`${this.baseUrl}/users/${id}`, dto);
      }
      /**
       * DELETE /users/{id}
       */
      deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/users/${id}`);
      }
      static \u0275fac = function UserApiService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _UserApiService)(\u0275\u0275inject(HttpClient));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserApiService, factory: _UserApiService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserApiService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{ type: HttpClient }], null);
    })();
  }
});

export {
  UserApiService,
  init_user_api_service
};
//# sourceMappingURL=chunk-JPU7CSC5.js.map
