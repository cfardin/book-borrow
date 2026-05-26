"use client"
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {

    const {register, handleSubmit, formState : {errors}} = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false);

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


    const handleGoogleSignIn = async() =>{
      const data = await authClient.signIn.social({
            provider: "google",
      });
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
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <div className="flex gap-3">
              <input
              {...register("password", {required : "password is required"})} 
              type={isShowPassword ? "text" : "password"}className="input" placeholder="password" />
              <button className="absolute right-4 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>

            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            
          </fieldset>

          <div className="flex gap-2 justify-center items-center mt-8">
            <button className=" w-40 bg-slate-900 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button>
            <button onClick={handleGoogleSignIn} className="w-40 border-slate-700 text-slate-700 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><FaGoogle className="" />Google</button>

          </div>
       

        </form>
        <p>Do not have an account ? <Link href={"/register"} className="text-red-500">Register</Link></p> 
      </div>

      {/* <Link href={"/"} onClick={handleGoogleSignIn} className="mt-5 shadow-2xl btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><FaGoogle />Continue with Google</Link> */}
    </div>
  );
};

export default LoginPage;
