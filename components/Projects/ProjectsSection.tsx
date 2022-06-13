import { Container } from "@mui/material";
import SectionHeading from "../Section/SectionHeading";
import Projects from "./Projects";

type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <Container id="projects" sx={{marginTop: 15}}>
      <SectionHeading
        title="Projects"
        color="secondary"
        number={2}
        direction="right"
      />
      <Projects />
    </Container>
  );
};

export default ProjectsSection;
