import {
  EventApiService,
  init_event_api_service
} from "./chunk-WAEIODOV.js";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "./chunk-CV6DAH2P.js";
import "./chunk-DD5LJ5SS.js";
import {
  TestBed,
  init_testing
} from "./chunk-OBQV2OXX.js";
import "./chunk-52DSKCZD.js";
import "./chunk-5EHNMWHP.js";
import "./chunk-FYSHOF5T.js";

// src/app/shared/services/api/event-api.service.spec.ts
init_testing();
init_event_api_service();
describe("EventApiService", () => {
  let service;
  let httpMock;
  const baseUrl = "http://localhost:8080/api/v1";
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventApiService]
    });
    service = TestBed.inject(EventApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("createEvent() should POST /events", () => {
    const dto = {
      // keep minimal; add required fields if your DTO enforces them
      title: "Test Event"
    };
    const mockResponse = {
      event_id: "101"
    };
    service.createEvent(dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/events`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
  it("updateEvent() should PATCH /events/{event_id}", () => {
    const dto = {
      title: "Updated Title"
    };
    const mockResponse = {
      event_id: "101"
    };
    service.updateEvent("101", dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/events/101`);
    expect(req.request.method).toBe("PATCH");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
  it("deleteEvent() should DELETE /events/{event_id} with request body", () => {
    const dto = {
      // include whatever your API requires in the delete body
      reason: "user_confirmed"
    };
    const mockResponse = {
      event_id: "101",
      deleted: true
    };
    service.deleteEvent("101", dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/events/101`);
    expect(req.request.method).toBe("DELETE");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
});
//# sourceMappingURL=spec-app-shared-services-api-event-api.service.spec.js.map
