'use client' 

import { Session } from "next-auth"
import { SessionProvider as Provider } from 'next-auth'

type Props = {
    children: React.ReactNode;
    session: ession | null;
}

export function SessionProvider({children, session}: Props) {
    return(
        <Provider>
            {children}
        </Provider>
    )
}