import { Divider } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function BasicLayout() {
  return (
    <>
      <nav>
        <Stack direction="row" gap={1} justifyContent="start" style={{height:"2rem"}}>
          <Link to={'/'}>Home</Link>
          <Divider />
          <Link to={'/buttons'}>Buttons</Link>
        </Stack>
      </nav>
      <main><Outlet /></main>
    </>
  )
}

export default BasicLayout