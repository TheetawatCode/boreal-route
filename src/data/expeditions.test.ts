import { describe, expect, it } from "vitest";

import {
  departures,
  expeditions,
  filterExpeditions,
  getBookableDepartureContext,
  getDepartureContext,
  getPricePerTraveller,
  getExpeditionBySlug,
  getSafePartySize,
  isDepartureSelectable,
  parseDiscoveryFilters,
} from "./expeditions";

describe("expedition fixtures", () => {
  it("provides distinct, complete expedition records", () => {
    expect(expeditions).toHaveLength(3);
    expect(new Set(expeditions.map((expedition) => expedition.slug)).size).toBe(
      expeditions.length,
    );

    for (const expedition of expeditions) {
      expect(expedition.title).not.toHaveLength(0);
      expect(expedition.durationNights).toBeGreaterThan(0);
      expect(expedition.highlights).toHaveLength(3);
      expect(expedition.image.src).toMatch(/^\/images\//);
      expect(expedition.image.alt.length).toBeGreaterThan(20);
      expect(expedition.image.width / expedition.image.height).toBeCloseTo(1.5);
    }
  });

  it("retrieves an expedition by its stable route slug", () => {
    expect(getExpeditionBySlug("vatnajokull-after-light")?.country).toBe(
      "Iceland",
    );
    expect(getExpeditionBySlug("not-a-route")).toBeUndefined();
  });

  it("provides complete detail content for a valid expedition route", () => {
    const expedition = getExpeditionBySlug("arctic-circle-field-notes");

    expect(expedition?.itinerary).toHaveLength(6);
    expect(expedition?.itinerary[0]).toMatchObject({ day: 1 });
    expect(expedition?.inclusions).toHaveLength(3);
    expect(expedition?.preparation).toHaveLength(3);
    expect(expedition?.readiness.capacityNote).toContain("6 travellers");
  });

  it("keeps unknown slugs recoverable by returning no expedition", () => {
    expect(getExpeditionBySlug("midnight-sun-archive")).toBeUndefined();
  });

  it("filters by supported URL query values", () => {
    const filters = parseDiscoveryFilters({ region: "Norway", duration: "4" });

    expect(filterExpeditions(expeditions, filters).map(({ slug }) => slug)).toEqual([
      "lofoten-night-crossing",
    ]);
  });

  it("falls back safely when URL query values are unknown", () => {
    const filters = parseDiscoveryFilters({
      region: "Mars",
      duration: ["not-a-number", "99"],
    });

    expect(filters).toEqual({ region: null, durationNights: null });
    expect(filterExpeditions(expeditions, filters)).toHaveLength(3);
  });

  it("allows a valid filter combination to produce a recoverable empty result", () => {
    const filters = parseDiscoveryFilters({ region: "Iceland", duration: "4" });

    expect(filterExpeditions(expeditions, filters)).toEqual([]);
  });

  it("derives selectable departures from readiness and remaining capacity", () => {
    const selectable = departures.filter(isDepartureSelectable);

    expect(selectable.map((departure) => departure.id)).toEqual([
      "lofoten-2026-02-12",
      "vatnajokull-2026-01-22",
      "finnmark-2026-03-14",
    ]);
    expect(getPricePerTraveller(selectable[0])).toBe(2490);
  });

  it("recovers safely from unknown or unavailable departure IDs", () => {
    expect(getBookableDepartureContext("lofoten-2026-03-05")).toBeUndefined();
    expect(getBookableDepartureContext("unknown-departure")).toBeUndefined();
    expect(getDepartureContext("vatnajokull-2026-02-19")?.departure.readiness).toBe(
      "Weather watch",
    );
  });

  it("keeps party size within the fixture-derived remaining capacity", () => {
    expect(getSafePartySize({ party: "3" }, 3)).toBe(3);
    expect(getSafePartySize({ party: "4" }, 3)).toBe(1);
    expect(getSafePartySize({ party: ["2", "3"] }, 3)).toBe(2);
    expect(getSafePartySize({ party: "not-a-number" }, 3)).toBe(1);
  });
});
