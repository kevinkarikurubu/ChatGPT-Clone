import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    id: string
  }

function SideChat({id}: Props) {
    const pathname = usePathname()
    const router = useRouter()
    const {data: session} = useSession()
    const [activeChat, setActiveChat] = useState

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