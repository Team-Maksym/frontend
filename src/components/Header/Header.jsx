import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { LogoText } from './components/LogoText';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoText />
          <nav>{/*Navigation*/}</nav>
          <Button color="inherit" size="large">
            <Typography variant="h6" noWrap>
              SIGN IN
            </Typography>
          </Button>
          <Typography variant="h5" noWrap>
            /
          </Typography>
          <Button color="inherit" size="large">
            <Typography variant="h6" noWrap>
              SIGN UP
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};