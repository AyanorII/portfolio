import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Container,
  Drawer as MuiDrawer,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Logo from "../Logo";
import SocialMediaLinks from "../SocialMediaLinks";
import NavLinks from "./NavLinks";

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  closeDrawer: () => void;
};

const Drawer = ({ mobileOpen, handleDrawerToggle, closeDrawer }: Props) => {
  return (
    <MuiDrawer
      open={mobileOpen}
      variant="temporary"
      onClose={handleDrawerToggle}
      anchor="right"
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
        "& .MuiDrawer-paper": {
          width: {xs: "240px", sm: "300px"},
          backgroundColor: "gray.main",
        },
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "end" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              color: "#FFF",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Stack height="calc(90vh - 64px)" justifyContent="center" gap={5}>
          <Box alignSelf="center" marginBottom={2}>
            <Logo light big/>
          </Box>
          <NavLinks closeDrawer={closeDrawer} />
          <SocialMediaLinks />
        </Stack>
      </Container>
    </MuiDrawer>
  );
};
export default Drawer;
