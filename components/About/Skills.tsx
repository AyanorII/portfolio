import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { PRIMARY_MAIN, PRIMARY_LIGHT, PRIMARY_DARK } from "../../styles/Theme";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    {
      name: "HTML",
      icon: "/icons/html-5.png",
    },
    {
      name: "React",
      icon: "/icons/react.png",
    },
    {
      name: "Ruby",
      icon: "/icons/ruby.png",
    },
    {
      name: "CSS",
      icon: "/icons/css-3.png",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.png",
    },
    {
      name: "Ruby on Rails",
      icon: "/icons/rails.png",
    },
    {
      name: "JavaScript",
      icon: "/icons/js.png",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.png",
    },
  ];

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} marginBottom={2} marginTop={15}>
          <Typography
            variant="h3"
            textAlign="center"
            color="primary"
            fontWeight="500"
            fontFamily="Montserrat"
            sx={{
              background: `-webkit-linear-gradient(${PRIMARY_MAIN}, ${PRIMARY_LIGHT})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: `drop-shadow(0 4px 30px ${PRIMARY_DARK})`,
            }}
          >
            My skills
          </Typography>
        </Grid>
        {skills.map((skill) => {
          const { name, icon } = skill;

          return (
            <Grid item xs={6} sm={4} key={name} alignSelf="center">
              <Stack
                flexDirection="row"
                gap={2}
                justifyContent={{ xs: "start", md: "center" }}
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  fontFamily="Montserrat, sans-serif"
                  fontWeight="bold"
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
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
