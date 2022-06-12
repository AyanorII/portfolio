import MuiButton from "@mui/material/Button";
import React from "react";
import { PRIMARY_DARK, SECONDARY_DARK, TERTIARY_DARK } from "../styles/Theme";

type Props = {
  children: React.ReactNode;
  variant: "text" | "outlined" | "contained";
  color: "primary" | "secondary" | "tertiary";
  href?: string;
};

const Button = ({ children, variant, color, href }: Props) => {
  let boxShadowColor:
    | typeof PRIMARY_DARK
    | typeof SECONDARY_DARK
    | typeof TERTIARY_DARK;

  switch (color) {
    case "primary":
      boxShadowColor = PRIMARY_DARK;
      break;
    case "secondary":
      boxShadowColor = SECONDARY_DARK;
      break;
    case "tertiary":
      boxShadowColor = TERTIARY_DARK;
      break;
    default:
      boxShadowColor = PRIMARY_DARK;
      break;
  }

  const buttonStyles = {
    boxShadow: `0 4px 15px 0 ${boxShadowColor}`,
    textTransform: "capitalize",
    fontSize: "1rem",
    paddingBlock: "0.5rem",
    paddingInline: "2rem",
    borderRadius: "4px",
  };

  return (
    <MuiButton variant={variant} color="tertiary" href={href} sx={buttonStyles}>
      {children}
    </MuiButton>
  );
};

export default Button;
