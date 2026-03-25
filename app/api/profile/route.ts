import { NextRequest, NextResponse } from "next/server";
import { getProfile } from '@/lib/db'

export const GET = async (req: NextRequest) => {
  try {
    const user = {
      id:1,
      name:"dsfs",
      email:"sdfsd",
      github:"sdfs",
      linked_in:"dsfds",
      tagline:["dfsdf"],
      bio:"ddsf",
      working:true
    }
    const result = {...user};
    return NextResponse.json(result, { status: 200 })
  } catch (err: any) {
    const message = err.message ?? "Failed to fetch data"
    return NextResponse.json({ message:message},{ status: 500 })
  }
}