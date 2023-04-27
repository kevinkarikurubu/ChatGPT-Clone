import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={

    providers: [
        GoogleProvider({
            clientId: "1010268808296-vlnri4ci4i7dsnmisetvh82bkiup9jop.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
}
export default NextAuth(authOptions)