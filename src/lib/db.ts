import { neon } from "@neondatabase/serverless";

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not set in .env.local");
}

export const sql = neon(process.env.DB_URL);