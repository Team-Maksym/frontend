import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { recoverySendEmail } from '../../../../shared/service/SponsorProfileService';
export const RestorePage = ({ person }) => {
  const recoverySendEmailHandler = (id) => {
    recoverySendEmail(id);
  };
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
      <Button
        variant="contained"
        sx={{
          bgcolor: '#d32f2f',
          color: 'neutral.white',
          mt: 5,
          fontSize: '20px',
          ':hover': {
            bgcolor: 'primary.main',
          },
        }}
        onClick={() => recoverySendEmailHandler(person.id)}
      >
        Send message
      </Button>
    </Box>
  );
};
