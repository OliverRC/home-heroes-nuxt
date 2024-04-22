import { tables, useDrizzle } from '~/server/utils/useDrizzle';

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const heroes = await useDrizzle().insert(tables.heroes).values(body).returning();

  if(heroes.length === 0){
    throw createError({
      statusCode: 500,
      statusMessage: 'Unable to find newly created hero',
    })
  }

  var hero = heroes[0];

  return hero;
})