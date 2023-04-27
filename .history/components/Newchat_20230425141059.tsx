'use client'
import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'

type Props

function Newchat({id: Props}) {
  const {data:session} = useSession()
  const router = useRouter()

  const createNewChat = async() => {
    const doc = await addDoc
    (collection(db, 'users', session?.user?.email!, 'chats' ),{
      messages: [],
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    }
    )
    router.push(`/chat/${doc.id}`)
  }

  return (
    <div className="newChat" onClick={createNewChat}>
        <PlusIcon className="h-4 w-4" />
        <p>New chat</p>
    </div>
  )
}

export default Newchat