import { render, screen, fireEvent } from '@testing-library/react'
import { CartItem } from './CartItem'
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

describe('Cart Item', () => {
  test('Show Image', () => {
    const imgUrl = 'customImgUrl'
    render(
      <CartItem id={1} name="name" price={1} quantity={1} imgUrl={imgUrl} />
    )

    expect(screen.getByRole('img')).toHaveAttribute('src', imgUrl)
  })

  test('Show item name', () => {
    const itemName = 'My Custom name'
    const { getByText } = render(
      <CartItem
        id={1}
        name={itemName}
        price={1}
        quantity={1}
        imgUrl={'imgUrl'}
      />
    )

    expect(getByText(itemName)).toBeInTheDocument()
  })

  test('Show item quantity', () => {
    const quantity = 15
    const { getByText } = render(
      <CartItem
        id={1}
        name={'itemName'}
        price={1}
        quantity={quantity}
        imgUrl={'imgUrl'}
      />
    )

    expect(getByText(quantity + 'x')).toBeInTheDocument()
  })

  test('Not Show item quantity when it is zero', () => {
    const quantity = 1
    const { queryByText } = render(
      <CartItem
        id={1}
        name={'itemName'}
        price={1}
        quantity={quantity}
        imgUrl={'imgUrl'}
      />
    )

    expect(queryByText(quantity + 'x')).toBeNull()
  })

  test('Show button Remove', () => {
    const quantity = 1
    render(
      <CartItem
        id={1}
        name={'itemName'}
        price={1}
        quantity={quantity}
        imgUrl={'imgUrl'}
      />
    )

    expect(screen.getByTestId('btn_remove')).toBeInTheDocument()
  })

  test('Show total by item', () => {
    const quantity = 2
    const price = 15
    const { queryByText } = render(
      <CartItem
        id={1}
        name={'itemName'}
        price={price}
        quantity={quantity}
        imgUrl={'imgUrl'}
      />
    )

    expect(queryByText('$ 30')).toBeInTheDocument()
  })

  test('Show item price', () => {
    const price = 15.97
    const { queryByText } = render(
      <CartItem
        id={1}
        name={'itemName'}
        price={price}
        quantity={2}
        imgUrl={'imgUrl'}
      />
    )

    expect(queryByText('$ ' + price)).toBeInTheDocument()
  })

  test('Call removeFromCart method in Context', () => {
    const itemId = 837
    render(
      <CartItem
        id={itemId}
        name={'itemName'}
        price={15}
        quantity={2}
        imgUrl={'imgUrl'}
      />
    )

    const removeButton = screen.getByTestId('btn_remove')
    fireEvent.click(removeButton)

    expect(removeItemMock.mock.calls).toHaveLength(1)
    expect(removeItemMock.mock.calls[0][0]).toBe(itemId)
  })
})
