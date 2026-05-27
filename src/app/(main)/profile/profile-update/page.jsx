"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';



const ProfileUpdate = () => {
  const r = useRouter()

  const handleUpdate = async(e) => {
    e.preventDefault();

    await authClient.updateUser({
      name : e.target.newName.value,
      image : e.target.photo.value,

    });

    r.push("/profile");

  }

  return (
     <div className="flex flex-col justify-center items-center  container mx-auto my-20 max-w-md">
            <h1 className="text-3xl font-bold mb-8">Update Profile</h1>

            <form onSubmit={handleUpdate} className='text-left'>

              {/* update name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter your updated name</legend>
                <input name='newName' type="text" className="input" placeholder="Type here" />
              </fieldset>

              {/* update photo */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter the URL of new picture</legend>
                <input name='photo' type="text" className="input" placeholder="Photo URL" />
              </fieldset>


              <button className="btn btn-neutral mt-4">Update</button>
            </form>
        </div>
  );
};

export default ProfileUpdate;