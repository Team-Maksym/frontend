import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { getAllTalents } from '../../../../shared/service/TalentProfileService';
import { SmallTalentCard } from '../SmallTalentCard';
import { PaginationCustom } from './components/PaginationCustom';
import { PreLoaderUser } from './components/PreLoadUser';
import { AvatarValidation } from '../../../../shared/components/AvatarValidation';
import { useLocation } from 'react-router-dom';
import { SkillAutocomplete } from '../../../ProofList/components/SkillAutocomplete';

export const TalentList = () => {
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  let query = new URLSearchParams(location.search);
  const [skill, setSkill] = useState(query.get('skill') || null);

  const items = talents?.map((item, index) => {
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
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3, mr: -2 }}>
        <SkillAutocomplete width={'300px'} skill={skill} setSkill={setSkill} />
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 5 }} sx={{ alignItems: 'stretch' }}>
        {!loading ? items : <PreLoaderUser />}
      </Grid>
      <PaginationCustom
        size={10}
        filter={skill}
        setHook={setTalents}
        queryFunction={getAllTalents}
        setLoading={setLoading}
      />
    </Box>
  );
};

