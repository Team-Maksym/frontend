import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
      {!!localStorage.token && <Tab value="one" label="Profile" component={Link} to="/profile" />}
    </Tabs>
  );
};

