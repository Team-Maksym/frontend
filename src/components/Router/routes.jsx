import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../ErrorPage';

export const Router = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};

