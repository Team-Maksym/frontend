import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { LogoText } from './components/LogoText';
import { Navbar } from './components/Navbar';
import { useContext } from 'react';
import { TalentContext } from '../../shared/context/TalentContext';

export const Header = () => {
  const { openAuthModal } = useContext(TalentContext);

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          <Navbar />
          <Button color="inherit" size="large">
            <Typography variant="h6" noWrap onClick={() => openAuthModal('signIn')}>
              SIGN IN
            </Typography>
          </Button>
          <Typography variant="h5" noWrap>
            /
          </Typography>
          <Button color="inherit" size="large" onClick={() => openAuthModal('signUp')}>
            <Typography variant="h6" noWrap>
              SIGN UP
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

