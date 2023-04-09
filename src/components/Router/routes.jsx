import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';

export const Router = ({ logged }) => {
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
              element: <Profile logged={logged} />,
            },
            {
              path: ':id',
              element: <Profile logged={logged} />,
            },
          ],
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};

