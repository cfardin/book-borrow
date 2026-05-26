"use client"
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {

    const {register, handleSubmit, formState : {errors}} = useForm()


    const handleLogin = async(userData) =>{
      console.log(userData);
      const { data, error } = await authClient.signIn.email({
        email: userData.email, // required
        password: userData.password,
        rememberMe : true,
        callbackURL: "/",
    });

      console.log(data, error);

      if(error){
        alert(error.message);
      }

      if(data){
        alert("Login successful");
      }
    }





  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] container mx-auto ">

      <div className="bg-amber-100 p-10 w-100 rounded-lg space-y-4 shadow-2xl">
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

          <div className="flex gap-2 justify-center items-center">
            <button className="w-full bg-slate-900 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>
           
          </div>
       

        </form>
        <p>Do not have an account ? <Link href={"/register"} className="text-red-500">Register</Link></p> 
      </div>

      <Link href={"/"} className="mt-5 shadow-2xl btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><FaGoogle />Continue with Google</Link>
    </div>
  );
};

export default LoginPage;
