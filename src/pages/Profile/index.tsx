import React from 'react';
import UpdateForm from '../../components/UpdateForm';

function Profile() {
  return (
    <div className="flex flex-col items-center gap-5 px-5 py-5 md:px-20">
      <h3 className="text-3xl font-bold">Profile</h3>
      <div className="md:w-1/3">
        <UpdateForm />
      </div>
    </div>
  );
}

export default Profile;
