import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
secret:process.env.
    providers: [
        GoogleProvider({
            clientId: "916199350008-jcvk15ot3in3mbmch49iqhtjt7vgh661.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
}
export default NextAuth(authOptions)