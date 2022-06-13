import { createTheme, responsiveFontSizes } from "@mui/material";

/* ---------------------------------- Fonts --------------------------------- */
const BODY_FONT_FAMILY = "Montserrat, sans-serif";
/* ---------------------------------- Fonts --------------------------------- */

/* --------------------------------- Colors --------------------------------- */
export const CONTRAST_TEXT = "#FFF"

export const PRIMARY_MAIN = "#BA68C8";
export const PRIMARY_LIGHT = "#EE98FB";
export const PRIMARY_DARK = "#883997";

export const SECONDARY_MAIN = "#42A5F5";
export const SECONDARY_LIGHT = "#80D6FF";
export const SECONDARY_DARK = "#0077C2";

export const TERTIARY_MAIN = "#3BAEA3";
export const TERTIARY_LIGHT = "#6ED7D3";
export const TERTIARY_DARK = "#299187";

export const GRAY_MAIN = "#242121";
export const GRAY_LIGHT = "#6D6D6D";
export const GRAY_DARK = "#1B1B1B";

let theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN,
      light: PRIMARY_LIGHT,
      dark: PRIMARY_DARK,
      contrastText: CONTRAST_TEXT,
    },
    secondary: {
      main: SECONDARY_MAIN,
      light: SECONDARY_LIGHT,
      dark: SECONDARY_DARK,
      contrastText: CONTRAST_TEXT,
    },
    tertiary: {
      main: TERTIARY_MAIN,
      light: TERTIARY_LIGHT,
      dark: TERTIARY_DARK,
      contrastText: CONTRAST_TEXT,
    },
    gray: {
      main: GRAY_MAIN,
      light: GRAY_LIGHT,
      dark: GRAY_DARK,
      contrastText: CONTRAST_TEXT,
    },
  },
  typography: {
    allVariants: {
      color: CONTRAST_TEXT,
      fontFamily: BODY_FONT_FAMILY,
    }
  },
});

theme = responsiveFontSizes(theme);
export default theme
