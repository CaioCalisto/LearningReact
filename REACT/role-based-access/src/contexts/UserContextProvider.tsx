import { ReactNode, useRef } from "react"
import UserContext from "./UserContext"

type UserContextProvider = {
  children: ReactNode
}

export function UserContextProvider({ children } : UserContextProvider){

  // Here we create some logic to get user data ONCE
  let userName = 'caio'
  let role = 'user'

  useRef(() => {

  }, [userName, role])

  return (
    <UserContext.Provider value={{ userName, role }}>
      {children}
    </UserContext.Provider>
  )
}