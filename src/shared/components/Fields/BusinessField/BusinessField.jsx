import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Business } from '@mui/icons-material';

export const BusinessField = (props) => {
  return (
    <TextField
      label="Your business"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <Business />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
