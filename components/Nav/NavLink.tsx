import { Typography } from "@mui/material";
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

  const linkStyles = {
    color: "text",
    position: "relative",

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
      <Typography variant="body1" component="a" sx={linkStyles}>
        {label}
      </Typography>
    </Link>
  );
};

export default NavLink;