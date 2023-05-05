import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { getAllTalents } from '../../../../shared/service/TalentProfileService';
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
    <Box id="TalentList" sx={{ flexGrow: 1, m: '25px auto', p: '0 25px' }}>
      <Grid container spacing={3} columns={5} sx={{ alignItems: 'stretch' }}>
        {!loading ? items : <PreLoaderUser />}
      </Grid>
      <PaginationCustom size={10} setHook={setTalents} queryFunction={getAllTalents} setLoading={setLoading} />
    </Box>
  );
};
