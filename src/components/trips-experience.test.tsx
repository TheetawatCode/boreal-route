import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { createDemoTrip, saveDemoTrip } from "@/lib/demo-trip";

import { TripsExperience } from "./trips-experience";

describe("TripsExperience", () => {
  afterEach(() => {
    cleanup();
    window.localStorage.clear();
  });

  it("renders an accessible empty state without a simulated trip", async () => {
    render(<TripsExperience />);

    expect(await screen.findByRole("heading", { name: "Your itinerary is waiting for a route." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore expeditions" })).toHaveAttribute("href", "/expeditions");
  });

  it("renders a fixture-derived itinerary and safely clears a stale trip", async () => {
    saveDemoTrip(
      window.localStorage,
      createDemoTrip({ departureId: "lofoten-2026-02-12", partySize: 2, createdAt: "2026-09-13T10:00:00.000Z" }),
    );
    const { unmount } = render(<TripsExperience />);

    expect(await screen.findByRole("heading", { name: "Lofoten Night Crossing" })).toBeInTheDocument();
    expect(screen.getByText("BR-LOF-20260212-02")).toBeInTheDocument();
    unmount();
    window.localStorage.clear();

    saveDemoTrip(
      window.localStorage,
      createDemoTrip({ departureId: "lofoten-2026-03-05", partySize: 1, createdAt: "2026-09-13T10:00:00.000Z" }),
    );
    render(<TripsExperience />);

    expect(await screen.findByRole("heading", { name: "This saved route is no longer available." })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear demo trip" }));
    expect(await screen.findByRole("heading", { name: "Your itinerary is waiting for a route." })).toBeInTheDocument();
  });
});
