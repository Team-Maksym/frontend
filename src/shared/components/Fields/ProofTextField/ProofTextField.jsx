import { TextField, IconButton, InputAdornment } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

export const ProofTextField = (props) => {
  return (
    <TextField
      label="Type proof description"
      multiline
      rows={7}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <ChatIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
