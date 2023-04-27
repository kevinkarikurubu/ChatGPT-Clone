import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={

    providers: [
        GoogleProvider({
            clientId: "916199350008-jcvk15ot3in3mbmch49iqhtjt7vgh661.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_SECRET_KEY!,
        }),
    ],
}
export default NextAuth(authOptions)