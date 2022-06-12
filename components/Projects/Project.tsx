import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

type Props = {
  name: string;
  description: string;
  image: string;
  link: string;
  index: number;
};

const Project = ({ name, description, image, link, index }: Props) => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  const isIndexEven = index % 2 === 0;

  const pseudoElementsStyles = {
    "&:before, &:after": {
      content: "''",
      backgroundColor: "secondary.main",
      position: "absolute",
      display: isTablet ? "block" : "none",
    },
  };

  const horizontalBarStyles = {
    "&:before": {
      height: "5px",
      width: { md: "25.5%", lg: isIndexEven ? "25.5%" : "25%" },
      left: isIndexEven ? "36.5%" : "50%",
      transform: `translate(${isIndexEven ? "-36.75%" : "10%"})`,
      top: "-10px",
    },
  };

  const verticalBarStyles = {
    "&:after": {
      height: "50px",
      width: "5px",
      left: isIndexEven ? "27%" : "77.5%",
      top: "-10px",
      borderRadius: `
              ${isIndexEven ? "4px" : "0"}
              ${isIndexEven ? "0" : "4px"} 0 0`,
    },
  };

  const barTipStyles = {
    "&:before": {
      content: "''",
      backgroundColor: "secondary.main",
      position: "absolute",
      display: isTablet ? "block" : "none",
      width: "15px",
      height: "15px",
      left: isIndexEven ? "54.2%" : "55.2%",
      top: "10.5px",
      transform: `rotate(45deg) translateX(${
        isIndexEven ? "-54.2%" : "-55.2%"
      })`,
    },
  };

  return (
    <Grid
      container
      margin="0 auto"
      gap={{ xs: 4, md: 0 }}
      spacing={{ md: 5, lg: 7 }}
      maxWidth={{ xs: "500px", md: "880px", lg: "1200px" }}
      alignItems="center"
      paddingTop="36px"
      sx={{
        backdropFilter: "blur(5px)",
        position: "relative",
        ...pseudoElementsStyles,
        ...horizontalBarStyles,
        ...verticalBarStyles,
      }}
    >
      {/* -------------------------- Image ----------------------------- */}
      <Grid
        item
        xs={12}
        md={6}
        order={{ md: isIndexEven ? 0 : 1 }}
        sx={{
          position: "relative",
          ...barTipStyles,
          "&:hover div": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Link href={link} passHref>
          <a target="_blank">
            <Box
              position="relative"
              width="100%"
              height="65vw"
              borderRadius="10px"
              overflow="hidden"
              maxHeight={{ xs: "330px", md: "300px", lg: "375px" }}
              sx={{
                boxShadow: "0px 0px 30px 10px rgba(0, 0, 0, 0.3)",
                transition: "all 0.25s ease-in-out",
              }}
            >
              <Image src={image} layout="fill" alt={name} />
            </Box>
          </a>
        </Link>
      </Grid>
      {/* -------------------------- Image ----------------------------- */}
      {/* --------------------------- Info ----------------------------- */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          component="h3"
          fontFamily="Montserrat, sans-serif"
          fontWeight="500"
          marginBottom="1rem"
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          letterSpacing={0.7}
          lineHeight={{ xs: 1.75, md: 2 }}
        >
          {description}
        </Typography>
        <Stack
          margin={{xs: "2.5rem auto 0", lg: "2.5rem 0 0"}}
          justifyContent="center"
          maxWidth={{ xs: "100%", sm: "50%" }}
        >
          <Button variant="contained" color="secondary" href={link}>
            View Project
          </Button>
        </Stack>
      </Grid>
      {/* --------------------------- Info ----------------------------- */}
    </Grid>
  );
};

export default Project;
