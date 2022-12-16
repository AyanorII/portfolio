import { Box, Grid, useMediaQuery } from "@mui/material";
import { Project as IProject } from "../../lib/interfaces";
import Project from "./Project";
import projects from "./projects.json";

const Projects = () => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  /* ----------------------------- Bar Styles ------------------------------- */
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
      height: "100%",
      top: "0px",
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
  /* ----------------------------- Bar Styles ------------------------------- */

  return (
    <Box
      sx={{
        position: "relative",
        ...pseudoElementsStyles,
        ...centerVerticalBarStyles,
        ...verticalBarTopTipStyles,
        paddingBottom: "5.75rem",
        paddingTop: { md: "5rem", lg: "1rem" },
        overflow: "visible",
      }}
    >
      <Grid
        container
        gap={{ xs: 2, sm: 5, md: 10 }}
        marginTop={{ xs: 5, lg: 18 }}
        justifyContent="center"
        position="relative"
        sx={{}}
      >
        {projects.map((project: IProject, index: number) => {
          const { name } = project;

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
              <Project project={project} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
