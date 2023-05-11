import { Button, Container, Typography } from '@mui/material';
import { recoveryAccount } from '../../shared/service/SponsorProfileService';
import { PersonContext } from '../../shared/context';
export const RestoreStatus = () => {
  const recoverAccountHandler = () => {
    const currentUrl = window.location.href;
    let uuid = currentUrl.substring(currentUrl.match('uuid=').index + 5);
    console.log(uuid);
    recoveryAccount(uuid);
  };
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
        To continue futher work on our site you need to press recover account button and log in.
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
        onClick={() => recoverAccountHandler()}
      >
        Recover account
      </Button>
    </Container>
  );
};
