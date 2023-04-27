import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: "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",
        }),
    ],
}
export default NextAuth(authOptions)