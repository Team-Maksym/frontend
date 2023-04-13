import * as React from 'react';
import { Typography, Link} from '@mui/material';

export const Copyright = () => {
  return (
    <Typography variant="subtitle1" align="center" sx={{ mt: '40px', pb: '24px', color: 'secondary.main' }}>
      {'Copyright © '}
      <Link color="secondary.main" href="http://dev.starlight.pepega.cloud/">
        StarLight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
