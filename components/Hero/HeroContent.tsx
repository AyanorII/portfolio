import { Stack, Typography } from "@mui/material";
import { PRIMARY_LIGHT } from "../../styles/Theme";
import Button from "../Button";

const HeroContent = () => {
  return (
    <Stack
      textAlign={{ xs: "center", lg: "left" }}
      justifyContent={{ xs: "center" }}
      gap={3}
    >
      {/* -------------------------- Main Heading -------------------------- */}
      <Typography
        variant="h2"
        component="h1"
        display="block"
        fontWeight="medium"
      >
        Hi, I&apos;m
        <Typography
          variant="h1"
          component="p"
          fontWeight="bold"
          fontFamily="Montserrat Alternates, sans-serif"
          color="primary"
          sx={{
            textShadow: `0px 0px 60px ${PRIMARY_LIGHT}30`,
            "&:after": {
              content: "','",
              color: "#FFF",
              fontSize: "h1.fontSize",
            },
          }}
        >
          Ayanori Toyoda
        </Typography>
      </Typography>
      {/* -------------------------- Main Heading -------------------------- */}
      {/* -------------------------- Sub Heading --------------------------- */}
      <Typography
        variant="h6"
        component="p"
        fontWeight="regular"
        color="#bcbbbb"
        fontFamily="Montserrat, sans-serif"
        maxWidth="50ch"
        margin={{ xs: "0 auto", lg: "0" }}
      >
        A front-end developer that loves to bring beautiful design into amazing
        real-life projects.
      </Typography>
      {/* -------------------------- Sub Heading -------------------------- */}
      {/* -------------------------- CTA Buttons -------------------------- */}
      <Stack
        flexDirection="row"
        gap={3}
        width={{ sx: "100%" }}
        justifyContent={{ xs: "center", lg: "start" }}
        marginTop={2}
      >
        <Button variant="contained" color="primary" href="#contact">
          Contact me
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="https://github.com/AyanorII"
        >
          GitHub
        </Button>
      </Stack>
      {/* -------------------------- CTA Buttons -------------------------- */}
    </Stack>
  );
};

export default HeroContent;
