import React from 'react';
import { Link } from 'react-router-dom';
import { LoginCard, LoginContainer } from '../../styled-components/forms';
import LoginForm from '../../components/LoginForm/index';

function Login() {
  return (
    <LoginContainer>
      <LoginCard>
        <h1 className="text-5xl font-semibold text-gray-700">Login</h1>
        <LoginForm />
        <span>
          Don't you have an account?{' '}
          <Link className="text-blue-900" to="/register">
            Register
          </Link>
        </span>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
