'use client'
import { useSession } from 'next-auth/react';
import React from 'react'

type Props = {
    chatid: string;
}

function Chat({chatid}: Props) {
  const {data: session} = useSession()

  // mapping
  const [messages] = useCollection(session && query(
    cp
  ))

  return (
    <div className="chat flex-1">Chat</div>
  )
}

export default Chat