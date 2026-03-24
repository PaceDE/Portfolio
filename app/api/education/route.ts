import { NextRequest, NextResponse } from "next/server";
import { sql } from '@/lib/db'

export const GET = async (req: NextRequest) => {
    try {
        const result = await sql`
                  SELECT 
                    e.*,
                    COALESCE(
                      json_agg(
                        json_build_object(
                          'semester', s.semester,
                          'gpa', s.gpa,
                          'percentage', s.percentage
                        ) ORDER BY s.id
                      ) FILTER (WHERE s.id IS NOT NULL),
                      '[]'
                    ) AS semesters
                  FROM education e
                  LEFT JOIN semesters s ON s.education_id = e.id
                  GROUP BY e.id
                  ORDER BY e.id DESC;
                `;

        return NextResponse.json(result, { status: 200 })
    } catch (err: any) {
        const message = err.message ?? "Failed to fetch data"
        return NextResponse.json({ message: message }, { status: 500 })
    }
}
