// @ts-nocheck
import React from 'react'
import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { TextField } from '@mui/material'
import MyForm from './MyForm'

describe('Testing My Form that uses MUI', () => {
  it('I want to just change a MUI Text box', () => {
    const { getByTestId, getByText } = render(
      <TextField data-testid="myTextField" variant="outlined" />
    )
    var myValue = 'whatever I want as a value'

    var textBox = getByTestId('myTextField').querySelector('input')
    
    fireEvent.change(textBox, { target: { value: myValue } })

    expect(textBox.value).toBe(myValue)
  })

  it('I want to pass the TextField value as parameter', () => {
    const myCallbackMock: jest.Mock = jest.fn()
    const { getByTestId, getByText } = render(<MyForm myCallback={myCallbackMock} />)

    var myValue = 'whatever I want as a value'

    var textBox = getByTestId('myTextField').querySelector('input')
    fireEvent.change(textBox, {target: {value: myValue}})

    var button = getByTestId('myButton')
    fireEvent.click(button)

    expect(myCallbackMock.mock.calls).toHaveLength(1)
    expect(myCallbackMock.mock.calls[0][0]).toBe(myValue)
  })

  it('I want to see the TextField value in the screen', () => {
    const myCallbackMock: jest.Mock = jest.fn()
    const { getByTestId, getByDisplayValue } = render(<MyForm myCallback={myCallbackMock} />)

    var myValue = 'whatever I want as a value'

    var textBox = getByTestId('myTextField').querySelector('input')
    fireEvent.change(textBox, {target: {value: myValue}})

    expect(getByDisplayValue(myValue)).toBeInTheDocument()
  })
})
