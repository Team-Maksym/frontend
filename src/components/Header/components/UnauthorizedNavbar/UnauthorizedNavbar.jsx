import { Typography, Button, Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

export const UnauthorizedNavbar = ({ openAuthModal, value, handleChange }) => {
  return (
    <>
      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
        <Tab value="one" label="Home" component={Link} to="/" />
        <Tab value="three" label="Proof List" component={Link} to="/proofList" />
      </Tabs>
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