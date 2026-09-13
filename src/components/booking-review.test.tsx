import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getBookableDepartureContext } from "@/data/expeditions";

import { BookingReview } from "./booking-review";

describe("BookingReview", () => {
  it("renders a capacity-safe simulated review with a transparent total", () => {
    const context = getBookableDepartureContext("lofoten-2026-02-12");

    if (!context) {
      throw new Error("Expected a selectable Lofoten departure fixture.");
    }

    render(<BookingReview context={context} partySize={2} />);

    expect(screen.getByRole("heading", { name: "Review your route before anything is real." })).toBeInTheDocument();
    expect(screen.getByLabelText("Travellers")).toHaveValue("2");
    expect(screen.getByText(/3 spaces currently available/)).toBeInTheDocument();
    expect(screen.getByText("Fictional estimated total")).toBeInTheDocument();
    expect(screen.getByText(/simulation only/i)).toBeInTheDocument();
  });
});
