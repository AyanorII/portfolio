import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { PRIMARY_DARK, PRIMARY_LIGHT, PRIMARY_MAIN } from "../../styles/Theme";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    {
      name: "HTML",
      icon: "/icons/html-5.png",
    },
    {
      name: "CSS",
      icon: "/icons/css-3.png",
    },
    {
      name: "JavaScript",
      icon: "/icons/js.png",
    },
    {
      name: "React",
      icon: "/icons/react.png",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.png",
    },

    {
      name: "TypeScript",
      icon: "/icons/typescript.png",
    },
    {
      name: "Ruby",
      icon: "/icons/ruby.png",
    },

    {
      name: "Ruby on Rails",
      icon: "/icons/rails.png",
    },
  ];

  return (
    <Container>
      <Box
        marginTop={{ xs: 5, sm: 10, lg: 15 }}
        marginBottom={{ xs: 5, sm: 7 }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          color="primary"
          fontWeight="500"
          fontFamily="Gaoel, sans-serif"
          sx={{
            background: `-webkit-linear-gradient(${PRIMARY_MAIN}, ${PRIMARY_LIGHT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: `drop-shadow(0 4px 30px ${PRIMARY_DARK})`,
          }}
        >
          My skills
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Grid container spacing={{ xs: 8, sm: 5 }}>
          {skills.map((skill) => {
            const { name, icon } = skill;

            return (
              <Grid item xs={6} md={4} key={name} alignSelf="center">
                <Stack
                  flexDirection={{ xs: "column", sm: "row" }}
                  gap={2}
                  justifyContent={{ xs: "start", md: "center" }}
                  alignItems="center"
                >
                  <Typography
                    variant="h5"
                    component="p"
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="bold"
                    whiteSpace="nowrap"
                  >
                    {name}
                  </Typography>
                  <Image
                    src={icon}
                    alt={name + " icon"}
                    width="36px"
                    height="36px"
                  />
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default Skills;
