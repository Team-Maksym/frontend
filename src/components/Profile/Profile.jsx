import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard/BigTalentCard';
import { ProofMenu } from './components/ProofMenu/ProofMenu';
import { Box } from '@mui/material';
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
