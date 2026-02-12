import {
  PollApiService,
  init_poll_api_service
} from "./chunk-EK3UKG6K.js";
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

// src/app/shared/services/api/poll-api.service.spec.ts
init_testing();
init_poll_api_service();
describe("PollApiService", () => {
  let service;
  let httpMock;
  const baseUrl = "http://localhost:8080/api/v1";
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PollApiService]
    });
    service = TestBed.inject(PollApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it("createPoll() should POST /polls", () => {
    const dto = {
      title: "Test Poll"
    };
    const mockResponse = {
      poll_id: "201"
    };
    service.createPoll(dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/polls`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
  it("updatePoll() should PATCH /polls/{poll_id}", () => {
    const dto = {
      title: "Updated Poll Title"
    };
    const mockResponse = {
      poll_id: "201"
    };
    service.updatePoll("201", dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/polls/201`);
    expect(req.request.method).toBe("PATCH");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
  it("deletePoll() should DELETE /polls/{poll_id} with request body", () => {
    const dto = {
      reason: "user_confirmed"
    };
    const mockResponse = {
      poll_id: "201",
      deleted: true
    };
    service.deletePoll("201", dto).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpMock.expectOne(`${baseUrl}/polls/201`);
    expect(req.request.method).toBe("DELETE");
    expect(req.request.body).toEqual(dto);
    req.flush(mockResponse);
  });
});
//# sourceMappingURL=spec-app-shared-services-api-poll-api.service.spec.js.map
