import { render, screen } from '@testing-library/react'
import { container } from '../DI'
import { CartApi } from '../infrastructure/api/CartApi'
import { Store } from './Store'

const products = [
  { id: 1, name: 'ProductA', price: 46, imgUrl: 'customUrl1' },
  { id: 2, name: 'ProductB', price: 23, imgUrl: 'customUrl2' },
]

const CartApiMock: CartApi = {
  fetch: jest.fn().mockImplementation((onSuccess, onError) => {
    return {
      data: products,
      error: {
        /* mock error */
      },
      isLoading: false,
      isFetching: false,
      isSuccess: true,
      isError: false,
      refetch: jest.fn(),
      remove: jest.fn(),
      update: jest.fn(),
      onSettled: jest.fn(),
      onMutate: jest.fn(),
    }
  }),
}

import {
  useShoppingCartContext,
  ShoppingCartContextProps,
} from '../contexts/ShoppingCart'

jest.mock('../contexts/ShoppingCart')

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => {
      return 'translation_not_found'
    },
  }),
}))

const contextMock: ShoppingCartContextProps = {
  addItem: jest.fn(),
  removeItem: jest.fn(),
  getItemQuantity: jest.fn(),
  cartItems: [],
}

beforeAll(() => {
  ;(useShoppingCartContext as jest.Mock).mockReturnValue(contextMock)
  container.register('api', { useValue: CartApiMock })
})

describe('Store page', () => {
  test('Should get data via api request and send it to child component', () => {
    const { getAllByTestId } = render(<Store />)

    const storeItemsElements = getAllByTestId('item')
    expect(storeItemsElements).toHaveLength(products.length)

    expect(screen.queryByText(products[0].name)).toBeInTheDocument()
    expect(screen.queryByText(products[1].name)).toBeInTheDocument()
  })
})
