import {
  Router,
  init_router
} from "./chunk-LOQZ2SCF.js";
import "./chunk-G625OUTR.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import {
  CommonModule,
  init_common
} from "./chunk-EGU5GLVS.js";
import "./chunk-52DSKCZD.js";
import {
  Component,
  init_core,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/poll/delete-poll/delete-poll.ts
function DeletePoll_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError, " ");
  }
}
var DeletePoll;
var init_delete_poll = __esm({
  "src/app/features/poll/delete-poll/delete-poll.ts"() {
    "use strict";
    init_core();
    init_common();
    init_router();
    init_core();
    DeletePoll = class _DeletePoll {
      router = inject(Router);
      // Placeholder values (swap these later when you load real poll data)
      pollName = "Poll Name";
      calendarName = "Calendar Name";
      apiError = "";
      isDeleting = false;
      confirmDelete() {
        this.apiError = "";
        this.isDeleting = true;
        console.log("Deleting poll:", {
          pollName: this.pollName,
          calendarName: this.calendarName
        });
        setTimeout(() => {
          this.isDeleting = false;
          this.router.navigateByUrl("/main-page");
        }, 400);
      }
      cancelDelete() {
        this.router.navigateByUrl("/edit-poll");
      }
      static \u0275fac = function DeletePoll_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DeletePoll)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeletePoll, selectors: [["app-delete-poll"]], decls: 16, vars: 5, consts: [[1, "container", "py-4", "app-page"], [1, "h3", "mb-3"], [1, "card", "app-card", "shadow-sm"], [1, "card-body"], [1, "delete-poll__message"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "card-footer", "d-flex", "justify-content-center", "gap-5"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-light", 3, "click", "disabled"]], template: function DeletePoll_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275domElementStart(0, "div", 0)(1, "h1", 1);
          \u0275\u0275text(2, "Delete Poll");
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
          \u0275\u0275text(6, " Are you sure you want to delete ");
          \u0275\u0275domElementStart(7, "strong");
          \u0275\u0275text(8);
          \u0275\u0275domElementEnd();
          \u0275\u0275text(9, "? ");
          \u0275\u0275domElementEnd();
          \u0275\u0275conditionalCreate(10, DeletePoll_Conditional_10_Template, 2, 1, "div", 5);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(11, "div", 6)(12, "button", 7);
          \u0275\u0275domListener("click", function DeletePoll_Template_button_click_12_listener() {
            return ctx.confirmDelete();
          });
          \u0275\u0275text(13);
          \u0275\u0275domElementEnd();
          \u0275\u0275domElementStart(14, "button", 8);
          \u0275\u0275domListener("click", function DeletePoll_Template_button_click_14_listener() {
            return ctx.cancelDelete();
          });
          \u0275\u0275text(15, " Cancel ");
          \u0275\u0275domElementEnd()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(8);
          \u0275\u0275textInterpolate1('"', ctx.pollName, '"');
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.apiError ? 10 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275domProperty("disabled", ctx.isDeleting);
          \u0275\u0275advance();
          \u0275\u0275textInterpolate1(" ", ctx.isDeleting ? "Deleting..." : "Confirm", " ");
          \u0275\u0275advance();
          \u0275\u0275domProperty("disabled", ctx.isDeleting);
        }
      }, dependencies: [CommonModule], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-poll__message[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-poll.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeletePoll, [{
        type: Component,
        args: [{ selector: "app-delete-poll", standalone: true, imports: [CommonModule], template: `<div class="container py-4 app-page">
  <h1 class="h3 mb-3">Delete Poll</h1>

  <div class="card app-card shadow-sm">
    <div class="card-body">
      <div class="delete-poll__message">
        Are you sure you want to delete
        <strong>"{{ pollName }}"</strong>?
      </div>

      @if (apiError) {
        <div class="alert alert-danger mt-3 mb-0">
          {{ apiError }}
        </div>
      }
    </div>

    <div class="card-footer d-flex justify-content-center gap-5">
      <button
        type="button"
        class="btn btn-danger"
        (click)="confirmDelete()"
        [disabled]="isDeleting"
      >
        {{ isDeleting ? 'Deleting...' : 'Confirm' }}
      </button>

      <button
        type="button"
        class="btn btn-outline-light"
        (click)="cancelDelete()"
        [disabled]="isDeleting"
      >
        Cancel
      </button>

    </div>
  </div>
</div>
`, styles: ["/* src/app/features/poll/delete-poll/delete-poll.css */\n.card {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.delete-poll__message {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.card-body {\n  padding: 32px 24px;\n}\n/*# sourceMappingURL=delete-poll.css.map */\n"] }]
      }], null, null);
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeletePoll, { className: "DeletePoll", filePath: "src/app/features/poll/delete-poll/delete-poll.ts", lineNumber: 12 });
    })();
  }
});

// src/app/features/poll/delete-poll/delete-poll.spec.ts
var require_delete_poll_spec = __commonJS({
  "src/app/features/poll/delete-poll/delete-poll.spec.ts"(exports) {
    init_testing();
    init_delete_poll();
    describe("DeletePoll", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DeletePoll]
        }).compileComponents();
        fixture = TestBed.createComponent(DeletePoll);
        component = fixture.componentInstance;
        yield fixture.whenStable();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_delete_poll_spec();
//# sourceMappingURL=spec-app-features-poll-delete-poll-delete-poll.spec.js.map
