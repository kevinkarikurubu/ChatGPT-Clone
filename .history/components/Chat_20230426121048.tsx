'use client'
import { useSession } from 'next-auth/react';
import React from 'react'

type Props = {
    chatid: string;
}

function Chat({chatid}: Props) {
  const {data: session} = useSession()

  
  return (
    <div className="chat flex-1">Chat</div>
  )
}

export default Chat