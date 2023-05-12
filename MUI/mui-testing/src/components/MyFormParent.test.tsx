// @ts-nocheck
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MyFormParent from './MyFormParent'
import { Button } from '@mui/material'

jest.mock('./MyForm', () => {
  return function FakeComponent({ myCallback }) {
    return (
      <>
        <Button
          onClick={() => myCallback('My Custom Value sent from callback')}
          data-testid="myButton"
        >
          Click
        </Button>
      </>
    )
  }
})

describe('Testing Parent component', () => {
  it('I want to test this parent isolated when children does a callback', () => {
    const { getByText } = render(<MyFormParent />)

    var button = screen.getByTestId('myButton')
    fireEvent.click(button)

    expect(getByText('Parent value: My Custom Value sent from callback')).toBeInTheDocument()
  })
})
