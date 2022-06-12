import { Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import ProfileImage from "../ProfileImage";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <Container>
      <Stack
        flexDirection={{ lg: "row-reverse" }}
        justifyContent="center"
        alignItems="center"
        gap={5}
        minHeight={{ xs: "calc(100vh - 89px)", sm: "calc(100vh - 97px)" }}
      >
        <motion.div
          animate={{ x: ["200%", "-10%", "0%"], rotate: [360, -15, 0] }}
          transition={{
            duration: 5,
            delay: 1.25,
            ease: "easeInOut",
            times: [0, 0.25, 0.35],
          }}
          exit={{ scale: 0 }}
        >
          <ProfileImage />
        </motion.div>
        <motion.div
          initial={{ x: "-150%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.25 }}
          exit={{ scale: 0 }}
        >
          <HeroContent />
        </motion.div>
      </Stack>
    </Container>
  );
};

export default Hero;
