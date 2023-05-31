import React, { useState } from 'react';
import { Drawer, Box, IconButton, Tab, List, ListItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
export const DrawerComp = ({ person, signOut }) => {
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
              <Tab value="two" label="Profile" component={Link} to={`/profile/${person.id}`} />
            </ListItem>
            <ListItem>
              <Tab value="three" label="Proof List" component={Link} to="/proofList" />
            </ListItem>
            <ListItem>
              <Button color="inherit" size="large" onClick={signOut}>
                <LoginIcon
                  sx={{
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                />
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
