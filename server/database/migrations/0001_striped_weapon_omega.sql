CREATE TABLE IF NOT EXISTS "Employment" (
	"heroId" integer PRIMARY KEY NOT NULL,
	"startDate" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "EmploymentItems" (
	"id" serial PRIMARY KEY NOT NULL,
	"heroId" integer,
	"item" varchar NOT NULL,
	"quantity" integer NOT NULL,
	"rate" numeric(19, 6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Leave" (
	"heroId" integer PRIMARY KEY NOT NULL,
	"paid" integer NOT NULL,
	"sick" integer NOT NULL,
	"unpaid" integer NOT NULL,
	"familyResponsibility" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Heroes" DROP CONSTRAINT "Heroes_email_unique";--> statement-breakpoint
ALTER TABLE "Heroes" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Heroes" ADD COLUMN "knownAs" varchar;--> statement-breakpoint
ALTER TABLE "Heroes" ADD COLUMN "idNumber" varchar;--> statement-breakpoint
ALTER TABLE "Heroes" ADD COLUMN "dateOfBirth" date;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Employment" ADD CONSTRAINT "Employment_heroId_Heroes_id_fk" FOREIGN KEY ("heroId") REFERENCES "Heroes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EmploymentItems" ADD CONSTRAINT "EmploymentItems_heroId_Heroes_id_fk" FOREIGN KEY ("heroId") REFERENCES "Heroes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Leave" ADD CONSTRAINT "Leave_heroId_Heroes_id_fk" FOREIGN KEY ("heroId") REFERENCES "Heroes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
