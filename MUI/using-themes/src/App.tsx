import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { AnotherCustomButton } from './components/AnotherCustomButton'
import { CustomButton } from './components/CustomButton'
import FirstTheme from './themes/FirstTheme'

function App() {
  
  return (
    <>
    <ThemeProvider theme={FirstTheme}>
      <CustomButton>Click here</CustomButton>
      <br /><br />
      <AnotherCustomButton />
    </ThemeProvider>
    </>
  )
}

export default App
