import "dotenv/config";
import { db } from "./index";
import {
  workExperienceTable,
  bulletPointsTable,
  projectsTable,
} from "./schema";

/**
 * Seed script to repopulate tables with placeholder data
 * Run with: npx tsx src/db/seed.ts
 *
 * Update the placeholder values below with your actual data
 */
async function seed() {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL environment variable is not set. Please create a .env file with your Neon database connection string."
      );
    }

    console.log("Starting seed...");

    // Clear existing data (optional - comment out if you want to keep existing data)
    // await db.delete(bulletPointsTable);
    // await db.delete(workExperienceTable);
    // await db.delete(projectsTable);

    // Insert work experience entries
    const workExperiences = await db
      .insert(workExperienceTable)
      .values([
        {
          companyName: "CHAOS THEORY",
          jobTitle: "Software Engineer Placement Intern",
          startDate: "2025-01-01",
          endDate: new Date().toISOString().split("T")[0], // Current date for "Present"
          thingsLearned:
            "Worked with a 3-man team to upgrade and maintain a full-stack back-office CMS application for managing up-to 50,000 monthly incoming and outgoing crypto transactions, activities, and data using technologies such as NEXTjs, GraphQL, Hasura, Vercel, React, and Tailwind.",
        },
        {
          companyName: "CITY UNIVERSITY OF HONG KONG",
          jobTitle: "IoT Project Administration & Support Engineer Intern",
          startDate: "2025-01-01",
          endDate: "2025-12-31",
          thingsLearned:
            "Engineered 4 AI-powered software solutions and deployed scalable applications leveraging AWS and Azure.",
        },
        {
          companyName: "WEMAKEAPP",
          jobTitle: "Software Engineer Intern",
          startDate: "2024-01-01",
          endDate: "2024-12-31",
          thingsLearned:
            "Worked with a team to deliver a full-stack live streaming social media website with a proprietary built in content management system (CMS) with internationalization support for 4 languages.",
        },
        {
          companyName: "AIESEC IN HONG KONG",
          jobTitle: "Global Talent Solutions & Brand Marketing Officer",
          startDate: "2023-01-01",
          endDate: "2024-12-31",
          thingsLearned:
            "Executed global talent recruitment initiatives resulting in 217 exchange leads while streamlining participant onboarding process with 25% conversion rate.",
        },
      ])
      .returning();

    console.log(`Inserted ${workExperiences.length} work experience entries`);

    // Insert bullet points (using the IDs from work experiences above)
    const bulletPointsToInsert = [];

    // Find CHAOS THEORY entry
    const chaosTheory = workExperiences.find(
      (we) => we.companyName === "CHAOS THEORY"
    );
    if (chaosTheory) {
      bulletPointsToInsert.push({
        workExperienceId: chaosTheory.id,
        bulletPoint:
          "Worked with a 3-man team to upgrade and maintain a full-stack back-office CMS application for managing up-to 50,000 monthly incoming and outgoing crypto transactions, activities, and data using technologies such as NEXTjs, GraphQL, Hasura, Vercel, React, and Tailwind.",
      });
    }

    // Find CITY UNIVERSITY OF HONG KONG entry
    const cityU = workExperiences.find(
      (we) => we.companyName === "CITY UNIVERSITY OF HONG KONG"
    );
    if (cityU) {
      bulletPointsToInsert.push(
        {
          workExperienceId: cityU.id,
          bulletPoint:
            "Engineered 4 AI-powered software solutions such as an AI grading system, AI course instructor, and AI event emce to be integrated to CityU's teaching and learning platform using technologies such as Azure's cognitive speech services, Baidu Cloud's Xiling Digital People, and HeyGen's AI avatar.",
        },
        {
          workExperienceId: cityU.id,
          bulletPoint:
            "Deployed scalable applications leveraging AWS and Azure to improve CI/CD pipelines and reducing deployments error by ~20% and accelerating feature releases by ~15%.",
        }
      );
    }

    // Find WEMAKEAPP entry
    const wemakeapp = workExperiences.find(
      (we) => we.companyName === "WEMAKEAPP"
    );
    if (wemakeapp) {
      bulletPointsToInsert.push(
        {
          workExperienceId: wemakeapp.id,
          bulletPoint:
            "Worked with a team to deliver a full-stack live streaming social media website with a proprietary built in content management system (CMS) with internationalization support for 4 languages (English, Spanish, Cantonese, Vietnamese).",
        },
        {
          workExperienceId: wemakeapp.id,
          bulletPoint:
            "Built responsive UI components across 20+ pages including a notification dropdown with optimized database queries for user notifications and activities via implementation of TRPC & Prisma ORM which reduce API response time by 25%.",
        }
      );
    }

    // Find AIESEC IN HONG KONG entry
    const aiesec = workExperiences.find(
      (we) => we.companyName === "AIESEC IN HONG KONG"
    );
    if (aiesec) {
      bulletPointsToInsert.push({
        workExperienceId: aiesec.id,
        bulletPoint:
          "Executed global talent recruitment initiatives resulting in 217 exchange leads while streamlining participant onboarding process with 25% conversion rate and worked with 7 external partners to support our operations which includes, Lee Kum Kee and Hong Kong Tourism Board among others.",
      });
    }

    if (bulletPointsToInsert.length > 0) {
      await db.insert(bulletPointsTable).values(bulletPointsToInsert);
      console.log(`Inserted ${bulletPointsToInsert.length} bullet points`);
    }

    // Insert projects
    const projects = await db.insert(projectsTable).values([
      {
        title: "Project Title 1",
        subtitle: "Project Subtitle 1",
        description: "Project description goes here",
        imageUrl: "/projects/project1.png",
        githubUrl: "https://github.com/username/project1",
        figmaUrl: null,
        liveUrl: "https://project1.com",
        inProgress: false,
        stack: "React, TypeScript, Next.js",
        showCase: true,
      },
      {
        title: "Project Title 2",
        subtitle: "Project Subtitle 2",
        description: "Project description goes here",
        imageUrl: "/projects/project2.png",
        githubUrl: "https://github.com/username/project2",
        figmaUrl: "https://figma.com/project2",
        liveUrl: null,
        inProgress: true,
        stack: "React, Node.js",
        showCase: true,
      },
      {
        title: "Project Title 3",
        subtitle: "Project Subtitle 3",
        description: "Project description goes here",
        imageUrl: "/projects/project3.png",
        githubUrl: null,
        figmaUrl: null,
        liveUrl: null,
        inProgress: false,
        stack: "Python, Django",
        showCase: false,
      },
    ]);

    console.log(`Inserted ${projects.length} projects`);
    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

// Run seed if executed directly
seed()
  .then(() => {
    console.log("Seed script finished");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seed script failed:", error);
    process.exit(1);
  });

export default seed;
