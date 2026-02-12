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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/dashboard/main-page/components/event-selector-modal/event-selector-modal.ts
function EventSelectorModal_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function EventSelectorModal_Conditional_10_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearCalendarFilters());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function EventSelectorModal_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function EventSelectorModal_Conditional_10_For_7_Template_button_click_0_listener() {
      const calendar_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCalendar(calendar_r4.calendar_id));
    });
    \u0275\u0275element(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary : "white")("border-color", ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary)("color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? "white" : ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary);
    \u0275\u0275classProp("active", ctx_r1.isCalendarSelected(calendar_r4.calendar_id));
    \u0275\u0275property("title", \u0275\u0275interpolate1("Click to filter by ", calendar_r4.name));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", calendar_r4.name, " ");
  }
}
function EventSelectorModal_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3, "Calendars");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventSelectorModal_Conditional_10_Conditional_4_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275repeaterCreate(6, EventSelectorModal_Conditional_10_For_7_Template, 3, 13, "button", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedCalendarIds().length > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.calendars());
  }
}
function EventSelectorModal_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No events available");
    \u0275\u0275elementEnd();
  }
}
function EventSelectorModal_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No events match your search");
    \u0275\u0275elementEnd();
  }
}
function EventSelectorModal_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, EventSelectorModal_Conditional_12_Conditional_1_Template, 2, 0, "p")(2, EventSelectorModal_Conditional_12_Conditional_2_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.events().length === 0 ? 1 : 2);
  }
}
function EventSelectorModal_Conditional_13_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r6.calendar_name);
  }
}
function EventSelectorModal_Conditional_13_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r6.description);
  }
}
function EventSelectorModal_Conditional_13_For_2_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r7);
  }
}
function EventSelectorModal_Conditional_13_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, EventSelectorModal_Conditional_13_For_2_Conditional_8_For_2_Template, 2, 1, "span", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(event_r6.tags);
  }
}
function EventSelectorModal_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function EventSelectorModal_Conditional_13_For_2_Template_div_click_0_listener() {
      const event_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEventSelect(event_r6.event_id));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventSelectorModal_Conditional_13_For_2_Conditional_4_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, EventSelectorModal_Conditional_13_For_2_Conditional_7_Template, 2, 1, "div", 28);
    \u0275\u0275conditionalCreate(8, EventSelectorModal_Conditional_13_For_2_Conditional_8_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r6.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r6.calendar_name ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatEventTime(event_r6.start_time), " (", ctx_r1.getTimezoneAbbr(), ") ");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r6.description ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r6.tags && event_r6.tags.length > 0 ? 8 : -1);
  }
}
function EventSelectorModal_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, EventSelectorModal_Conditional_13_For_2_Template, 9, 6, "div", 22, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredEvents());
  }
}
function EventSelectorModal_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function EventSelectorModal_Conditional_14_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearTagFilters());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function EventSelectorModal_Conditional_14_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function EventSelectorModal_Conditional_14_For_7_Template_button_click_0_listener() {
      const tag_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTag(tag_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isTagSelected(tag_r10));
    \u0275\u0275property("title", \u0275\u0275interpolate1("Click to filter by ", tag_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r10, " ");
  }
}
function EventSelectorModal_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 15)(2, "h3");
    \u0275\u0275text(3, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventSelectorModal_Conditional_14_Conditional_4_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275repeaterCreate(6, EventSelectorModal_Conditional_14_For_7_Template, 2, 5, "button", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.selectedTags().length > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.allTags());
  }
}
var _forTrack0, _forTrack1, EventSelectorModal;
var init_event_selector_modal = __esm({
  "src/app/features/dashboard/main-page/components/event-selector-modal/event-selector-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_forms();
    init_calendar_colors();
    init_core();
    init_forms();
    _forTrack0 = ($index, $item) => $item.calendar_id;
    _forTrack1 = ($index, $item) => $item.event_id;
    EventSelectorModal = class _EventSelectorModal {
      // Inputs & Outputs
      events = input([], ...ngDevMode ? [{ debugName: "events" }] : []);
      calendars = input([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      eventSelected = output();
      // Emit event ID instead of navigating
      closeModal = output();
      // State
      searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
      selectedTags = signal([], ...ngDevMode ? [{ debugName: "selectedTags" }] : []);
      selectedCalendarIds = signal([], ...ngDevMode ? [{ debugName: "selectedCalendarIds" }] : []);
      // Computed: extract all unique tags from events
      allTags = computed(() => {
        const tagSet = /* @__PURE__ */ new Set();
        this.events().forEach((e) => {
          e.tags.forEach((tag) => tagSet.add(tag));
        });
        return Array.from(tagSet).sort();
      }, ...ngDevMode ? [{ debugName: "allTags" }] : []);
      // Computed: filter events by search query (title, description, calendar name, or tags) AND selected tags AND selected calendars
      filteredEvents = computed(() => {
        let filtered = this.events();
        const selectedCals = this.selectedCalendarIds();
        if (selectedCals.length > 0) {
          filtered = filtered.filter((e) => selectedCals.includes(e.calendar_id));
        }
        const selected = this.selectedTags();
        if (selected.length > 0) {
          filtered = filtered.filter((e) => selected.some((tag) => e.tags.includes(tag)));
        }
        const query = this.searchQuery().toLowerCase();
        if (query) {
          filtered = filtered.filter((e) => e.title.toLowerCase().includes(query) || e.description?.toLowerCase().includes(query) || e.calendar_name?.toLowerCase().includes(query) || e.tags.some((tag) => tag.toLowerCase().includes(query)));
        }
        return filtered;
      }, ...ngDevMode ? [{ debugName: "filteredEvents" }] : []);
      constructor() {
        document.body.style.overflow = "hidden";
      }
      ngOnDestroy() {
        document.body.style.overflow = "";
      }
      onEventSelect(eventId) {
        this.eventSelected.emit(eventId);
      }
      onClose() {
        this.closeModal.emit();
      }
      toggleTag(tag) {
        this.selectedTags.update((current) => {
          if (current.includes(tag)) {
            return current.filter((t) => t !== tag);
          } else {
            return [...current, tag];
          }
        });
      }
      isTagSelected(tag) {
        return this.selectedTags().includes(tag);
      }
      clearTagFilters() {
        this.selectedTags.set([]);
      }
      toggleCalendar(calendarId) {
        this.selectedCalendarIds.update((current) => {
          if (current.includes(calendarId)) {
            return current.filter((id) => id !== calendarId);
          } else {
            return [...current, calendarId];
          }
        });
      }
      isCalendarSelected(calendarId) {
        return this.selectedCalendarIds().includes(calendarId);
      }
      clearCalendarFilters() {
        this.selectedCalendarIds.set([]);
      }
      getCalendarColor(calendarId) {
        return getCalendarColor(calendarId);
      }
      /**
       * Parse server ISO timestamp and handle timezone
       * If server includes timezone (Z or ±hh:mm), Date can parse safely.
       * If not, assume server meant UTC and append 'Z'.
       */
      parseServerInstant(iso) {
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        return new Date(hasTz ? iso : `${iso}Z`);
      }
      /**
       * Convert ISO-8601 timestamp to local date and time for display
       */
      formatEventTime(iso) {
        if (!iso)
          return "";
        const d = this.parseServerInstant(iso);
        if (isNaN(d.getTime()))
          return "";
        const pad = (n) => String(n).padStart(2, "0");
        const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
        return `${date} ${time}`;
      }
      /**
       * Get user's timezone abbreviation (e.g., EST, PST, UTC)
       */
      getTimezoneAbbr() {
        const now = /* @__PURE__ */ new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZoneName: "short",
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        const parts = formatter.formatToParts(now);
        const tzPart = parts.find((p) => p.type === "timeZoneName");
        return tzPart?.value ?? "UTC";
      }
      static \u0275fac = function EventSelectorModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EventSelectorModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventSelectorModal, selectors: [["app-event-selector-modal"]], inputs: { events: [1, "events"], calendars: [1, "calendars"] }, outputs: { eventSelected: "eventSelected", closeModal: "closeModal" }, decls: 18, vars: 4, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["aria-label", "Close modal", 1, "modal-close-btn", 3, "click"], [1, "modal-search"], ["type", "text", "placeholder", "Search events by title, description, calendar, or tags...", "aria-label", "Search events", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "modal-body-wrapper"], [1, "filter-sidebar", "left-sidebar"], [1, "modal-body"], [1, "no-events"], [1, "events-list"], [1, "filter-sidebar", "right-sidebar"], [1, "modal-footer"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "sidebar-header"], ["title", "Clear calendar filters", 1, "clear-btn"], [1, "filter-list"], [1, "calendar-filter-chip", 3, "active", "background-color", "border-color", "color", "title"], ["title", "Clear calendar filters", 1, "clear-btn", 3, "click"], [1, "calendar-filter-chip", 3, "click", "title"], [1, "calendar-color-dot"], [1, "event-item"], [1, "event-item", 3, "click"], [1, "event-header"], [1, "event-title"], [1, "event-calendar"], [1, "event-time"], [1, "event-description"], [1, "event-tags"], [1, "tag-chip"], ["title", "Clear tag filters", 1, "clear-btn"], [1, "tag-filter-chip", 3, "active", "title"], ["title", "Clear tag filters", 1, "clear-btn", 3, "click"], [1, "tag-filter-chip", 3, "click", "title"]], template: function EventSelectorModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275listener("click", function EventSelectorModal_Template_div_click_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275elementStart(1, "div", 1);
          \u0275\u0275listener("click", function EventSelectorModal_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
          \u0275\u0275text(4, "Select Event");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "button", 4);
          \u0275\u0275listener("click", function EventSelectorModal_Template_button_click_5_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(6, " \u2715 ");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(7, "div", 5)(8, "input", 6);
          \u0275\u0275twoWayListener("ngModelChange", function EventSelectorModal_Template_input_ngModelChange_8_listener($event) {
            \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(9, "div", 7);
          \u0275\u0275conditionalCreate(10, EventSelectorModal_Conditional_10_Template, 8, 1, "div", 8);
          \u0275\u0275elementStart(11, "div", 9);
          \u0275\u0275conditionalCreate(12, EventSelectorModal_Conditional_12_Template, 3, 1, "div", 10)(13, EventSelectorModal_Conditional_13_Template, 3, 0, "div", 11);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(14, EventSelectorModal_Conditional_14_Template, 8, 1, "div", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(15, "div", 13)(16, "button", 14);
          \u0275\u0275listener("click", function EventSelectorModal_Template_button_click_16_listener() {
            return ctx.onClose();
          });
          \u0275\u0275text(17, " Cancel ");
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.calendars().length > 0 ? 10 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.filteredEvents().length === 0 ? 12 : 13);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.allTags().length > 0 ? 14 : -1);
        }
      }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 95%;\n  max-width: 1100px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.modal-close-btn[_ngcontent-%COMP%]:active {\n  color: #c82333;\n}\n.modal-search[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.modal-body-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.filter-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #f8f9fa;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  flex-shrink: 0;\n}\n.left-sidebar[_ngcontent-%COMP%] {\n  border-right: 1px solid #e0e0e0;\n}\n.right-sidebar[_ngcontent-%COMP%] {\n  border-left: 1px solid #e0e0e0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-width: 0;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 10px;\n  cursor: pointer;\n  padding: 3px 6px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-weight: 500;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.1);\n}\n.filter-list[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.calendar-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.calendar-color-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-filter-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.calendar-filter-chip.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.calendar-filter-chip.active[_ngcontent-%COMP%]   .calendar-color-dot[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n.tag-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  color: #555;\n}\n.tag-filter-chip[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n  color: #1976d2;\n}\n.tag-filter-chip.active[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  border-color: #1976d2;\n  font-weight: 500;\n}\n.tag-filter-chip.active[_ngcontent-%COMP%]:hover {\n  background-color: #1565c0;\n  border-color: #1565c0;\n}\n.events-list[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.event-item[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #007bff;\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);\n}\n.event-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: #333;\n  flex: 1;\n}\n.event-calendar[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.event-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 6px;\n}\n.event-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n}\n.event-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.no-events[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #999;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=event-selector-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventSelectorModal, [{
        type: Component,
        args: [{ selector: "app-event-selector-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-overlay" (click)="onClose()">
  <div class="modal-content" (click)="$event.stopPropagation()">
    <!-- Header -->
    <div class="modal-header">
      <h2 class="modal-title">Select Event</h2>
      <button class="modal-close-btn" (click)="onClose()" aria-label="Close modal">
        \u2715
      </button>
    </div>

    <!-- Search Bar -->
    <div class="modal-search">
      <input
        type="text"
        class="search-input"
        placeholder="Search events by title, description, calendar, or tags..."
        [(ngModel)]="searchQuery"
        aria-label="Search events"
      />
    </div>

    <!-- Main Content Area -->
    <div class="modal-body-wrapper">
      <!-- Left Sidebar: Calendar Filter -->
      @if (calendars().length > 0) {
        <div class="filter-sidebar left-sidebar">
          <div class="sidebar-header">
            <h3>Calendars</h3>
            @if (selectedCalendarIds().length > 0) {
              <button class="clear-btn" (click)="clearCalendarFilters()" title="Clear calendar filters">
                Clear
              </button>
            }
          </div>
          <div class="filter-list">
            @for (calendar of calendars(); track calendar.calendar_id) {
              <button 
                class="calendar-filter-chip" 
                [class.active]="isCalendarSelected(calendar.calendar_id)"
                [style.background-color]="isCalendarSelected(calendar.calendar_id) ? getCalendarColor(calendar.calendar_id).primary : 'white'"
                [style.border-color]="getCalendarColor(calendar.calendar_id).primary"
                [style.color]="isCalendarSelected(calendar.calendar_id) ? 'white' : getCalendarColor(calendar.calendar_id).primary"
                (click)="toggleCalendar(calendar.calendar_id)"
                title="Click to filter by {{ calendar.name }}">
                <span class="calendar-color-dot" [style.background-color]="getCalendarColor(calendar.calendar_id).primary"></span>
                {{ calendar.name }}
              </button>
            }
          </div>
        </div>
      }

      <!-- Middle: Events List -->
      <div class="modal-body">
        @if (filteredEvents().length === 0) {
          <div class="no-events">
          @if (events().length === 0) {
            <p>No events available</p>
          } @else {
            <p>No events match your search</p>
          }
        </div>
      } @else {
        <div class="events-list">
          @for (event of filteredEvents(); track event.event_id) {
            <div class="event-item" (click)="onEventSelect(event.event_id)">
              <div class="event-header">
                <div class="event-title">{{ event.title }}</div>
                @if (event.calendar_name) {
                  <div class="event-calendar">{{ event.calendar_name }}</div>
                }
              </div>
              <div class="event-time">
                {{ formatEventTime(event.start_time) }} ({{ getTimezoneAbbr() }})
              </div>
              @if (event.description) {
                <div class="event-description">{{ event.description }}</div>
              }
              @if (event.tags && event.tags.length > 0) {
                <div class="event-tags">
                  @for (tag of event.tags; track tag) {
                    <span class="tag-chip">{{ tag }}</span>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
      </div>

      <!-- Right Sidebar: Tag Filter -->
      @if (allTags().length > 0) {
        <div class="filter-sidebar right-sidebar">
          <div class="sidebar-header">
            <h3>Tags</h3>
            @if (selectedTags().length > 0) {
              <button class="clear-btn" (click)="clearTagFilters()" title="Clear tag filters">
                Clear
              </button>
            }
          </div>
          <div class="filter-list">
            @for (tag of allTags(); track tag) {
              <button 
                class="tag-filter-chip" 
                [class.active]="isTagSelected(tag)"
                (click)="toggleTag(tag)"
                title="Click to filter by {{ tag }}">
                {{ tag }}
              </button>
            }
          </div>
        </div>
      }
    </div>

    <!-- Footer -->
    <div class="modal-footer">
      <button class="btn btn-outline-secondary" (click)="onClose()">
        Cancel
      </button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/dashboard/main-page/components/event-selector-modal/event-selector-modal.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  width: 95%;\n  max-width: 1100px;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.modal-close-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  padding: 0;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-close-btn:hover {\n  color: #dc3545;\n}\n.modal-close-btn:active {\n  color: #c82333;\n}\n.modal-search {\n  padding: 15px 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.search-input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.modal-body-wrapper {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.filter-sidebar {\n  width: 200px;\n  background-color: #f8f9fa;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  flex-shrink: 0;\n}\n.left-sidebar {\n  border-right: 1px solid #e0e0e0;\n}\n.right-sidebar {\n  border-left: 1px solid #e0e0e0;\n}\n.modal-body {\n  flex: 1;\n  overflow-y: auto;\n  min-width: 0;\n}\n.sidebar-header {\n  padding: 12px 15px;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  flex-shrink: 0;\n}\n.sidebar-header h3 {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.clear-btn {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 10px;\n  cursor: pointer;\n  padding: 3px 6px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-weight: 500;\n}\n.clear-btn:hover {\n  background-color: rgba(0, 123, 255, 0.1);\n}\n.filter-list {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.calendar-filter-chip {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.calendar-color-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-filter-chip:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.calendar-filter-chip.active {\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.calendar-filter-chip.active .calendar-color-dot {\n  background-color: white !important;\n}\n.tag-filter-chip {\n  padding: 8px 12px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  color: #555;\n}\n.tag-filter-chip:hover {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n  color: #1976d2;\n}\n.tag-filter-chip.active {\n  background-color: #1976d2;\n  color: white;\n  border-color: #1976d2;\n  font-weight: 500;\n}\n.tag-filter-chip.active:hover {\n  background-color: #1565c0;\n  border-color: #1565c0;\n}\n.events-list {\n  padding: 10px;\n}\n.event-item {\n  padding: 12px 15px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.event-item:hover {\n  background-color: #f5f5f5;\n  border-color: #007bff;\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.1);\n}\n.event-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.event-title {\n  font-weight: 600;\n  font-size: 15px;\n  color: #333;\n  flex: 1;\n}\n.event-calendar {\n  font-size: 11px;\n  color: #888;\n  background: #f0f0f0;\n  padding: 2px 8px;\n  border-radius: 3px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.event-time {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 6px;\n}\n.event-description {\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n}\n.event-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 8px;\n}\n.tag-chip {\n  display: inline-block;\n  padding: 3px 10px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.no-events {\n  padding: 40px 20px;\n  text-align: center;\n  color: #999;\n}\n.modal-footer {\n  padding: 15px 20px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.btn-outline-secondary {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.modal-body::-webkit-scrollbar {\n  width: 8px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 4px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=event-selector-modal.css.map */\n"] }]
      }], () => [], { events: [{ type: Input, args: [{ isSignal: true, alias: "events", required: false }] }], calendars: [{ type: Input, args: [{ isSignal: true, alias: "calendars", required: false }] }], eventSelected: [{ type: Output, args: ["eventSelected"] }], closeModal: [{ type: Output, args: ["closeModal"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventSelectorModal, { className: "EventSelectorModal", filePath: "src/app/features/dashboard/main-page/components/event-selector-modal/event-selector-modal.ts", lineNumber: 27 });
    })();
  }
});

export {
  EventSelectorModal,
  init_event_selector_modal
};
//# sourceMappingURL=chunk-52BBZFHM.js.map
