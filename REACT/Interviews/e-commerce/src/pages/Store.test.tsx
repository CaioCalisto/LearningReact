import { render, screen } from "@testing-library/react";
import { container } from "../DI";
import { Api } from "../hooks/Api";
import Store from "./Store";

describe("Store page with products", () => {
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
  let apiMock: Api = {
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
      expect(image).toHaveAttribute("src", product.imgUrl);
    });
  });
});

describe("Store page with loading", () => {
  let apiMock: Api = {
    getProducts: jest.fn().mockImplementation(() => {
      return {
        data: undefined,
        error: {
          /* mock error */
        },
        isLoading: true,
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

  it("Show message when data is loading", () => {
    render(<Store />);

    expect(screen.getByText(/Is Loading.../)).toBeInTheDocument();
  });
});

describe("Store page with errors", () => {
  const customMessage = "You have got an error....";
  let apiMock: Api = {
    getProducts: jest.fn().mockImplementation(() => {
      return {
        data: undefined,
        error: {
          message: customMessage,
        },
        isLoading: false,
        isFetching: false,
        isSuccess: true,
        isError: true,
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

  it("Show error message", () => {
    render(<Store />);

    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});
