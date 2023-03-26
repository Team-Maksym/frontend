import * as React from 'react';
import { Wrapper } from '../Wrapper';
import { TalentList } from '../TalentList';
import { Banner } from '../Wrapper/components/Banner';

const data = [
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 1,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 2,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 3,
  },
  {
    full_name: 'Tina Rojas',
    position: 'Full-stack developer',
    url: 'static/3.jpg',
    id: 4,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 5,
  },
  {
    full_name: 'Shannon Sykes',
    position: 'DevOps',
    url: 'static/2.jpg',
    id: 6,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 7,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 8,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 9,
  },
  {
    full_name: 'Emmy Higgins',
    position: 'Front-end developer',
    url: 'static/1.jpg',
    id: 10,
  },
];

export const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <TalentList data={data} />
    </Wrapper>
  );
};

