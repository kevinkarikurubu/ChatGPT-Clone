import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React from 'react'

type Props = {
    chatid: string;
}

function ChatInput({chatid}: Props) {
    return (
        <form className='flex-1 space-x-5 p-5'>
            <input 
                className=''
                type="text"
                placeholder="Start conversation ..."
            />
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
        </form>   
    )
}

export default ChatInput