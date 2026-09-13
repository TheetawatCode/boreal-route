import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getOperationalDepartures } from "@/data/operations";

import { OperationsDepartureList } from "./operations-departure-list";

describe("OperationsDepartureList", () => {
  it("communicates readiness, weather, and allocation status in text with a canonical future detail link", () => {
    render(<OperationsDepartureList departures={getOperationalDepartures().slice(0, 1)} />);

    expect(screen.getByRole("status")).toHaveTextContent(
      "Readiness: Ready. Weather decision: Cleared. Allocation: Aligned.",
    );
    expect(screen.getByText(/3 spaces remaining/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View departure coordination" })).toHaveAttribute(
      "href",
      "/operations/departures/lofoten-2026-02-12",
    );
  });
});
