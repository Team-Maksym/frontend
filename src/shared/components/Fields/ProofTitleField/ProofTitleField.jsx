import { TextField, IconButton, InputAdornment } from '@mui/material';
import TitleIcon from '@mui/icons-material/Title';

export const ProofTitleField = (props) => {
  return (
    <TextField
      label="Type proof title"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton disabled>
              <TitleIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
