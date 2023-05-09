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
          <Link to={'/custom-buttons'}>Custom Buttons</Link>
          <Link to={'/text'}>Text fields</Link>
          <Link to={'/custom-text'}>Custom Text fields</Link>
          <Link to={'/badges'}>Badges</Link>
          <Link to={'/alerts'}>Alerts</Link>
          <Link to={'/backdrop'}>BackDrop</Link>
        </Stack>
      </nav>
      <main><Outlet /></main>
    </>
  )
}

export default BasicLayout