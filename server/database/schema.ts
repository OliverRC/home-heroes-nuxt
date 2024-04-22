import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const heroes = pgTable('Heroes', {
  id: serial('id').primaryKey(),
  firstName: varchar('firstName').notNull(),
  lastName: varchar('lastName').notNull(),
  cellPhone: varchar('cellPhone'),
  email: varchar('email').notNull().unique(),
})


