import * as React from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from './components/TalentList';
import { Banner } from '../Wrapper/components/Banner';

export const Home = () => {
  return (
    <>
      <Banner />
      <Wrapper>
        <TalentList />
      </Wrapper>
    </>
  );
};

