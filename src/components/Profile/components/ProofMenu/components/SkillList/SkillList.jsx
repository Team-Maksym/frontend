import { Chip, Stack } from '@mui/material';

export const SkillList = ({ proofItem }) => {
  return (
    <Stack display="flex" flexDirection="row" flexWrap="wrap" mb="15px">
      {proofItem.map((item, i) => (
        <Chip
          key={i}
          label={item.skill}
          variant="outlined"
          sx={{
            m: '5px',
            bgcolor: 'secondary.main',
            borderColor: 'secondary.main',
            color: 'neutral.white',
          }}
        />
      ))}
    </Stack>
  );
};
