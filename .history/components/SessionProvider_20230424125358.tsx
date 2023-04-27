'use client' 

import { Session } from "next-auth"
import { SessionProvider as Provider } from 'next-auth'

type Props

export function SessionProvider({children, session}: Props) {
    return(
        <Provider>
            {children}
        </Provider>
    )
}