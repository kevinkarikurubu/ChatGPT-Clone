'use client'
import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { addDoc, collection } from 'firebase/firestore'

function Newchat() {
  const {data:sessions} = useSession()
  const router = useRouter()

  const createNewChat = async() => {
    const doc = await addDoc(collection(db, 'users', session ))
  }

  return (
    <div className="newChat">
        <PlusIcon className="h-4 w-4" />
        <p>New chat</p>
    </div>
  )
}

export default Newchat