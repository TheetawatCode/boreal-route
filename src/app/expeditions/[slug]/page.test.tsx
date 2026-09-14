import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ExpeditionDetailPage from "./page";

describe("ExpeditionDetailPage imagery", () => {
  it("renders the matching meaningful supporting image for each expedition", async () => {
    const cases = [
      {
        slug: "lofoten-night-crossing",
        alt: "Folded insulated layers, a route map, thermos, and headlamp on a timber cabin table beside a snow-lit Lofoten window.",
        source: "lofoten-cabin-preparation.png",
      },
      {
        slug: "vatnajokull-after-light",
        alt: "A guide stands beside a marked snow route, looking across Vatnajökull ice toward a break in low winter cloud.",
        source: "vatnajokull-weather-window.png",
      },
      {
        slug: "arctic-circle-field-notes",
        alt: "A sheltered Finnmark night camp with a tripod, snowshoes, field pack, lantern, and low tent beneath a faint aurora.",
        source: "finnmark-night-camp.png",
      },
    ];

    for (const expedition of cases) {
      const { unmount } = render(
        await ExpeditionDetailPage({
          params: Promise.resolve({ slug: expedition.slug }),
        }),
      );

      expect(screen.getByAltText(expedition.alt)).toHaveAttribute(
        "src",
        expect.stringContaining(expedition.source),
      );

      unmount();
    }
  });
});
