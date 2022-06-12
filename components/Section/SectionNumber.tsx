import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  number: number;
  shadowColor: string;
  borderColor: string;
  textColor: string;
};

const SectionNumber = ({
  number,
  borderColor,
  shadowColor,
  textColor,
}: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      whileInView="animate"
      initial="initial"
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.25,
        ease: "easeInOut",
      }}
    >
      <Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            borderRadius: "50%",
            border: 4,
            borderColor,
            boxShadow: `0 4px 30px 4px ${shadowColor},
                      -5px -10px 15px ${shadowColor} inset`,
            width: { xs: "130px", sm: "150px", md: "180px", lg: "200px" },
            height: { xs: "130px", sm: "150px", md: "180px", lg: "200px" },
          }}
        >
          <Typography
            variant="h1"
            component="span"
            fontFamily="Mulish, sans-serif"
            color={textColor}
            sx={{
              filter: `drop-shadow(0px 0px 15px ${textColor})`,
            }}
          >
            {number}
          </Typography>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default SectionNumber;
