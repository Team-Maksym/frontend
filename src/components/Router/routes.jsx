import { useRoutes } from 'react-router-dom';
import { Home } from '../Home';
import { Profile } from '../Profile';

export const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
      // children: [
      //   {
      //     path: "/profile",
      //     element: <Profile />,
      //   },
      // ],
    },
    { path: "*", element: <div>Error</div> },
  ]);

  return element;
}
