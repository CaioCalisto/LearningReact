import * as React from "react";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    typography?: {
      fontFamily?: string[],
      h1?: {
        fontSize?: string,
        fontWeight?: string
      },
      h2?: {
        fontSize?: string,
        fontWeight?: string
      },
      h3?: {
        fontSize?: string,
        fontWeight?: string
      },
      h4?: {
        fontSize?: string,
        fontWeight?: string
      }
    }
    components?: {
    }
  }

  interface ThemeOptions {
    typography?: {
      fontFamily?: string[],
      h1?: {
        fontSize?: string,
        fontWeight?: string
      },
      h2?: {
        fontSize?: string,
        fontWeight?: string
      },
      h3?: {
        fontSize?: string,
        fontWeight?: string
      },
      h4?: {
        fontSize?: string,
        fontWeight?: string
      }
    }
    components: {
    }
  }
}

const MainTheme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: '28px',
      fontWeight: '700',
      '@media (min-width:767px)': {
        fontSize: '64px',
      },
    },
    h2: {
      fontSize: '20px',
      fontWeight: '700',
      '@media (min-width:767px)': {
        fontSize: '36px',
      },
    },
    h3: {
      fontSize: '18px',
      fontWeight: '700',
      '@media (min-width:767px)': {
        fontSize: '28px',
      },
    },
    h4: {
      fontSize: '16px',
      fontWeight: '700',
      '@media (min-width:767px)': {
        fontSize: '20px',
      },
    }
  }
  
})

export default MainTheme
