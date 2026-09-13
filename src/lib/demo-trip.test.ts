import { describe, expect, it } from "vitest";

import {
  clearDemoTrip,
  createDemoTrip,
  getDemoReference,
  getDemoTripContext,
  readDemoTrip,
  saveDemoTrip,
} from "./demo-trip";

describe("demo trip persistence", () => {
  it("stores only the minimal deterministic demo trip state and derives its fixture context", () => {
    const trip = createDemoTrip({
      departureId: "lofoten-2026-02-12",
      partySize: 2,
      createdAt: "2026-09-13T10:00:00.000Z",
    });

    expect(trip).toEqual({
      departureId: "lofoten-2026-02-12",
      partySize: 2,
      reference: "BR-LOF-20260212-02",
      createdAt: "2026-09-13T10:00:00.000Z",
    });
    expect(getDemoReference("lofoten-2026-02-12", 2)).toBe("BR-LOF-20260212-02");

    saveDemoTrip(window.localStorage, trip);
    expect(readDemoTrip(window.localStorage)).toEqual(trip);
    expect(getDemoTripContext(trip)?.expedition.title).toBe("Lofoten Night Crossing");

    clearDemoTrip(window.localStorage);
    expect(readDemoTrip(window.localStorage)).toBeNull();
  });

  it("treats unavailable departures and capacity-overflow party sizes as stale", () => {
    expect(
      getDemoTripContext(
        createDemoTrip({ departureId: "lofoten-2026-03-05", partySize: 1, createdAt: "2026-09-13T10:00:00.000Z" }),
      ),
    ).toBeNull();
    expect(
      getDemoTripContext(
        createDemoTrip({ departureId: "lofoten-2026-02-12", partySize: 4, createdAt: "2026-09-13T10:00:00.000Z" }),
      ),
    ).toBeNull();
  });
});
