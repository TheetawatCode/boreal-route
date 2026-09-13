import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { readDemoTrip } from "@/lib/demo-trip";

import { BookingConfirmation } from "./booking-confirmation";

describe("BookingConfirmation", () => {
  afterEach(() => {
    window.localStorage.clear();
    vi.useRealTimers();
  });

  it("persists a minimal simulated trip and politely confirms it without moving focus", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-09-13T10:00:00.000Z"));
    render(<BookingConfirmation departureId="lofoten-2026-02-12" partySize={2} />);

    const button = screen.getByRole("button", { name: "Confirm simulated trip" });
    button.focus();
    fireEvent.click(button);

    expect(document.activeElement).toBe(button);
    expect(screen.getByRole("status")).toHaveTextContent("Simulated trip saved");
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(readDemoTrip(window.localStorage)).toMatchObject({
      departureId: "lofoten-2026-02-12",
      partySize: 2,
      reference: "BR-LOF-20260212-02",
    });
  });
});
