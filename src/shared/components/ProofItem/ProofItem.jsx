import React from 'react';
import { Stack, Typography } from '@mui/material';
export const ProofItem = ({ children, description }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: { md: 'center' },
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        p: '10px 10px 0 0',
        width: '100%',
      }}
    >
      <Typography>{description.length > 50 ? description.substring(0, 50) + '...' : description}</Typography>
      {children}
    </Stack>
  );
};
