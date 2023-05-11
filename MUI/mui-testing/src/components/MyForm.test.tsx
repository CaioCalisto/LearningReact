// @ts-nocheck
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import MyForm from './MyForm'

describe('Testing My Form that uses MUI', () => {
  it('I want to just change a MUI Text box', () => {
    const { getByText } = render(<MyForm />)
    var myValue = 'whatever I want as a value'
    
    var textBox = screen.getByTestId('myTextField').querySelector('input')
    fireEvent.change(textBox, { target: { value: myValue }})

    expect(textBox.value).toBe(myValue)
    // expect(getByText(myValue)).not.toBeNull()
  })
})