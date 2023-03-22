import * as React from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: '40px' }}>
      {'Copyright © '}
      <Link color="inherit" href="src/components/Footer/components/Copyright#">
        StarLight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export { Copyright };
