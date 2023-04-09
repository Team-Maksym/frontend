import * as React from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from './components/TalentList';
import { Banner } from '../Wrapper/components/Banner';
import { Box } from '@mui/material';

export const Home = () => {
  return (
    <>
      {!!localStorage.token ? (
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
