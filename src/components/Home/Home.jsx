import { useContext } from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from './components/TalentList';
import { Banner } from '../Wrapper/components/Banner';
import { Box } from '@mui/material';
import { TalentContext } from '../../shared/context/TalentContext';

export const Home = () => {
  const { talent } = useContext(TalentContext);
  
  return (
    <>
      {talent ? (
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
