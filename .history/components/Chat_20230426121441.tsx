'use client'
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';

type Props = {
    chatid: string;
}

function Chat({chatid}: Props) {
  const {data: session} = useSession()

  // mapping
  const [messages] = useCollection(session && query(
    collection(db,'users', session?.user?.email!, 'chats', chatid, 'messages'),
    orderBy('createdAt', 'asc')
  ))

  return (
    <div className="chat flex-1">Chat</div>
    // mapping out the messages
    {message: messages}

  )
}

export default Chat