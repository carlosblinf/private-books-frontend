import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { From, TextInput } from '../../styled-components/forms';
import { LoginSchema, LoginSchemaType } from '../../utils/validateForm';
import { login } from '../../redux/slices/auth.slice';
import { useAppDispatch } from '../../redux/store';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const notify = (text: string) => toast.error(text);

  function onsubmit(data: LoginSchemaType) {
    dispatch(login(data))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        notify(message);
      });
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
