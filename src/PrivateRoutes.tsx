import React from 'react';
import { Navigate } from 'react-router-dom';
import { RootState, useAppSelector } from './redux/store';

type PrivateRoutesProps = {
  component: React.ReactElement;
};

type LoggedRouteProps = {
  component: React.ReactElement;
};

function PrivateRoutes({ component }: PrivateRoutesProps) {
  const { user, isLogin } = useAppSelector((state: RootState) => state.auth);

  if (!user?.id || !isLogin) {
    return <Navigate replace to="/login" />;
  }

  return component;
}

export function LoggedRoute({ component }: LoggedRouteProps) {
  const { user, isLogin } = useAppSelector((state: RootState) => state.auth);

  const userLogged = user?.id && isLogin;

  if (userLogged) return <Navigate to="/" />;

  return component;
}

export default PrivateRoutes;
