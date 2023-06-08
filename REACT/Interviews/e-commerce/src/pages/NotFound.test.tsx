import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

const errorMessage = "This page was not found!";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: () => {
    return { message: "This page was not found!" };
  },
}));

describe("NotFound page", () => {
  it("Show message to inform that this page is not found", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const message1 = screen.queryByText(
      /Sorry, an unexpected error has occurred./
    );
    expect(message1).toBeInTheDocument();

    const message2 = screen.getByText(errorMessage);
    expect(message2).toBeInTheDocument();
  });
});
