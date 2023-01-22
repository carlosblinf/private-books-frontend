import React from 'react';
import { From, TextInput } from '../../styled-components/forms';

function RegisterForm() {
  return (
    <From>
      <TextInput type="text" placeholder="fullname" />
      <TextInput type="text" placeholder="username" />
      <TextInput type="text" placeholder="email" />
      <TextInput type="password" placeholder="password" />
      <TextInput type="password" placeholder="repeat password" />
      <button className="w-2/5 p-3 text-xl text-white bg-blue-900 rounded" type="submit">
        Register
      </button>
    </From>
  );
}

export default RegisterForm;
