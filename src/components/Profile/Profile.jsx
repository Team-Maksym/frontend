import { Wrapper } from '../Wrapper';
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
  );
};
