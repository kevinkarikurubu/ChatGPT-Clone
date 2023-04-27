'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'

type Props = {
    chatid: string;
}

function ChatInput({chatid}: Props) {
    const [prompt, setPrompt] = useState('')

    return (
        <div className="input text-gray">
            <form className='flex-1 space-x-5 p-5'>
                <input 
                    className=''
                    type="text"
                    placeholder="Start conversation ..."
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
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