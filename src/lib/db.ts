import { Profile, Education, Skills, Project, Experience, Certifications} from "@/types";
import { neon } from "@neondatabase/serverless";

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not set in .env.local");
}

export const sql = neon(process.env.DB_URL);

export const getProfile = async (): Promise<Profile> => {
  const result = await sql`SELECT * FROM profile LIMIT 1`;
  return result[0] as Profile
}

export const getEducation = async (): Promise<Education[]> => {
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
  return result as Education[];
}

export const getSkills = async (): Promise<Skills[]> => {
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
                                    )`;
  return result.skills as Skills[];
}

export const getProjects = async (): Promise<Project[]> => {
  const result = await sql`SELECT * FROM projects`;
  return result as Project[]
}

export const getExperience = async (): Promise<Experience[]> => {
  const result = await sql`SELECT * FROM experience`;
  return result as Experience[]
}

export const getCertifications = async (): Promise<Certifications[]> => {
  const result = await sql`SELECT * FROM certifications`;
  return result as Certifications[]
}

