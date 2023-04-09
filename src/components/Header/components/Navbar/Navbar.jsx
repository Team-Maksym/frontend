import { Tabs, Tab, Button, Tooltip } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { TalentContext } from '../../../../shared/context/TalentContext';
import { UnauthorizedNavbar } from '../UnauthorizedNavbar';

export const Navbar = () => {
  const [value, setValue] = useState('one');
  const { openAuthModal, talent, signOut } = useContext(TalentContext);

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/profile')) {
      setValue('two');
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {talent ? (
        <>
          <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
            <Tab value="one" label="Home" component={Link} to="/" />
            <Tab value="two" label="Profile" component={Link} to="/profile" />
          </Tabs>
          <Tooltip title="Sign out">
            <Button color="inherit" size="large" onClick={signOut}>
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
        <UnauthorizedNavbar openAuthModal={openAuthModal} />
      )}
    </>
  );
};

