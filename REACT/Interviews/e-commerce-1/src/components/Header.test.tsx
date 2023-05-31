import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from "react";
import Header from './Header';

describe('Header', () => {
  it('Logo should appears', () => {
    render(<Header />)
    expect(screen.getByRole('img')).toHaveAttribute('src', 'src/assets/logo.svg')
  })
})