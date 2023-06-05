import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  it ('First test', () => {
    render(<App />)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
  })
})