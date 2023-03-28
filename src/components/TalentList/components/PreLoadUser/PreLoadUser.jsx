import { Box, Skeleton } from '@mui/material';

export const PreLoaderUser = () => {
  const item = (
    <Box
      sx={{
        width: '234px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '254px',
        pt: '24px',
        pl: '24px',
      }}
    >
      <Skeleton
        variant="circular"
        width={90}
        height={90}
        sx={{
          width: '90px',
          height: '90px',
          m: '15px auto',
          fontSize: '28px',
        }}
      />
      <Skeleton variant="rectangular" width={180} height={70} />
    </Box>
  );
  let arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = item;
  }

  return arr;
};
