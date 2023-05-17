import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type AuthContextProps = {
  setUser: (user: string) => void;
  loggedUser: string;
  isLoggedIn: boolean;
  level: string;
};

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [loggedUser, setLoggedUser] = useState<string>("");
  const [level, setLevel] = useState<string>("");

  function setUser(user: string) {
    if (user === 'caio') {
      setLoggedUser(user);
      setLevel("admin");
    }
    if (user === 'natalia') {
      setLoggedUser(user);
      setLevel("user");  
    }
    console.log('AuthContext setUser method was called')
  };

  const isLoggedIn = loggedUser != "";
 
  return (
    <AuthContext.Provider value={{ setUser, loggedUser, isLoggedIn, level }}>
      {children}
    </AuthContext.Provider>
  );
}
