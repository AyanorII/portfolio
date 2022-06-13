import { Box, Stack } from "@mui/material";
import NavLink from "./NavLink";

type Props = {
  closeDrawer: () => void;
};

export type Link = {
  href: string;
  label: string;
};

const LINKS: Link[] = [
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

const NavLinks = ({ closeDrawer }: Props) => {
  return (
    <Stack flexDirection={{xs: "column", md: "row"}} gap={{xs: 5, sm: 5}}>
      {LINKS.map(({ href, label }, index) => (
        <Box key={href} sx={{ marginBottom: {xs: 2, md: 0} }} onClick={closeDrawer}>
          <NavLink href={href} label={label} index={index} />
        </Box>
      ))}
    </Stack>
  );
};
export default NavLinks;
