import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

function Chatpage(Props) {
  return (
    <div className='chat flex flex-col h-screen overflow-hidden'>
      {/* Chat window where the conversation happens */}
      <Chat />
      {/* Chat input */}
      <ChatInput />
    </div>
  )
}

export default Chatpage