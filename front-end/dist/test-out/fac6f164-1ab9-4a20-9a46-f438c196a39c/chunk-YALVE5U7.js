import {
  RouterModule,
  init_router
} from "./chunk-LOQZ2SCF.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import {
  Component,
  Output,
  init_core,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/dashboard/main-page/components/calendar-options/calendar-options.ts
var CalendarOptions;
var init_calendar_options = __esm({
  "src/app/features/dashboard/main-page/components/calendar-options/calendar-options.ts"() {
    "use strict";
    init_core();
    init_common();
    init_router();
    init_core();
    CalendarOptions = class _CalendarOptions {
      createCalendar = output();
      viewCalendars = output();
      onCreateCalendar() {
        this.createCalendar.emit();
      }
      onViewCalendars() {
        this.viewCalendars.emit();
      }
      static \u0275fac = function CalendarOptions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CalendarOptions)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarOptions, selectors: [["app-calendar-options"]], outputs: { createCalendar: "createCalendar", viewCalendars: "viewCalendars" }, decls: 9, vars: 0, consts: [["aria-label", "Calendar Options", 1, "calendar-options"], [1, "h6", "mb-3"], [1, "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function CalendarOptions_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "section", 0)(1, "h2", 1)(2, "strong");
          \u0275\u0275text(3, "Calendar Options");
          \u0275\u0275domElementEnd()();
          \u0275\u0275domElementStart(4, "div", 2)(5, "button", 3);
          \u0275\u0275domListener("click", function CalendarOptions_Template_button_click_5_listener() {
            return ctx.onCreateCalendar();
          });
          \u0275\u0275text(6, " Create New Calendar ");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(7, "button", 3);
          \u0275\u0275domListener("click", function CalendarOptions_Template_button_click_7_listener() {
            return ctx.onViewCalendars();
          });
          \u0275\u0275text(8, " View Calendars ");
          \u0275\u0275domElementEnd()()();
        }
      }, dependencies: [CommonModule, RouterModule], styles: ["\n\n.calendar-options-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=calendar-options.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarOptions, [{
        type: Component,
        args: [{ selector: "app-calendar-options", standalone: true, imports: [CommonModule, RouterModule], template: '<section class="calendar-options" aria-label="Calendar Options">\n  <h2 class="h6 mb-3"><strong>Calendar Options</strong></h2>\n\n  <div class="d-grid gap-2">\n    <button\n      type="button"\n      class="btn btn-primary"\n      (click)="onCreateCalendar()"\n    >\n      Create New Calendar\n    </button>\n\n    <button\n      type="button"\n      class="btn btn-primary"\n      (click)="onViewCalendars()"\n    >\n      View Calendars\n    </button>\n  </div>\n</section>', styles: ["/* src/app/features/dashboard/main-page/components/calendar-options/calendar-options.css */\n.calendar-options-card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=calendar-options.css.map */\n"] }]
      }], null, { createCalendar: [{ type: Output, args: ["createCalendar"] }], viewCalendars: [{ type: Output, args: ["viewCalendars"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarOptions, { className: "CalendarOptions", filePath: "src/app/features/dashboard/main-page/components/calendar-options/calendar-options.ts", lineNumber: 12 });
    })();
  }
});

export {
  CalendarOptions,
  init_calendar_options
};
//# sourceMappingURL=chunk-YALVE5U7.js.map
