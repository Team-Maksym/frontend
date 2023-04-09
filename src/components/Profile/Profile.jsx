import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard';
import { Box } from '@mui/material';
import { ProofMenu } from './components/ProofMenu';
export const Profile = () => {
  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        <BigTalentCard />
        {/* <ProofMenu /> */}
      </Box>
    </Wrapper>
  );
};
