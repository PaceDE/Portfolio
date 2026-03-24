import { NextRequest, NextResponse } from "next/server";
import { sql } from '@/lib/db'

export const GET = async (req: NextRequest) => {
    try {
        const [result] = await sql`SELECT json_agg(skill) as skills
                                    FROM (
                                      SELECT json_build_object(
                                        'category', category,
                                        'skills', json_agg(
                                          json_build_object(
                                            'name', name,
                                            'learning', learning
                                          )
                                        )
                                      ) as skill
                                      FROM skills
                                      GROUP BY category
                                    )`

        return NextResponse.json(result.skills, { status: 200 })
    } catch (err: any) {
        const message = err.message ?? "Failed to fetch data"
        return NextResponse.json({ message: message }, { status: 500 })
    }
}