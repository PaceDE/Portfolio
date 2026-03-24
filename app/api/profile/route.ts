import { NextRequest, NextResponse } from "next/server";
import { sql } from '@/lib/db'

export const GET = async (req: NextRequest) => {
  try {
    const result = await sql`SELECT * FROM profile LIMIT 1`
    return NextResponse.json(result[0], { status: 200 })
  } catch (err: any) {
    const message = err.message ?? "Failed to fetch data"
    return NextResponse.json({ message:message},{ status: 500 })
  }
}