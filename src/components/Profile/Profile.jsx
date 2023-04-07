import { Box } from '@mui/material';
import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './BigTalentCard/BigTalentCard';
import { ProofMenu } from './ProofMenu/ProofMenu';

export const Profile = () => {
  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        <BigTalentCard talentName="Susan" position="front-end developer" />
        <ProofMenu />
      </Box>
    </Wrapper>
  );
};
