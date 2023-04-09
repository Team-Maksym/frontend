import React from 'react';
import { Box, Typography, Modal } from '@mui/material';
export const ProofItem = ({ children, description, val }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '800px' }}>
      <Typography>{description.substring(0, 100) + '...'}</Typography>
      {children}
    </Box>
  );
};
