import {expect, test, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

test("App Router: Works with Client Components", () => {
  render(<Counter />);
  expect(screen.getByRole("heading", { level: 2, name: "0" })).toBeDefined();
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("heading", { level: 2, name: "1" })).toBeDefined();
});

test("Mock the function return", () => {
  vi.mock('./hooks/FirstHook', () => ({
    FirstHook: () => 23
  }))
  render(<Counter />);

  expect(screen.getAllByText(23).length).toBe(2)
})
