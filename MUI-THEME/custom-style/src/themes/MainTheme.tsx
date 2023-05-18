import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    typography?: {
      fontFamily?: string[];
      h1?: {
        fontSize?: string;
        fontWeight?: string;
      };
      h2?: {
        fontSize?: string;
        fontWeight?: string;
      };
      h3?: {
        fontSize?: string;
        fontWeight?: string;
      };
      h4?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body1_medium?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body1_regular?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body2_medium?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body2_regular?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body3_medium?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body3_regular?: {
        fontSize?: string;
        fontWeight?: string;
      };
    };
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: string };
            style: {
              textTransform: string;
              border: string;
              fontSize: string;
            };
          }
        ];
      };
    };
  }

  interface ThemeOptions {
    typography?: {
      fontFamily?: string[];
      h1?: {
        fontSize?: string;
        fontWeight?: string;
      };
      h2?: {
        fontSize?: string;
        fontWeight?: string;
      };
      h3?: {
        fontSize?: string;
        fontWeight?: string;
      };
      h4?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body1_medium?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body1_regular?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body2_medium?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body2_regular?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body3_medium?: {
        fontSize?: string;
        fontWeight?: string;
      };
      body3_regular?: {
        fontSize?: string;
        fontWeight?: string;
      };
    };
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: string };
            style: {
              textTransform: string;
              border: string;
              fontSize: string;
            };
          }
        ];
      };
    };
  }

  interface Palette {
    neutral?: {
      darker?: string;
      dark?: string;
      main?: string;
      main_light?: string;
      light?: string;
      lighter?: string;
    };
    primary?: {
      darker?: string;
      dark?: string;
      main?: string;
      main_light?: string;
      light?: string;
      lighter?: string;
    };
    secondary?: {
      main?: string;
      dark?: string;
      light?: string;
      lighter?: string;
      constrastText?: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      darker?: string;
      dark?: string;
      main?: string;
      main_light?: string;
      light?: string;
      lighter?: string;
    };
    primary?: {
      darker?: string;
      dark?: string;
      main?: string;
      main_light?: string;
      light?: string;
      lighter?: string;
    };
    secondary?: {
      main?: string;
      dark?: string;
      light?: string;
      lighter?: string;
      constrastText?: string;
    };
  }
}

const typographyTheme = {
  fontFamily: ["Roboto", "sans-serif"].join(","),
  h1: {
    fontSize: "28px",
    fontWeight: "700",
    "@media (min-width:767px)": {
      fontSize: "64px",
    },
  },
  h2: {
    fontSize: "20px",
    fontWeight: "700",
    "@media (min-width:767px)": {
      fontSize: "36px",
    },
  },
  h3: {
    fontSize: "18px",
    fontWeight: "700",
    "@media (min-width:767px)": {
      fontSize: "28px",
    },
  },
  h4: {
    fontSize: "16px",
    fontWeight: "700",
    "@media (min-width:767px)": {
      fontSize: "20px",
    },
  },
  body1_medium: {
    fontSize: "16px",
    fontWeight: "500",
    "@media (min-width:767px)": {
      fontSize: "18px",
    },
  },
  body1_regular: {
    fontSize: "16px",
    fontWeight: "400",
    "@media (min-width:767px)": {
      fontSize: "18px",
    },
  },
  body2_medium: {
    fontSize: "14px",
    fontWeight: "500",
    "@media (min-width:767px)": {
      fontSize: "16px",
    },
  },
  body2_regular: {
    fontSize: "14px",
    fontWeight: "400",
    "@media (min-width:767px)": {
      fontSize: "16px",
    },
  },
  body3_medium: {
    fontSize: "12px",
    fontWeight: "500",
    "@media (min-width:767px)": {
      fontSize: "14px",
    },
  },
  body3_regular: {
    fontSize: "12px",
    fontWeight: "400",
    "@media (min-width:767px)": {
      fontSize: "14px",
    },
  },
};

const paletteTheme = {
  neutral: {
    darker: "#212121",
    dark: "#717171",
    main: "#89939E",
    main_light: "#ABBED1",
    light: "#3F5F7FA",
    lighter: "#FFFFFF",
  },
  neutral: {
    darker: "#212121",
    dark: "#717171",
    main: "#89939E",
    main_light: "#ABBED1",
    light: "#3F5F7FA",
    lighter: "#FFFFFF",
  },
  primary: {
    darker: "#6CA342",
    dark: "#89B568",
    main: "#A7C88E",
    main_light: "#C4DAB3",
    light: "#E2EDD9",
    lighter: "#F0F5EB",
  },
  secondary: {
    main: "#0E2554",
    dark: "#3E5176",
    light: "#6E7C98",
    lighter: "#9FA8BB",
    constrastText: "#CFD3DD",
  },
};

const muiElements = {
  MuiButton: {
    variants: [
      {
        props: { variant: "primary" },
        style: {
          textTransform: "none",
          border: `2px dashed ${red[500]}`,
          fontSize: "1.0rem",
        },
      },
    ],
  },
};

const MainTheme = createTheme({
  typography: typographyTheme,
  palette: paletteTheme,
  components: muiElements,
});

export default MainTheme;
