import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { StoreItem } from './StoreItem'
import {
  useShoppingCartContext,
  ShoppingCartContextProps,
} from '../contexts/ShoppingCart'

jest.mock('../contexts/ShoppingCart')

const addItemMock: jest.Mock = jest.fn()
const removeItemMock: jest.Mock = jest.fn()
const getItemQuantityMock: jest.Mock = jest.fn()
const contextMock: ShoppingCartContextProps = {
  addItem: addItemMock,
  removeItem: removeItemMock,
  getItemQuantity: getItemQuantityMock,
  cartItems: [],
}

beforeAll(() => {
  ;(useShoppingCartContext as jest.Mock).mockReturnValue(contextMock)
})

describe('Store item', () => {
  test('Show item image in an img src', () => {
    const imgLink = 'imgLink'
    render(<StoreItem id={0} price={10} name="someName" imgUrl={imgLink} />)

    const img = screen.getByRole('img')

    expect(img).toHaveAttribute('src', imgLink)
  })

  test('Show item name', () => {
    const itemName = 'My weird name that only exists here'
    render(<StoreItem id={0} price={10} name={itemName} imgUrl="someUrl" />)

    expect(screen.getByText(itemName)).toBeInTheDocument()
  })

  test('Show item price', () => {
    const price = 9736.10
    render(<StoreItem id={0} price={price} name={'Product'} imgUrl="someUrl" />)

    expect(screen.getByText('$ ' + price)).toBeInTheDocument()
  })

  test('Show Add button if quantity in cart is Zero', () => {
    const itemId = 983
    getItemQuantityMock.mockImplementation((id: number) => {
      if (id == itemId) {
        return 0
      }

      return 10
    })

    render(<StoreItem id={itemId} price={10} name="MyItem" imgUrl="someUrl" />)

    expect(screen.getByTestId('btn_add')).toBeInTheDocument()
  })

  test('Not show Add button if quantity in cart is more than Zero', () => {
    getItemQuantityMock.mockImplementation(() => {
      return 10
    })

    const { queryByTestId } = render(
      <StoreItem id={1} name="MyItem" price={10} imgUrl="someUrl" />
    )

    expect(queryByTestId(/btn_add/i)).toBeNull()
  })

  test('Show Remove button if quantity in cart is more than Zero', () => {
    getItemQuantityMock.mockImplementation(() => {
      return 10
    })

    render(<StoreItem id={1} name="MyItem" price={10} imgUrl="someUrl" />)

    expect(screen.getByTestId('btn_remove')).toBeInTheDocument()
  })

  test('Call addItem method when Add button is clicked', () => {
    const itemId = 983
    getItemQuantityMock.mockImplementation((id: number) => {
      if (id == itemId) {
        return 0
      }

      return 10
    })

    render(<StoreItem id={itemId} name="MyItem" price={10} imgUrl="someUrl" />)

    const addButton = screen.getByTestId('btn_add')
    fireEvent.click(addButton)

    expect(addItemMock.mock.calls.length).toBe(1)
    expect(addItemMock.mock.calls[0][0]).toBe(itemId)
  })

  test('Call removeItem method when Remove button is clicked', () => {
    const itemId = 983
    getItemQuantityMock.mockImplementation(() => {
      return 10
    })

    render(<StoreItem id={itemId} name="MyItem" price={10} imgUrl="someUrl" />)

    const removeButton = screen.getByTestId('btn_remove')
    fireEvent.click(removeButton)

    expect(removeItemMock.mock.calls.length).toBe(1)
    expect(removeItemMock.mock.calls[0][0]).toBe(itemId)
  })
})

const btnAddLabel = 'Add To Cart'
const btnRemoveLabel = 'Remove'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'item.addToCart') {
        return btnAddLabel
      }
      if (key === 'item.remove') {
        return btnRemoveLabel
      }

      return 'translation_not_found'
    },
  }),
}))

describe('Store item - content with Translations', () => {
  test('Show Add button with text translated', () => {
    const itemId = 983
    getItemQuantityMock.mockImplementation((id: number) => {
      if (id == itemId) {
        return 0
      }

      return 10
    })

    render(<StoreItem id={itemId} name="MyItem" price={10} imgUrl="someUrl" />)

    expect(
      screen.getByRole('button', { name: btnAddLabel })
    ).toBeInTheDocument()
  })

  test('Show Remove button with text translated', () => {
    getItemQuantityMock.mockImplementation(() => {
      return 10
    })

    render(<StoreItem id={1} name="MyItem" price={10} imgUrl="someUrl" />)

    expect(
      screen.getByRole('button', { name: btnRemoveLabel })
    ).toBeInTheDocument()
  })
})
