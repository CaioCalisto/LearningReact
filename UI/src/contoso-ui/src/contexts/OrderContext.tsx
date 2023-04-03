import React, { createContext, ReactNode, useContext, useState } from "react";
import { Order } from "./Order"
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Status } from "./Status";

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
  const [id, setId] = useLocalStorage<number>("id", 0)
  
  function createOrder(){
    const newOrder: Order = {id: id, start: new Date(), status: Status.New}
    setOrders([...orders, newOrder])
    setId(currentId => currentId + 1)
  }

  function move(id: number){
    setOrders(previousState => {
      const newState = previousState.map(order => {
        if (order.id === id){
          if (order.status == Status.New){
            return {...order, status: Status.Preparing}
          } else if (order.status == Status.Preparing){
            return {...order, status: Status.Ready}
          }
        }

        return order
      })

      return newState
    })
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