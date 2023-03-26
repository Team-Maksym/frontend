import React, { useEffect, useState } from 'react';
import { Box, Pagination, Stack } from '@mui/material';

export const PaginationCustom = ({setHook, queryFunction}) => {
  const [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    queryFunction(page,limit)
      .then((response) => {
        setHook(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page,limit]);

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
