import {
  HttpClient,
  HttpParams,
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

// src/app/shared/services/api/calendar-api.service.ts
var CalendarApiService;
var init_calendar_api_service = __esm({
  "src/app/shared/services/api/calendar-api.service.ts"() {
    "use strict";
    init_core();
    init_http();
    init_core();
    init_http();
    CalendarApiService = class _CalendarApiService {
      http;
      baseUrl = "http://localhost:8080/api/v1";
      constructor(http) {
        this.http = http;
      }
      // -----------------------
      // READ: Calendar homepage
      // -----------------------
      /** GET /calendar */
      getCalendarHome() {
        return this.http.get(`${this.baseUrl}/calendar`);
      }
      // -----------------------
      // READ: Filters
      // -----------------------
      getByCalendarIds(calendarIds) {
        if (!calendarIds?.length) {
          return this.http.get(`${this.baseUrl}/calendar`);
        }
        const params = new HttpParams().set("calendarIds", calendarIds.join(","));
        return this.http.get(`${this.baseUrl}/calendar`, { params });
      }
      getByEventIds(eventIds) {
        if (!eventIds?.length) {
          return this.http.get(`${this.baseUrl}/calendar`);
        }
        const params = new HttpParams().set("eventIds", eventIds.join(","));
        return this.http.get(`${this.baseUrl}/calendar`, { params });
      }
      getByPollIds(pollIds) {
        if (!pollIds?.length) {
          return this.http.get(`${this.baseUrl}/calendar`);
        }
        const params = new HttpParams().set("pollIds", pollIds.join(","));
        return this.http.get(`${this.baseUrl}/calendar`, { params });
      }
      getByTags(tags) {
        if (!tags?.length) {
          return this.http.get(`${this.baseUrl}/calendar`);
        }
        const params = new HttpParams().set("tags", tags.join(","));
        return this.http.get(`${this.baseUrl}/calendar`, { params });
      }
      /**
       * Combined filters in one call:
       * /calendar?calendarIds=...&tags=...
       */
      getFiltered(filters) {
        let params = new HttpParams();
        if (filters.calendarIds?.length)
          params = params.set("calendarIds", filters.calendarIds.join(","));
        if (filters.eventIds?.length)
          params = params.set("eventIds", filters.eventIds.join(","));
        if (filters.pollIds?.length)
          params = params.set("pollIds", filters.pollIds.join(","));
        if (filters.tags?.length)
          params = params.set("tags", filters.tags.join(","));
        if (params.keys().length === 0) {
          return this.http.get(`${this.baseUrl}/calendar`);
        }
        return this.http.get(`${this.baseUrl}/calendar`, { params });
      }
      // -----------------------
      // WRITE: Calendar CRUD
      // -----------------------
      /** POST /calendar */
      createCalendar(dto) {
        return this.http.post(`${this.baseUrl}/calendar`, dto);
      }
      /** PATCH /calendar/{calendar_id} */
      updateCalendar(calendarId, dto) {
        return this.http.patch(`${this.baseUrl}/calendar/${calendarId}`, dto);
      }
      /** DELETE /calendar/{calendar_id} */
      deleteCalendar(calendarId) {
        return this.http.delete(`${this.baseUrl}/calendar/${calendarId}`);
      }
      // -----------------------
      // Invites
      // -----------------------
      /** GET /calendars/{id}/invite */
      getInviteLink(calendarId) {
        return this.http.get(`${this.baseUrl}/calendars/${calendarId}/invite`);
      }
      /** POST /calendars/invite/accept */
      acceptInvite(dto) {
        return this.http.post(`${this.baseUrl}/calendars/invite/accept`, dto);
      }
      static \u0275fac = function CalendarApiService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CalendarApiService)(\u0275\u0275inject(HttpClient));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarApiService, factory: _CalendarApiService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarApiService, [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }], () => [{ type: HttpClient }], null);
    })();
  }
});

export {
  CalendarApiService,
  init_calendar_api_service
};
//# sourceMappingURL=chunk-JRC6SCPK.js.map
