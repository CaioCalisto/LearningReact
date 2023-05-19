import { createContext } from "react";

type UserContextProps = {
  userName: string,
  role: string
}

const UserContext = createContext({} as UserContextProps)

export default UserContext