CREATE TABLE IF NOT EXISTS "Heroes" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	"cellPhone" varchar,
	"email" varchar NOT NULL,
	CONSTRAINT "Heroes_email_unique" UNIQUE("email")
);
