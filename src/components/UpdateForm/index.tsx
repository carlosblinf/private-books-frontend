/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { From, TextInput } from '../../styled-components/forms';
import { UpdateSchema, UpdateSchemaType } from '../../utils/validateForm';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { User } from '../../types/user';
import { updateAcound } from '../../redux/slices/auth.slice';

function UpdateForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateSchemaType>({
    resolver: zodResolver(UpdateSchema),
  });

  useEffect(() => {
    if (user.id) {
      setValue('fullName', user.fullName);
      setValue('userName', user.userName);
      setValue('email', user.email);
    }
  }, [user]);

  const [img, setImg] = useState<File>();
  const imgRef = useRef<HTMLInputElement>(null);

  const handleOnFileChange = ({ currentTarget: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setImg(files[0]);
    }
  };

  const urlImg = () => {
    if (img) return URL.createObjectURL(img);
    return user.image;
  };
  const notify = (text: string) => toast.success(text);

  function onsubmit(data: UpdateSchemaType) {
    const send: User = {
      userName: data.userName,
      fullName: data.fullName,
      email: data.email,
      image: urlImg(),
    };
    dispatch(updateAcound(send));
    notify('User updated');
  }
  return (
    <From onSubmit={handleSubmit(onsubmit)}>
      <div className="m-auto">
        <input id="file" className="hidden" type="file" ref={imgRef} onChange={handleOnFileChange} />
        <label htmlFor="file">
          <div className="item">
            <img className="w-[50px] h-[50px] rounded-full cursor-pointer" src={urlImg()} alt="profile" />
          </div>
        </label>
      </div>
      <div className="formGroup">
        <TextInput
          type="text"
          placeholder="full name"
          {...register('fullName')}
          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.fullName?.message}</div>
      </div>
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
          type="email"
          placeholder="email"
          {...register('email')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
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
      <div className="formGroup">
        <TextInput
          type="password"
          placeholder="confirm password"
          {...register('confirm_password')}
          className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.confirm_password?.message}</div>
      </div>
      <button className="w-2/5 p-3 text-xl text-white bg-gray-800 rounded" type="submit">
        Update
      </button>
    </From>
  );
}

export default UpdateForm;
