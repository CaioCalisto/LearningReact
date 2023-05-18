import { useContext } from "react"
import AuthContext from "./AuthContextProvider"

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth