import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';

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
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};

