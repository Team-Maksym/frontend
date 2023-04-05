import { TextField, IconButton, InputAdornment } from '@mui/material';
import { WorkHistory } from '@mui/icons-material';

export const PositionField = (props) => {
  return (
    <TextField
      label="Your position"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <WorkHistory />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

