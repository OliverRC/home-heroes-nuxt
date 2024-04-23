import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from '../database/schema'

export const tables = schema

export function useDrizzle() {

  const sql: NeonQueryFunction<boolean, boolean> = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql, { schema: schema });

  return db;
}