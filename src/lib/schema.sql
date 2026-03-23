/*
In Neon, databases are stored on branches. By default, a project has one branch and one database.
You can select the branch and database to use from the drop-down menus above.

Try generating sample data and querying it by running the example statements below, or click
New Query to clear the editor.
*/
CREATE TABLE IF NOT EXISTS profile (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  github      TEXT NOT NULL,
  linkedin    TEXT,
  tagline     TEXT,
  bio         TEXT
);

CREATE TABLE IF NOT EXISTS education (
  id          SERIAL PRIMARY KEY,
  degree      TEXT NOT NULL,
  college      TEXT NOT NULL,
  gpa         DECIMAL(3,2),
  percentage  DECIMAL(5,2),
  year_start  INT,
  year_end    INT
);

CREATE TABLE IF NOT EXISTS semesters (
  id            SERIAL PRIMARY KEY,
  education_id  INT REFERENCES education(id),
  gpa         DECIMAL(3,2),
  percentage  DECIMAL(5,2)
);

CREATE TABLE IF NOT EXISTS skills (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT,
  learning    BOOLEAN DEFAULT FALSE
);

-- projects
CREATE TABLE IF NOT EXISTS projects (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  description TEXT,
  stack       TEXT[],
  url         TEXT,
  ongoing     BOOLEAN DEFAULT FALSE
);

-- experience
CREATE TABLE IF NOT EXISTS experience (
  id          SERIAL PRIMARY KEY,
  role        TEXT NOT NULL,
  company     TEXT NOT NULL,
  start_date  DATE,
  end_date    DATE,
  description TEXT,
  bullets     TEXT[],
  stack       TEXT[]
);