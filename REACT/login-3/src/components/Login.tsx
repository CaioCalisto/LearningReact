import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const { setUser } = useAuth()
  
  const [user, setUsername] = useState("USER");
  const [password, setPassword] = useState("PASSWORD");
  const [role, setRole] = useState("ROLE");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { user, password, role}
    setUser(newUser)
    console.log('Login: ' + newUser.user)
  }

  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          name="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login