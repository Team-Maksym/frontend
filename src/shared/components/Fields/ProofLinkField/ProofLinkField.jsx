import { TextField, IconButton, InputAdornment } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';

export const ProofLinkField = (props) => {
  return (
    <TextField
      label="Your proof link"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <AddLinkIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
