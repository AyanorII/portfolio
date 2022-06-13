import { Typography } from "@mui/material";

type Props = {
  title: string;
  borderColor: string;
  shadowColor: string;
  direction: "left" | "right";
};

const SectionTitle = ({
  title,
  borderColor,
  shadowColor,
  direction,
}: Props) => {
  const pseudoElementsStyles = {
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      backgroundColor: borderColor,
      boxShadow: `0 2px 30px 0 ${shadowColor},
                      0 2px 15px 0 #ffffff70`,
    },

    "&::before": {
      transform: "rotate(45deg)",
      left: direction === "left" ? "-5px" : "unset",
      right: direction === "right" ? "-5px" : "unset",
      height: "10px",
      width: "10px",
      bottom: "-11px",
    },

    "&::after": {
      left: 0,
      bottom: "-8px",
      width: "100%",
      height: "3px",
    },
  };

  return (
    <Typography
      variant="h3"
      component="h2"
      display="inline"
      whiteSpace="nowrap"
      sx={{
        position: "relative",
        ...pseudoElementsStyles,
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
