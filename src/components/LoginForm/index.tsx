import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { From, TextInput } from '../../styled-components/forms';
import { LoginSchema, LoginSchemaType } from '../../utils/validateForm';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  function onsubmit(data: LoginSchemaType) {
    console.log(data);
  }

  return (
    <From css={{ gap: '2rem' }} onSubmit={handleSubmit(onsubmit)}>
      <div className="formGroup">
        <TextInput
          type="text"
          placeholder="username"
          {...register('userName')}
          className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.userName?.message}</div>
      </div>
      <div className="formGroup">
        <TextInput
          type="password"
          placeholder="password"
          {...register('password')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <button className="w-2/5 p-3 text-xl text-white bg-gray-800 rounded" type="submit">
        Login
      </button>
    </From>
  );
}

export default LoginForm;
