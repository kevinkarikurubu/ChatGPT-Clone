'use client'

import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import ModelSelection from './ModelSelection';
import useSWR from 'swr';

type Props = {
    chatid: string;
}

function ChatInput({chatid}: Props) {
    const [prompt, setPrompt] = useState('')
    const {data:session} = useSession()
    const {data: model} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })

    

    const sendMessage =async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return

        const input = prompt.trim()
        setPrompt('')

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
            }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatid, 'messages'),
        message)

        // Toaster 
        const notification = toast.loading('Please wait a moment...')

        await fetch('/api/askQstn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input, chatid, model, session
            }),
        }).then(() =>{
            toast.success('Got your answer!', {
                id: notification
            })
        })
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
            <div className="select md:hidden">
                <ModelSelection/>
            </div>
        </div>  
    )
}

export default ChatInput