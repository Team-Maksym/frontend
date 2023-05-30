import { useEffect, useState } from 'react';
import { Box, Pagination, PaginationItem, Stack } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const PaginationCustom = ({ size, sort, filter, setHook, queryFunction, setLoading }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let query = new URLSearchParams(location.search);
  const [count, setCount] = useState();
  const [page, setPage] = useState(parseInt(query.get('page') || '1') - 1);

  useEffect(() => {
    // query = new URLSearchParams(location.search);
    setPage(parseInt(query.get('page') || '1') - 1);
    queryFunction(page, size, sort, filter)
      .then((response) => {
        setHook(response.data);
        setCount(Math.ceil(response.total / size));
        if (typeof setLoading === 'function') {
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        navigate('/404', { replace: true });
      });
  }, [page, size, sort, filter, setHook, queryFunction, location]);

  console.log("count", count);
  console.log("size", size);

  return (
    <Stack spacing={2}>
      {count ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '48px' }}>
          <Pagination
            page={page + 1}
            count={count}
            renderItem={(item) => (
              <PaginationItem
                sx={{ minWidth: { xs: '35px', sm: '40px' }, height: { xs: '35px', sm: '40px' } }}
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
      ) : null}
    </Stack>
  );
};

