import * as React from 'react';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    buttons: {
      backgroundColor: string,
      color: string
    }
  }

  // allow configuration using 'createTheme'
  interface ThemeOptions {
    buttons?: {
      backgroundColor?: string,
      color?: string
    }
  }
}

const FirstTheme = createTheme({
  buttons: {
    backgroundColor: "#3b0d00",
    color: "#ddd7d0"
  }
})

export default FirstTheme