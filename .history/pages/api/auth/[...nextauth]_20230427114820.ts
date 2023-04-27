import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
secret:process.env.NEXTAUTH_SECRET_KEY,
    providers: [
        GoogleProvider({
            clientId:process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
            clientSecret: "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",
        }),
    ],
}
export default NextAuth(authOptions)