import { useEffect, useState } from 'react';
import { Box, Pagination, Stack } from '@mui/material';

export const PaginationCustom = ({ setHook, queryFunction }) => {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const size = 10;

  useEffect(() => {
    queryFunction(page, size)
      .then((response) => {
        setHook(response.data);
        setCount(Math.ceil(response.total_talents / size));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page, size, setHook, queryFunction]);

  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '48px' }}>
        <Pagination
          count={count}
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
