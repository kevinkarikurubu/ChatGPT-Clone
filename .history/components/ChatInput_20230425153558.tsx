'use client'

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

type Props = {
    chatid: string;
}

function ChatInput({chatid}: Props) {
    const [prompt, setPrompt] = useState('')
    const {data:session} = useSession()

    const sendMessage =async (e: FormEvent<HTMLFormElement) => {
        
    }

    return (
        <div className="input text-gray-500 text-sm bg-gray-700/50 rounded-lg">
            <form
                onSubmit={sendMessage}
                className='flex space-x-5 p-5'>
                <input 
                    className='flex-1 focus:outline-none bg-transparent disabled:cursor-not-allowed disabled:text-gray-300'
                    type="text"
                    placeholder="Start conversation ..."
                    disabled={!session}
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                />
                <button
                    className='bg-[#11A37F] hover:opacity-70 rounded-md font-bold text-white px-4 py-2 disabled:bg-gray-300 disabled:cursor-not-allowed'
                    type="submit"
                    disabled={!session || !prompt}
                >
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