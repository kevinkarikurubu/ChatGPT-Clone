import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type Props = {
    id: string
  }

function SideChat({id}: Props) {
    return (
        <>
        <Link href={`/chat/${id}`}>
            
        </Link>
        
        </>
    )
}

export default SideChat