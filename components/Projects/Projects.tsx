import { Box, Grid, useMediaQuery } from "@mui/material";
import Project from "./Project";
import projects from "./projects.json";

type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const Projects = () => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  const pseudoElementsStyles = {
    "&:before, &:after": {
      content: "''",
      backgroundColor: "secondary.main",
      position: "absolute",
      display: isTablet ? "block" : "none",
      left: "50%",
      transform: "translateX(-50%)",
    },
  };

  const centerVerticalBarStyles = {
    "&:after": {
      width: "5px",
      height: "120%",
      top: "-120px",
    },
  };

  const verticalBarTipStyles = {
    "&:before": {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
    },
  };

  const verticalBarTopTipStyles = {
    overflowY: "hidden",
    "&:before": {
      top: "0px",
      ...verticalBarTipStyles["&:before"],
    },
  };

  const verticalBarBottomTipStyles = {
    "&:after": {
      bottom: "-92px",
      ...verticalBarTipStyles["&:before"],
    },
  };

  return (
    <Box position="relative" sx={{overflow: "hidden"}}>
      <Box
        sx={{
          ...pseudoElementsStyles,
          ...centerVerticalBarStyles,
          ...verticalBarTopTipStyles,
          paddingBottom: "5.75rem",
          paddingTop: {xs: "5rem", lg: "1rem"}
        }}
      >
        <Grid
          container
          gap={{ xs: 10, md: 18 }}
          marginTop={{ xs: 5, lg: 18 }}
          justifyContent="center"
          position="relative"
          sx={{}}
        >
          {projects.map((project: Project, index: number) => {
            const { name, description, image, link } = project;

            return (
              <Grid
                key={name}
                item
                justifyItems="center"
                sx={{
                  ...pseudoElementsStyles,
                  ...verticalBarBottomTipStyles,
                  width: { lg: "100%" },
                }}
              >
                <Project
                  name={name}
                  description={description}
                  image={image}
                  link={link}
                  index={index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
