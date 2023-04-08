import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Badge } from '@mui/icons-material';

export const PositionField = (props) => {
  return (
    <TextField
      label="Your positions (separated by commas)"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <Badge />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
