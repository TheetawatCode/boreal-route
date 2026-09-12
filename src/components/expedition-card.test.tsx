import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expeditions } from "@/data/expeditions";

import { ExpeditionCard } from "./expedition-card";

describe("ExpeditionCard", () => {
  it("presents the expedition as a labelled article with readable trip metadata", () => {
    render(<ExpeditionCard expedition={expeditions[0]} />);

    expect(
      screen.getByRole("article", { name: "Lofoten Night Crossing" }),
    ).toBeInTheDocument();
    expect(screen.getByText("4 nights")).toBeInTheDocument();
    expect(screen.getByText("Moderate pace")).toBeInTheDocument();
    expect(screen.getByText("January — March")).toBeInTheDocument();
  });
});
