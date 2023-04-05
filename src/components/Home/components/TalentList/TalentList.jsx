import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { getAllTalents } from '../../../../shared/service/ProfileService';
import { SmallTalentCard } from '../SmallTalentCard';
import { PaginationCustom } from './components/PaginationCustom';
import { PreLoaderUser } from './components/PreLoadUser';

export const TalentList = () => {
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);

  const items = talents.map((item, index) => {
    let localAvatar = null;
    if (item.avatar) {
      localAvatar = `https://drive.google.com/uc?export=view&id=${item.avatar.slice(32, -20)}`;
    }

    return (
      <Grid sx={{ minHeight: '255px' }} item xs={1} key={index}>
        <SmallTalentCard
          talentName={item.full_name}
          position={item.position || 'Talent'}
          avatar={localAvatar || `${localAvatar}`}
        />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, m: '25px auto', p: '0 25px' }}>
      <Grid container spacing={3} columns={5} sx={{ alignItems: 'stretch' }}>
        {!loading ? items : <PreLoaderUser />}
      </Grid>
      <PaginationCustom setHook={setTalents} queryFunction={getAllTalents} setLoading={setLoading} />
    </Box>
  );
};
