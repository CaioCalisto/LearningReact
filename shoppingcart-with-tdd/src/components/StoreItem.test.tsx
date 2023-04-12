import { render, screen } from "@testing-library/react"
import React from "react"
import { StoreItem } from "./StoreItem"
import { useShoppingCartContext, ShoppingCartContextProps } from '../contexts/ShoppingCart'
import { useTranslation } from "react-i18next"

jest.mock('../contexts/ShoppingCart')

const btnAddLabel = "Add To Cart"

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key === 'item.addToCart' ? btnAddLabel : 'translation_not_found',
  }),
}))

const addItemMock: jest.Mock = jest.fn()
const removeItemMock: jest.Mock = jest.fn()
const getItemQuantityMock: jest.Mock = jest.fn()
const contextMock: ShoppingCartContextProps = {
  addItem: addItemMock, 
  removeItem: removeItemMock,
  getItemQuantity: getItemQuantityMock,
  cartItems: []
}

beforeAll(() => {
  (useShoppingCartContext as jest.Mock).mockReturnValue(contextMock)
})

describe('Store item', () => {
  test('Show item image in an img src', () => {
    const imgLink = 'imgLink'
    render(
      <StoreItem id={0} name="someName" imgUrl={imgLink}/>
    )

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', imgLink)
  })

  test('Show item name', () => {
    const itemName = 'My weird name that only exists here'
    render(
      <StoreItem id={0} name={itemName} imgUrl="someUrl"/>
    )

    expect(screen.getByText(itemName)).toBeInTheDocument()
  })

  test('Show Add button if quantity in cart is Zero', () => {
    const itemId = 983
    getItemQuantityMock.mockImplementation((id: number) => {
      if (id == itemId){
        return 0
      } 

      return 10
    })

    render(
      <StoreItem id={itemId} name="MyItem" imgUrl="someUrl" />
    )

    expect(screen.getByRole('button', { name: btnAddLabel})).toBeInTheDocument()
  })
})
