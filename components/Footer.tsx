import { Container, Stack, Typography } from "@mui/material";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Container>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap={{ md: 2 }}
        component="footer"
        paddingBottom={3}
      >
        <Logo light />
        <Typography
          variant="body2"
          fontStyle="italic"
          color="GrayText"
          letterSpacing={1}
        >
          Designed & Built by Ayanori Toyoda
        </Typography>
      </Stack>
    </Container>
  );
};
export default Footer;
