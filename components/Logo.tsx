import { Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";

type Props = {
  fullWidth?: boolean;
  light?: boolean;
};

const Logo = ({ fullWidth, light }: Props) => {
  const isTablet = useMediaQuery("(max-width: 900px)");

  return (
    <Stack flexDirection="row" sx={{ flexGrow: fullWidth ? 1 : 0 }}>
      <Image
        src={light ? "/logo/light-logo.svg" : "/logo/logo-no-background.svg"}
        width={isTablet ? "50px" : "75px"}
        height="75px"
        alt="AT"
      />
    </Stack>
  );
};

export default Logo;
