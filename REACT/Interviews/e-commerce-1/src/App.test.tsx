import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from "react"
import { App } from './App';

describe('App Test', () => {
  it('Show hello', () => {
    render(<App />)
    const hello = screen.getByText(/Hello/)
    expect(hello).toBeInTheDocument()
  })
})