import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { LogoText } from './components/LogoText';
import { Navbar } from './components/Navbar';
import { useContext } from 'react';
import { TalentContext } from '../../shared/context/TalentContext';
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';

export const Header = ({ logged, setLogged }) => {
  const { openAuthModal } = useContext(TalentContext);

  return (
    <AppBar sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          <Navbar logged={logged} />
          {logged && !!localStorage.token ? (
            <Tooltip title="Log out">
              <Button
                color="inherit"
                size="large"
                onClick={() => {
                  localStorage.removeItem('token');
                  setLogged(false);
                }}
              >
                <LoginIcon
                  sx={{
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                />
              </Button>
            </Tooltip>
          ) : (
            <>
              <Button color="inherit" size="large">
                <Typography
                  variant="h6"
                  noWrap
                  onClick={() => {
                    openAuthModal('signIn');
                    setLogged(true);
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
                  setLogged(true);
                }}
              >
                <Typography variant="h6" noWrap>
                  SIGN UP
                </Typography>
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
