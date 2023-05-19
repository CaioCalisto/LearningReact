import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

type RequireAuthProps = {
  allowedRoles: string[]
}

function RequireAuth({ allowedRoles } : RequireAuthProps) {
  const { role } = useContext(UserContext)

  return (
    allowedRoles.includes(role)
     ? <Outlet />
     : (
      <>
        <h1>User is not allowed to see this page.</h1>
        <h2>Roles allowed:</h2>
        {allowedRoles.map((allowedRole) => (
          <h2>{allowedRole}</h2>
        ))}
      </>
     )
  )
}

export default RequireAuth