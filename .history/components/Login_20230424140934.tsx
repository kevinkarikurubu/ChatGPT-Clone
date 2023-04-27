'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className="login bg-[#29a787] flex flex-col h-screen items-center justify-center text-center">
        <Image
            src='/chatLogo.png'
            alt='logo'
            width={300}
            height={300}
        />
        <button 
            className="signin text-3xl font-bold"
            onClick={()}
        >Sign in </button>
    </div>
  )
}

export default Login