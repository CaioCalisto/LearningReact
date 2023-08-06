import { render, screen } from "@testing-library/react";
import React from "react";
import Page1 from '../pages/Page1'
import { useUser } from "../hooks/useUser";

jest.mock('../hooks/useUser')

describe("Hook 1 - mock for all tests", () => {
  it("Mock constant 1", () => {
    useUser.mockReturnValue({
      username: 'calicc'
    })

    render(<Page1 />)
    expect(screen.getByText(/calicc/)).toBeVisible()
  });

  it("Mock constant 2", () => {
    useUser.mockReturnValue({
      email: 'caio.calisto@gmail.com'
    })

    render(<Page1 />)
    expect(screen.getByText(/caio.calisto@gmail.com/)).toBeVisible()
  })
});