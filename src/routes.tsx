import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoutes, { LoggedRoute } from './PrivateRoutes';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Favorite = lazy(() => import('./pages/Favorite'));
const Profile = lazy(() => import('./pages/Profile'));
const Detail = lazy(() => import('./pages/Detail'));

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <LoggedRoute component={<Login />} />,
  },
  {
    path: '/register',
    element: <LoggedRoute component={<Register />} />,
  },
  {
    path: '/error-404',
    element: <Error404 />,
  },
  {
    path: '/',
    element: <PrivateRoutes component={<HomeLayout />} />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/books/:isbn',
        element: <Detail />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/error-404" />,
  },
]);

export default routes;
