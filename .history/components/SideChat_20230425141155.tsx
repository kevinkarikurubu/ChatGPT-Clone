import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

function SideChat({id: Props}) {
  return (
    <div className="newChat border-none my-2 text-white">
      
        <ChatBubbleLeftIcon className="h-6 w-6" />
         {chats.map(chat => (
          <p className="flex-1 hidden md:inline-flex truncate">{chat.text}</p>
        ))} 
    
        <TrashIcon className="h-6 w-6 text-gray-700 hover:text-red-700"/>
    </div>
  )
}

export default SideChat