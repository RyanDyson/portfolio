import { ClientPage } from "./ClientPage";
import { db } from "@/db";
import { projectsTable, workExperienceTable } from "@/db/schema";

export default async function Page() {
  const projects = await db.select().from(projectsTable);
  const workExperience = await db.select().from(workExperienceTable);

  return <ClientPage projects={projects} />;
}
