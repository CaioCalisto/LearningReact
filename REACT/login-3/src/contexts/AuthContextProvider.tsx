import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
  setUser: (user: string) => void;
  user: string;
};

const AuthContext = createContext({} as AuthContextProps)

type AuthContextProvider = {
  children: ReactNode;
};

export const AuthContextProvider = ( { children } : AuthContextProvider) => {
  const [user, setUser] = useState("")

  return (
    <AuthContext.Provider value={{ setUser, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext