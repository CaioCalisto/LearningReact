import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children } : ShoppingCartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  
  function getItemQuantity(id: number){
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null){
        return [...currItems, { id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id === id){
            return { ...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: number){
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1){
        return currItems.filter(item => item.id != id)
      } else {
        return currItems.map(item => {
          if (item.id === id){
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number){
    setCartItems(currItems =>{
      return currItems.filter(item => item.id != id)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}