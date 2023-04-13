import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'menu.home') {
        return 'HOME'
      }
      if (key === 'menu.store') {
        return 'STORE'
      }
      if (key === 'menu.about') {
        return 'ABOUT'
      }
    },
  }),
}))

describe('Main App', () => {
  test('Should show the nav menu', () => {
    const { container } = render(<App />, { wrapper: BrowserRouter })

    expect(container.getElementsByClassName('navbar-nav').length).toBe(1)
  })

  test('Should contain a clickable link to Home page', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    await fireEvent.click(getByText('HOME'))

    expect(screen.getByTitle(/Home page/i)).toBeInTheDocument()
  })

  test('Should contain a clickable link to Store page', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    await fireEvent.click(getByText('STORE'))

    expect(screen.getByTitle(/Store page/i)).toBeInTheDocument()
  })

  test('Should contain a clickable link to About page', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    await fireEvent.click(getByText('ABOUT'))

    expect(screen.getByTitle(/About page/i)).toBeInTheDocument()
  })
})
