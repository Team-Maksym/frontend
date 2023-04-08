import { Wrapper } from '../Wrapper';
import { BigTalentCard } from './components/BigTalentCard';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ProofMenu } from './components/ProofMenu';
export const Profile = ({ logged }) => {
  return (
    <>
      {logged && !!localStorage.token ? (
        <Wrapper>
          <Box sx={{ display: 'flex' }}>
            <BigTalentCard talentName="Susan" position="front-end developer" />
            <ProofMenu />
          </Box>
        </Wrapper>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
