import { ButtonPropsColorOverrides } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material";

/* ---------------------------------- Fonts --------------------------------- */
const BODY_FONT_FAMILY = "Montserrat, sans-serif";
/* ---------------------------------- Fonts --------------------------------- */

/* --------------------------------- Colors --------------------------------- */
export const CONTRAST_TEXT = "#FFF";

export const PRIMARY = {
  main: "#BA68C8",
  light: "#EE98FB",
  dark: "#883997",
};

export const SECONDARY = {
  main: "#42A5F5",
  light: "#80D6FF",
  dark: "#0077C2",
};

export const TERTIARY = {
  main: "#3BAEA3",
  light: "#6ED7D3",
  dark: "#299187",
};

export const GRAY = {
  main: "#242121",
  light: "#6D6D6D",
  dark: "#1B1B1B",
};

const buttonColorsMap = {
  primary: PRIMARY,
  secondary: SECONDARY,
  tertiary: TERTIARY,
};

const buttonVariantsStyles = Object.entries(buttonColorsMap).map(
  ([colorName, color]) => ({
    props: { color: colorName.toString() as keyof ButtonPropsColorOverrides },
    style: {
      boxShadow: `0 4px 15px 0 ${color.dark}`,
      borderColor: color.main,
      "&:hover": {
        boxShadow: `0 4px 25px 0 ${color.dark}`,
        borderColor: color.main,
      },
    },
  })
);

let theme = createTheme({
  palette: {
    primary: {
      ...PRIMARY,
      contrastText: CONTRAST_TEXT,
    },
    secondary: {
      ...SECONDARY,
      contrastText: CONTRAST_TEXT,
    },
    tertiary: {
      ...TERTIARY,
      contrastText: CONTRAST_TEXT,
    },
    gray: {
      ...GRAY,
      contrastText: CONTRAST_TEXT,
    },
  },
  typography: {
    allVariants: {
      color: CONTRAST_TEXT,
      fontFamily: BODY_FONT_FAMILY,
    },
  },
  components: {
    MuiButton: {
      variants: [...buttonVariantsStyles],
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: "1rem",
          paddingBlock: "0.5rem",
          paddingInline: "2rem",
          borderRadius: "4px",
          position: "relative",
          border: 2,
          "& span": {
            transition: "all 0.25s ease-in-out",
          },

          "&:hover span": {
            color: "#FFF",
          },

          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "0%",
            height: "100%",
            backgroundColor: "transparent",
            transition: "all 0.25s ease-in-out",
          },

          "&:hover:after": {
            width: "100%",
            zIndex: -1,
          },
        },
        outlined: {
          border: "2px solid",
          "&:hover": {
            border: "2px solid",
            background: "#FFFFFF30",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
