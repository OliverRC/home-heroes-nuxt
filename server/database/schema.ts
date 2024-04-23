import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar, date, numeric } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';


export const heroes = pgTable('Heroes', {
  id: serial('id').primaryKey(),
  firstName: varchar('firstName').notNull(),
  lastName: varchar('lastName').notNull(),
  knownAs: varchar('knownAs'),
  idNumber: varchar('idNumber'),
  dateOfBirth: date('dateOfBirth'),
  cellPhone: varchar('cellPhone'),
  email: varchar('email'),
})

export const heroesRelations = relations(heroes, ({ one }) => ({
  employment: one(employment),
  leave: one(leave),
}));

export const employment = pgTable('Employment', {
  id: serial('id').primaryKey(),
  heroId: integer('heroId').references(() => heroes.id).primaryKey(),
  startDate: date('startDate').notNull(),
})

export const employmentItems = pgTable('EmploymentItems', {
  id: serial('id').primaryKey(),
  employmentId: integer('employmentId').references(() => employment.id),
  item: varchar('item').notNull(),
  quantity: integer('quantity').notNull(),
  rate: numeric('rate', { precision: 19, scale: 6}).notNull(),
});

export const leave = pgTable('Leave', {
  heroId: integer('heroId').references(() => heroes.id).primaryKey(),
  paid: integer('paid').notNull(),
  sick: integer('sick').notNull(),
  unpaid: integer('unpaid').notNull(),
  familyResponsibility: integer('familyResponsibility').notNull(),
})