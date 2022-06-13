import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { useState } from "react";
import { GRAY_MAIN } from "../../styles/Theme";
import Logo from "../Logo";
import Drawer from "./Drawer";
import NavLinks from "./NavLinks";

function HideOnScroll(props: any) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props: any) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => setMobileOpen(false);

  const isTablet = useMediaQuery("(min-width: 900px)");

  return (
    <HideOnScroll {...props}>
      <AppBar
        sx={{
          backgroundColor: GRAY_MAIN,
          backdropFilter: "blur(10px)",
          borderBottom: 1,
          borderColor: "#494949",
          paddingBlock: { md: 2 },
        }}
      >
        <Stack
          flexDirection={{ md: "row" }}
          alignItems="center"
          justifyContent={{ md: "space-between" }}
        >
          <Container>
            <Toolbar sx={{ justifyContent: "end" }}>
              <Logo />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {isTablet && <NavLinks closeDrawer={closeDrawer} />}
            </Toolbar>
          </Container>
          <Drawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            closeDrawer={closeDrawer}
          />
        </Stack>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
