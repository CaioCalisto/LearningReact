import { ThemeProvider } from "@emotion/react"
import { Divider, Typography } from "@mui/material"
import MainTheme from "./themes/MainTheme"

function App() {
  
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <Typography variant="h1">Headline 1</Typography>
        <Typography variant="h2">Headline 2</Typography>
        <Typography variant="h3">Headline 3</Typography>
        <Typography variant="h4">Headline 4</Typography>
        <Divider />
        <Typography variant="body1_medium">Body 1 Medium</Typography>
        <br />
        <Typography variant="body1_regular">Body 1 Medium</Typography>
        <br />
        <Typography variant="body2_medium">Body 2 Medium</Typography>
        <br />
        <Typography variant="body2_regular">Body 2 Medium</Typography>
        <br />
        <Typography variant="body3_medium">Body 3 Medium</Typography>
        <br />
        <Typography variant="body3_regular">Body 3 Medium</Typography>
        <Divider />
        
      </ThemeProvider>
    </>
  )
}

export default App
