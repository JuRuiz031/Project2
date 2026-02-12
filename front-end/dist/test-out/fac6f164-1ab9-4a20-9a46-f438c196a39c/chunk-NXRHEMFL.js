import {
  CalendarApiService,
  init_calendar_api_service
} from "./chunk-JRC6SCPK.js";
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

// src/app/shared/services/calendar.service.ts
var CalendarService;
var init_calendar_service = __esm({
  "src/app/shared/services/calendar.service.ts"() {
    "use strict";
    init_core();
    init_core();
    init_calendar_api_service();
    CalendarService = class _CalendarService {
      api;
      constructor(api) {
        this.api = api;
      }
      // GET /calendar: returns user's calendars + tags
      getHomepage() {
        return this.api.getCalendarHome();
      }
      // GET /calendar?calendarIds=...: events/polls for specific calendars
      getByCalendarIds(calendarIds) {
        return this.api.getByCalendarIds(calendarIds);
      }
      // GET /calendar?eventIds=...: specific events only
      getByEventIds(eventIds) {
        return this.api.getByEventIds(eventIds);
      }
      // GET /calendar?pollIds=...: specific polls only
      getByPollIds(pollIds) {
        return this.api.getByPollIds(pollIds);
      }
      // GET /calendar?tags=...: events/polls matching tags
      getByTags(tags) {
        return this.api.getByTags(tags);
      }
      // GET /calendar with combined filters
      getFiltered(filters) {
        return this.api.getFiltered(filters);
      }
      // POST /calendar: create new calendar
      create(dto) {
        return this.api.createCalendar(dto);
      }
      // PATCH /calendar/{id}: update name or promote admins, requires admin
      update(calendarId, dto) {
        return this.api.updateCalendar(calendarId, dto);
      }
      // DELETE /calendar/{id}: delete calendar, requires admin
      delete(calendarId) {
        return this.api.deleteCalendar(calendarId);
      }
      // GET /calendars/{id}/invite: generate invite link, requires admin
      getInviteLink(calendarId) {
        return this.api.getInviteLink(calendarId);
      }
      // POST /calendars/invite/accept: accept invite and join calendar
      acceptInvite(inviteToken) {
        return this.api.acceptInvite({ invite_token: inviteToken });
      }
      static \u0275fac = function CalendarService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CalendarService)(\u0275\u0275inject(CalendarApiService));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
      }], () => [{ type: CalendarApiService }], null);
    })();
  }
});

export {
  CalendarService,
  init_calendar_service
};
//# sourceMappingURL=chunk-NXRHEMFL.js.map
