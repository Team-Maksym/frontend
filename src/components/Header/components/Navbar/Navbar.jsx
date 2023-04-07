import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export const Navbar = ({ setAutorized }) => {
  const [value, setValue] = useState('one');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/profile')) {
      setValue('two')
    }
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
    setAutorized(false);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
        <Tab value="one" label="Home" component={Link} to="/" />
        <Tab value="two" label="Profile" component={Link} to="/profile" />
      </Tabs>
      <Tooltip title="Log out">
        <Button color="inherit" size="large"  onClick={() => logOut()}>
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
  );
};
