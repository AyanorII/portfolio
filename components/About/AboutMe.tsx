import { Stack, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Stack
      gap={3}
      maxWidth={{ xs: "60ch", sm: "90ch" }}
      margin={{ xs: "0 auto", lg: "0" }}
      position="relative"
      left={{ lg: "240px" }}
    >
      <Typography
        variant="body1"
        gutterBottom
        lineHeight={1.85}
        letterSpacing={0.5}
        whiteSpace="break-spaces"
      >
        Hi there, nice to meet you! My name is Ayanori Toyoda, a passionate
        Brazilian front-end developer based in Saitama, Japan.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        lineHeight={1.85}
        letterSpacing={0.5}
      >
        I started to learn web development in May 2021 and went to one of the
        most famous and prestigious bootcamps in Japan and the world. I love and
        focus more on front-end development but also have experience with
        back-end technologies.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        lineHeight={1.85}
        letterSpacing={0.5}
      >
        Since I started my journey to become a developer, I’ve been building
        real-life-like, fully responsive side projects to help me learn new
        technologies and apply all my knowledge while constantly learning new
        things.
      </Typography>
    </Stack>
  );
};

export default AboutMe;
