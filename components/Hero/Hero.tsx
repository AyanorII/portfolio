import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { motion, Variants } from "framer-motion";
import HeroContent from "./HeroContent";
import Image from "next/image";
import { PRIMARY, SECONDARY, TERTIARY } from "../../styles/Theme";

const Hero = () => {
  enum NAVBAR_HEIGHT {
    XS = "89px",
    SM = "97px",
    MD = "124px",
  }

  const isTablet = useMediaQuery("(min-width: 768px)");

  const imageVariants: Variants = {
    animate: {
      x: ["200%", "-10%", "0%"],
      rotate: [360, -15, 0],
    },
    initial: {
      x: "200%",
      rotate: 360,
    },
  };

  return (
    <Container>
      <Stack
        paddingTop={{
          xs: NAVBAR_HEIGHT.XS,
          sm: NAVBAR_HEIGHT.SM,
          md: NAVBAR_HEIGHT.MD,
        }}
        flexDirection={{ lg: "row-reverse" }}
        justifyContent="center"
        alignItems="center"
        gap={5}
        minHeight="100dvh"
      >
        <motion.div
          variants={imageVariants}
          animate="animate"
          initial="initial"
          transition={{
            duration: 5,
            delay: 1.25,
            ease: "easeInOut",
            times: [0, 0.25, 0.35],
          }}
        >
          <Box
            maxWidth="100%"
            sx={{
              position: "relative",
              width: { xs: "250px", md: "350px", lg: "400px" },
              height: { xs: "250px", md: "350px", lg: "400px" },
              margin: { xs: "0 auto", lg: "0 0 0 auto" },
              filter: `drop-shadow(0px 0px 60px ${PRIMARY.light}25)
                  drop-shadow(0px 0px 60px ${SECONDARY.light}25)
                  drop-shadow(0px 0px 60px ${TERTIARY.light}25)`,
            }}
          >
            <Image
              src="/profile.png"
              alt="Ayanori Rodrigo Toyoda"
              layout="fill"
              priority
            />
          </Box>
        </motion.div>
        <HeroContent />
      </Stack>
    </Container>
  );
};

export default Hero;
