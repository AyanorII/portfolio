import { Stack } from "@mui/material";
import { PRIMARY, SECONDARY, TERTIARY } from "../../styles/Theme";
import SectionNumber from "./SectionNumber";
import SectionTitle from "./SectionTitle";

type Props = {
  title: string;
  number: number;
  color: "primary" | "secondary" | "tertiary";
  direction: "left" | "right";
};

const SectionHeading = ({ title, number, color, direction }: Props) => {
  let textColor;
  let shadowColor;
  let borderColor;

  switch (color) {
    case "primary":
      textColor = PRIMARY.light;
      shadowColor = PRIMARY.dark;
      borderColor = PRIMARY.main;
      break;
    case "secondary":
      textColor = SECONDARY.light;
      shadowColor = SECONDARY.dark;
      borderColor = SECONDARY.main;
      break;
    case "tertiary":
      textColor = TERTIARY.light;
      shadowColor = TERTIARY.dark;
      borderColor = TERTIARY.main;
      break;
  }

  const dividerStyles = {
    "&::before, &::after": {
      content: "''",
      backgroundColor: "gray.light",
      height: "1px",
      width: "100%",
    },

    "&::before": {
      display: { xs: "none", md: direction === "left" ? "none" : "inline" },
    },

    "&::after": {
      display: {
        xs: "none",
        md: direction === "right" ? "none" : "inline",
      },
    },
  };

  return (
    <Stack
      flexDirection={{
        xs: "column",
        md: "row",
      }}
      alignItems="center"
      marginBottom={{ xs: 3, lg: 0 }}
      gap={{ xs: 3, md: 8 }}
      sx={dividerStyles}
    >
      <Stack
        flexDirection={{
          xs: "column",
          md: direction === "left" ? "row" : "row-reverse",
        }}
        gap={{ xs: 3, md: 5 }}
        alignItems="center"
      >
        <SectionNumber
          number={number}
          shadowColor={shadowColor}
          textColor={textColor}
          borderColor={borderColor}
        />
        <SectionTitle
          title={title}
          borderColor={borderColor}
          shadowColor={shadowColor}
          direction={direction}
        />
      </Stack>
    </Stack>
  );
};

export default SectionHeading;
