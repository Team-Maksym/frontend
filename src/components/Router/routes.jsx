import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { ProofList } from '../ProofList';

export const Router = () => {
  let element = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'profile/',
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: ':id',
              element: <Profile />,
            },
          ],
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
