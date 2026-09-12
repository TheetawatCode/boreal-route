import { describe, expect, it } from "vitest";

import {
  expeditions,
  filterExpeditions,
  getExpeditionBySlug,
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
    }
  });

  it("retrieves an expedition by its stable route slug", () => {
    expect(getExpeditionBySlug("vatnajokull-after-light")?.country).toBe(
      "Iceland",
    );
    expect(getExpeditionBySlug("not-a-route")).toBeUndefined();
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
});
