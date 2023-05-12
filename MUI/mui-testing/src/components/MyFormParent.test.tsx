// @ts-nocheck
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MyFormParent from './MyFormParent'

jest.mock('./MyForm', () => {
  return function FakeComponent({ myCallback }) {
    return (
      <>
        <button
          onClick={() => myCallback('My Custom Value sent from callback')}
          data-testid="myButton"
        >
          Click
        </button>
      </>
    )
  }
})

describe('Testing Parent component', () => {
  it('I want to test this parent isolated when children does a callback', () => {
    const { getByText } = render(<MyFormParent />)

    var button = screen.getByTestId('myButton')
    fireEvent.click(button)

    expect(getByText('My Custom Value sent from callback')).toBeInTheDocument()
  })
})
