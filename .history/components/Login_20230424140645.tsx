'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login() {
  return (
    <div className="login bg-[#249e80]">
        <Image
            src='/chatLogo.png'
            alt='logo'
            width={300}
            height={300}
        />
        <button className="signin">Sign in </button>
    </div>
  )
}

export default Login