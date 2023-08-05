import { render, screen } from "@testing-library/react";
import React from "react";
import Page1 from '../pages/Page1'

describe("Hook 1 - mock for all tests", () => {
  it("Test 1", () => {
    render(<Page1 />)
    expect(screen.getByText(/Page1/)).toBeVisible()
  });
});