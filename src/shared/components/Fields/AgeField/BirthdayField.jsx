import { TextField } from '@mui/material';

export const BirthdayField = (props) => {
  return (
    <TextField
      type="date"
      inputProps={{ min: '1900-01-01', max: '2023-01-01' }}
      label="Your birthday"
      InputLabelProps={{
        shrink: true,
        style: {
          position: 'absolute',
        },
      }}
      {...props}
    />
  );
};
