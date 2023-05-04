import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const EmptyProofs = () => {
  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={`../static/folder.png`} alt="No proofs" width="150px" height="150px" />
      <Typography variant="h5" sx={{ color: 'neutral.white', textAlign: 'center', mt: 3 }}>
        Looks like there are no proofs yet
      </Typography>
    </Box>
  );
};

