import { useEffect, useState } from 'react';
import { Box, Pagination, PaginationItem, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const PaginationCustom = ({ size, sort,setSort, setHook, queryFunction, setLoading }) => {
  const location = useLocation();
  let query = new URLSearchParams(location.search);
  const [count, setCount] = useState();
  const [page, setPage] = useState(parseInt(query.get('page') || '1') - 1);

  useEffect(() => {
    query = new URLSearchParams(location.search);
    setPage(parseInt(query.get('page') || '1') - 1);
    // if (setSort !== undefined) {
    //   setSort(query.get('sort') || sort);
    // }
    // console.log(sort, page, location.search, query);
    queryFunction(page, size, sort)
      .then((response) => {
        setHook(response.data);
        setCount(Math.ceil(response.total / size));
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page, size, sort, setHook, queryFunction, location]);

  return (
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '48px' }}>
        <Pagination
          page={page + 1}
          count={count}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`?page=${item.page}${sort !== undefined ? `&sort=${sort}` : ''}`}
              {...item}
            />
          )}
          size="large"
          shape="rounded"
          onChange={(event, value) => {
            setPage(--value);
          }}
          color="primary"
          sx={{
            '& .MuiPaginationItem-page:not(.Mui-selected)': {
              color: 'neutral.white',
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              color: 'secondary.main',
              fontWeight: 'bold',
            },
            '& .MuiPaginationItem-icon': {
              color: 'neutral.white',
            },
          }}
        />
      </Box>
    </Stack>
  );
};
