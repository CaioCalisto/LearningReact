import { ReactNode } from "react"
import UserContext from "./UserContext"

type UserContextProvider = {
  children: ReactNode
}

export function UserContextProvider({ children } : UserContextProvider){

  // Here we create some logic to get user data ONCE
  const userName = 'caio'
  const role = 'user'

  return (
    <UserContext.Provider value={{ userName, role }}>
      {children}
    </UserContext.Provider>
  )
}