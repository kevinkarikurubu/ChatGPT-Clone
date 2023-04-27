'use client'

import React from 'react'
import Newchat from './Newchat'
import { useSession } from 'next-auth/react'

function Sidebar() {
  const {data: session} = useSession()
  return (
    <div className="flex flex-col p-2 h-screen">
        <div className="side flex-1">
            <div className="newChatbar">
                {/* New chat */}
                <Newchat />
                <div className="model">
                    {/* Model */}
                </div>
                    {/* Map through chat  */}
                    {/* <SideChat /> */}
            </div>
        </div>

        {session && ()}
    </div>
  )
}

export default Sidebar