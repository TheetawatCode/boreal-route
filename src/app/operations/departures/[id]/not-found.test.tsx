import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import OperationsDepartureNotFound from "./not-found";

describe("OperationsDepartureNotFound", () => {
  it("offers branded recovery for an unknown departure route", () => {
    render(<OperationsDepartureNotFound />);

    expect(screen.getByRole("heading", { name: "This departure coordination record is unavailable." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View operations board" })).toHaveAttribute("href", "/operations");
  });
});
