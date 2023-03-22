import React from 'react';
import { Container, Typography } from '@mui/material';

function Banner() {
  return (
    <Container disableGutters maxWidth="lg" component="main" sx={{ height: '90vh' }}>
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom sx={{ py: '30vh' }}>
        WELCOME
      </Typography>
    </Container>
  );
}

export { Banner };
