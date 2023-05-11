// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import MyForm from './MyForm'

describe('Testing My Form that uses MUI', () => {
  it('I want to just change a MUI Text box', () => {
    render(<MyForm />)

    expect(screen.getByText('MY_FORM')).toBeInTheDocument()
  })
})