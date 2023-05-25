import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const EmptyPage = () => {
  return (
    <Box
      sx={{
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={`../static/folder.png`} alt="No proofs" width="150px" height="150px" />
      <Typography variant="h5" sx={{ color: 'neutral.white', textAlign: 'center', mt: 3 }}>
        Looks like it's empty
      </Typography>
    </Box>
  );
};

