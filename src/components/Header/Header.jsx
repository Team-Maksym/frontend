import { AppBar, Toolbar, Container } from '@mui/material';
import { LogoText } from './components/LogoText';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import { UnauthorizedNavbar } from './components/UnauthorizedNavbar';
import { TalentContext } from '../../shared/context/TalentContext';
import { useContext } from 'react';

export const Header = () => {
  const [autorized, setAutorized] = useState(!!localStorage.token);
  const { openAuthModal } = useContext(TalentContext);

  return (
    <AppBar sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          {autorized && !!localStorage.token ? (
            <Navbar setAutorized={setAutorized} />
          ) : (
            <UnauthorizedNavbar setAutorized={setAutorized} openAuthModal={openAuthModal}></UnauthorizedNavbar>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
