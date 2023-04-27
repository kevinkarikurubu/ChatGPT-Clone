import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
}

function Message({message} : Props) {
  return (
    <div className="flex">
        <div>
        <p>
            {message.text}
        </p>
        </div>
    </div>
  )
}

export default Message