import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type Props = {
    id: string
  }

function SideChat({id}: Props) {
    return (
        <Link></Link>
        <div className="newChat border-none my-2 text-white">
        
            <ChatBubbleLeftIcon className="h-6 w-6" />
            
        
            <TrashIcon className="h-6 w-6 text-gray-700 hover:text-red-700"/>
        </div>
    )
}

export default SideChat