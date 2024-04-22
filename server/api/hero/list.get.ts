import { tables, useDrizzle } from "~/server/utils/useDrizzle";

export default defineEventHandler(async (event) => {

  const heroes = await useDrizzle().select().from(tables.heroes);

  return heroes;
})