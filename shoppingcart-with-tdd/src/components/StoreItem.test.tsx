import { render, screen, fireEvent } from "@testing-library/react"
import { StoreItem } from "./StoreItem"

describe('Store item', () => {
  test('Show item image in an img src', () => {
    const imgLink = 'imgLink'
    render(
      <StoreItem imgUrl={imgLink}/>
    )

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', imgLink)
  })
})
