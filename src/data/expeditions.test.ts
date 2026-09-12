import { describe, expect, it } from "vitest";

import { expeditions, getExpeditionBySlug } from "./expeditions";

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
});
