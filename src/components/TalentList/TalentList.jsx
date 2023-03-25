import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SmallTalentCard } from '../SmallTalentCard';
import { Pagination, Stack, Grid, Box } from '@mui/material';

export const TalentList = () => {
  const [talents, setTalents] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users', {
        params: {
          skip: page * limit,
          limit: limit,
        },
      })
      .then((response) => {
        setTalents(response?.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page, limit]);

  // useEffect(() => {
  //   axios
  //     .get('http://18.194.159.42:8083/talents', {
  //       params: {
  //         page: 0,
  //         size: 10,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setTalents(response?.data.users);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const items = talents.map((item, index) => {
    return (
      <Grid item xs={1} key={index}>
        <SmallTalentCard talentName={item.firstName} position={item.company.title} avatar={item.image} />
        {/*<SmallTalentCard talentName={item.full_name} position={item.position} avatar={item.avatar} />*/}
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, m: '25px auto', p: '0 25px' }}>
      <Grid container spacing={3} columns={5}>
        {items}
      </Grid>
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
    </Box>
  );
};
