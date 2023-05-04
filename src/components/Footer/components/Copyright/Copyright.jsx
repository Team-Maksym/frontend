import * as React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Copyright = () => {
  return (
    <Typography variant="subtitle1" align="center" sx={{ mt: '40px', pb: '24px', color: 'secondary.main' }}>
      {'Copyright © '}
      <Typography color="secondary.main" component={Link} to="/">
        StarLight
      </Typography>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
