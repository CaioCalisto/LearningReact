import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type AuthContextProps = {
  setUser: (user: userAuthProps) => void;
  user: userAuthProps;
};

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: ReactNode;
};

type userAuthProps = {
  user: string,
  password: string,
  role: string,
}

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<userAuthProps>({} as userAuthProps);

  return (
    <AuthContext.Provider value={{ setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
