CREATE TABLE "projects" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "projects_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"subtitle" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"imageUrl" varchar(255) NOT NULL,
	"githubUrl" varchar(255),
	"figmaUrl" varchar(255),
	"liveUrl" varchar(255),
	"inProgress" boolean NOT NULL,
	"stack" text,
	"showCase" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "work_experience" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "work_experience_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"companyName" varchar(255) NOT NULL,
	"jobTitle" varchar(255) NOT NULL,
	"startDate" date NOT NULL,
	"endDate" date NOT NULL,
	"description" text NOT NULL
);
