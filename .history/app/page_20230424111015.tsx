import React from 'react'
import {SunIcon, BoltIcon, ExclamationTriangleIcon, } from '@heroicons/react/24/outline'



function Homepage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen px-2 text-white">
        <h1 className="mb-20 font-bold text-5xl">CHATGPT</h1>
        <div className="flex space-x-2 text-center">
            <div className="icons ">
                <div className="sun flex flex-col items-center justify-center mb-4">
                <SunIcon className="h-8 w-8" />
                    <h2 className="example">Examples</h2>
                </div>
                <div className="text space-y-2">
                    <p className="info">"Explain something to me"</p>
                    <p className="info">"What is the difference between a cat and a dog?"</p>
                    <p className="info">"What is the color of the sun?"</p>
                </div>
            </div>

            <div className="icons ">
                <div className="sun flex flex-col items-center justify-center mb-4">
                <BoltIcon className="h-8 w-8" />
                    <h2 className="example">Capabilities</h2>
                </div>
                <div className="text space-y-2">
                    <p className="info">"Explain something to me"</p>
                    <p className="info">"What is the difference between a cat and a dog?"</p>
                    <p className="info">"What is the color of the sun?"</p>
                </div>
            </div>

            <div className="icons ">
                <div className="sun flex flex-col items-center justify-center mb-4">
                <ExclamationTriangleIcon className="h-8 w-8" />
                    <h2 className="example">Limitations</h2>
                </div>
                <div className="text space-y-2">
                    <p className="info">"Explain something to me"</p>
                    <p className="info">"What is the difference between a cat and a dog?"</p>
                    <p className="info">"What is the color of the sun?"</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Homepage