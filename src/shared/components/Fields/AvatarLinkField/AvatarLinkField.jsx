import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Image } from '@mui/icons-material';

export const AvatarLinkField = (props) => {
  return (
    <TextField
      label="Your avatar link"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <Image />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

