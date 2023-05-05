import { TextField, MenuItem } from '@mui/material';

export const TypeField = (props) => {
  const types = [
    {
      value: 'talents',
      label: 'Talent',
    },
    {
      value: 'sponsors',
      label: 'Sponsor',
    },
  ];
  return (
    <TextField select label="Choose your way" {...props}>
      {types.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
