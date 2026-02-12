import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  init_forms
} from "./chunk-RYBDXJGT.js";
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/calendar/calendar-selector-modal/calendar-selector-modal.ts
function CalendarSelectorModal_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No calendars available");
    \u0275\u0275elementEnd();
  }
}
function CalendarSelectorModal_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No calendars match your search");
    \u0275\u0275elementEnd();
  }
}
function CalendarSelectorModal_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, CalendarSelectorModal_Conditional_10_Conditional_1_Template, 2, 0, "p")(2, CalendarSelectorModal_Conditional_10_Conditional_2_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.calendars().length === 0 ? 1 : 2);
  }
}
function CalendarSelectorModal_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CalendarSelectorModal_Conditional_11_For_2_Template_button_click_0_listener() {
      const cal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelect(cal_r3.calendar_id));
    })("dblclick", function CalendarSelectorModal_Conditional_11_For_2_Template_button_dblclick_0_listener() {
      const cal_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onActivate(cal_r3.calendar_id));
    });
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cal_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r0.getColor(cal_r3.calendar_id).primary)("color", ctx_r0.selectedCalendarId() === cal_r3.calendar_id ? "white" : ctx_r0.getColor(cal_r3.calendar_id).primary)("background-color", ctx_r0.selectedCalendarId() === cal_r3.calendar_id ? ctx_r0.getColor(cal_r3.calendar_id).primary : "white");
    \u0275\u0275classProp("active", ctx_r0.selectedCalendarId() === cal_r3.calendar_id);
    \u0275\u0275attribute("data-secondary", ctx_r0.getColor(cal_r3.calendar_id).secondary);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.selectedCalendarId() === cal_r3.calendar_id ? "white" : ctx_r0.getColor(cal_r3.calendar_id).primary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cal_r3.name);
  }
}
function CalendarSelectorModal_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, CalendarSelectorModal_Conditional_11_For_2_Template, 4, 12, "button", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredCalendars());
  }
}
var _forTrack0, CalendarSelectorModal;
var init_calendar_selector_modal = __esm({
  "src/app/features/calendar/calendar-selector-modal/calendar-selector-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_calendar_colors();
    init_core();
    init_forms();
    _forTrack0 = ($index, $item) => $item.calendar_id;
    CalendarSelectorModal = class _CalendarSelectorModal {
      calendars = input([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      calendarActivated = output();
      closeModal = output();
      searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
      selectedCalendarId = signal(null, ...ngDevMode ? [{ debugName: "selectedCalendarId" }] : []);
      filteredCalendars = computed(() => {
        const query = this.searchQuery().toLowerCase().trim();
        if (!query)
          return this.calendars();
        return this.calendars().filter((c) => c.name.toLowerCase().includes(query));
      }, ...ngDevMode ? [{ debugName: "filteredCalendars" }] : []);
      constructor() {
        document.body.style.overflow = "hidden";
      }
      ngOnDestroy() {
        document.body.style.overflow = "";
      }
      getColor(calendarId) {
        return getCalendarColor(calendarId);
      }
      onSelect(calendarId) {
        this.selectedCalendarId.set(calendarId);
      }
      onActivate(calendarId) {
        this.calendarActivated.emit(calendarId);
      }
      onClose() {
        this.closeModal.emit();
      }
      static \u0275fac = function CalendarSelectorModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CalendarSelectorModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarSelectorModal, selectors: [["app-calendar-selector-modal"]], inputs: { calendars: [1, "calendars"] }, outputs: { calendarActivated: "calendarActivated", closeModal: "closeModal" }, decls: 18, vars: 2, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "Close modal", 1, "modal-close-btn", 3, "click"], [1, "modal-search"], ["type", "text", "placeholder", "Search calendars...", "aria-label", "Search calendars", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "modal-body"], [1, "no-items"], [1, "filter-list"], [1, "modal-footer"], [1, "footer-hint"], [1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "calendar-filter-chip", 3, "active", "border-color", "color", "background-color"], ["type", "button", 1, "calendar-filter-chip", 3, "click", "dblclick"], [1, "calendar-color-dot"], [1, "calendar-title"]], template: function CalendarSelectorModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275listener("click", function CalendarSelectorModal_Template_div_click_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275listener("click", function CalendarSelectorModal_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
          \u0275\u0275text(4, "Select Calendar");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "button", 4);
          \u0275\u0275listener("click", function CalendarSelectorModal_Template_button_click_5_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(6, " \u2715 ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(7, "div", 5)(8, "input", 6);
          \u0275\u0275twoWayListener("ngModelChange", function CalendarSelectorModal_Template_input_ngModelChange_8_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(9, "div", 7);
          \u0275\u0275conditionalCreate(10, CalendarSelectorModal_Conditional_10_Template, 3, 1, "div", 8)(11, CalendarSelectorModal_Conditional_11_Template, 3, 0, "div", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "i");
          \u0275\u0275text(15, "Double-click a Calendar to open");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(16, "button", 12);
          \u0275\u0275listener("click", function CalendarSelectorModal_Template_button_click_16_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(17, "Cancel");
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.filteredCalendars().length === 0 ? 10 : 11);
        }
      }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.modal-close-btn[_ngcontent-%COMP%]:active {\n  color: #c82333;\n}\n.modal-search[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 20px;\n}\n.no-items[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #999;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.filter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n  max-height: clamp(240px, 45vh, 420px);\n  overflow-y: auto;\n  padding-right: 6px;\n}\n.filter-list[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #c7c7c7 transparent;\n}\n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c7c7c7;\n  border-radius: 999px;\n  border: 3px solid transparent;\n  background-clip: content-box;\n}\n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.calendar-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background-color 0.2s,\n    color 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  appearance: none;\n  -webkit-appearance: none;\n  border-left-width: 2px;\n  box-shadow: none;\n}\n.calendar-filter-chip.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(0);\n}\n.calendar-color-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-title[_ngcontent-%COMP%] {\n  font-weight: inherit;\n  font-size: 13px;\n  color: inherit;\n}\n.calendar-filter-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--chip-hover-bg, white);\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n/*# sourceMappingURL=calendar-selector-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarSelectorModal, [{
        type: Component,
        args: [{ selector: "app-calendar-selector-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-overlay" (click)="onClose()">
  <div class="modal-content" (click)="$event.stopPropagation()">
    <!-- Header -->
    <div class="modal-header">
      <h2 class="modal-title">Select Calendar</h2>
      <button class="modal-close-btn" (click)="onClose()" aria-label="Close modal">
        \u2715
      </button>
    </div>

    <!-- Search -->
    <div class="modal-search">
      <input
        type="text"
        class="search-input"
        placeholder="Search calendars..."
        [(ngModel)]="searchQuery"
        aria-label="Search calendars"
      />
    </div>

    <!-- List -->
    <div class="modal-body">
      @if (filteredCalendars().length === 0) {
        <div class="no-items">
          @if (calendars().length === 0) {
            <p>No calendars available</p>
          } @else {
            <p>No calendars match your search</p>
          }
        </div>
      } @else {
        <div class="filter-list">
          @for (cal of filteredCalendars(); track cal.calendar_id) {
            <button
              type="button"
              class="calendar-filter-chip"
              [class.active]="selectedCalendarId() === cal.calendar_id"
              [style.border-color]="getColor(cal.calendar_id).primary"
              [style.color]="selectedCalendarId() === cal.calendar_id ? 'white' : getColor(cal.calendar_id).primary"
              [style.background-color]="selectedCalendarId() === cal.calendar_id ? getColor(cal.calendar_id).primary : 'white'"
              (click)="onSelect(cal.calendar_id)"
              (dblclick)="onActivate(cal.calendar_id)"
              [attr.data-secondary]="getColor(cal.calendar_id).secondary"
            >
              <span
                class="calendar-color-dot"
                [style.background-color]="selectedCalendarId() === cal.calendar_id ? 'white' : getColor(cal.calendar_id).primary">
              </span>

              <span class="calendar-title">{{ cal.name }}</span>
            </button>
          }
        </div>
      }
    </div>

    <!-- Footer -->
    <div class="modal-footer">
      <div class="footer-hint"><i>Double-click a Calendar to open</i></div>
      <button class="btn btn-outline-secondary" (click)="onClose()">Cancel</button>
    </div>
  </div>
</div>`, styles: ["/* src/app/features/calendar/calendar-selector-modal/calendar-selector-modal.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.modal-close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-close-btn:hover {\n  color: #dc3545;\n}\n.modal-close-btn:active {\n  color: #c82333;\n}\n.modal-search {\n  padding: 15px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 20px;\n}\n.no-items {\n  padding: 40px 20px;\n  text-align: center;\n  color: #999;\n}\n.modal-footer {\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.filter-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n  max-height: clamp(240px, 45vh, 420px);\n  overflow-y: auto;\n  padding-right: 6px;\n}\n.filter-list {\n  scrollbar-width: thin;\n  scrollbar-color: #c7c7c7 transparent;\n}\n.filter-list::-webkit-scrollbar {\n  width: 10px;\n}\n.filter-list::-webkit-scrollbar-thumb {\n  background: #c7c7c7;\n  border-radius: 999px;\n  border: 3px solid transparent;\n  background-clip: content-box;\n}\n.filter-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n.calendar-filter-chip {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition:\n    transform 0.2s,\n    box-shadow 0.2s,\n    background-color 0.2s,\n    color 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  appearance: none;\n  -webkit-appearance: none;\n  border-left-width: 2px;\n  box-shadow: none;\n}\n.calendar-filter-chip.active {\n  font-weight: 600;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(0);\n}\n.calendar-color-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-title {\n  font-weight: inherit;\n  font-size: 13px;\n  color: inherit;\n}\n.calendar-filter-chip:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--chip-hover-bg, white);\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-outline-secondary {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n/*# sourceMappingURL=calendar-selector-modal.css.map */\n"] }]
      }], () => [], { calendars: [{ type: Input, args: [{ isSignal: true, alias: "calendars", required: false }] }], calendarActivated: [{ type: Output, args: ["calendarActivated"] }], closeModal: [{ type: Output, args: ["closeModal"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarSelectorModal, { className: "CalendarSelectorModal", filePath: "src/app/features/calendar/calendar-selector-modal/calendar-selector-modal.ts", lineNumber: 16 });
    })();
  }
});

export {
  CalendarSelectorModal,
  init_calendar_selector_modal
};
//# sourceMappingURL=chunk-263FTSFE.js.map
