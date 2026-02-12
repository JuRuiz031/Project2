import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-CV6DAH2P.js";
import {
  CalendarApiService,
  init_calendar_api_service
} from "./chunk-JRC6SCPK.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-52DSKCZD.js";
import "./chunk-5EHNMWHP.js";
import "./chunk-FYSHOF5T.js";

// src/app/shared/services/api/calendar-api.service.spec.ts
init_testing();
init_calendar_api_service();
describe("CalendarApiService", () => {
  let service;
  let httpMock;
  const baseUrl = "http://localhost:8080/api/v1";
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CalendarApiService]
    });
    service = TestBed.inject(CalendarApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("getCalendarHome() should GET /calendar", () => {
    const mock = { ok: true };
    service.getCalendarHome().subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    req.flush(mock);
  });
  it("getByCalendarIds() should GET /calendar?calendarIds=1,2,3", () => {
    const mock = { ok: true };
    service.getByCalendarIds(["1", "2", "3"]).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.get("calendarIds")).toBe("1,2,3");
    req.flush(mock);
  });
  it("getByCalendarIds() with empty array should GET /calendar (no params)", () => {
    const mock = { ok: true };
    service.getByCalendarIds([]).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.keys().length).toBe(0);
    req.flush(mock);
  });
  it("getByEventIds() should GET /calendar?eventIds=10,11", () => {
    const mock = { ok: true };
    service.getByEventIds(["10", "11"]).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.get("eventIds")).toBe("10,11");
    req.flush(mock);
  });
  it("getByPollIds() should GET /calendar?pollIds=7,8", () => {
    const mock = { ok: true };
    service.getByPollIds(["7", "8"]).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.get("pollIds")).toBe("7,8");
    req.flush(mock);
  });
  it("getByTags() should GET /calendar?tags=work,school", () => {
    const mock = { ok: true };
    service.getByTags(["work", "school"]).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.get("tags")).toBe("work,school");
    req.flush(mock);
  });
  it("getFiltered() should GET /calendar with combined params", () => {
    const mock = { ok: true };
    service.getFiltered({
      calendarIds: ["1", "2"],
      eventIds: ["10"],
      pollIds: ["7", "8"],
      tags: ["work"]
    }).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.get("calendarIds")).toBe("1,2");
    expect(req.request.params.get("eventIds")).toBe("10");
    expect(req.request.params.get("pollIds")).toBe("7,8");
    expect(req.request.params.get("tags")).toBe("work");
    req.flush(mock);
  });
  it("getFiltered() with no filters should GET /calendar (no params)", () => {
    const mock = { ok: true };
    service.getFiltered({}).subscribe();
    const req = httpMock.expectOne((r) => r.url === `${baseUrl}/calendar`);
    expect(req.request.method).toBe("GET");
    expect(req.request.params.keys().length).toBe(0);
    req.flush(mock);
  });
  it("createCalendar() should POST /calendar", () => {
    const dto = { name: "My Calendar" };
    const mock = { calendar_id: "123" };
    service.createCalendar(dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/calendar`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(dto);
    req.flush(mock);
  });
  it("updateCalendar() should PATCH /calendar/{id}", () => {
    const dto = { name: "Updated Name" };
    const mock = { calendar_id: "123" };
    service.updateCalendar("123", dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/calendar/123`);
    expect(req.request.method).toBe("PATCH");
    expect(req.request.body).toEqual(dto);
    req.flush(mock);
  });
  it("deleteCalendar() should DELETE /calendar/{id}", () => {
    const mock = { calendar_id: "123", deleted: true };
    service.deleteCalendar("123").subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/calendar/123`);
    expect(req.request.method).toBe("DELETE");
    req.flush(mock);
  });
  it("getInviteLink() should GET /calendars/{id}/invite", () => {
    const mock = { invite_url: "https://example.com/invite" };
    service.getInviteLink("55").subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/calendars/55/invite`);
    expect(req.request.method).toBe("GET");
    req.flush(mock);
  });
  it("acceptInvite() should POST /calendars/invite/accept", () => {
    const dto = { invite_token: "abc" };
    const mock = { ok: true };
    service.acceptInvite(dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/calendars/invite/accept`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(dto);
    req.flush(mock);
  });
});
//# sourceMappingURL=spec-app-shared-services-api-calendar-api.service.spec.js.map
