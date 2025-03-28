import {
  date,
  integer,
  pgTable,
  text,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const workExperienceTable = pgTable("work_experience", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  companyName: varchar({ length: 255 }).notNull(),
  jobTitle: varchar({ length: 255 }).notNull(),
  startDate: date().notNull(),
  endDate: date().notNull(),
  description: text().notNull(),
});

export const projectsTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  subtitle: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  imageUrl: varchar({ length: 255 }).notNull(),
  githubUrl: varchar({ length: 255 }),
  figmaUrl: varchar({ length: 255 }),
  liveUrl: varchar({ length: 255 }),
  inProgress: boolean().notNull(),
  stack: text(),
  showCase: boolean().notNull(),
});

export type Project = typeof projectsTable.$inferSelect;
