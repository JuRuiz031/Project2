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

// src/app/shared/services/api/invite-api.service.ts
var InviteApiService;
var init_invite_api_service = __esm({
  "src/app/shared/services/api/invite-api.service.ts"() {
    "use strict";
    init_core();
    init_core();
    init_http();
    InviteApiService = class _InviteApiService {
      http;
      baseUrl = "http://localhost:8080/api/v1";
      constructor(http) {
        this.http = http;
      }
      /**
       * POST /invite
       * Creates a shareable invite link for an event or poll.
       * Requires JWT auth. User must be admin of the event/poll.
       */
      createInvite(dto) {
        return this.http.post(`${this.baseUrl}/invite`, dto);
      }
      /**
       * GET /invitelink?token=xxx
       * Returns details of an event or poll associated with an invite link.
       * No authentication required.
       */
      getInviteDetails(token) {
        return this.http.get(`${this.baseUrl}/invitelink`, { params: { token } });
      }
      static \u0275fac = function InviteApiService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _InviteApiService)(\u0275\u0275inject(HttpClient));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InviteApiService, factory: _InviteApiService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteApiService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{ type: HttpClient }], null);
    })();
  }
});

// src/app/shared/services/invite.service.ts
var InviteService;
var init_invite_service = __esm({
  "src/app/shared/services/invite.service.ts"() {
    "use strict";
    init_core();
    init_core();
    init_invite_api_service();
    InviteService = class _InviteService {
      api;
      constructor(api) {
        this.api = api;
      }
      /**
       * Creates an invite link for an event.
       * Requires admin privileges on the event.
       */
      createEventInvite(eventId, expirationDate) {
        const dto = {
          event_id: eventId,
          expiration_date: expirationDate
        };
        return this.api.createInvite(dto);
      }
      /**
       * Creates an invite link for a poll.
       * Requires admin privileges on the poll.
       */
      createPollInvite(pollId, expirationDate) {
        const dto = {
          poll_id: pollId,
          expiration_date: expirationDate
        };
        return this.api.createInvite(dto);
      }
      /**
       * Gets details of an event or poll from an invite token.
       * No authentication required.
       * Use isEventInvite() or isPollInvite() type guards to determine the response type.
       */
      getInviteDetails(token) {
        return this.api.getInviteDetails(token);
      }
      static \u0275fac = function InviteService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _InviteService)(\u0275\u0275inject(InviteApiService));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InviteService, factory: _InviteService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
      }], () => [{ type: InviteApiService }], null);
    })();
  }
});

export {
  InviteService,
  init_invite_service
};
//# sourceMappingURL=chunk-3ZUE2ORM.js.map
