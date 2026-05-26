"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiBookshelf } from "react-icons/gi";
import userPic from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const links = <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/all-books"}>All-Books</Link></li>
        <li><Link href={"/profile"}>Profile</Link></li>
    </>

    const {data : session} = authClient.useSession();
    const user = session?.user;

    console.log(user);

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl"><GiBookshelf />Book-Borrow</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="flex gap-5 navbar-end">
        {
          user &&  <h2>Hello {user?.name}</h2>
        }
        <img src={user?.image || userPic.src} alt='user pic' width={40} height={40} className="rounded-full"></img>
        {
          user ? <Link href={"/login"} onClick={async() => await authClient.signOut()} className="btn font-bold">Log Out</Link> : <Link href={"/login"} className="btn font-bold">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
