import { Typography, Button } from '@mui/material';

export const UnauthorizedNavbar = ({ openAuthModal }) => {

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
