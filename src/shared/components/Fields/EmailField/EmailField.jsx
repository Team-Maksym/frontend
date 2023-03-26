import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Email } from '@mui/icons-material';

export const EmailField = (props) => {
  return (
    <TextField
      type="email"
      label="Your email"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <Email />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

