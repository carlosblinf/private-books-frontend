import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterCard, LoginContainer } from '../../styled-components/forms';
import RegisterForm from '../../components/RegisterForm';

function Register() {
  return (
    <LoginContainer>
      <RegisterCard>
        <h1 className="text-5xl font-semibold text-gray-700">Register</h1>
        <RegisterForm />
        <span>
          Already have an account?{' '}
          <Link className="text-blue-900" to="/login">
            Login
          </Link>
        </span>
      </RegisterCard>
    </LoginContainer>
  );
}

export default Register;
