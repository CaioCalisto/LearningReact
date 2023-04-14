import { render, screen } from '@testing-library/react'
import { container } from '../DI'
import { CartApi } from '../infrastructure/api/CartApi'
import { Store } from './Store'

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
  (useShoppingCartContext as jest.Mock).mockReturnValue(contextMock)
})

describe('Store page with successfull responses', () => {
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

  beforeAll(() => {
    container.register('api', { useValue: CartApiMock })
  })

  test('Should get data via api request and send it to child component', () => {
    const { getAllByTestId } = render(<Store />)

    const storeItemsElements = getAllByTestId('item')
    expect(storeItemsElements).toHaveLength(products.length)

    expect(screen.queryByText(products[0].name)).toBeInTheDocument()
    expect(screen.queryByText(products[1].name)).toBeInTheDocument()
  })
})

describe('Store page with error responses', () => {
  const CartApiMock: CartApi = {
    fetch: jest.fn().mockImplementation((onSuccess, onError) => {
      return {
        data: [],
        error: "ERROR MSG",
        isLoading: false,
        isFetching: false,
        isSuccess: false,
        isError: true,
        refetch: jest.fn(),
        remove: jest.fn(),
        update: jest.fn(),
        onSettled: jest.fn(),
        onMutate: jest.fn(),
      }
    }),
  }

  beforeAll(() => {
    container.register('api', { useValue: CartApiMock })
  })

  test('Show error message if request goes wrong', () => {
    const { getByTestId } =render(<Store />)

    expect(getByTestId('store-error-msg')).not.toBeNull()
  })
})

describe('Store page while is fetching data', () => {
  const CartApiMock: CartApi = {
    fetch: jest.fn().mockImplementation((onSuccess, onError) => {
      return {
        data: [],
        error: {},
        isLoading: false,
        isFetching: true,
        isSuccess: false,
        isError: false,
        refetch: jest.fn(),
        remove: jest.fn(),
        update: jest.fn(),
        onSettled: jest.fn(),
        onMutate: jest.fn(),
      }
    }),
  }

  beforeAll(() => {
    container.register('api', { useValue: CartApiMock })
  })

  test('Should show a message saying that the status is Fetching', () => {
    const { getByTestId } = render(<Store />)

    expect(getByTestId('store-fetching-msg')).not.toBeNull()
  })
})