"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import userPic from '@/assets/user.png'
import Link from 'next/link';



const ProfilePage = () => {

    const {data : session} = authClient.useSession();
    const user = session?.user;


    return (
        <div className="container mx-auto my-20 ">
            <div className="flex flex-col justify-around items-center gap-4">
                
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <img
                    src={user?.image || userPic.src}
                    alt="profile"
                    width={200}
                    height={200}
                    className="rounded-full"
                    />

                    <h1 className="text-2xl font-bold">{user?.name}</h1>
                    <p className="">{user?.email}</p>

                </div>
              
                <div className=" border-t pt-6 grid grid-cols-2 gap-4 text-sm">
                    <p>Name</p>
                    <p className="font-semibold">{user?.name}</p>
                    <p>Email</p>
                    <p className="font-semibold">{user?.email}</p>
                    <p>Account Created</p>
                    <p className="font-semibold">{new Date(user?.createdAt).toLocaleDateString()}</p>

                    <Link href={"/profile/profile-update"} className="btn btn-neutral w-full mt-4">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;