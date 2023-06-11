import { Stack } from '@mui/material'

function Header() {
  return (
    <Stack direction='row'>
      <img src="src/assets/logo.png" alt="Logotipo" style={{width: "75", 
          height: "75px", 
          objectFit: "cover"}} />
    </Stack>
  )
}

export default Header