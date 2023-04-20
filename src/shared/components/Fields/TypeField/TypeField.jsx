import { TextField, MenuItem } from '@mui/material';

export const TypeField = (props) => {
  const types = [
    {
      value: 'talent',
      label: 'Talent',
    },
    {
      value: 'sponsor',
      label: 'Sponsor',
    },
  ];
  return (
    <TextField select label="Choose your way" defaultValue="talent" {...props}>
      {types.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
