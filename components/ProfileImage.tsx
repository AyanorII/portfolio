import { Box } from "@mui/material";
import Image from "next/image";
import {
  PRIMARY_LIGHT,
  SECONDARY_LIGHT,
  TERTIARY_LIGHT,
} from "../styles/Theme";

const ProfileImage = () => {
  return (
    <Box
      maxWidth="100%"
      sx={{
        position: "relative",
        width: { xs: "250px", md: "350px", lg: "400px" },
        height: { xs: "250px", md: "350px", lg: "400px" },
        margin: {xs: "0 auto", lg: "0 0 0 auto"},
        filter: `drop-shadow(0px 0px 60px ${PRIMARY_LIGHT}25)
                drop-shadow(0px 0px 60px ${SECONDARY_LIGHT}25)
                drop-shadow(0px 0px 60px ${TERTIARY_LIGHT}25)`,
      }}
    >
      <Image
        src="/profile.png"
        alt="Ayanori Rodrigo Toyoda"
        layout="fill"
        priority
      />
    </Box>
  );
};

export default ProfileImage;
