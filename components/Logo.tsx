import { Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";

type Props = {
  fullWidth?: boolean;
  light?: boolean;
  big?: boolean;
};

const Logo = ({ fullWidth, light, big }: Props) => {
  const isTablet = useMediaQuery("(max-width: 900px)");

  const bigSize = "75px"
  const baseSize = isTablet ? "50px" : "75px";

  return (
    <Stack flexDirection="row" sx={{ flexGrow: fullWidth ? 1 : 0 }}>
      <Image
        src={light ? "/logo/light-logo.svg" : "/logo/logo-no-background.svg"}
        width={big ? bigSize : baseSize}
        height="75px"
        alt="AT"
      />
    </Stack>
  );
};

export default Logo;
