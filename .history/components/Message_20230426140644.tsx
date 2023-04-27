/* eslint-disable @next/next/no-img-element */
import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
}

function Message({message} : Props) {
    const isChatGPT = message.user.name === 'ChatGPT'

  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-['}`}>
        <div className="flex space-x-4 max-w-2xl mx-auto">
            <img src={message.user.avatar} alt="avatar" className="h-7 w-7"
                />
            <p className="text-sm text-white pt-1">
                {message.text} Message
            </p>
        </div>
    </div>
  )
}

export default Message