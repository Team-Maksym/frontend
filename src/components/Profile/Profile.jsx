import { Wrapper } from '../Wrapper';
<<<<<<< HEAD
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
=======
import { BigTalentCard } from './components/BigTalentCard';
import { Navigate } from 'react-router-dom';

export const Profile = ({ logged }) => {
  return (
    <>
      {logged && !!localStorage.token ? (
        <Wrapper>
          <BigTalentCard talentName="Susan" position="front-end developer" />
        </Wrapper>
      ) : (
        <Navigate to="/" />
      )}
    </>
>>>>>>> dev
  );
};
