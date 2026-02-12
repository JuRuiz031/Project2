import {
  CalendarWidget,
  init_calendar_widget
} from "./chunk-BV7G6RXL.js";
import {
  getCalendarColor,
  init_calendar_colors
} from "./chunk-RBWGVD5O.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Component,
  Input,
  Output,
  computed,
  init_core,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/dashboard/main-page/components/calendar-display/calendar-display.ts
var CalendarDisplay;
var init_calendar_display = __esm({
  "src/app/features/dashboard/main-page/components/calendar-display/calendar-display.ts"() {
    "use strict";
    init_common();
    init_core();
    init_calendar_widget();
    init_calendar_colors();
    init_core();
    CalendarDisplay = class _CalendarDisplay {
      viewDate = /* @__PURE__ */ new Date();
      events = input([], ...ngDevMode ? [{ debugName: "events" }] : []);
      selectedTags = input([], ...ngDevMode ? [{ debugName: "selectedTags" }] : []);
      openEventSelector = output();
      eventClicked = output();
      // Emit event ID when user clicks on event
      createEvent = output();
      // Emit when user wants to create event
      STORAGE_KEY = "calendar_view_date";
      ngOnInit() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          try {
            this.viewDate = new Date(saved);
          } catch {
            this.viewDate = /* @__PURE__ */ new Date();
          }
        }
      }
      calendarEvents = computed(() => {
        let filteredEvents = this.events();
        const tags = this.selectedTags();
        if (tags && tags.length > 0) {
          filteredEvents = filteredEvents.filter((e) => tags.some((tag) => e.tags?.includes(tag)));
        }
        return filteredEvents.map((e) => ({
          title: e.title,
          start: new Date(e.start_time),
          end: new Date(e.end_time),
          allDay: false,
          color: this.getColorForCalendar(e.calendar_id),
          meta: {
            id: e.event_id,
            calendarId: e.calendar_id,
            description: e.description ?? "",
            notes: e.notes ?? "",
            tags: e.tags ?? []
          }
        }));
      }, ...ngDevMode ? [{ debugName: "calendarEvents" }] : []);
      getColorForCalendar(calendarId) {
        return getCalendarColor(calendarId);
      }
      onEventClicked(event) {
        const eventId = event.meta?.id;
        if (eventId) {
          console.log("[CalendarDisplay] Event clicked:", eventId);
          this.eventClicked.emit(eventId);
        }
      }
      onViewDateChange(newDate) {
        this.viewDate = newDate;
        localStorage.setItem(this.STORAGE_KEY, newDate.toISOString());
      }
      onOpenEventSelector() {
        this.openEventSelector.emit();
      }
      static \u0275fac = function CalendarDisplay_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CalendarDisplay)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarDisplay, selectors: [["app-calendar-display"]], inputs: { events: [1, "events"], selectedTags: [1, "selectedTags"] }, outputs: { openEventSelector: "openEventSelector", eventClicked: "eventClicked", createEvent: "createEvent" }, decls: 14, vars: 2, consts: [[1, "container", "py-4", "app-page"], [1, "card", "app-card", "shadow-sm", "calendar-display-card"], [1, "card-body"], ["aria-label", "Calendar Display Area", 1, "calendar-display"], [1, "calendar-display__header"], [1, "calendar-display__title"], [1, "calendar-display__body"], [3, "viewDateChange", "eventClicked", "viewDate", "events"], [1, "calendar-display__footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function CalendarDisplay_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "section", 3)(4, "header", 4)(5, "div", 5);
          \u0275\u0275text(6, " Calendar Display ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(7, "div", 6)(8, "app-calendar-widget", 7);
          \u0275\u0275listener("viewDateChange", function CalendarDisplay_Template_app_calendar_widget_viewDateChange_8_listener($event) {
            return ctx.onViewDateChange($event);
          })("eventClicked", function CalendarDisplay_Template_app_calendar_widget_eventClicked_8_listener($event) {
            return ctx.onEventClicked($event);
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(9, "footer", 8)(10, "button", 9);
          \u0275\u0275listener("click", function CalendarDisplay_Template_button_click_10_listener() {
            return ctx.createEvent.emit();
          });
          \u0275\u0275text(11, " Create Event ");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "button", 9);
          \u0275\u0275listener("click", function CalendarDisplay_Template_button_click_12_listener() {
            return ctx.onOpenEventSelector();
          });
          \u0275\u0275text(13, " View Events ");
          \u0275\u0275elementEnd()()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275property("viewDate", ctx.viewDate)("events", ctx.calendarEvents());
        }
      }, dependencies: [CommonModule, CalendarWidget], styles: ["\n\n.calendar-display-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.calendar-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.calendar-display__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.calendar-display__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.calendar-display__view-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--color-border-default);\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n}\n.calendar-display__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 480px;\n  border: 1px solid var(--color-border-default);\n  border-radius: 12px;\n  background: #fff;\n  display: grid;\n  place-items: center;\n}\n.calendar-display__placeholder[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  font-weight: 600;\n  text-align: center;\n}\n.calendar-display__footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=calendar-display.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDisplay, [{
        type: Component,
        args: [{ selector: "app-calendar-display", standalone: true, imports: [CommonModule, CalendarWidget], template: '<div class="container py-4 app-page">\n  <div class="card app-card shadow-sm calendar-display-card">\n    <div class="card-body">\n      <section class="calendar-display" aria-label="Calendar Display Area">\n        <!-- Top controls -->\n        <header class="calendar-display__header">\n          <div class="calendar-display__title">\n            Calendar Display\n          </div>\n        </header>\n\n        <div class="calendar-display__body">\n            <app-calendar-widget\n              [viewDate]="viewDate"\n              [events]="calendarEvents()"\n              (viewDateChange)="onViewDateChange($event)"\n              (eventClicked)="onEventClicked($event)"\n            ></app-calendar-widget>\n        </div>\n\n        <!-- Bottom actions -->\n        <footer class="calendar-display__footer">\n          <button\n            type="button"\n            class="btn btn-primary"\n            (click)="createEvent.emit()"\n          >\n            Create Event\n          </button>\n\n          <button\n            type="button"\n            class="btn btn-primary"\n            (click)="onOpenEventSelector()"\n          >\n            View Events\n          </button>\n        </footer>\n      </section>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/features/dashboard/main-page/components/calendar-display/calendar-display.css */\n.calendar-display-card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.calendar-display {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.calendar-display__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.calendar-display__title {\n  font-size: 16px;\n  font-weight: 700;\n}\n.calendar-display__view-btn {\n  background: transparent;\n  border: 1px solid var(--color-border-default);\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n}\n.calendar-display__body {\n  flex: 1;\n  min-height: 480px;\n  border: 1px solid var(--color-border-default);\n  border-radius: 12px;\n  background: #fff;\n  display: grid;\n  place-items: center;\n}\n.calendar-display__placeholder {\n  opacity: 0.65;\n  font-weight: 600;\n  text-align: center;\n}\n.calendar-display__footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n/*# sourceMappingURL=calendar-display.css.map */\n"] }]
      }], null, { events: [{ type: Input, args: [{ isSignal: true, alias: "events", required: false }] }], selectedTags: [{ type: Input, args: [{ isSignal: true, alias: "selectedTags", required: false }] }], openEventSelector: [{ type: Output, args: ["openEventSelector"] }], eventClicked: [{ type: Output, args: ["eventClicked"] }], createEvent: [{ type: Output, args: ["createEvent"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarDisplay, { className: "CalendarDisplay", filePath: "src/app/features/dashboard/main-page/components/calendar-display/calendar-display.ts", lineNumber: 26 });
    })();
  }
});

export {
  CalendarDisplay,
  init_calendar_display
};
//# sourceMappingURL=chunk-XJG5QYQD.js.map
