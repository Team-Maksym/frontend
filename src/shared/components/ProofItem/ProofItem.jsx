import React from 'react';
import { Stack, Typography } from '@mui/material';
export const ProofItem = ({ children, description }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <Typography>{description.length > 50 ? description.substring(0, 50) + '...' : description}</Typography>
      {children}
    </Stack>
  );
};
