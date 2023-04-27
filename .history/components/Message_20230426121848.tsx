import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
}

function Message(message) {
  return (
    <div>Message</div>
  )
}

export default Message