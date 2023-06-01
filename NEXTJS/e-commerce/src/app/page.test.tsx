import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./page";

describe('First test module', () => {
  it('First unit test', () => {
    render(<Home />)

    expect(screen.getByText(/Hello/)).toBeInTheDocument()
  })
})