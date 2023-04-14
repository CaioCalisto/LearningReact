import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { container } from './DI'
import { App } from './App'
import { CartApi } from './infrastructure/api/CartApi'

const CartApiMock: CartApi = {
  fetch: jest.fn().mockImplementation((onSuccess, onError) => {
    return {
      data: [],
      error: { /* mock error */ },
      isLoading: false,
      isFetching: false,
      isSuccess: true,
      isError: false,
      refetch: jest.fn(),
      remove: jest.fn(),
      update: jest.fn(),
      onSettled: jest.fn(),
      onMutate: jest.fn(),
    };
  }),
};

beforeAll(() => {
  container.register("api", { useValue: CartApiMock})
})

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'menu.home') {
        return 'HOME'
      }
      if (key === 'menu.store') {
        return 'STORE'
      }
      if (key === 'menu.about') {
        return 'ABOUT'
      }
    },
  }),
}))

describe('Main App', () => {
  test('Should show the nav menu', () => {
    const { container } = render(<App />, { wrapper: BrowserRouter })

    expect(container.getElementsByClassName('navbar-nav').length).toBe(1)
  })

  test('Should contain a clickable link to Home page', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    await fireEvent.click(getByText('HOME'))

    expect(screen.getByTitle(/Home page/i)).toBeInTheDocument()
  })

  test('Should contain a clickable link to Store page', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    await fireEvent.click(getByText('STORE'))

    expect(screen.getByTitle(/Store page/i)).toBeInTheDocument()
  })

  test('Should contain a clickable link to About page', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    await fireEvent.click(getByText('ABOUT'))

    expect(screen.getByTitle(/About page/i)).toBeInTheDocument()
  })

  test('Entire app should be wrapped by ShoppingCart context', () => {
    const { getByTestId } = render(<App />, { wrapper: BrowserRouter })

    expect(getByTestId('context-provider')).toBeInTheDocument()
  })
})
