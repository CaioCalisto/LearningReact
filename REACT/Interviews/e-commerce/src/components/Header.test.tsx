import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
  it('Show logotipo', () => {
    render(<Header />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'src/assets/logo.png')
  })
})