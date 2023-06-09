import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { AuthOptions } from 'next-auth';
import prisma from '@/app/libs/prismadb';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_ID as string,

        })
    ]
}