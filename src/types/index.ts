export interface Project {
    id: number
    name: string
    description: string
    stack: string[]
    url: string | null
    ongoing: boolean
}
export interface Certifications {
    id: number
    name: string
    issuer: string
    issued_date: string
    credential_id:string | null
}

export type SkillDetail = {
  name: string;
  learning: string;
};
export interface Skills{
    category:string;
    skills: SkillDetail[]
}

export interface Education {
    id: number
    degree: string
    college: string
    gpa: number | null
    percentage: number | null
    year_start: number
    year_end: number | null
    semesters: { semester: string; gpa: number| null, percentage: number | null }[]
}

export interface Experience {
    id: number
    role: string
    company: string
    start_date: string
    end_date: string
    bullets: string[]
    stack: string[]
    address:string
    contact:string
}

export interface Profile {
    id: number,
    name: string
    email: string
    github: string
    linkedin: string | null
    tagline: string
    bio: string
    working: boolean
}