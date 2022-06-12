import { Container, Stack } from "@mui/material";
import SectionHeading from "../Section/SectionHeading";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

const AboutSection = () => {
  return (
    <Container>
      <Stack gap={{ xs: 5, md: 0 }} marginTop={2}>
        <SectionHeading
          title="About Me"
          number={1}
          color="primary"
          direction="left"
        />
        <AboutMe />
        <Skills />
      </Stack>
    </Container>
  );
};

export default AboutSection;
