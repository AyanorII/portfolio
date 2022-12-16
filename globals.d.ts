import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    gray?: PaletteColorOptions;
  }
  interface Palette {
    tertiary: PaletteColor;
    gray: PaletteColor;
  }
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}
declare module "@mui/material/Button/Button" {
  interface ButtonPropsVariantOverrides {

    tertiary: true;
  }
}
