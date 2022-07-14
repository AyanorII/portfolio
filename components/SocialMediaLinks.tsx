import CloseIcon from "@mui/icons-material/Close";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  ClickAwayListener,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  GRAY_DARK,
  PRIMARY_DARK,
  SECONDARY_DARK,
  TERTIARY_DARK,
} from "../styles/Theme";

const SOCIAL_MEDIA_LINKS = [
  {
    socialMedia: "instagram",
    href: "https://www.instagram.com/ayanori.toyoda/",
    icon: <InstagramIcon sx={{ color: "primary.contrastText" }} />,
  },
  {
    socialMedia: "facebook",
    href: "https://www.facebook.com/profile.php?id=100012707850259",
    icon: <FacebookIcon sx={{ color: "primary.contrastText" }} />,
  },
  {
    socialMedia: "linkedin",
    href: "https://www.linkedin.com/in/ayanori-toyoda/",
    icon: <LinkedInIcon sx={{ color: "primary.contrastText" }} />,
  },
  {
    socialMedia: "github",
    href: "https://github.com/AyanorII",
    icon: <GitHubIcon sx={{ color: "primary.contrastText" }} />,
  },
];

const SocialMediaLinks = () => {
  const isMobile = useMediaQuery("(max-width:899px)");
  const isTablet = useMediaQuery("(min-width:900px)");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (isMobile) {
      setOpen(true);
    } else if (isTablet) {
      setOpen(false);
    }
  }, [isMobile, isTablet]);

  const router = useRouter();

  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return PRIMARY_DARK;
      case 1:
        return SECONDARY_DARK;
      case 2:
        return TERTIARY_DARK;
      case 3:
        return GRAY_DARK;
      default:
        return GRAY_DARK;
    }
  };

  const speedDialStyles = {
    position: { xs: "static", md: "fixed" },
    bottom: { xs: 32, lg: 40 },
    left: { xs: 16, lg: 60 },

    "& .MuiFab-root": {
      boxShadow: `0px 4px 20px 3px ${PRIMARY_DARK}, 0px 6px 10px 5px rgb(0 0 0 / 65%), 0px 1px 18px 0px rgb(0 0 0 / 12%);`,
    },

    "& #Socialmedialinks-actions": {
      paddingLeft: { xs: "24px", md: "0px" },
    },
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <SpeedDial
        ariaLabel="Social media links"
        sx={speedDialStyles}
        onClick={handleOpen}
        icon={
          <SpeedDialIcon
            icon={<ConnectWithoutContactIcon />}
            openIcon={<CloseIcon />}
          />
        }
        direction={isTablet ? "up" : "right"}
        hidden={isMobile}
        open={open}
      >
        {SOCIAL_MEDIA_LINKS.map((action, index) => {
          const { socialMedia, href, icon } = action;

          const color = getColor(index);

          return (
            <SpeedDialAction
              key={socialMedia}
              icon={icon}
              tooltipTitle={socialMedia}
              onClick={() => router.push(href)}
              sx={{
                backgroundColor: color,
                "&.MuiFab-root": {
                  boxShadow: `0px 4px 20px 3px ${color},
                              0px 6px 10px 5px rgb(0 0 0 / 65%),
                              0px 1px 18px 0px rgb(0 0 0 / 12%);`,
                },
              }}
            />
          );
        })}
      </SpeedDial>
    </ClickAwayListener>
  );
};
export default SocialMediaLinks;
