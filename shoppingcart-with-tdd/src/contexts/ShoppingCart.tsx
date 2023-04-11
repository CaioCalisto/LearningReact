import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "./CartItem";

interface ShoppingCartProps {
  children: ReactNode
}

type ShoppingCartContextProps = {
  addItem: (id: number) => void,
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCartContext(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartContextProvider({ children } : ShoppingCartProps) {
  
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(id: number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null){
        return [...currItems, { id, quantity: 1}]
      } else {
        return currItems
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value=
    {{
      addItem,
      cartItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}