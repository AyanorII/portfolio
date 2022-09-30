import { Container, Stack, useMediaQuery } from "@mui/material";
import { motion, Variants } from "framer-motion";
import ProfileImage from "../ProfileImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  enum NAVBAR_HEIGHT {
    XS = "89px",
    SM = "97px",
    MD = "124px",
  }

  const isTablet = useMediaQuery("(min-width: 768px)");

  const imageVariants: Variants = {
    animate: isTablet
      ? { x: ["200%", "-10%", "0%"], rotate: [360, -15, 0] }
      : {},
    initial: isTablet ? { x: "200%", rotate: 360 } : { x: 0, rotate: 0 },
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
        minHeight="100vh"
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
          <ProfileImage />
        </motion.div>
        <HeroContent />
      </Stack>
    </Container>
  );
};

export default Hero;
