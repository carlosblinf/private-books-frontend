import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const LoginContainer = tw.div`
  flex min-h-screen justify-center items-center bg-blue-200
`;

const LoginCard = tw.div`
  flex w-4/5 md:w-3/5 lg:w-2/6 flex-col justify-center items-start p-8 md:p-16 min-h-[600px] gap-10 bg-white rounded
`;

const From = tw.form`
 w-full flex flex-col justify-center items-start gap-4
`;

const TextInput = tw.input`
  w-full p-2 border-b border-black text-2xl
`;

function Login() {
  return (
    <LoginContainer>
      <LoginCard>
        <h1 className="text-5xl font-semibold text-gray-700">Login</h1>
        <From>
          <TextInput type="text" placeholder="username" />
          <TextInput type="password" placeholder="password" />
          <button className="w-2/5 p-3 text-xl text-white bg-blue-900 rounded" type="submit">
            Login
          </button>
        </From>
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
