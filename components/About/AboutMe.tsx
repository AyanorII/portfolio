import { Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const AboutMe = () => {
  return (
    <Stack gap={2}>
      <Typography variant="body1" gutterBottom>
        Hello, my name is Ayanori Toyoda, I was born and raised in Brazil and
        currently based in Saitama, Japan.
      </Typography>
      <Typography variant="body1">
        I started to learn web development in May 2021 and went to one of most
        famous bootcamps in Japan and in the world. I love and focus more on
        front end development but also have experience with back end
        technologies.
      </Typography>
      <Typography variant="body1">
        Since I started my journey to become a developer, I’ve been building
        real-life like, fully responsive side projects to help me learn new
        technologies and apply all of my knowledge while always keep learning
        new things.
      </Typography>
    </Stack>
  );
}

export default AboutMe
