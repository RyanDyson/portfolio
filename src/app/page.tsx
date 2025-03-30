import { ClientPage } from "./ClientPage";
import { db } from "@/db";
import {
  projectsTable,
  workExperienceTable,
  bulletPointsTable,
} from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Page() {
  const projects = await db.select().from(projectsTable);
  const workExperienceEntries = await db.select().from(workExperienceTable);

  const workExperience = await Promise.all(
    workExperienceEntries.map(async (entry) => {
      const bulletPoints = await db
        .select()
        .from(bulletPointsTable)
        .where(eq(bulletPointsTable.workExperienceId, entry.id));

      return {
        ...entry,
        bulletPoints,
      };
    })
  );

  return <ClientPage projects={projects} workExperience={workExperience} />;
}
