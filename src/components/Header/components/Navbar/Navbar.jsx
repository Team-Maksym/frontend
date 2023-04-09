import { Tabs, Tab, Typography, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';
import { TalentContext } from '../../../../shared/context/TalentContext';

export const Navbar = () => {
  const [value, setValue] = useState('one');
  const { openAuthModal, talent, signOut } = useContext(TalentContext);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {talent ? (
        <>
          <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
            <Tab value="one" label="Profile" component={Link} to="/profile" />
          </Tabs>
          <Tooltip title="Sign out">
            <Button
              color="inherit"
              size="large"
              onClick={signOut}
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
        </>
      ) : (
        <>
          <Button color="inherit" size="large">
            <Typography
              variant="h6"
              noWrap
              onClick={() => {
                openAuthModal('signIn');
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
            }}
          >
            <Typography variant="h6" noWrap>
              SIGN UP
            </Typography>
          </Button>
        </>
      )}
    </>
  );
};

