import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import AccessDenied from './pages/AccessDenied';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Register from './pages/Register';

const Home = lazy(() => import('./pages/Home'));

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/error-404',
        element: <Error404 />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/error-404" />,
  },
]);

export default routes;
