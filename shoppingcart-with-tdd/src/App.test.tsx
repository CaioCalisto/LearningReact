import { render, fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { act } from "react-dom/test-utils";

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'menu.home'){
        return 'HOME'
      }
      if (key === 'menu.store'){
        return 'STORE'
      }
      if (key === 'menu.about'){
        return 'ABOUT'
      }
    }
  }),
}))

describe('Main App', () => {
  test('Should show the nav menu', () => {
    const { container } = render(
        <App />, {wrapper: BrowserRouter}
    )

    expect(container.getElementsByClassName('navbar-nav').length).toBe(1)
  })

  test('Should contain a clickable link to Home page', async () => {
    
    const { getByText} = render(
      <App />, {wrapper: BrowserRouter}
    )

    await fireEvent.click(getByText('HOME'))
    
    expect(screen.getByText(/HELLO WORLD/i)).toBeInTheDocument()
  })
})