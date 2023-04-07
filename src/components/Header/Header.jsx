import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { LogoText } from './components/LogoText';
import { Navbar } from './components/Navbar';
import { useContext } from 'react';
import { TalentContext } from '../../shared/context/TalentContext';
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { openAuthModal } = useContext(TalentContext);
  const navigate = useNavigate();

  return (
    <AppBar sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          <Navbar />
          {!!localStorage.token ? (
            <Tooltip title="Log out">
              <Button
                color="inherit"
                size="large"
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/');
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
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
