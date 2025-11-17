-- Seed data for repopulating tables after migration to Neon
-- Replace placeholder values with your actual data

-- Insert work experience entries
INSERT INTO "work_experience" ("companyName", "jobTitle", "startDate", "endDate", "thingsLearned")
VALUES
  ('CHAOS THEORY', 'Software Engineer Placement Intern', '2025-01-01', CURRENT_DATE, 'Worked with a 3-man team to upgrade and maintain a full-stack back-office CMS application for managing up-to 50,000 monthly incoming and outgoing crypto transactions, activities, and data using technologies such as NEXTjs, GraphQL, Hasura, Vercel, React, and Tailwind.'),
  ('CITY UNIVERSITY OF HONG KONG', 'IoT Project Administration & Support Engineer Intern', '2025-01-01', '2025-12-31', 'Engineered 4 AI-powered software solutions and deployed scalable applications leveraging AWS and Azure.'),
  ('WEMAKEAPP', 'Software Engineer Intern', '2024-01-01', '2024-12-31', 'Worked with a team to deliver a full-stack live streaming social media website with a proprietary built in content management system (CMS) with internationalization support for 4 languages.'),
  ('AIESEC IN HONG KONG', 'Global Talent Solutions & Brand Marketing Officer', '2023-01-01', '2024-12-31', 'Executed global talent recruitment initiatives resulting in 217 exchange leads while streamlining participant onboarding process with 25% conversion rate.');

-- Insert bullet points using subqueries to find work experience IDs by company name
-- CHAOS THEORY bullet points
INSERT INTO "bullet_points" ("workExperienceId", "bulletPoint")
SELECT id, 'Worked with a 3-man team to upgrade and maintain a full-stack back-office CMS application for managing up-to 50,000 monthly incoming and outgoing crypto transactions, activities, and data using technologies such as NEXTjs, GraphQL, Hasura, Vercel, React, and Tailwind.'
FROM "work_experience"
WHERE "companyName" = 'CHAOS THEORY';

-- CITY UNIVERSITY OF HONG KONG bullet points
INSERT INTO "bullet_points" ("workExperienceId", "bulletPoint")
SELECT id, bullet_point
FROM "work_experience",
LATERAL (VALUES
  ('Engineered 4 AI-powered software solutions such as an AI grading system, AI course instructor, and AI event emce to be integrated to CityU''s teaching and learning platform using technologies such as Azure''s cognitive speech services, Baidu Cloud''s Xiling Digital People, and HeyGen''s AI avatar.'),
  ('Deployed scalable applications leveraging AWS and Azure to improve CI/CD pipelines and reducing deployments error by ~20% and accelerating feature releases by ~15%.')
) AS bp(bullet_point)
WHERE "companyName" = 'CITY UNIVERSITY OF HONG KONG';

-- WEMAKEAPP bullet points
INSERT INTO "bullet_points" ("workExperienceId", "bulletPoint")
SELECT id, bullet_point
FROM "work_experience",
LATERAL (VALUES
  ('Worked with a team to deliver a full-stack live streaming social media website with a proprietary built in content management system (CMS) with internationalization support for 4 languages (English, Spanish, Cantonese, Vietnamese).'),
  ('Built responsive UI components across 20+ pages including a notification dropdown with optimized database queries for user notifications and activities via implementation of TRPC & Prisma ORM which reduce API response time by 25%.')
) AS bp(bullet_point)
WHERE "companyName" = 'WEMAKEAPP';

-- AIESEC IN HONG KONG bullet points
INSERT INTO "bullet_points" ("workExperienceId", "bulletPoint")
SELECT id, 'Executed global talent recruitment initiatives resulting in 217 exchange leads while streamlining participant onboarding process with 25% conversion rate and worked with 7 external partners to support our operations which includes, Lee Kum Kee and Hong Kong Tourism Board among others.'
FROM "work_experience"
WHERE "companyName" = 'AIESEC IN HONG KONG';

-- Insert placeholder projects
INSERT INTO "projects" ("title", "subtitle", "description", "imageUrl", "githubUrl", "figmaUrl", "liveUrl", "inProgress", "stack", "showCase")
VALUES
  ('Project Title 1', 'Project Subtitle 1', 'Project description goes here', '/projects/project1.png', 'https://github.com/username/project1', NULL, 'https://project1.com', false, 'React, TypeScript, Next.js', true),
  ('Project Title 2', 'Project Subtitle 2', 'Project description goes here', '/projects/project2.png', 'https://github.com/username/project2', 'https://figma.com/project2', NULL, true, 'React, Node.js', true),
  ('Project Title 3', 'Project Subtitle 3', 'Project description goes here', '/projects/project3.png', NULL, NULL, NULL, false, 'Python, Django', false);

