import { defineConfig } from 'drizzle-kit'
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL! + '?sslmode=require'
  },
})
