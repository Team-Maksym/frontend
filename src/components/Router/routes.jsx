import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';
import { ErrorPage } from '../../shared/components/Error/ErrorPage';
import { useContext } from 'react';
import { TalentContext } from '../../shared/context/TalentContext';

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
          element: <Profile isTalentDataLoaded={isTalentDataLoaded}/>,
        },
      ],
    },
    { path: '*', element: <ErrorPage /> },
  ]);

  return element;
};

