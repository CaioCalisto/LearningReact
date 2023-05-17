import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useAuth()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // check password
    setUser(username)
  }

  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login