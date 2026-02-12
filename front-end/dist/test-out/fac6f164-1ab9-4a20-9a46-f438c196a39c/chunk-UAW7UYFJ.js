import {
  EventApiService,
  init_event_api_service
} from "./chunk-WAEIODOV.js";
import {
  Injectable,
  init_core,
  init_esm,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/shared/services/event.service.ts
var EventService;
var init_event_service = __esm({
  "src/app/shared/services/event.service.ts"() {
    "use strict";
    init_core();
    init_esm();
    init_core();
    init_event_api_service();
    EventService = class _EventService {
      api;
      constructor(api) {
        this.api = api;
      }
      // POST /events: create new event, requires admin
      create(dto) {
        return this.api.createEvent(dto).pipe(map((r) => ({
          event_id: r.event_id,
          calendar_id: r.calendar_id,
          title: r.title,
          start_time: r.start_time,
          end_time: r.end_time,
          description: r.description,
          notes: r.notes,
          tags: r.tags
        })));
      }
      // PATCH /events/{id}: update event, requires admin
      update(eventId, dto) {
        return this.api.updateEvent(eventId, dto).pipe(map((r) => ({
          event_id: r.event_id,
          calendar_id: r.calendar_id,
          title: r.title,
          start_time: r.start_time,
          end_time: r.end_time,
          description: r.description,
          notes: r.notes,
          tags: r.tags
        })));
      }
      // DELETE /events/{id}: delete event, requires admin
      delete(eventId, dto) {
        return this.api.deleteEvent(eventId, dto).pipe(map((r) => r.deleted));
      }
      static \u0275fac = function EventService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EventService)(\u0275\u0275inject(EventApiService));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
      }], () => [{ type: EventApiService }], null);
    })();
  }
});

export {
  EventService,
  init_event_service
};
//# sourceMappingURL=chunk-UAW7UYFJ.js.map
