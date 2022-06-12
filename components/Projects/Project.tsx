import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <Link href={link} passHref>
      <a target="_blank">
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
            // --------------- Styles for both pseudo elements -----------------
            "&:before, &:after": {
              content: "''",
              backgroundColor: "secondary.main",
              position: "absolute",
              display: isTablet ? "block" : "none",
            },
            // --------------- Styles for both pseudo elements -----------------

            // ----------------------- Horizontal bar --------------------------
            "&:before": {
              height: "5px",
              // width: isIndexEven ? "25.5%" : "25%",
              width: {md: "25.5%", lg: isIndexEven ? "25.5%" : "25%"},
              left: isIndexEven ? "36.5%" : "50%",
              transform: `translate(${isIndexEven ? "-36.75%" : "10%"})`,
              top: "-10px",
            },
            // ----------------------- Horizontal bar --------------------------

            // ------------------------ Vertical bar ---------------------------
            "&:after": {
              height: "50px",
              width: "5px",
              left: isIndexEven ? "27%" : "77.5%",
              top: "-10px",
              borderRadius: `
              ${isIndexEven ? "4px" : "0"}
              ${isIndexEven ? "0" : "4px"} 0 0`,
            },
            // ------------------------ Vertical bar ---------------------------
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

              // -------------------------- Bar tip ----------------------------
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
              // -------------------------- Bar tip ----------------------------
            }}
          >
            <Box
              position="relative"
              width="100%"
              height="65vw"
              borderRadius="10px"
              overflow="hidden"
              maxHeight={{ xs: "330px", md: "300px", lg: "375px" }}
            >
              <Image src={image} layout="fill" alt={name} />
            </Box>
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
            <Typography variant="body1" letterSpacing={0.7} lineHeight={1.6}>
              {description}
            </Typography>
          </Grid>
          {/* --------------------------- Info ----------------------------- */}
        </Grid>
      </a>
    </Link>
  );
};

export default Project;
