import { render, screen } from "@testing-library/react"
import React from "react"
import { StoreItem } from "./StoreItem"
import { useShoppingCartContext, ShoppingCartContextProps } from '../contexts/ShoppingCart'

jest.mock('../contexts/ShoppingCart')

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

    expect(screen.getByTestId('btn_add')).toBeInTheDocument()
  })

  test('Not show Add button if quantity in cart is more than Zero', () => {
    getItemQuantityMock.mockImplementation((id: number) => {
      return 10
    })

    const {queryByTestId} = render(
      <StoreItem id={1} name="MyItem" imgUrl="someUrl" />
    )

    expect(queryByTestId(/btn_add/i)).toBeNull()
  })

  test('Show Remove button if quantity in cart is more than Zero', () => {
    getItemQuantityMock.mockImplementation((id: number) => {
      return 10
    })

    render(
      <StoreItem id={1} name="MyItem" imgUrl="someUrl" />
    )

    expect(screen.getByTestId('btn_remove')).toBeInTheDocument()
  })
})

const btnAddLabel = "Add To Cart"
const btnRemoveLabel = "Remove"

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'item.addToCart'){
        return btnAddLabel
      }
      if (key === 'item.remove'){
        return btnRemoveLabel
      }

      return 'translation_not_found'
    }
  }),
}))

describe('Store item - content with Translations', () => {
  test('Show Add button with text translated', () => {
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

  test('Show Remove button with text translated', () => {
    getItemQuantityMock.mockImplementation((id: number) => {
      return 10
    })

    render(
      <StoreItem id={1} name="MyItem" imgUrl="someUrl" />
    )

    expect(screen.getByRole('button', { name: btnRemoveLabel})).toBeInTheDocument()
  })
})