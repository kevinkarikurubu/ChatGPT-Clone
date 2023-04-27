import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
secret:process.env.NEXTAUTH_SECRET_KEY,
    providers: [
        GoogleProvider({
            ClientId: process.env.GOOGLE_CLIENT_ID,
            ClientSecret: process.env.GOOGLE_SECRET_KEY,
        }),
    ],
}
export default NextAuth(authOptions)