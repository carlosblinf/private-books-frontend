/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { From, TextInput } from '../../styled-components/forms';
import user from '../../assets/user.png';

function RegisterForm() {
  const [img, setImg] = useState<File>();
  const imgRef = useRef<HTMLInputElement>(null);

  const handleOnFileChange = ({ currentTarget: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setImg(files[0]);
    }
  };

  const urlImg = () => {
    if (img) return URL.createObjectURL(img);
    return user;
  };
  return (
    <From>
      <div className="m-auto">
        <input id="file" className="hidden" type="file" ref={imgRef} onChange={handleOnFileChange} />
        <label htmlFor="file">
          <div className="item">
            <img className="w-[50px] h-[50px] rounded-full cursor-pointer" src={urlImg()} alt="profile" />
          </div>
        </label>
      </div>
      <TextInput type="text" placeholder="full name" />
      <TextInput type="text" placeholder="username" />
      <TextInput type="email" placeholder="email" />
      <TextInput type="password" placeholder="password" />
      <TextInput type="password" placeholder="confirm password" />
      <button className="w-2/5 p-3 text-xl text-white bg-gray-800 rounded" type="submit">
        Register
      </button>
    </From>
  );
}

export default RegisterForm;
