import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
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
        <TestingComponentWithAdd id={1}  />
      </ShoppingCartContextProvider>
    )

    const label = screen.getByRole('totalItems')

    expect(label).toHaveTextContent('1 items with id 1')
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

const TestingComponentWithAdd = ({id} : {id: number}) => {
  const { cartItems, addItem } = useShoppingCartContext()
  addItem(id)

  return (
    <>
      <h1 role="totalItems">{cartItems.length} items with id {id}</h1>
    </>
  )
}