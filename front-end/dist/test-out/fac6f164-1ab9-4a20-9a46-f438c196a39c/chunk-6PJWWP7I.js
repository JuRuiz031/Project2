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
  Subject,
  init_core,
  init_esm,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/dashboard/main-page/components/display-options/display-options.ts
function DisplayOptions_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 12);
    \u0275\u0275domListener("click", function DisplayOptions_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearCalendarFilters());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275domElementEnd();
  }
}
function DisplayOptions_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 13);
    \u0275\u0275domListener("click", function DisplayOptions_For_11_Template_button_click_0_listener() {
      const calendar_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCalendar(calendar_r4.calendar_id));
    });
    \u0275\u0275domElement(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const calendar_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary : "white")("border-color", ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary)("color", ctx_r1.isCalendarSelected(calendar_r4.calendar_id) ? "white" : ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary);
    \u0275\u0275classProp("active", ctx_r1.isCalendarSelected(calendar_r4.calendar_id));
    \u0275\u0275domProperty("title", \u0275\u0275interpolate1("Click to toggle ", calendar_r4.name));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getCalendarColor(calendar_r4.calendar_id).primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", calendar_r4.name, " ");
  }
}
function DisplayOptions_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 15);
    \u0275\u0275domListener("click", function DisplayOptions_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearTagFilters());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275domElementEnd();
  }
}
function DisplayOptions_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275text(1, "No tags available");
    \u0275\u0275domElementEnd();
  }
}
function DisplayOptions_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 17);
    \u0275\u0275domListener("click", function DisplayOptions_Conditional_18_For_2_Template_button_click_0_listener() {
      const tag_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTag(tag_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isTagSelected(tag_r7));
    \u0275\u0275domProperty("title", \u0275\u0275interpolate1("Click to filter by ", tag_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r7, " ");
  }
}
function DisplayOptions_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, DisplayOptions_Conditional_18_For_2_Template, 2, 5, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tags());
  }
}
var _forTrack0, DisplayOptions;
var init_display_options = __esm({
  "src/app/features/dashboard/main-page/components/display-options/display-options.ts"() {
    "use strict";
    init_common();
    init_core();
    init_esm();
    init_calendar_colors();
    init_core();
    _forTrack0 = ($index, $item) => $item.calendar_id;
    DisplayOptions = class _DisplayOptions {
      /** receive data from MainPage */
      calendars = input([], ...ngDevMode ? [{ debugName: "calendars" }] : []);
      tags = input([], ...ngDevMode ? [{ debugName: "tags" }] : []);
      /** emit selected calendar_ids and tags back to MainPage */
      selectedCalendarIdsChange = output();
      selectedTagsChange = output();
      /** State for selected calendars and tags */
      selectedCalendarIds = signal([], ...ngDevMode ? [{ debugName: "selectedCalendarIds" }] : []);
      selectedTags = signal([], ...ngDevMode ? [{ debugName: "selectedTags" }] : []);
      /** Cleanup subscriptions */
      destroy$ = new Subject();
      constructor() {
      }
      ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
      }
      toggleCalendar(calendarId) {
        this.selectedCalendarIds.update((current) => {
          if (current.includes(calendarId)) {
            return current.filter((id) => id !== calendarId);
          } else {
            return [...current, calendarId];
          }
        });
        this.selectedCalendarIdsChange.emit(this.selectedCalendarIds());
      }
      isCalendarSelected(calendarId) {
        return this.selectedCalendarIds().includes(calendarId);
      }
      clearCalendarFilters() {
        this.selectedCalendarIds.set([]);
        this.selectedCalendarIdsChange.emit([]);
      }
      toggleTag(tag) {
        this.selectedTags.update((current) => {
          if (current.includes(tag)) {
            return current.filter((t) => t !== tag);
          } else {
            return [...current, tag];
          }
        });
        this.selectedTagsChange.emit(this.selectedTags());
      }
      isTagSelected(tag) {
        return this.selectedTags().includes(tag);
      }
      clearTagFilters() {
        this.selectedTags.set([]);
        this.selectedTagsChange.emit([]);
      }
      getCalendarColor(calendarId) {
        return getCalendarColor(calendarId);
      }
      static \u0275fac = function DisplayOptions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DisplayOptions)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayOptions, selectors: [["app-display-options"]], inputs: { calendars: [1, "calendars"], tags: [1, "tags"] }, outputs: { selectedCalendarIdsChange: "selectedCalendarIdsChange", selectedTagsChange: "selectedTagsChange" }, decls: 19, vars: 3, consts: [["aria-label", "Display Options", 1, "display-options"], [1, "display-options__title"], [1, "display-options__grid"], ["aria-label", "Calendars list", 1, "display-options__panel"], [1, "panel-header"], [1, "display-options__panel-title"], ["title", "Clear calendar filters", 1, "clear-btn"], [1, "filter-list"], [1, "calendar-filter-chip", 3, "active", "background-color", "border-color", "color", "title"], ["aria-label", "Tags list", 1, "display-options__panel"], ["title", "Clear tag filters", 1, "clear-btn"], [1, "empty-state"], ["title", "Clear calendar filters", 1, "clear-btn", 3, "click"], [1, "calendar-filter-chip", 3, "click", "title"], [1, "calendar-color-dot"], ["title", "Clear tag filters", 1, "clear-btn", 3, "click"], [1, "tag-filter-chip", 3, "active", "title"], [1, "tag-filter-chip", 3, "click", "title"]], template: function DisplayOptions_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "section", 0)(1, "h2", 1);
          \u0275\u0275text(2, "Display Options");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
          \u0275\u0275text(7, "Calendars");
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(8, DisplayOptions_Conditional_8_Template, 2, 0, "button", 6);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(9, "div", 7);
          \u0275\u0275repeaterCreate(10, DisplayOptions_For_11_Template, 3, 13, "button", 8, _forTrack0);
          \u0275\u0275domElementEnd()();
          \u0275\u0275domElementStart(12, "div", 9)(13, "div", 4)(14, "div", 5);
          \u0275\u0275text(15, "Tags");
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(16, DisplayOptions_Conditional_16_Template, 2, 0, "button", 10);
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(17, DisplayOptions_Conditional_17_Template, 2, 0, "div", 11)(18, DisplayOptions_Conditional_18_Template, 3, 0, "div", 7);
          \u0275\u0275domElementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275conditional(ctx.selectedCalendarIds().length > 0 && ctx.selectedCalendarIds().length < ctx.calendars().length ? 8 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275repeater(ctx.calendars());
          \u0275\u0275advance(6);
          \u0275\u0275conditional(ctx.selectedTags().length > 0 ? 16 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.tags().length === 0 ? 17 : 18);
        }
      }, dependencies: [CommonModule], styles: ["\n\n.display-options__title[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n}\n.display-options__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.display-options__panel[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-default);\n  border-radius: 12px;\n  background: #fff;\n  padding: 12px;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.display-options__panel-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 11px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-weight: 500;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.1);\n}\n.filter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.calendar-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.calendar-color-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-filter-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.calendar-filter-chip.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.calendar-filter-chip.active[_ngcontent-%COMP%]   .calendar-color-dot[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n.tag-filter-chip[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  color: #555;\n}\n.tag-filter-chip[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n  color: #1976d2;\n}\n.tag-filter-chip.active[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  border-color: #1976d2;\n  font-weight: 500;\n}\n.tag-filter-chip.active[_ngcontent-%COMP%]:hover {\n  background-color: #1565c0;\n  border-color: #1565c0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 13px;\n  font-style: italic;\n  text-align: center;\n  padding: 20px;\n}\n@media (max-width: 900px) {\n  .display-options__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.filter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n  max-height: clamp(160px, 30vh, 280px);\n  overflow-y: auto;\n  padding-right: 6px;\n}\n.filter-list[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #c7c7c7 transparent;\n}\n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c7c7c7;\n  border-radius: 999px;\n  border: 3px solid transparent;\n  background-clip: content-box;\n}\n.filter-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n/*# sourceMappingURL=display-options.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisplayOptions, [{
        type: Component,
        args: [{ selector: "app-display-options", standalone: true, imports: [CommonModule], template: `<section class="display-options" aria-label="Display Options">
  <h2 class="display-options__title">Display Options</h2>

  <div class="display-options__grid">
    <!-- Calendars Panel -->
    <div class="display-options__panel" aria-label="Calendars list">
      <div class="panel-header">
        <div class="display-options__panel-title">Calendars</div>
        @if (selectedCalendarIds().length > 0 && selectedCalendarIds().length < calendars().length) {
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
            title="Click to toggle {{ calendar.name }}">
            <span class="calendar-color-dot" [style.background-color]="getCalendarColor(calendar.calendar_id).primary"></span>
            {{ calendar.name }}
          </button>
        }
      </div>
    </div>

    <!-- Tags Panel -->
    <div class="display-options__panel" aria-label="Tags list">
      <div class="panel-header">
        <div class="display-options__panel-title">Tags</div>
        @if (selectedTags().length > 0) {
          <button class="clear-btn" (click)="clearTagFilters()" title="Clear tag filters">
            Clear
          </button>
        }
      </div>

      @if (tags().length === 0) {
        <div class="empty-state">No tags available</div>
      } @else {
        <div class="filter-list">
          @for (tag of tags(); track tag) {
            <button 
              class="tag-filter-chip" 
              [class.active]="isTagSelected(tag)"
              (click)="toggleTag(tag)"
              title="Click to filter by {{ tag }}">
              {{ tag }}
            </button>
          }
        </div>
      }
    </div>
  </div>
</section>
`, styles: ["/* src/app/features/dashboard/main-page/components/display-options/display-options.css */\n.display-options__title {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n}\n.display-options__grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.display-options__panel {\n  border: 1px solid var(--color-border-default);\n  border-radius: 12px;\n  background: #fff;\n  padding: 12px;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.display-options__panel-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0;\n}\n.clear-btn {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 11px;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-weight: 500;\n}\n.clear-btn:hover {\n  background-color: rgba(0, 123, 255, 0.1);\n}\n.filter-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.calendar-filter-chip {\n  padding: 8px 10px;\n  background-color: white;\n  border: 2px solid;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.calendar-color-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.calendar-filter-chip:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.calendar-filter-chip.active {\n  font-weight: 600;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.calendar-filter-chip.active .calendar-color-dot {\n  background-color: white !important;\n}\n.tag-filter-chip {\n  padding: 8px 12px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n  color: #555;\n}\n.tag-filter-chip:hover {\n  background-color: #e3f2fd;\n  border-color: #90caf9;\n  color: #1976d2;\n}\n.tag-filter-chip.active {\n  background-color: #1976d2;\n  color: white;\n  border-color: #1976d2;\n  font-weight: 500;\n}\n.tag-filter-chip.active:hover {\n  background-color: #1565c0;\n  border-color: #1565c0;\n}\n.empty-state {\n  color: #999;\n  font-size: 13px;\n  font-style: italic;\n  text-align: center;\n  padding: 20px;\n}\n@media (max-width: 900px) {\n  .display-options__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.filter-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n  max-height: clamp(160px, 30vh, 280px);\n  overflow-y: auto;\n  padding-right: 6px;\n}\n.filter-list {\n  scrollbar-width: thin;\n  scrollbar-color: #c7c7c7 transparent;\n}\n.filter-list::-webkit-scrollbar {\n  width: 10px;\n}\n.filter-list::-webkit-scrollbar-thumb {\n  background: #c7c7c7;\n  border-radius: 999px;\n  border: 3px solid transparent;\n  background-clip: content-box;\n}\n.filter-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n/*# sourceMappingURL=display-options.css.map */\n"] }]
      }], () => [], { calendars: [{ type: Input, args: [{ isSignal: true, alias: "calendars", required: false }] }], tags: [{ type: Input, args: [{ isSignal: true, alias: "tags", required: false }] }], selectedCalendarIdsChange: [{ type: Output, args: ["selectedCalendarIdsChange"] }], selectedTagsChange: [{ type: Output, args: ["selectedTagsChange"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayOptions, { className: "DisplayOptions", filePath: "src/app/features/dashboard/main-page/components/display-options/display-options.ts", lineNumber: 22 });
    })();
  }
});

export {
  DisplayOptions,
  init_display_options
};
//# sourceMappingURL=chunk-6PJWWP7I.js.map
