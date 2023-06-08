import { render, screen } from "@testing-library/react";
import Detail, { ProductDetail } from "./Detail";

describe("Product detail", () => {
  it("Show product image", () => {
    const imageUrl = "custom_url";

    const data: ProductDetail = {
      imgUrl: imageUrl,
      name: "",
      price: 0,
      description: "",
    };
    render(<Detail data={data} />);

    const image = screen.getByTestId("product_image");
    expect(image).toHaveAttribute("src", imageUrl);
  });

  it("Show product name", () => {
    const name = "Super cup";

    const data: ProductDetail = {
      imgUrl: "",
      name: name,
      price: 0,
      description: "",
    };
    render(<Detail data={data} />);

    const nameLabel = screen.getByTestId("product_name");
    expect(nameLabel.textContent).toBe(name);
  });

  it("Show product price", () => {
    const price = 45.99;
    const data: ProductDetail = {
      imgUrl: "",
      name: "",
      price: price,
      description: "",
    };
    render(<Detail data={data} />);

    const priceLabel = screen.getByTestId("product_price");
    const expectedLabel = `R$ ${price}`;
    expect(priceLabel.textContent).toBe(expectedLabel);
  });

  it("Show product description", () => {
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
    const data: ProductDetail = {
      imgUrl: "",
      name: "",
      price: 0,
      description: description,
    };
    render(<Detail data={data} />);

    const descriptionLabel = screen.getByTestId("product_description");
    expect(descriptionLabel.textContent).toBe(description);
  });

  it("Should contain a button to add product to Cart", () => {
    const data: ProductDetail = {
      imgUrl: "",
      name: "",
      price: 0,
      description: "",
    };
    render(<Detail data={data} />);

    const button = screen.getByTestId('add-to-cart-button')
    expect(button).toBeInTheDocument()
    expect(button.textContent).toBe('Add to cart')
  });
});
