import React, { useState } from 'react';
import { Drawer, Box, IconButton, Tab, List, ListItem, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerCompUnauth = ({ openAuthModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer open={open} onClick={() => setOpen(!open)}>
        <Box sx={{ bgcolor: 'primary.main', color: 'neutral.white', height: '100vh' }}>
          <List>
            <ListItem>
              <Tab value="one" label="Home" component={Link} to="/" />
            </ListItem>
            <ListItem>
              <Tab value="three" label="Proof List" component={Link} to="/proofList" />
            </ListItem>
            <ListItem>
              {' '}
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
            </ListItem>
            <ListItem>
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
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <MenuIcon sx={{ color: 'white' }} />
      </IconButton>
    </>
  );
};
