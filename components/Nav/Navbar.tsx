import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import Logo from "../Logo";
import NavLink from "./NavLink";

const LINKS = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(5px)",
        borderBottom: 1,
        borderColor: "#494949",
        paddingBlock: 2,
      }}
    >
      <Container>
        <Toolbar>
          <Logo />
          <nav>
            <Stack flexDirection="row" gap={2}>
              {LINKS.map(({ href, label }, index) => {
                return (
                  <NavLink
                    key={label}
                    href={href}
                    label={label}
                    index={index}
                  />
                );
              })}
            </Stack>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
