import { Stack, Typography } from '@mui/material';
import React from 'react'

const Logo = () => {
  return (
    <Stack flexDirection="row" sx={{ flexGrow: 1 }}>
      <Typography
        variant="h4"
        component="span"
        color="primary"
        fontWeight="bold"
      >
        A
      </Typography>
      <Typography
        variant="h4"
        component="span"
        color="secondary"
        fontWeight="bold"
      >
        T
      </Typography>
    </Stack>
  );
}

export default Logo
