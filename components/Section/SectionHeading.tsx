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

  return (
    <Stack flexDirection={{xs: "column", lg: "row"}} alignItems="center" gap={3}>
      <SectionNumber
        number={number}
        shadowColor={shadowColor}
        textColor={textColor}
        borderColor={borderColor}
      />
      <SectionTitle
        title={ title }
        borderColor={ borderColor }
        shadowColor={ shadowColor }
        direction={ direction }
      />
    </Stack>
  );
};

export default SectionHeading;
