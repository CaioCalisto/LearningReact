import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import { useState } from "react";
import { AnotherCustomButton } from "./components/AnotherCustomButton";
import { CustomButton } from "./components/CustomButton";
import FirstTheme from "./themes/FirstTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={FirstTheme}>
        <CustomButton>Click here</CustomButton>
        <br />
        <br />
        <AnotherCustomButton />
        <br />
        <br />
        <Button>Click here</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
