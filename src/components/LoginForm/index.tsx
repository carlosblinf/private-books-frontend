import React from 'react';
import { From, TextInput } from '../../styled-components/forms';

function LoginForm() {
  return (
    <From>
      <TextInput type="text" placeholder="username" />
      <TextInput type="password" placeholder="password" />
      <button className="w-2/5 p-3 text-xl text-white bg-gray-800 rounded" type="submit">
        Login
      </button>
    </From>
  );
}

export default LoginForm;
