import { Stack, Typography } from "@mui/material";

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="body1"
    gutterBottom
    lineHeight={1.85}
    letterSpacing={0.5}
    whiteSpace="break-spaces"
  >
    {children}
  </Typography>
);

const AboutMe = () => {
  return (
    <Stack
      gap={3}
      maxWidth={{ xs: "60ch", sm: "90ch" }}
      margin={{ xs: "0 auto", lg: "0" }}
      position="relative"
      left={{ lg: "240px" }}
    >
      <Paragraph>
        Hello and welcome! I&apos;m Ayanori Toyoda, a Brazilian-born Software
        Engineer,
      </Paragraph>
      <Paragraph>
        My passion for coding took flight at a world-class bootcamp, where I got
        to deeply immerse myself in the exciting world of full-stack
        development, with a special love for the creativity of front-end
        technologies. I always have a project on the go - developing realistic,
        fully responsive applications that allow me to constantly explore,
        learn, and grow.
      </Paragraph>
      <Paragraph>
        Apart from creating, I had the fantastic opportunity to serve as a Lead
        Teaching Assistant. This role not only allowed me to share what
        I&apos;ve learned but also introduced me to a wide variety of
        problem-solving techniques. I then brought these skills into my role as
        a Front End Developer, where I learned to thrive in bustling
        environments and truly discovered the magic of teamwork.
      </Paragraph>
      <Paragraph>
        Currently, I&apos;m channeling my experience and skills into an exciting
        matchmaking startup, focusing on crafting comprehensive software
        solutions to fit ever-changing needs. My toolbox includes Next.js,
        Javascript, React, Ruby on Rails, and Typescript. Additionally, I&apos;m
        always on the lookout for new avenues to explore, currently diving into
        the realms of Cybersecurity and Python.
      </Paragraph>
    </Stack>
  );
};

export default AboutMe;
