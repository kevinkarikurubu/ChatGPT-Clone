import { db } from '@/firebase'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { collection, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, {useState} from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

type Props = {
    id: string
  }

function SideChat({id}: Props) {
    const pathname = usePathname()
    const router = useRouter()
    const {data: session} = useSession()
    const [activeChat, setActiveChat] = useState(false)

    const [messages] = useCollection(query(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
        orderBy('createdAt', 'asc')
    ))

    return (
        <>
        <Link href={`/chat/${id}`}>
            <div className="newChat border-none my-2 text-white">
            
                <ChatBubbleLeftIcon className="h-6 w-6" />
                
                    <p className='flex-1 hidden md:inline-flex truncate'>this is the new chat</p>
                <TrashIcon className="h-6 w-6 text-gray-700 hover:text-red-700"/>
            </div>
        </Link>
        
        </>
    )
}

export default SideChat