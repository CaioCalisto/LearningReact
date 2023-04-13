import { getByTestId, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      return 'translation_not_found'
    }
  }),
}))

describe('Main App', () => {
  test('Should show the nav menu', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    expect(container.getElementsByClassName('navbar-nav').length).toBe(1)
  })
})