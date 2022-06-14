import { Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  index: number;
};

const NavLink = ({ href, label, index }: Props) => {
  let linkBottomColor;

  switch (index) {
    case 0:
      linkBottomColor = "primary.main";
      break;
    case 1:
      linkBottomColor = "secondary.main";
      break;
    case 2:
      linkBottomColor = "tertiary.main";
      break;
    default:
      linkBottomColor = "gray.main";
      break;
  }

  const isMobile = useMediaQuery("(max-width:899px)");
  const isTablet = useMediaQuery("(max-width:1199px)");

  let variant: "h6" | "h5" | "h4" | "h3";

  if (isMobile) {
    variant = "h3";
  } else if (isTablet) {
    variant = "h5";
  } else {
    variant = "h6";
  }

  const linkStyles = {
    position: "relative",
    fontSize: isMobile ? "2rem !important" : "auto",

    "&:after": {
      content: "''",
      width: "0%",
      height: "3px",
      backgroundColor: linkBottomColor,
      transition: "width 0.25s ease-in-out",
      position: "absolute",
      bottom: "-5px",
      left: "0",
    },

    "&:hover:after": {
      width: "100%",
    },
  };

  return (
    <Link href={href} key={label} passHref>
      <Typography
        variant={variant}
        component="a"
        fontWeight="normal"
        fontFamily="Gaoel, sans-serif"
        color={linkBottomColor}
        sx={linkStyles}
      >
        {label}
      </Typography>
    </Link>
  );
};

export default NavLink;
