/* eslint-disable @next/next/no-img-element */
import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
}

function Message({message} : Props) {
    const isChatGPT = message?.user?.name === 'ChatGPT'

  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#1f2127]'}`}>
        <div className="flex space-x-4 px-10 max-w-2xl mx-auto">
            <img src={message.user.avatar} alt="avatar" className="h-7 w-7"
                />
            <p className="text-sm pt-1">
                {message.user?.text} Message
            </p>
        </div>
    </div>
  )
}

export default Message