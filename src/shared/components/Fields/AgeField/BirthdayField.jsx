import { IconButton, InputAdornment, TextField } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

export const BirthdayField = (props) => {
  return (
    <TextField
      label="Your age in the format YYYY-MM-DD"
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
