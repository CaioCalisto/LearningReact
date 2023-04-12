import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from './ShoppingCart'

describe('Shopping Cart Context', () => {
  test('Start with an empty Cart', () => {
    render(
      <ShoppingCartContextProvider>
        <TestingComponent />
      </ShoppingCartContextProvider>
    )

    const label = screen.getByText(/0 items/)

    expect(label).toBeInTheDocument()
  })

  test('Add item id 1 to Cart', () => {
    render(
      <ShoppingCartContextProvider>
        <TestingComponentWithAdd id={1} />
      </ShoppingCartContextProvider>
    )

    // Act
    const button = screen.getByTestId('btn_add')
    fireEvent.click(button)

    // Assert
    const label = screen.getByRole('dialog')
    expect(label).toHaveTextContent('1 items with id 1')
  })

  test('Add 2 items with id 1 to Cart', () => {
    render(
      <ShoppingCartContextProvider>
        <TestingComponentWithAdd id={1} />
      </ShoppingCartContextProvider>
    )

    // Act
    const button = screen.getByTestId('btn_add')
    fireEvent.click(button)
    fireEvent.click(button)

    // Assert
    const label = screen.getByRole('dialog')
    expect(label).toHaveTextContent('2 items with id 1')
  })

  test('Remove 1 item of id 1 from a Cart', () => {
    render(
      <ShoppingCartContextProvider>
        <TestingComponentWithAdd id={1} />
      </ShoppingCartContextProvider>
    )
    const addButton = screen.getByTestId('btn_add')
    const removeButton = screen.getByTestId('btn_remove')

    fireEvent.click(addButton)
    fireEvent.click(addButton)

    const label = screen.getByRole('dialog')
    expect(label).toHaveTextContent('2 items with id 1')

    fireEvent.click(removeButton)
    expect(label).toHaveTextContent('1 items with id 1')
  })

  test('Remove item if quantity is 0', () => {
    render(
      <ShoppingCartContextProvider>
        <TestingComponentWithAdd id={1} />
      </ShoppingCartContextProvider>
    )
    const addButton = screen.getByTestId('btn_add')
    const removeButton = screen.getByTestId('btn_remove')

    fireEvent.click(addButton)

    const label = screen.getByRole('dialog')
    expect(label).toHaveTextContent('1 items with id 1')

    fireEvent.click(removeButton)
    expect(label).toHaveTextContent('no items')
  })
})

const TestingComponent = () => {
  const { cartItems } = useShoppingCartContext()

  return (
    <>
      <h1>{cartItems.length} items</h1>
    </>
  )
}

const TestingComponentWithAdd = ({ id }: { id: number }) => {
  const { cartItems, addItem, removeItem } = useShoppingCartContext()
  let content = 'no items'

  if (cartItems.length != 0) {
    content =
      cartItems.find((item) => item.id == id)?.quantity + ' items with id ' + id
  }

  return (
    <>
      <h1 role="dialog">{content}</h1>
      <button data-testid="btn_add" onClick={() => addItem(id)}>
        Add
      </button>
      <button data-testid="btn_remove" onClick={() => removeItem(id)}>
        Remove
      </button>
    </>
  )
}
