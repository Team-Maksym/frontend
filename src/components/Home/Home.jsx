import { useContext } from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from './components/TalentList';
import { Banner } from '../Wrapper/components/Banner';
import { Box } from '@mui/material';
import { PersonContext } from '../../shared/context/PersonContext';
import React, { Suspense } from 'react';
import { PreLoader } from '../PreLoader';
const TagCloudCustom = React.lazy(() => import('../ProofList/components/TagCloudCustom'));

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
          <Suspense fallback={<PreLoader />}>
            <TagCloudCustom />
          </Suspense>
          <Banner />
        </Box>
      )}
      <Wrapper>
        <TalentList />
      </Wrapper>
    </>
  );
};
