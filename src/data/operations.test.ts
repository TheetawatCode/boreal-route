import { describe, expect, it } from "vitest";

import {
  filterOperationalDepartures,
  getOperationalDepartures,
  getOperationsMetrics,
  getDepartureAttentionGuidance,
  getOperationsDepartureContext,
  parseOperationsFilters,
} from "./operations";

describe("operations data", () => {
  it("derives operational summaries and attention metrics from typed departures", () => {
    const departures = getOperationalDepartures();

    expect(departures).toHaveLength(6);
    expect(getOperationsMetrics(departures)).toEqual({
      readyDepartures: 3,
      weatherWatchDepartures: 1,
      allocationsNeedingAttention: 1,
    });
    expect(departures[3].departure.allocation.guideSummary).toContain("pending weather decision");
  });

  it("filters with supported readiness and weather decisions", () => {
    const filters = parseOperationsFilters({ readiness: "Weather watch", weather: "Monitoring" });

    expect(filterOperationalDepartures(getOperationalDepartures(), filters)).toHaveLength(1);
  });

  it("uses safe fallback for unknown query values and preserves a recoverable no-results state", () => {
    const unknown = parseOperationsFilters({ readiness: "Paused", weather: ["Rain", "Cleared"] });
    expect(unknown).toEqual({ readiness: null, weatherDecision: null });

    const empty = filterOperationalDepartures(
      getOperationalDepartures(),
      parseOperationsFilters({ readiness: "Ready", weather: "Monitoring" }),
    );
    expect(empty).toEqual([]);
  });

  it("looks up known departures and derives attention guidance from weather, capacity, and allocation state", () => {
    expect(getOperationsDepartureContext("lofoten-2026-02-12")?.expedition.title).toBe("Lofoten Night Crossing");
    expect(getOperationsDepartureContext("unknown-departure")).toBeUndefined();

    const weatherWatch = getOperationsDepartureContext("vatnajokull-2026-02-19");
    const full = getOperationsDepartureContext("lofoten-2026-03-05");

    if (!weatherWatch || !full) throw new Error("Expected fixture departures.");

    expect(getDepartureAttentionGuidance(weatherWatch)).toHaveLength(2);
    expect(getDepartureAttentionGuidance(weatherWatch).join(" ")).toContain("weather review");
    expect(getDepartureAttentionGuidance(full).join(" ")).toContain("Capacity is fully allocated");
  });
});
