import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { useContext } from 'react';
import { PersonContext } from '../../shared/context/PersonContext';
import { ProofList } from '../ProofList';

export const Router = () => {
  const { isPersonDataLoaded } = useContext(PersonContext);
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
          element: <Profile isPersonDataLoaded={isPersonDataLoaded} />,
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
