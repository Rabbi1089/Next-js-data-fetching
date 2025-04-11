export async function GET() {
    return Response.json({
        currenTime : new Date().toLocaleString()
    })
}