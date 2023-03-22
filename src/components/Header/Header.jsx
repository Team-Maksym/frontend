import { AppBar, Toolbar, Typography, Container, Button, CssBaseline } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';

function Header() {
  return (
    <AppBar position="static" sx={{ background: '#000000' }}>
      <Container>
        <CssBaseline />
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <LogoDevIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography variant="h5" noWrap sx={{ flexGrow: 1 }}>
            StarLight
          </Typography>
          <nav>{/*Navigation*/}</nav>
          <Button color="inherit" size="large">
            <b>SIGN IN</b>
          </Button>
          <Typography variant="h5" noWrap>
            <b>/</b>
          </Typography>
          <Button color="inherit" size="large">
            <b>SIGN UP</b>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { Header };
