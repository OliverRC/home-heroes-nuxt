import { defineConfig } from 'drizzle-kit'
import { config } from "dotenv";
config();

export default defineConfig({
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!
  },
})
