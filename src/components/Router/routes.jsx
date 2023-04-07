import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../ErrorPage';

export const Router = ({logged}) => {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/profile',
      element: <Profile logged={logged} />,
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};

