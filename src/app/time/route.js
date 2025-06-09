import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export async function GET() {
    const session = await getServerSession(authOptions)
    console.log("session from server is ", {session});
    return Response.json({
        currenTime : new Date().toLocaleString()
    })
}