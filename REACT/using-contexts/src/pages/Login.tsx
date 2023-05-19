import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Login() {
  const { user, setUser } = useContext(UserContext)
  
  return (
    <>
      <input
        placeholder="User name"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
    </>
  );
}

export default Login;
