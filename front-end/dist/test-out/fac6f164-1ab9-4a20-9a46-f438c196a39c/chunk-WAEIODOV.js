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

// src/app/shared/services/api/event-api.service.ts
var EventApiService;
var init_event_api_service = __esm({
  "src/app/shared/services/api/event-api.service.ts"() {
    "use strict";
    init_core();
    init_core();
    init_http();
    EventApiService = class _EventApiService {
      http;
      baseUrl = "http://localhost:8080/api/v1";
      constructor(http) {
        this.http = http;
      }
      /**
       * POST /events
       */
      createEvent(dto) {
        return this.http.post(`${this.baseUrl}/events`, dto);
      }
      /**
       * PATCH /events/{event_id}
       */
      updateEvent(eventId, dto) {
        return this.http.patch(`${this.baseUrl}/events/${eventId}`, dto);
      }
      /**
       * DELETE /events/{event_id}
       * (uses request body per API spec)
       */
      deleteEvent(eventId, dto) {
        return this.http.delete(`${this.baseUrl}/events/${eventId}`, { body: dto });
      }
      static \u0275fac = function EventApiService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EventApiService)(\u0275\u0275inject(HttpClient));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventApiService, factory: _EventApiService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventApiService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{ type: HttpClient }], null);
    })();
  }
});

export {
  EventApiService,
  init_event_api_service
};
//# sourceMappingURL=chunk-WAEIODOV.js.map
