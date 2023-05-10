import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: string },
            style: {
              textTransform: string,
              border: string,
              fontSize: string
            },
          },
          {
            props: { variant: string, color: string },
            style: {
              border: string,
              fontSize: string
            },
          },
        ]
      }
    }
  }

  // allow configuration using 'createTheme'
  interface ThemeOptions {
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: string },
            style: {
              textTransform: string,
              border: string,
              fontSize: string
            },
          },
          {
            props: { variant: string, color: string },
            style: {
              border: string,
              fontSize: string
            },
          },
        ]
      }
    }
  }
}

const NewTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
            fontSize: '1.0rem'
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ],
    },
  },
});

export default NewTheme;
