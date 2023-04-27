import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
}

function Message({message} : Props) {
  return (
    <div className="flex">
        <div className="flex space-x-4 max-w-2xl mx-auto">
            <img src={message.user.avatar} alt="avatar"
            
            <p className="text-sm pt-1">
                {message.text}
            </p>
        </div>
    </div>
  )
}

export default Message