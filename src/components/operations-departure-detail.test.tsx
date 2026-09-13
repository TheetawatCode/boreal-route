import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  getDepartureAttentionGuidance,
  getOperationsDepartureContext,
} from "@/data/operations";

import { OperationsDepartureDetail } from "./operations-departure-detail";

describe("OperationsDepartureDetail", () => {
  it("renders a complete read-only coordination view for a known departure", () => {
    const context = getOperationsDepartureContext("lofoten-2026-02-12");
    if (!context) throw new Error("Expected a known departure fixture.");

    render(<OperationsDepartureDetail context={context} attentionGuidance={getDepartureAttentionGuidance(context)} operationsHref="/operations" />);

    expect(screen.getByRole("heading", { name: "Lofoten Night Crossing" })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Readiness: Ready. Weather decision: Cleared. Allocation: Aligned.");
    expect(screen.getByText("Capacity, without personal data.")).toBeInTheDocument();
    expect(screen.getByText("S. Nilsen · lead guide")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to operations board" })).toHaveAttribute("href", "/operations");
  });

  it("renders concise attention guidance for a weather-watch departure", () => {
    const context = getOperationsDepartureContext("vatnajokull-2026-02-19");
    if (!context) throw new Error("Expected a weather-watch fixture.");

    render(<OperationsDepartureDetail context={context} attentionGuidance={getDepartureAttentionGuidance(context)} operationsHref="/operations?readiness=Weather+watch" />);

    expect(screen.getByRole("heading", { name: "Keep this departure in view." })).toBeInTheDocument();
    expect(screen.getByText(/Hold the final route decision/)).toBeInTheDocument();
  });
});
