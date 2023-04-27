import prisma from "@/prisma/client"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const data = await prisma.post.findMany()
        return NextResponse.json(data)
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const data = await prisma.post.create({ data: body })
        return NextResponse.json({
            message: "Successfully added data in database",
            data,
        })
    } catch (error) {
        console.log(error)
    }
}
