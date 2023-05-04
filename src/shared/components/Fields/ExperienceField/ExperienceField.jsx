import { TextField, IconButton, InputAdornment } from '@mui/material';
import { WorkHistory } from '@mui/icons-material';

export const ExperienceField = (props) => {
  return (
    <TextField
      label="Your experience"
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

