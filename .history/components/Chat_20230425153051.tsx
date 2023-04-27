import React from 'react'

type Props = {
    chatid: string;
}

function Chat({chatid}: Props) {
  return (
    <div className="chat flex-1">Chat</div>
  )
}

export default Chat