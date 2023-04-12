import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom"
import { Menu } from "./Menu"

const menuHome = 'HOME'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'menu.home'){
        return menuHome
      }

      return 'translation_not_found'
    }
  }),
}))

describe('Menu bar', () => {
  test('Menu Home appears with a clickable link', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )

    const clickableLink = screen.getByRole('link', { name: menuHome})

    expect(clickableLink).toBeInTheDocument()
    expect(clickableLink).toHaveAttribute('href', '/')
  })
})