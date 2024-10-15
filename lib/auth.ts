import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { admin, username } from "better-auth/plugins"
import prisma from "./prisma"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    baseURL: "http://127.0.0.1:3000",
    plugins: [username(), admin()],
    emailAndPassword: {
        enabled: true,
    },
})
