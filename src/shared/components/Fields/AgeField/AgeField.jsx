import { IconButton, InputAdornment, TextField } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

export const AgeField = (props) => {
  return (
    <TextField
      label="Your age"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <CalendarMonth />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
