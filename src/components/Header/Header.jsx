import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { LogoText } from './components/LogoText';
import { AuthModal } from '../Authorization/components/AuthModal';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState();

  const handleOpenSignIn = () => {
    setOpen(true);
    setType('signIn');
  };

  const handleOpenSignUp = () => {
    setOpen(true);
    setType('signUp');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          <nav>{/*Navigation*/}</nav>
          <Button color="inherit" size="large">
            <Typography variant="h6" noWrap onClick={handleOpenSignIn}>
              SIGN IN
            </Typography>
          </Button>
          <Typography variant="h5" noWrap>
            /
          </Typography>
          <Button color="inherit" size="large" onClick={handleOpenSignUp}>
            <Typography variant="h6" noWrap>
              SIGN UP
            </Typography>
          </Button>
          <AuthModal open={open} onClose={handleClose} type={type} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
