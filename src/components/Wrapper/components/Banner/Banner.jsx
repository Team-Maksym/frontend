import React from 'react';
import { Container, Typography } from '@mui/material';

export const Banner = () => {
  return (
    <Container disableGutters maxWidth="lg" component="main" sx={{ height: '90vh', bgcolor: 'neutral.whiteGrey' }}>
      <Typography variant="h1" align="center" color="text.primary" gutterBottom sx={{ py: '30vh' }}>
        WELCOME
      </Typography>
    </Container>
  );
};
