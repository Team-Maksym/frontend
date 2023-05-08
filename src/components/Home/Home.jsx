import { useContext } from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from './components/TalentList';
import { Banner } from '../Wrapper/components/Banner';
import { Box } from '@mui/material';
import { PersonContext } from '../../shared/context/PersonContext';

export const Home = () => {
  const { person } = useContext(PersonContext);
  
  return (
    <>
      {person ? (
        <Box
          sx={{
            height: 70,
          }}
        />
      ) : (
        <Banner />
      )}
      <Wrapper>
        <TalentList />
      </Wrapper>
    </>
  );
};
