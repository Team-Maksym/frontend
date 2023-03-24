import { Button } from '@mui/material';
import { useState } from 'react';
import { AuthModal } from './Authorization/components/AuthModal/AuthModal';

export const App = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState();

  const handleOpenSignIn = () => {
    setOpen(true);
    setType('signIn');
  };

  const handleOpenSignUp = () => {
    setOpen(true);
    setType('signUp');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={handleOpenSignIn}>
        Sign In
      </Button>

      <Button variant="outlined" onClick={handleOpenSignUp}>
        Sign Up
      </Button>

      <AuthModal open={open} onClose={handleClose} type={type} />
    </div>
  );
};