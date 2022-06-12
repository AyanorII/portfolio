import { Typography } from "@mui/material";
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
    border: variant === "outlined" ? 2 : 0,
    borderColor: color,
    position: "relative",

    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "0%",
      height: "100%",
      backgroundColor: variant === "outlined" ? boxShadowColor : "transparent",
      transition: "all 0.25s ease-in-out",
    },

    "&:hover": {
      border: variant === "outlined" ? 2 : 0,
      borderColor: color,
    },

    "& span": {
      transition: "all 0.25s ease-in-out",
    },

    "&:hover span": {
      color: "#FFF",
    },

    "&:hover:after": {
      width: "100%",
      zIndex: -1,
    },
  };

  return (
    <MuiButton variant={variant} color={color} href={href} sx={buttonStyles}>
      <Typography variant="inherit" component="span">
        {children}
      </Typography>
    </MuiButton>
  );
};

export default Button;
