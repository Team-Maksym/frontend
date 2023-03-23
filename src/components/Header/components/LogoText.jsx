import React from 'react';
import { Button, Typography } from '@mui/material';

export const LogoText = () => {
  return (
    <Typography variant="h4" sx={{ flexGrow: 1, color: 'neutral.white' }}>
      Star
      <Button disabled sx={{ bgcolor: 'secondary.main', ml: '5px', textTransform: 'none' }}>
        <Typography variant="h5" sx={{ color: 'primary.main' }}>
          light
        </Typography>
      </Button>
      {/*Light*/}
    </Typography>
  );
};
