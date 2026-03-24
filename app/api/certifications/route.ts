import { NextRequest, NextResponse } from "next/server";
import { sql } from '@/lib/db'

export const GET = async (req: NextRequest) => {
  try {
    const result = await sql`SELECT * FROM certifications`
    return NextResponse.json(result, { status: 200 })
  } catch (err: any) {
    const message = err.message ?? "Failed to fetch data"
    return NextResponse.json({ message:message},{ status: 500 })
  }
}