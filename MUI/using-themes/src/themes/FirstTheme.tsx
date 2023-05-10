import * as React from "react";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    buttons: {
      backgroundColor: string;
      color: string;
    };
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: string;
            color: string;
            fontSize: string;
          }
        }
      };
    };
  }

  // allow configuration using 'createTheme'
  interface ThemeOptions {
    buttons?: {
      backgroundColor?: string;
      color?: string;
    };
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: string;
            color: string;
            fontSize: string;
          }
        }
      };
    };
  }
}

const FirstTheme = createTheme({
  buttons: {
    backgroundColor: "#3b0d00",
    color: "#ddd7d0",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#efa55c",
          color: "#7ed5e4",
          fontSize: '2rem'
        }
      }
    }
  }
});

export default FirstTheme;
