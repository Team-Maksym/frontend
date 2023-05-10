import { useContext } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { PersonContext } from '../../shared/context/PersonContext';
export const RestoreStatus = () => {
  const { signOut } = useContext(PersonContext);
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        m: '0 auto',
        mt: 7,
        minHeight: '90vh',
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center', color: 'neutral.white' }}>
        To continue futher work on our site you need to log out and authorise.
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
        onClick={signOut}
      >
        Log out
      </Button>
    </Container>
  );
};
