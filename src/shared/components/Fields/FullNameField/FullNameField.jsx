import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Person } from '@mui/icons-material';

export const FullNameField = (props) => {
  return (
    <TextField
      label="Your full name"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <Person />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
