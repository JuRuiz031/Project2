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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/dashboard/main-page/components/polls-window/polls-window.ts
function PollsWindow_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1, " No polls yet. ");
    \u0275\u0275domElementEnd();
  }
}
function PollsWindow_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 8);
    \u0275\u0275domListener("click", function PollsWindow_Conditional_5_For_2_Template_li_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelectPoll(p_r2));
    })("dblclick", function PollsWindow_Conditional_5_For_2_Template_li_dblclick_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDoubleClickPoll(p_r2));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "small", 9);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r2.poll_id === ctx_r2.selectedPollId());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.formatPollTime(p_r2.start_time), " (", ctx_r2.getTimezoneAbbr(), ")");
  }
}
function PollsWindow_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 4);
    \u0275\u0275repeaterCreate(1, PollsWindow_Conditional_5_For_2_Template, 5, 5, "li", 7, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.polls());
  }
}
var _forTrack0, PollsWindow;
var init_polls_window = __esm({
  "src/app/features/dashboard/main-page/components/polls-window/polls-window.ts"() {
    "use strict";
    init_core();
    init_common();
    init_core();
    _forTrack0 = ($index, $item) => $item.poll_id;
    PollsWindow = class _PollsWindow {
      // Inputs from parent
      polls = input([], ...ngDevMode ? [{ debugName: "polls" }] : []);
      // Outputs to parent
      createPoll = output();
      viewPolls = output();
      viewPoll = output();
      // Local state
      selectedPollId = signal("", ...ngDevMode ? [{ debugName: "selectedPollId" }] : []);
      // Computed: auto-select first poll when polls change
      firstPollId = computed(() => {
        const pollList = this.polls();
        if (pollList.length > 0 && !this.selectedPollId()) {
          return pollList[0].poll_id;
        }
        return this.selectedPollId();
      }, ...ngDevMode ? [{ debugName: "firstPollId" }] : []);
      onCreatePoll() {
        this.createPoll.emit();
      }
      onViewPolls() {
        this.viewPolls.emit();
      }
      onSelectPoll(p) {
        this.selectedPollId.set(p.poll_id);
      }
      onDoubleClickPoll(p) {
        this.selectedPollId.set(p.poll_id);
        this.viewPoll.emit(p.poll_id);
      }
      formatPollTime(iso) {
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
      parseServerInstant(iso) {
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        return new Date(hasTz ? iso : `${iso}Z`);
      }
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
      static \u0275fac = function PollsWindow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PollsWindow)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PollsWindow, selectors: [["app-polls-window"]], inputs: { polls: [1, "polls"] }, outputs: { createPoll: "createPoll", viewPolls: "viewPolls", viewPoll: "viewPoll" }, decls: 11, vars: 1, consts: [["aria-label", "Polls Window", 1, "polls-window"], [1, "polls-window__title"], [1, "polls-window__panel"], [1, "polls-window__placeholder"], [1, "list-group"], [1, "polls-window__actions"], ["type", "button", 1, "polls-window__btn", 3, "click"], ["title", "Double-click to view poll", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 2, "cursor", "pointer", 3, "active"], ["title", "Double-click to view poll", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 2, "cursor", "pointer", 3, "click", "dblclick"], [1, "text-muted"]], template: function PollsWindow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "section", 0)(1, "h2", 1);
          \u0275\u0275text(2, "Polls Window");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(3, "div", 2);
          \u0275\u0275conditionalCreate(4, PollsWindow_Conditional_4_Template, 2, 0, "div", 3)(5, PollsWindow_Conditional_5_Template, 3, 0, "ul", 4);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(6, "div", 5)(7, "button", 6);
          \u0275\u0275domListener("click", function PollsWindow_Template_button_click_7_listener() {
            return ctx.onCreatePoll();
          });
          \u0275\u0275text(8, " Create Poll ");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(9, "button", 6);
          \u0275\u0275domListener("click", function PollsWindow_Template_button_click_9_listener() {
            return ctx.onViewPolls();
          });
          \u0275\u0275text(10, " View Polls ");
          \u0275\u0275domElementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(4);
          \u0275\u0275conditional(ctx.polls().length === 0 ? 4 : 5);
        }
      }, dependencies: [CommonModule], styles: ["\n\n.polls-window__title[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n}\n.polls-window__panel[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-default);\n  border-radius: 12px;\n  background: #fff;\n  min-height: 180px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.polls-window__placeholder[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  font-weight: 600;\n  text-align: center;\n}\n.polls-window__actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.polls-window__btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-default);\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n.polls-window__btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent-primary);\n}\n@media (max-width: 900px) {\n  .polls-window__actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=polls-window.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PollsWindow, [{
        type: Component,
        args: [{ selector: "app-polls-window", standalone: true, imports: [CommonModule], template: '<section class="polls-window" aria-label="Polls Window">\n  <h2 class="polls-window__title">Polls Window</h2>\n\n  <div class="polls-window__panel">\n    @if (polls().length === 0) {\n      <div class="polls-window__placeholder">\n        No polls yet.\n      </div>\n    } @else {\n      <ul class="list-group">\n        @for (p of polls(); track p.poll_id) {\n          <li\n            class="list-group-item d-flex justify-content-between align-items-center"\n            (click)="onSelectPoll(p)"\n            (dblclick)="onDoubleClickPoll(p)"\n            [class.active]="p.poll_id === selectedPollId()"\n            style="cursor: pointer;"\n            title="Double-click to view poll"\n          >\n            <span>{{ p.title }}</span>\n            <small class="text-muted">{{ formatPollTime(p.start_time) }} ({{ getTimezoneAbbr() }})</small>\n          </li>\n        }\n      </ul>\n    }\n  </div>\n\n  <div class="polls-window__actions">\n    <button type="button" class="polls-window__btn" (click)="onCreatePoll()">\n      Create Poll\n    </button>\n\n    <button type="button" class="polls-window__btn" (click)="onViewPolls()">\n      View Polls\n    </button>\n  </div>\n</section>\n\n\n\n', styles: ["/* src/app/features/dashboard/main-page/components/polls-window/polls-window.css */\n.polls-window__title {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  font-weight: 700;\n}\n.polls-window__panel {\n  border: 1px solid var(--color-border-default);\n  border-radius: 12px;\n  background: #fff;\n  min-height: 180px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.polls-window__placeholder {\n  opacity: 0.65;\n  font-weight: 600;\n  text-align: center;\n}\n.polls-window__actions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.polls-window__btn {\n  border: 1px solid var(--color-border-default);\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n.polls-window__btn:hover {\n  border-color: var(--color-accent-primary);\n}\n@media (max-width: 900px) {\n  .polls-window__actions {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=polls-window.css.map */\n"] }]
      }], null, { polls: [{ type: Input, args: [{ isSignal: true, alias: "polls", required: false }] }], createPoll: [{ type: Output, args: ["createPoll"] }], viewPolls: [{ type: Output, args: ["viewPolls"] }], viewPoll: [{ type: Output, args: ["viewPoll"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PollsWindow, { className: "PollsWindow", filePath: "src/app/features/dashboard/main-page/components/polls-window/polls-window.ts", lineNumber: 13 });
    })();
  }
});

export {
  PollsWindow,
  init_polls_window
};
//# sourceMappingURL=chunk-7DCYQB2Z.js.map
