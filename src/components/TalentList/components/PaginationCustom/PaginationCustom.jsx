import React from 'react';
import { Box, Pagination, Stack } from '@mui/material';

export const PaginationCustom = ({setPage}) => {
  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '48px' }}>
        <Pagination
          count={10}
          size="large"
          shape="rounded"
          onChange={(event, value) => {
            setPage(--value);
          }}
          color="primary"
          sx={{
            '& .MuiPaginationItem-page.Mui-selected': {
              color: 'secondary.main',
              fontWeight: 'bold',
            },
            '& .MuiPaginationItem-page': {
              color: 'primary.main',
            },
          }}
        />
      </Box>
    </Stack>
  );
};
