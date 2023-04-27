import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React from 'react'

type Props = {
    chatid: string;
}

function ChatInput({chatid}: Props) {
    const

    return (
        <div className="input">
            <form className='flex-1 space-x-5 p-5'>
                <input 
                    className=''
                    type="text"
                    placeholder="Start conversation ..."
                />
                <button type="submit">
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
                </button>
            </form>
            <div className="select">
                {/* model selection */}
            </div>
        </div>  
    )
}

export default ChatInput