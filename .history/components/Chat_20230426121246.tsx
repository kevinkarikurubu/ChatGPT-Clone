'use client'
import { collection } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'

type Props = {
    chatid: string;
}

function Chat({chatid}: Props) {
  const {data: session} = useSession()

  // mapping
  const [messages] = useCollection(session && query(
    collection(db,'users', session?.user?.email!, 'chats', chatid, 'messages')
  ))

  return (
    <div className="chat flex-1">Chat</div>
  )
}

export default Chat