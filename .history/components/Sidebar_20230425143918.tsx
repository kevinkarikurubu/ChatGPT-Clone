'use client'

import React from 'react'
import Newchat from './Newchat'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '@/firebase'
import { collection } from 'firebase/firestore'
import SideChat from './SideChat'

function Sidebar() {
  const {data: session} = useSession()
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats')
  )

  return (
    <div className="flex flex-col p-2 h-screen">
        <div className="side flex-1">
            <div className="newChatbar">
                {/* New chat */}
                <Newchat />
                <div className="model">
                    {/* Model */}
                </div>
                    {/* Mapping through the chat  */}
                    {chats?.docs.map(chat => (
                      <SideChat key={chat.id} id={chat.id}/>
                    ))}
                    
            </div>
        </div>

        {session && 
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={session.user?.image || ''} 
            alt="user-image" 
            className="w-12 h-12 rounded-md cursor-pointer mx-auto mb-2"
            onClick={() => signOut()}
          />
        }
    </div>
  )
}

export default Sidebar