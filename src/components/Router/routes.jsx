import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { useContext } from 'react';
import { TalentContext } from '../../shared/context/TalentContext';
import { ProofList } from '../ProofList';

export const Router = () => {
  const { isTalentDataLoaded } = useContext(TalentContext);
  let element = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'profile/:id',
          element: <Profile isTalentDataLoaded={isTalentDataLoaded} />,
        },
        {
          path: 'proofList/',
          children: [
            {
              index: true,
              element: <ProofList />,
            },
          ],
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};
