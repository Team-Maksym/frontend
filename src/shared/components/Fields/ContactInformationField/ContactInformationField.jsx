import { TextField, IconButton, InputAdornment } from '@mui/material';
import { ImportContacts } from '@mui/icons-material';

export const ContactInformationField = (props) => {
  return (
    <TextField
      label="Your contact information"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <ImportContacts />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

