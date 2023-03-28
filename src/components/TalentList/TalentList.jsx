import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { getAllTalents } from '../../service';
import { SmallTalentCard } from '../SmallTalentCard';
import { PaginationCustom } from './components/PaginationCustom';

export const TalentList = () => {
  const [talents, setTalents] = useState([]);

  const tals = [
    {
      full_name: 'Anna Sukharieva',
      position: 'front-end'
    }
  ]

  const items = talents.map((item, index) => {
    return (
      <Grid sx={{ minHeight: '255px'}} item xs={1} key={index}>
        <SmallTalentCard talentName={item.full_name} position={item.position} avatar={item.avatar} />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, m: '25px auto', p: '0 25px'}}>
      <Grid container spacing={3} columns={5} sx={{ alignItems: 'stretch' }}>
        {items}
      </Grid>
      <PaginationCustom setHook={setTalents} queryFunction={getAllTalents} />
    </Box>
  );
};
