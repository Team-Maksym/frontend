import * as React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

export const Copyright = () => {
  return (
    <Typography variant="subtitle1" align="center" sx={{ mt: '40px', pb: '24px', color: 'secondary.main' }}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        StarLight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
