import { db } from '@/firebase'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, {useEffect, useState} from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

type Props = {
    id: string
  }

function SideChat({id}: Props) {
    const pathname = usePathname()
    const router = useRouter()
    const {data: session} = useSession()
    const [activeChat, setActiveChat] = useState(false)

    const [messages] = useCollection(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
        
    )

    useEffect(() => {
        if (!pathname) return;

        setActiveChat(pathname.includes(id))
    }, [id, pathname])

    const deleteChat =async() => {
        await deleteDoc(doc(db,'users', session?.user?.email!, 'chats', id))
        router.replace('/')
    }

    return (
        <>
        <Link href={`/chat/${id}`}>
            <div className={`newChat border-none my-2 text-white ${activeChat && 'bg-gray-700/50'}`}>
            
                <ChatBubbleLeftIcon className="h-6 w-6" />
                
                    <p className='flex-1 hidden md:inline-flex truncate'>
                        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
                    </p>
                <TrashIcon onClick={}className="h-6 w-6 text-gray-700 hover:text-red-700"/>
            </div>
        </Link>
        
        </>
    )
}

export default SideChat