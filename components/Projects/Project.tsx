import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
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
      width: { md: "27.5%" },
      left: isIndexEven ? "31%" : "50%",
      transform: `translate(${isIndexEven ? "-31%" : "0%"})`,
      top: "0",
    },
  };

  const verticalBarStyles = {
    "&:after": {
      height: "50px",
      width: "5px",
      left: isIndexEven ? "22%" : "77.5%",
      top: "0",
      borderRadius: `
              ${isIndexEven ? "4px" : "0"}
              ${isIndexEven ? "0" : "4px"} 0 0`,
    },
  };

  const barTipStyles = {
    ...pseudoElementsStyles,

    "&:before": {
      width: "15px",
      height: "15px",
      left: isIndexEven ? "48%" : "51%",
      top: "-40px",
      transform: `rotate(45deg) translateX(${isIndexEven ? "-48%" : "-51%"})`,
    },
  };

  const imageAnimation = {
    hidden: {
      x: isIndexEven ? "-100%" : "100%",
    },
    visible: {
      x: 0,
    },
  };

  const contentAnimation = {
    hidden: {
      x: isIndexEven ? "102%" : "-102%",
    },
    visible: {
      x: 0,
    },
  };

  return (
    <Grid
      container
      margin="0 auto"
      gap={{ xs: 4, md: 1 }}
      maxWidth={{ xs: "500px", md: "880px", lg: "1200px" }}
      alignItems="center"
      justifyContent="space-between"
      paddingTop={12}
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
        md={5.5}
        order={{ md: isIndexEven ? 0 : 1 }}
        sx={{
          position: "relative",
          ...barTipStyles,

          "&:hover div": {
            transform: "scale(1.05)",
          },
        }}
      >
        <motion.div
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ width: "100%" }}
          >
            {/* -------------------- Image Container --------------------- */}
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
              <Image src={image} layout="fill" alt={name} priority />
            </Box>
            {/* -------------------- Image Container --------------------- */}
          </a>
        </motion.div>
      </Grid>
      {/* -------------------------- Image ----------------------------- */}
      {/* --------------------------- Info ----------------------------- */}
      <Grid item xs={12} md={5.5}>
        <motion.div
          variants={contentAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.25, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            component="h3"
            fontFamily="Montserrat, sans-serif"
            fontWeight="500"
            marginBottom="1rem"
            whiteSpace="nowrap"
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            letterSpacing={0.7}
            color="#bcbbbb"
            lineHeight={{ xs: 1.75, md: 2 }}
          >
            {description}
          </Typography>
          <Stack
            margin={{ xs: "2.5rem auto 0", lg: "2.5rem 0 0" }}
            justifyContent="center"
            maxWidth={{ xs: "100%", sm: "50%" }}
          >
            <Button variant="contained" color="secondary" href={link}>
              View Project
            </Button>
          </Stack>
        </motion.div>
      </Grid>
      {/* --------------------------- Info ----------------------------- */}
    </Grid>
  );
};

export default Project;
