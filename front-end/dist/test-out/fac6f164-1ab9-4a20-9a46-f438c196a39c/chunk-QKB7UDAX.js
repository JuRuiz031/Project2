import {
  PollApiService,
  init_poll_api_service
} from "./chunk-EK3UKG6K.js";
import {
  Injectable,
  init_core,
  init_esm,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5EHNMWHP.js";
import {
  __esm
} from "./chunk-FYSHOF5T.js";

// src/app/shared/services/poll.service.ts
var PollService;
var init_poll_service = __esm({
  "src/app/shared/services/poll.service.ts"() {
    "use strict";
    init_core();
    init_esm();
    init_core();
    init_poll_api_service();
    PollService = class _PollService {
      api;
      constructor(api) {
        this.api = api;
      }
      // POST /polls: create new poll, requires admin
      create(dto) {
        return this.api.createPoll(dto).pipe(map((r) => ({
          poll_id: r.poll_id,
          calendar_id: r.calendar_id,
          title: r.title,
          description: r.description,
          notes: r.notes,
          start_time: r.start_time,
          end_time: r.end_time,
          results_visible: r.results_visible,
          allow_multiple_votes: r.allow_multiple_votes,
          options: r.options.map((opt) => ({
            option_id: opt.option_id,
            description: opt.description,
            user_votes: opt.user_votes ?? [],
            guest_votes: opt.guest_votes ?? []
          })),
          tags: r.tags
        })));
      }
      // PATCH /polls/{id}: update poll, requires admin
      update(pollId, dto) {
        return this.api.updatePoll(pollId, dto).pipe(map((r) => ({
          poll_id: r.poll_id,
          calendar_id: r.calendar_id,
          title: r.title,
          description: r.description,
          notes: r.notes,
          start_time: r.start_time,
          end_time: r.end_time,
          results_visible: r.results_visible,
          allow_multiple_votes: r.allow_multiple_votes,
          options: r.options.map((opt) => ({
            option_id: opt.option_id,
            description: opt.description,
            user_votes: opt.user_votes ?? [],
            guest_votes: opt.guest_votes ?? []
          })),
          tags: r.tags
        })));
      }
      // DELETE /polls/{id}: delete poll, requires admin
      delete(pollId, dto) {
        return this.api.deletePoll(pollId, dto).pipe(map((r) => r.deleted));
      }
      // POST /polls/{id}/vote: submit vote(s) on a poll
      // Requires JWT auth, user must have calendar access (admin not required)
      vote(pollId, dto) {
        return this.api.votePoll(pollId, dto).pipe(map((r) => ({
          poll_id: r.poll_id,
          calendar_id: r.calendar_id,
          title: r.title,
          description: r.description,
          notes: r.notes,
          start_time: r.start_time,
          end_time: r.end_time,
          results_visible: r.results_visible,
          allow_multiple_votes: r.allow_multiple_votes,
          options: r.options.map((opt) => ({
            option_id: opt.option_id,
            description: opt.description,
            user_votes: opt.user_votes ?? [],
            guest_votes: opt.guest_votes ?? []
          })),
          tags: r.tags
        })));
      }
      static \u0275fac = function PollService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PollService)(\u0275\u0275inject(PollApiService));
      };
      static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PollService, factory: _PollService.\u0275fac, providedIn: "root" });
    };
    (() => {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PollService, [{
        type: Injectable,
        args: [{ providedIn: "root" }]
      }], () => [{ type: PollApiService }], null);
    })();
  }
});

export {
  PollService,
  init_poll_service
};
//# sourceMappingURL=chunk-QKB7UDAX.js.map
