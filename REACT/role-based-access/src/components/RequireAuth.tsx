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
     : <h1>Not allowed</h1>
  )
}

export default RequireAuth