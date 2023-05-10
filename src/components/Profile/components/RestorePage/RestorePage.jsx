import React from 'react';
import { Box, Typography } from '@mui/material';
export const RestorePage = () => {
  return (
    <Box sx={{ mt: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'neutral.white' }}>
        <Box component="span" sx={{ textAlign: 'left', color: 'secondary.main' }}>
          Dear sponsor,{' '}
        </Box>
        <br /> We are sorry to see you go.
        <br /> Your sponsor profile has been deleted after 7 days! You can use your account on this time. If you want to
        restore your account, please check your email. Thank you for your support. If you have any questions, please
        contact us at:
        <br />{' '}
        <Box component="span" sx={{ textAlign: 'right', color: 'secondary.main' }}>
          java.team.maksym@gmail.com
        </Box>{' '}
        <br />
        We are looking forward to hearing from you.
        <br /> Best regards,
        <Box component="span" sx={{ textAlign: 'right', color: 'secondary.main' }}>
          {' '}
          Starlight Team
        </Box>
      </Typography>
    </Box>
  );
};
