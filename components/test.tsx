"use client"
import { useSession } from "@/lib/auth-client"

export default function Test() {
    const { data: session } = useSession()
    return (
        <div>
            <p>This is a test component</p>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}
