import { ThemeProvider } from "@emotion/react"
import { Typography } from "@mui/material"
import MainTheme from "./themes/MainTheme"

function App() {
  
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <Typography variant="h1">Headline 1</Typography>
        <Typography variant="h2">Headline 2</Typography>
        <Typography variant="h3">Headline 3</Typography>
        <Typography variant="h4">Headline 4</Typography>
      </ThemeProvider>
    </>
  )
}

export default App
