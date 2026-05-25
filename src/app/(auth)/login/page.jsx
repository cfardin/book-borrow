"use client"
import { error } from "better-auth/api";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const {register, handleSubmit, formState : {errors}} = useForm()


    const handleLogin = (data) =>{
        console.log(data);

    }



  return (
    <div className="flex justify-center items-center min-h-[80vh] container mx-auto ">

      <div className="bg-amber-100 p-10 rounded-lg space-y-4">
        <h2 className="text-center font-bold">
          Login Your Book-Borrow Account
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">

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

          <button className="bg-slate-900 text-white w-full btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>


        </form>
        <p>Do not have an account ? <Link href={"/register"} className="text-red-500">Register</Link></p> 
      </div>
    </div>
  );
};

export default LoginPage;
