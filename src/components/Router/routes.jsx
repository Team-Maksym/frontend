import { useRoutes } from 'react-router-dom';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { useContext } from 'react';
import { PersonContext } from '../../shared/context/PersonContext';
import { RestoreStatus } from '../RestoreStatus';
import React, { Suspense } from 'react';
import { PreLoader } from '../PreLoader';
const Home = React.lazy(() => import('../Home'));
const Profile = React.lazy(() => import('../Profile'));
const ProofList = React.lazy(() => import('../ProofList'));

export const Router = () => {
  const { isPersonDataLoaded } = useContext(PersonContext);
  let element = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<PreLoader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: 'profile/:id',
          element: (
            <Suspense fallback={<PreLoader />}>
              <Profile isPersonDataLoaded={isPersonDataLoaded} />,
            </Suspense>
          ),
        },
        {
          path: 'proofList/',
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<PreLoader />}>
                  <ProofList />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: 'recovery/',
          element: <RestoreStatus />,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};
