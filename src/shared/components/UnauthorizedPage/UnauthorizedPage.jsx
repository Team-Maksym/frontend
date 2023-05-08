import { Button, Container, Typography, Box, Card, CardContent } from '@mui/material';
import { LockPerson } from '@mui/icons-material';
import { useContext } from 'react';
import { PersonContext } from '../../context/PersonContext';

export const UnauthorizedPage = () => {
  const { openAuthModal } = useContext(PersonContext);

  return (
    <Container
      disableGutters
      maxWidth="100vw"
      component="main"
      sx={{
        height: '100vh',
        background: 'url(../static/bg.png) no-repeat center',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 400,
          bgcolor: 'rgba(34, 40, 49, 0.65)',
          backdropFilter: 'blur(5px)',
          p: '25px',
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <LockPerson fontSize="large" sx={{ color: 'secondary.main', mb: 3, mx: 'auto' }}  />
          <Typography variant="h3" align="center" color="neutral.white" sx={{ mb: 2 }}>
            No access!
          </Typography>
          <Typography variant="body" align="center" color="neutral.white" sx={{ mb: 5 }}>
            This page is available only to authorized users
          </Typography>
          <Button
            onClick={() => openAuthModal('signIn')}
            color={'secondary'}
            variant="contained"
            sx={{ p: '20px', m: '0 50px' }}
          >
            SIGN IN
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

