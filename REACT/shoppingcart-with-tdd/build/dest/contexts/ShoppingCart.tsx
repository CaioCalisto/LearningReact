import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "./CartItem";

interface ShoppingCartProps {
  children: ReactNode
}

type ShoppingCartContextProps = {
  addItem: (id: number) => void,
  removeItem: (id: number) => void,
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCartContext(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartContextProvider({ children } : ShoppingCartProps) {
  
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(id: number){
    if (cartItems.find(item => item.id === id) == null){
      setCartItems(current => [...current, { id, quantity: 1}])
    } else {
      const itemIndex = cartItems.findIndex(item => item.id === id)
      const updatedItem = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity + 1 }
      const updatedItems = [...cartItems]
      updatedItems[itemIndex] = updatedItem

      setCartItems(updatedItems)
    }
  }

  function removeItem(id: number){
    const itemIndex = cartItems.findIndex(item => item.id === id)
    if (itemIndex != -1){
      const updatedItem = { ...cartItems[itemIndex], quantity: cartItems[itemIndex].quantity - 1 }
      const updatedItems = [...cartItems]
      updatedItems[itemIndex] = updatedItem

      setCartItems(updatedItems)
    }
  }

  return (
    <ShoppingCartContext.Provider value=
    {{
      addItem,
      removeItem,
      cartItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}