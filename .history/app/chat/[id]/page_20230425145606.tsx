import Chat from '@/components/Chat'
import React from 'react'

function Chatpage() {
  return (
    <div className='chat flex flex-col h-screen overflow-hidden'>
      {/* Chat window where the conversation happens */}
      <Chat />
      {/* Chat input */}
    </div>
  )
}

export default Chatpage