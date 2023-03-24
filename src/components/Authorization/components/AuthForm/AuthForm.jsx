import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const AuthForm = ({ onSubmit, onClose, submitBtnName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
    onClose();
  };

  console.log('submitBtnName', submitBtnName);

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type="email"
          endAdornment={
            <InputAdornment position="end">
              <IconButton disabled>
                <Email />
              </IconButton>
            </InputAdornment>
          }
          label="Your email"
          sx={{ borderRadius: '25px' }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          sx={{ borderRadius: '25px' }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button type="submit" variant="outlined" size="large" sx={{ mt: 4, px: 8, borderRadius: '20px' }}>
        {submitBtnName}
      </Button>
    </form>
  );
};
