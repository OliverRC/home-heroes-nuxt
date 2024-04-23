ALTER TABLE "EmploymentItems" DROP CONSTRAINT "EmploymentItems_heroId_Heroes_id_fk";
--> statement-breakpoint
ALTER TABLE "Employment" ADD COLUMN "id" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "EmploymentItems" ADD COLUMN "employmentId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "EmploymentItems" ADD CONSTRAINT "EmploymentItems_employmentId_Employment_id_fk" FOREIGN KEY ("employmentId") REFERENCES "Employment"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "EmploymentItems" DROP COLUMN IF EXISTS "heroId";