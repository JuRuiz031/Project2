import {
  PollService,
  init_poll_service
} from "./chunk-QKB7UDAX.js";
import {
  BaseModal,
  init_base_modal
} from "./chunk-OHTVP4IB.js";
import {
  CalendarService,
  init_calendar_service
} from "./chunk-NXRHEMFL.js";
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
  inject,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/features/poll/view-poll-modal/view-poll-modal.ts
function ViewPollModal_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " Loading... ");
    \u0275\u0275elementEnd();
  }
}
function ViewPollModal_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.apiError(), " ");
  }
}
function ViewPollModal_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 6);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", p_r3.description);
  }
}
function ViewPollModal_Conditional_3_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r4, " ");
  }
}
function ViewPollModal_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ViewPollModal_Conditional_3_Conditional_24_For_2_Template, 2, 1, "span", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.tags);
  }
}
function ViewPollModal_Conditional_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "No tags");
    \u0275\u0275elementEnd();
  }
}
function ViewPollModal_Conditional_3_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " You must be logged in to vote. ");
    \u0275\u0275elementEnd();
  }
}
function ViewPollModal_Conditional_3_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.voteError(), " ");
  }
}
function ViewPollModal_Conditional_3_Conditional_38_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.getTotalVotesForOption(opt_r6), " votes) ");
  }
}
function ViewPollModal_Conditional_3_Conditional_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "input", 26);
    \u0275\u0275listener("change", function ViewPollModal_Conditional_3_Conditional_38_For_2_Template_input_change_1_listener() {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectSingle(opt_r6.option_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 27);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, ViewPollModal_Conditional_3_Conditional_38_For_2_Conditional_4_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const p_r3 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedSingleOptionId() === opt_r6.option_id)("disabled", !ctx_r0.isLoggedIn() || ctx_r0.isVoting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", opt_r6.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canShowResults(p_r3) ? 4 : -1);
  }
}
function ViewPollModal_Conditional_3_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, ViewPollModal_Conditional_3_Conditional_38_For_2_Template, 5, 4, "div", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.options);
  }
}
function ViewPollModal_Conditional_3_Conditional_39_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.getTotalVotesForOption(opt_r8), " votes) ");
  }
}
function ViewPollModal_Conditional_3_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "input", 29);
    \u0275\u0275listener("change", function ViewPollModal_Conditional_3_Conditional_39_For_2_Template_input_change_1_listener() {
      const opt_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleMulti(opt_r8.option_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 27);
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, ViewPollModal_Conditional_3_Conditional_39_For_2_Conditional_4_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const p_r3 = \u0275\u0275nextContext(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedMultiOptionIds().includes(opt_r8.option_id))("disabled", !ctx_r0.isLoggedIn() || ctx_r0.isVoting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", opt_r8.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canShowResults(p_r3) ? 4 : -1);
  }
}
function ViewPollModal_Conditional_3_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, ViewPollModal_Conditional_3_Conditional_39_For_2_Template, 5, 4, "div", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r3.options);
  }
}
function ViewPollModal_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "label", 6);
    \u0275\u0275text(4, "Calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "label", 6);
    \u0275\u0275text(8, "Poll Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ViewPollModal_Conditional_3_Conditional_10_Template, 4, 1, "div", 5);
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "label", 6);
    \u0275\u0275text(14, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "label", 6);
    \u0275\u0275text(18, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 5)(22, "label", 6);
    \u0275\u0275text(23, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, ViewPollModal_Conditional_3_Conditional_24_Template, 3, 0, "div", 11)(25, ViewPollModal_Conditional_3_Conditional_25_Template, 2, 0, "p", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 13)(27, "div", 14);
    \u0275\u0275text(28, "Voting Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 15);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 16);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, ViewPollModal_Conditional_3_Conditional_33_Template, 2, 0, "div", 17);
    \u0275\u0275conditionalCreate(34, ViewPollModal_Conditional_3_Conditional_34_Template, 2, 1, "div", 2);
    \u0275\u0275elementStart(35, "div", 13)(36, "div", 14);
    \u0275\u0275text(37, "Options");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, ViewPollModal_Conditional_3_Conditional_38_Template, 3, 0, "div");
    \u0275\u0275conditionalCreate(39, ViewPollModal_Conditional_3_Conditional_39_Template, 3, 0, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 18)(41, "button", 19);
    \u0275\u0275listener("click", function ViewPollModal_Conditional_3_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitVote());
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 20)(44, "button", 21);
    \u0275\u0275listener("click", function ViewPollModal_Conditional_3_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClose());
    });
    \u0275\u0275text(45, " Close ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 22);
    \u0275\u0275listener("click", function ViewPollModal_Conditional_3_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEdit());
    });
    \u0275\u0275text(47, " Edit Poll ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.calendarName() || p_r3.calendar_id);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", p_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.description ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.formatLocalDate(p_r3.start_time) + " " + ctx_r0.formatLocalTime(p_r3.start_time));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.formatLocalDate(p_r3.end_time) + " " + ctx_r0.formatLocalTime(p_r3.end_time));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(p_r3.tags && p_r3.tags.length > 0 ? 24 : 25);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("badge-success", p_r3.allow_multiple_votes)("badge-secondary", !p_r3.allow_multiple_votes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.allow_multiple_votes ? "Multiple votes allowed" : "Single vote only", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", p_r3.allow_multiple_votes ? "You may select more than one option." : "You must select exactly one option.", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isLoggedIn() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.voteError() ? 34 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!p_r3.allow_multiple_votes ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.allow_multiple_votes ? 39 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.isLoggedIn() || ctx_r0.isVoting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isVoting() ? "Submitting\u2026" : "Submit Vote", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.poll());
  }
}
var _forTrack0, ViewPollModal;
var init_view_poll_modal = __esm({
  "src/app/features/poll/view-poll-modal/view-poll-modal.ts"() {
    "use strict";
    init_core();
    init_common();
    init_base_modal();
    init_calendar_service();
    init_poll_service();
    init_core();
    _forTrack0 = ($index, $item) => $item.option_id;
    ViewPollModal = class _ViewPollModal {
      calendarService = inject(CalendarService);
      pollService = inject(PollService);
      title = input("View Poll", ...ngDevMode ? [{ debugName: "title" }] : []);
      pollId = input("", ...ngDevMode ? [{ debugName: "pollId" }] : []);
      close = output();
      edit = output();
      poll = signal(null, ...ngDevMode ? [{ debugName: "poll" }] : []);
      calendarName = signal("", ...ngDevMode ? [{ debugName: "calendarName" }] : []);
      // ✅ add
      apiError = signal("", ...ngDevMode ? [{ debugName: "apiError" }] : []);
      isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
      // voting state
      voteError = signal("", ...ngDevMode ? [{ debugName: "voteError" }] : []);
      isVoting = signal(false, ...ngDevMode ? [{ debugName: "isVoting" }] : []);
      hasVoted = signal(false, ...ngDevMode ? [{ debugName: "hasVoted" }] : []);
      // selection state
      selectedSingleOptionId = signal(null, ...ngDevMode ? [{ debugName: "selectedSingleOptionId" }] : []);
      selectedMultiOptionIds = signal([], ...ngDevMode ? [{ debugName: "selectedMultiOptionIds" }] : []);
      isLoggedIn = computed(() => !!this.getUserIdFromStorage(), ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
      ngOnInit() {
        const id = (this.pollId() || "").trim();
        if (!id) {
          this.apiError.set("Missing poll id.");
          return;
        }
        this.loadPoll(id);
      }
      loadPoll(id) {
        this.apiError.set("");
        this.voteError.set("");
        this.isLoading.set(true);
        this.calendarService.getByPollIds([id]).subscribe({
          next: (res) => {
            const found = (res.polls ?? []).find((p) => p.poll_id === id) ?? (res.polls?.[0] ?? null);
            if (!found) {
              this.isLoading.set(false);
              this.apiError.set("Poll not found.");
              this.poll.set(null);
              return;
            }
            this.poll.set(found);
            this.resolveCalendarName(found.calendar_id);
            this.initSelectionFromPoll(found);
            this.isLoading.set(false);
          },
          error: (err) => {
            this.isLoading.set(false);
            this.apiError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not load poll");
          }
        });
      }
      initSelectionFromPoll(p) {
        this.selectedSingleOptionId.set(null);
        this.selectedMultiOptionIds.set([]);
        if (!p.allow_multiple_votes && p.options?.length) {
          this.selectedSingleOptionId.set(p.options[0].option_id);
        }
      }
      resolveCalendarName(calendarId) {
        this.calendarName.set("");
        this.calendarService.getHomepage().subscribe({
          next: (home) => {
            const match = (home.calendars ?? []).find((c) => c.calendar_id === calendarId);
            this.calendarName.set(match?.name ?? calendarId);
          },
          error: () => {
            this.calendarName.set(calendarId);
          }
        });
      }
      onClose() {
        this.close.emit();
      }
      onEdit() {
        const p = this.poll();
        if (!p)
          return;
        this.edit.emit(p.poll_id);
      }
      formatLocalDate(iso) {
        if (!iso)
          return "";
        const d = this.parseServerInstant(iso);
        if (isNaN(d.getTime()))
          return "";
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
      }
      formatLocalTime(iso) {
        if (!iso)
          return "";
        const d = this.parseServerInstant(iso);
        if (isNaN(d.getTime()))
          return "";
        const hh = String(d.getHours()).padStart(2, "0");
        const mi = String(d.getMinutes()).padStart(2, "0");
        return `${hh}:${mi}`;
      }
      parseServerInstant(iso) {
        const hasTz = /([zZ]|[+\-]\d{2}:\d{2})$/.test(iso);
        return new Date(hasTz ? iso : `${iso}Z`);
      }
      // -------------------------
      // Auth helper
      // -------------------------
      getUserIdFromStorage() {
        try {
          const raw = localStorage.getItem("user");
          if (!raw)
            return null;
          const u = JSON.parse(raw);
          return u?.user_id ?? u?.id ?? null;
        } catch {
          return null;
        }
      }
      // -------------------------
      // Option selection handlers
      // -------------------------
      selectSingle(optionId) {
        this.voteError.set("");
        this.selectedSingleOptionId.set(optionId);
      }
      toggleMulti(optionId) {
        this.voteError.set("");
        const curr = this.selectedMultiOptionIds();
        const next = curr.includes(optionId) ? curr.filter((id) => id !== optionId) : [...curr, optionId];
        this.selectedMultiOptionIds.set(next);
      }
      // vote counts
      getTotalVotesForOption(opt) {
        return (opt.user_votes?.length ?? 0) + (opt.guest_votes?.length ?? 0);
      }
      canShowResults(p) {
        return !!p.results_visible || this.hasVoted();
      }
      // -------------------------
      // Submit vote
      // -------------------------
      submitVote() {
        this.voteError.set("");
        const p = this.poll();
        if (!p)
          return;
        const userId = this.getUserIdFromStorage();
        if (!userId) {
          this.voteError.set("You must be logged in to vote.");
          return;
        }
        const selected = p.allow_multiple_votes ? this.selectedMultiOptionIds() : this.selectedSingleOptionId() !== null ? [this.selectedSingleOptionId()] : [];
        if (selected.length === 0) {
          this.voteError.set("Please select at least one option.");
          return;
        }
        if (!p.allow_multiple_votes && selected.length !== 1) {
          this.voteError.set("This poll allows only one vote.");
          return;
        }
        const dto = {
          user_id: String(userId),
          calendar_id: String(p.calendar_id),
          options: selected
        };
        this.isVoting.set(true);
        this.pollService.vote(p.poll_id, dto).subscribe({
          next: (updated) => {
            this.isVoting.set(false);
            this.hasVoted.set(true);
            this.poll.set(updated);
            if (!updated.allow_multiple_votes) {
              const keep = selected[0] ?? (updated.options?.[0]?.option_id ?? null);
              this.selectedSingleOptionId.set(keep);
              this.selectedMultiOptionIds.set([]);
            } else {
              this.selectedMultiOptionIds.set(selected);
              this.selectedSingleOptionId.set(null);
            }
          },
          error: (err) => {
            this.isVoting.set(false);
            this.voteError.set(err?.error?.message || (typeof err?.error === "string" ? err.error : "") || err?.message || "Could not submit vote");
          }
        });
      }
      static \u0275fac = function ViewPollModal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ViewPollModal)();
      };
      static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPollModal, selectors: [["app-view-poll-modal"]], inputs: { title: [1, "title"], pollId: [1, "pollId"] }, outputs: { close: "close", edit: "edit" }, decls: 4, vars: 6, consts: [[3, "close", "title", "showBackButton", "size"], [1, "text-secondary"], [1, "alert", "alert-danger", "mb-3"], [1, "row", "g-3"], [1, "col-12", "col-lg-7"], [1, "mb-3"], [1, "form-label"], ["disabled", "", 1, "form-control", "app-input", 3, "value"], [1, "row", "g-3", "mb-3"], [1, "col-12", "col-md-6"], [1, "col-12", "col-lg-5"], [1, "tags-display"], [1, "text-muted"], [1, "border", "rounded", "p-3", "mb-3"], [1, "fw-semibold", "mb-2"], [1, "badge"], [1, "form-text", "text-secondary", "mt-2"], [1, "alert", "alert-warning", "mb-3"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["rows", "3", "disabled", "", 1, "form-control", "app-input", 3, "value"], [1, "tag-chip"], [1, "form-check", "mb-2"], ["type", "radio", "name", "singleVote", 1, "form-check-input", 3, "change", "checked", "disabled"], [1, "form-check-label"], [1, "text-secondary", "ms-2"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked", "disabled"]], template: function ViewPollModal_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "app-base-modal", 0);
          \u0275\u0275listener("close", function ViewPollModal_Template_app_base_modal_close_0_listener() {
            return ctx.onClose();
          });
          \u0275\u0275conditionalCreate(1, ViewPollModal_Conditional_1_Template, 2, 0, "div", 1);
          \u0275\u0275conditionalCreate(2, ViewPollModal_Conditional_2_Template, 2, 1, "div", 2);
          \u0275\u0275conditionalCreate(3, ViewPollModal_Conditional_3_Template, 48, 19);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_5_0;
          \u0275\u0275property("title", ctx.title())("showBackButton", false)("size", "large");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.isLoading() ? 1 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(!ctx.isLoading() && ctx.apiError() ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional((tmp_5_0 = !ctx.isLoading() && ctx.poll()) ? 3 : -1, tmp_5_0);
        }
      }, dependencies: [CommonModule, BaseModal], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tag-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n.tags-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.form-check[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n}\n.form-check[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 10px;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  display: inline-block;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.border.rounded[_ngcontent-%COMP%] {\n  border-color: #e0e0e0 !important;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  border: 1px solid #28a745;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success[_ngcontent-%COMP%]:disabled {\n  background-color: #94d3a2;\n  border-color: #94d3a2;\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border: 1px solid #007bff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #004085;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  color: #856404;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n/*# sourceMappingURL=view-poll-modal.css.map */"] });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPollModal, [{
        type: Component,
        args: [{ selector: "app-view-poll-modal", standalone: true, imports: [CommonModule, BaseModal], template: `<app-base-modal
  [title]="title()"
  [showBackButton]="false"
  [size]="'large'"
  (close)="onClose()"
>
  <!-- Loading -->
  @if (isLoading()) {
    <div class="text-secondary">
      Loading...
    </div>
  }

  <!-- API error -->
  @if (!isLoading() && apiError()) {
    <div class="alert alert-danger mb-3">
      {{ apiError() }}
    </div>
  }

  <!-- Main content -->
  @if (!isLoading() && poll(); as p) {
    <div class="row g-3">
      <!-- LEFT COLUMN -->
      <div class="col-12 col-lg-7">
        <!-- Calendar -->
        <div class="mb-3">
          <label class="form-label">Calendar</label>
          <input
            class="form-control app-input"
            [value]="calendarName() || p.calendar_id"
            disabled
          />
        </div>

        <!-- Title -->
        <div class="mb-3">
          <label class="form-label">Poll Title</label>
          <input
            class="form-control app-input"
            [value]="p.title"
            disabled
          />
        </div>

        <!-- Description -->
        @if (p.description) {
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea
              class="form-control app-input"
              rows="3"
              [value]="p.description"
              disabled
            ></textarea>
          </div>
        }

        <!-- Dates -->
        <div class="row g-3 mb-3">
          <div class="col-12 col-md-6">
            <label class="form-label">Start</label>
            <input
              class="form-control app-input"
              [value]="formatLocalDate(p.start_time) + ' ' + formatLocalTime(p.start_time)"
              disabled
            />
          </div>

          <div class="col-12 col-md-6">
            <label class="form-label">End</label>
            <input
              class="form-control app-input"
              [value]="formatLocalDate(p.end_time) + ' ' + formatLocalTime(p.end_time)"
              disabled
            />
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="col-12 col-lg-5">
        <!-- Tags -->
        <div class="mb-3">
          <label class="form-label">Tags</label>
          @if (p.tags && p.tags.length > 0) {
            <div class="tags-display">
              @for (tag of p.tags; track tag) {
                <span class="tag-chip">
                  {{ tag }}
                </span>
              }
            </div>
          } @else {
            <p class="text-muted">No tags</p>
          }
        </div>
      </div>
    </div>

    <!-- Voting rules -->
    <div class="border rounded p-3 mb-3">
      <div class="fw-semibold mb-2">Voting Rules</div>

      <span
        class="badge"
        [class.badge-success]="p.allow_multiple_votes"
        [class.badge-secondary]="!p.allow_multiple_votes"
      >
        {{ p.allow_multiple_votes ? 'Multiple votes allowed' : 'Single vote only' }}
      </span>

      <div class="form-text text-secondary mt-2">
        {{ p.allow_multiple_votes
          ? 'You may select more than one option.'
          : 'You must select exactly one option.' }}
      </div>
    </div>

    <!-- Login warning -->
    @if (!isLoggedIn()) {
      <div class="alert alert-warning mb-3">
        You must be logged in to vote.
      </div>
    }

    <!-- Vote error -->
    @if (voteError()) {
      <div class="alert alert-danger mb-3">
        {{ voteError() }}
      </div>
    }

    <!-- OPTIONS + VOTING -->
    <div class="border rounded p-3 mb-3">
      <div class="fw-semibold mb-2">Options</div>

      <!-- Single vote -->
      @if (!p.allow_multiple_votes) {
        <div>
          @for (opt of p.options; track opt.option_id) {
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="radio"
                name="singleVote"
                [checked]="selectedSingleOptionId() === opt.option_id"
                [disabled]="!isLoggedIn() || isVoting()"
                (change)="selectSingle(opt.option_id)"
              />

              <label class="form-check-label">
                {{ opt.description }}

                @if (canShowResults(p)) {
                  <span class="text-secondary ms-2">
                    ({{ getTotalVotesForOption(opt) }} votes)
                  </span>
                }
              </label>
            </div>
          }
        </div>
      }

      <!-- Multiple vote -->
      @if (p.allow_multiple_votes) {
        <div>
          @for (opt of p.options; track opt.option_id) {
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                [checked]="selectedMultiOptionIds().includes(opt.option_id)"
                [disabled]="!isLoggedIn() || isVoting()"
                (change)="toggleMulti(opt.option_id)"
              />

              <label class="form-check-label">
                {{ opt.description }}

                @if (canShowResults(p)) {
                  <span class="text-secondary ms-2">
                    ({{ getTotalVotesForOption(opt) }} votes)
                  </span>
                }
              </label>
            </div>
          }
        </div>
      }
    </div>

    <!-- Submit vote -->
    <div class="d-flex justify-content-end mb-4">
      <button
        class="btn btn-success"
        type="button"
        (click)="submitVote()"
        [disabled]="!isLoggedIn() || isVoting()"
      >
        {{ isVoting() ? 'Submitting\u2026' : 'Submit Vote' }}
      </button>
    </div>

    <!-- Footer actions -->
    <div class="d-flex justify-content-end gap-2">
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="onClose()"
      >
        Close
      </button>

      <button
        class="btn btn-primary"
        type="button"
        (click)="onEdit()"
        [disabled]="!poll()"
      >
        Edit Poll
      </button>
    </div>
  }
</app-base-modal>
`, styles: ["/* src/app/features/poll/view-poll-modal/view-poll-modal.css */\n.card {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.tag-chip {\n  display: inline-block;\n  padding: 4px 12px;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n.tags-display {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.form-check {\n  padding: 12px;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n}\n.form-check:hover {\n  background-color: #f8f9fa;\n}\n.form-check-input {\n  cursor: pointer;\n  margin-right: 10px;\n}\n.form-check-input:checked {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.form-check-label {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  font-size: 14px;\n}\n.badge {\n  padding: 6px 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 500;\n  display: inline-block;\n}\n.badge-success {\n  background-color: #28a745;\n  color: white;\n}\n.badge-secondary {\n  background-color: #6c757d;\n  color: white;\n}\n.border.rounded {\n  border-color: #e0e0e0 !important;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn-success {\n  background-color: #28a745;\n  border: 1px solid #28a745;\n  color: white;\n}\n.btn-success:hover:not(:disabled) {\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success:disabled {\n  background-color: #94d3a2;\n  border-color: #94d3a2;\n  cursor: not-allowed;\n  opacity: 0.65;\n}\n.btn-primary {\n  background-color: #007bff;\n  border: 1px solid #007bff;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #004085;\n}\n.btn-outline-secondary {\n  background: white;\n  border: 1px solid #ddd;\n  color: #333;\n}\n.btn-outline-secondary:hover {\n  background-color: #f5f5f5;\n  border-color: #999;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 6px;\n  font-size: 14px;\n}\n.alert-warning {\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  color: #856404;\n}\n.alert-danger {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n/*# sourceMappingURL=view-poll-modal.css.map */\n"] }]
      }], null, { title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], pollId: [{ type: Input, args: [{ isSignal: true, alias: "pollId", required: false }] }], close: [{ type: Output, args: ["close"] }], edit: [{ type: Output, args: ["edit"] }] });
    })();
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPollModal, { className: "ViewPollModal", filePath: "src/app/features/poll/view-poll-modal/view-poll-modal.ts", lineNumber: 18 });
    })();
  }
});

export {
  ViewPollModal,
  init_view_poll_modal
};
//# sourceMappingURL=chunk-2W5PJVZ6.js.map
