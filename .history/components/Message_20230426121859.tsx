import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData
}

function Message({message} : Pr) {
  return (
    <div>Message</div>
  )
}

export default Message