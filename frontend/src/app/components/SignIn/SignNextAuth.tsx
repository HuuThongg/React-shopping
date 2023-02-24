'use client'
import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { signIn, signOut } from "next-auth/react";

const SignNextAuth = () => {
  return (
    <div className="flex flex-col mb-5 space-y-3">
      <button
        onClick={() => signIn("github")}
        className="flex w-full justify-center items-center space-x-2 bg-blue-300  hover:bg-blue-500 text-black hover:text-white font-semibold rounded-md py-2" >
        <BsGithub />
        <span>Sign in with Github</span>
      </button>
      <button
        onClick={() => signIn("google")}
        className="flex w-full justify-center items-center space-x-2 bg-blue-300  hover:bg-blue-500 text-black hover:text-white font-semibold rounded-md py-2" >
        <FcGoogle />
        <span>Sign in with Google</span>
      </button>
      <button
        onClick={() => signIn("discord")}
        className="flex w-full justify-center items-center space-x-2 bg-blue-300  hover:bg-blue-500 text-black hover:text-white font-semibold rounded-md py-2">
        <FaDiscord />
        <span>Sign in with Discord</span>
      </button>
    </div>
  )
}

export default SignNextAuth