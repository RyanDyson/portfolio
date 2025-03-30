CREATE TABLE "bullet_points" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "bullet_points_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"workExperienceId" integer,
	"bulletPoint" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "work_experience" RENAME COLUMN "description" TO "thingsLearned";--> statement-breakpoint
ALTER TABLE "bullet_points" ADD CONSTRAINT "bullet_points_workExperienceId_work_experience_id_fk" FOREIGN KEY ("workExperienceId") REFERENCES "public"."work_experience"("id") ON DELETE no action ON UPDATE no action;