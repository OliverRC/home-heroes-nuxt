import { tables, useDrizzle } from '~/server/utils/useDrizzle';

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const hero = await useDrizzle().insert(tables.heroes).values(body).returning();;

  return hero;
})