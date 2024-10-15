import {
    inferAdditionalFields,
    usernameClient,
} from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
import { auth } from "./auth"

export const {
    signIn,
    signUp,
    signOut,
    useSession,
    forgetPassword,
    resetPassword,
} = createAuthClient({
    plugins: [usernameClient(), inferAdditionalFields<typeof auth>()],
    baseURL: "http:/127.0.0.1:3000",
})
