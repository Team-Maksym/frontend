import { Tabs, Tab, Button, Tooltip } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { PersonContext } from '../../../../shared/context/PersonContext';
import { UnauthorizedNavbar } from '../UnauthorizedNavbar';

export const Navbar = () => {
  const [value, setValue] = useState('one');
  const { openAuthModal, person, signOut } = useContext(PersonContext);

  useEffect(() => {
    const currentUrl = window.location.href;
    if (person) {
      if (currentUrl.includes(`/profile/${person.id}`)) {
        setValue('two');
      } else if (currentUrl.includes('/proofList')) {
        setValue('three');
      } else {
        setValue('one');
      }
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {person ? (
        <>
          <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
            <Tab value="one" label="Home" component={Link} to="/" />
            <Tab value="two" label="Profile" component={Link} to={`/profile/${person.id}`} />
            <Tab value="three" label="Proof List" component={Link} to="/proofList" />
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
        <UnauthorizedNavbar openAuthModal={openAuthModal} value={value} handleChange={handleChange} />
      )}
    </>
  );
};