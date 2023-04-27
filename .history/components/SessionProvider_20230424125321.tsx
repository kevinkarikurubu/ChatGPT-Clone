'use client' 

import { Session } from "next-auth"
import { SessionProvider as Provider } from 'next-auth'

export function SessionProvider({children, session}) {
    return(
        <Provider>
            {children}
        </Provider>
    )
}