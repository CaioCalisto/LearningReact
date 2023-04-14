import { createContext, ReactNode, useContext, useState } from 'react'
import { CartItem } from './CartItem'

interface ShoppingCartProps {
  children: ReactNode
}

export type ShoppingCartContextProps = {
  addItem: (id: number) => void
  removeItem: (id: number) => void
  getItemQuantity: (id: number) => number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartContextProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(id: number) {
    if (cartItems.find((item) => item.id === id) == null) {
      setCartItems((current) => [...current, { id, quantity: 1 }])
    } else {
      const itemIndex = cartItems.findIndex((item) => item.id === id)
      const updatedItem = {
        ...cartItems[itemIndex],
        quantity: cartItems[itemIndex].quantity + 1,
      }
      const updatedItems = [...cartItems]
      updatedItems[itemIndex] = updatedItem

      setCartItems(updatedItems)
    }
  }

  function removeItem(id: number) {
    const itemIndex = cartItems.findIndex((item) => item.id === id)
    if (itemIndex != -1) {
      if (cartItems[itemIndex].quantity == 1) {
        setCartItems(cartItems.filter((item) => item.id != id))
      } else {
        const updatedItem = {
          ...cartItems[itemIndex],
          quantity: cartItems[itemIndex].quantity - 1,
        }
        const updatedItems = [...cartItems]
        updatedItems[itemIndex] = updatedItem

        setCartItems(updatedItems)
      }
    }
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        addItem,
        removeItem,
        getItemQuantity,
        cartItems,
      }}
    >
      <div data-testid="context-provider">{children}</div>
    </ShoppingCartContext.Provider>
  )
}
