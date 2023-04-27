import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

function Chatpage({params: {id}} :Props) {
  return (
    <div className='chat flex flex-col h-screen overflow-hidden'>
      {/* Chat window where the conversation happens */}
      <Chat chatid={id} />
      {/* Chat input */}
      <ChatInput chatid={id}/>
    </div>
  )
}

export default Chatpage