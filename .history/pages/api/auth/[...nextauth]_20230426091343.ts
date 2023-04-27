import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
secret:process.env.NEXTAUTH_SECRET_KEY,
    providers: [
        GoogleProvider({
            clientId: P,
            clientSecret: "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",
        }),
    ],
}
export default NextAuth(authOptions)