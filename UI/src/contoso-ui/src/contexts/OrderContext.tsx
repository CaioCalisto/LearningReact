import React, { createContext, ReactNode, useContext } from "react";
import { Order } from "./Order"
import { useLocalStorage } from "../hooks/useLocalStorage";

type OrderProviderProps = {
  children: ReactNode
}

type OrderContextType = {
  createOrder: () => void
  move: (id: number) => void
  orders: Order[]
}

const CustomOrderContext = createContext({} as OrderContextType)

export function useOrderContext(){
  return useContext(CustomOrderContext)
}

export default function OrderProvider( { children } : OrderProviderProps){
  const [orders, setOrders] = useLocalStorage<Order[]>("order", [])
  
  function createOrder(){
    alert('oi')
  }

  function move(id: number){
    alert('move ' + id)
  }

  return (
    <CustomOrderContext.Provider
      value={{
        createOrder,
        move,
        orders
      }}>
      {children}
    </CustomOrderContext.Provider>
  )
}