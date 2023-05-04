import { TextField, IconButton, InputAdornment } from '@mui/material';
import { School } from '@mui/icons-material';

export const EducationField = (props) => {
  return (
    <TextField
      label="Your education"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <School />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

