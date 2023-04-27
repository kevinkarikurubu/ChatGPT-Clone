/* eslint-disable react/no-unescaped-entities */
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
secret:process.env.NEXTAUTH_SECRET_KEY,
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLICGOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_KEY,
        }),
    ],
}
export default NextAuth(authOptions)