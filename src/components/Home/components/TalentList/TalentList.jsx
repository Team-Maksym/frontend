import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { getAllTalents } from '../../../../shared/service/ProfileService';
import { SmallTalentCard } from '../SmallTalentCard';
import { PaginationCustom } from './components/PaginationCustom';
import { PreLoaderUser } from './components/PreLoadUser';
import { AvatarValidation } from '../../../../shared/components/AvatarValidation';

export const TalentList = () => {
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);

  const items = talents.map((item, index) => {
    let localAvatar = AvatarValidation(item.avatar);

    return (
      <Grid sx={{ minHeight: '255px' }} item xs={1} key={index}>
        <SmallTalentCard
          id={item.id}
          talentName={item.full_name}
          position={item.position || 'Talent'}
          avatar={localAvatar || `${localAvatar}`}
        />
      </Grid>
    );
  });

  return (
    <Box id="TalentList" sx={{ flexGrow: 1, m: '25px auto', p: { xs: '0 10px', md: '0 25px' } }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 5 }} sx={{ alignItems: 'stretch' }}>
        {!loading ? items : <PreLoaderUser />}
      </Grid>
      <PaginationCustom size={10} setHook={setTalents} queryFunction={getAllTalents} setLoading={setLoading} />
    </Box>
  );
};
