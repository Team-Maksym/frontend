import React from 'react';
import { Button, Typography } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export const LogoText = () => {
  return (
    <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, color: 'neutral.white' }}>
      <LogoDevIcon fontSize="large" sx={{ mr: '16px', color: 'secondary.main' }} />
      Star
      <Button disabled sx={{ bgcolor: 'secondary.main', ml: '5px', textTransform: 'none' }}>
        <Typography variant="h5" sx={{ color: 'primary.main' }}>
          Light
        </Typography>
      </Button>
      {/*Light*/}
    </Typography>
  );
};
