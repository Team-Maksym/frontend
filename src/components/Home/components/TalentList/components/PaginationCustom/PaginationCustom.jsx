import { useEffect, useState } from 'react';
import { Box, Pagination, PaginationItem, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';


export const PaginationCustom = ({ setHook, queryFunction, setLoading }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [count, setCount] = useState();
  const [page, setPage] = useState(parseInt(query.get('page') || '1') -1 );
  const size = 10;

  useEffect(() => {
    // console.log(window.localStorage.scroll)
    setLoading(true);
    window.scrollBy(0, window.localStorage.scroll);
    queryFunction(page, size)
      .then((response) => {
        setHook(response.data);
        setCount(Math.ceil(response.total_talents / size));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page, size, setHook, queryFunction]);

  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '48px' }}>
        <Pagination
          page={page + 1}
          count={count}
          renderItem={(item) => <PaginationItem component={Link} to={`?page=${item.page}`} {...item} />}
          size="large"
          shape="rounded"
          onChange={(event, value) => {
            event.preventDefault();
            setPage(--value);
            localStorage.setItem('scroll', window.pageYOffset);
            window.location.href = `/?page=${value + 1}`;
          }}
          color="primary"
          sx={{
            '& .MuiPaginationItem-page.Mui-selected': {
              color: 'secondary.main',
              fontWeight: 'bold',
            },
          }}
        />
      </Box>
    </Stack>
  );
};
