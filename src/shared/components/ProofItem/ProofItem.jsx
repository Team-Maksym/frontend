import React from 'react';
import { Box, Typography } from '@mui/material';
export const ProofItem = ({ children, description }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '750px' }}>
      <Typography>{description.length > 50 ? description.substring(0, 50) + '...' : description}</Typography>
      {children}
    </Box>
  );
};
