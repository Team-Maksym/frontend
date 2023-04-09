import { AppBar, Toolbar, Container } from '@mui/material';
import { LogoText } from './components/LogoText';
import { Navbar } from './components/Navbar';

export const Header = () => {
  return (
    <AppBar sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          <Navbar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

