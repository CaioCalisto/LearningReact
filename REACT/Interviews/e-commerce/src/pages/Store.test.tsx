import { render, screen, within } from "@testing-library/react";
import { container } from "../DI";
import { Api } from "../hooks/Api";
import Store from "./Store";

describe("Store page", () => {
  const products = [
    {
      id: 1,
      name: "ProductA",
      price: 46.99,
      imgUrl: "customUrl1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "ProductB",
      price: 23.54,
      imgUrl: "customUrl2",
      description: "Description 2",
    },
  ];
  const apiMock: Api = {
    getProducts: jest.fn().mockImplementation(() => {
      return {
        data: { data: products },
        error: {
          /* mock error */
        },
        isLoading: false,
        isFetching: false,
        isSuccess: true,
        isError: false,
        refetch: jest.fn(),
        remove: jest.fn(),
        update: jest.fn(),
        onSettled: jest.fn(),
        onMutate: jest.fn(),
      };
    }),
  };

  beforeAll(() => {
    container.register("api", { useValue: apiMock });
  });

  it("Fetch products and show names", () => {
    render(<Store />);

    products.map((product) =>
      expect(screen.getByText(product.name)).toBeInTheDocument()
    );
  });

  it("Fetch products and show prices", () => {
    render(<Store />);

    products.map((product) =>
      expect(screen.getByText(product.price)).toBeInTheDocument()
    );
  });

  it("Fetch products and show images", () => {
    render(<Store />);

    products.map((product) => {
      const image = screen.getByAltText(product.name) as HTMLImageElement;
      expect(image).toHaveAttribute('src', product.imgUrl)
    });
  });
});
