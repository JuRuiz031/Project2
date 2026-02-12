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

// src/app/shared/services/api/poll-api.service.ts
var PollApiService;
var init_poll_api_service = __esm({
  "src/app/shared/services/api/poll-api.service.ts"() {
    "use strict";
    init_core();
    init_core();
    init_http();
    PollApiService = class _PollApiService {
      http;
      baseUrl = "http://localhost:8080/api/v1";
      constructor(http) {
        this.http = http;
      }
      /**
       * POST /polls
       */
      createPoll(dto) {
        return this.http.post(`${this.baseUrl}/polls`, dto);
      }
      /**
       * PATCH /polls/{poll_id}
       */
      updatePoll(pollId, dto) {
        return this.http.patch(`${this.baseUrl}/polls/${pollId}`, dto);
      }
      /**
       * DELETE /polls/{poll_id}
       * (uses request body per API spec)
       */
      deletePoll(pollId, dto) {
        return this.http.delete(`${this.baseUrl}/polls/${pollId}`, { body: dto });
      }
      /**
       * POST /polls/{poll_id}/vote
       * Submits a vote for one or more options on a poll.
       * Requires JWT auth. User must have access to the calendar (admin not required).
       */
      votePoll(pollId, dto) {
        return this.http.post(`${this.baseUrl}/polls/${pollId}/vote`, dto);
      }
      static \u0275fac = function PollApiService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PollApiService)(\u0275\u0275inject(HttpClient));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PollApiService, factory: _PollApiService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PollApiService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{ type: HttpClient }], null);
    })();
  }
});

export {
  PollApiService,
  init_poll_api_service
};
//# sourceMappingURL=chunk-EK3UKG6K.js.map
