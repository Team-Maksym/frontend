import { Typography, Button } from '@mui/material';

export const UnauthorizedNavbar = ({ setAutorized, openAuthModal }) => {

  return (
    <>
      <Button color="inherit" size="large">
        <Typography
          sx={{
            '&:hover': {
              color: 'secondary.main',
            },
          }}
          variant="h6"
          noWrap
          onClick={() => {
            openAuthModal('signIn');
            setAutorized(true);
          }}
        >
          SIGN IN
        </Typography>
      </Button>
      <Typography variant="h5" noWrap>
        /
      </Typography>
      <Button
        color="inherit"
        size="large"
        onClick={() => {
          openAuthModal('signUp');
          setAutorized(true);
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        >
          SIGN UP
        </Typography>
      </Button>
    </>
  );
};
