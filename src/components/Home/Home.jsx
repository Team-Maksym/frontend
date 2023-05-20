import { useContext } from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from './components/TalentList';
import { Banner } from '../Wrapper/components/Banner';
import { Box } from '@mui/material';
import { PersonContext } from '../../shared/context/PersonContext';
import { TagCloudCustom } from '../ProofList/components/TagCloudCustom/TagCloudCustom';

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
        <Box width="100%" sx={{ overflow: 'hidden', position: 'relative' }}>
          <TagCloudCustom />
          <Banner />
        </Box>
      )}
      <Wrapper>
        <TalentList />
      </Wrapper>
    </>
  );
};
