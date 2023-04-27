import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
secret:process.env.NEXTAUTH_SECRET_KEY,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.envGOOGLE_SECRET_KEY,
        }),
    ],
}
export default NextAuth(authOptions)