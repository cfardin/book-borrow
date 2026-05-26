"use client"
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {

    const {register, handleSubmit, formState : {errors}} = useForm()


    const handleLogin = async(userData) =>{
        console.log(userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name, 
            email: userData.email, 
            password: userData.password, 
            image: userData.photo,
            callbackURL: "/",
        });

        console.log(data, error);
        if(error){
          // toast(error.message);
          alert(error.message);
        }

        if(data){
          toast("Registration Successful");
        }

    }



  return (
    <div className="flex justify-center items-center min-h-[80vh] container mx-auto ">

      <div className="bg-amber-100 p-10 w-100 rounded-lg space-y-4 shadow-2xl">
        <h2 className="text-center font-bold">
          Register Here
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

            {/* name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input  type="text" 
            {...register("name", {required : "Name is required"})}
            className="input" placeholder="your name" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </fieldset>

            {/* photo */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Profile Photo</legend>
            <input  type="text" 
            {...register("photo")}
            className="input" placeholder="Your Picture URL" />
          </fieldset>


            {/* email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input  type="email" 
            {...register("email", {required : "Email is required"})}
            className="input" placeholder="your email" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </fieldset>

          {/* password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
            {...register("password", {required : "password is required"})} 
            type="password" className="input" placeholder="password" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </fieldset>

          <button className="bg-slate-900 text-white w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Register</button>
          <button className="w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><FaGoogle /> Register with Google</button>



        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
