import { Stack } from "@mui/material";
import {
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  PRIMARY_MAIN,
  SECONDARY_DARK,
  SECONDARY_LIGHT,
  SECONDARY_MAIN,
  TERTIARY_DARK,
  TERTIARY_LIGHT,
  TERTIARY_MAIN,
} from "../../styles/Theme";
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
      textColor = PRIMARY_LIGHT;
      shadowColor = PRIMARY_DARK;
      borderColor = PRIMARY_MAIN;
      break;
    case "secondary":
      textColor = SECONDARY_LIGHT;
      shadowColor = SECONDARY_DARK;
      borderColor = SECONDARY_MAIN;
      break;
    case "tertiary":
      textColor = TERTIARY_LIGHT;
      shadowColor = TERTIARY_DARK;
      borderColor = TERTIARY_MAIN;
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
      gap={{ xs: 3, md: 8}}
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
