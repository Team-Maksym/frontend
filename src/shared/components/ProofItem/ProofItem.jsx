import React from 'react';
import { Box, Typography, Modal } from '@mui/material';
export const ProofItem = ({ children }) => {
  const proofTitle =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur inventore maxime quas et fugiat velit odit fugit mollitia vel.';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '830px' }}>
      <Typography>{proofTitle}</Typography>
      {children}
    </Box>
  );
};
