import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from './Menu'

const menuHome = 'HOME'
const menuStore = 'STORE'
const menuAbout = 'ABOUT'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'menu.home') {
        return menuHome
      }
      if (key === 'menu.store') {
        return menuStore
      }
      if (key === 'menu.about') {
        return menuAbout
      }

      return 'translation_not_found'
    },
  }),
}))

describe('Menu bar', () => {
  test('Menu Home appears with a clickable link', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )

    const clickableLink = screen.getByRole('link', { name: menuHome })

    expect(clickableLink).toBeInTheDocument()
    expect(clickableLink).toHaveAttribute('href', '/')
  })

  test('Menu Store appears with a clickable link', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )

    const clickableLink = screen.getByRole('link', { name: menuStore })

    expect(clickableLink).toBeInTheDocument()
    expect(clickableLink).toHaveAttribute('href', '/store')
  })

  test('Menu About appears with a clickable link', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )

    const clickableLink = screen.getByRole('link', { name: menuAbout })

    expect(clickableLink).toBeInTheDocument()
    expect(clickableLink).toHaveAttribute('href', '/about')
  })
})
