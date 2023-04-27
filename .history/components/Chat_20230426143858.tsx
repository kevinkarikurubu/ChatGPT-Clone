'use client'
import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';

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
    <div className="chat flex-1 overflow-y-scroll overflow-x-hidden">

    {messages?.}
    {/*  mapping out the messages */}
    {messages?.docs.map((message) =>(
      <Message key={message.id} message={message.data()} />
    ))}
    </div>
  )
}

export default Chat