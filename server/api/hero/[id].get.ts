import { eq } from 'drizzle-orm';
import { tables, useDrizzle } from '~/server/utils/useDrizzle'

export default defineEventHandler(async (event) => {

  if(!event.context.params?.id){
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing id',
    })
  }

  const id = parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'id should be an integer',
    })
  }

  const heroes = await useDrizzle()
  .select()
  .from(tables.heroes)
  .where(eq(tables.heroes.id, id))
  .limit(1);

  if(heroes.length === 0){
    throw createError({
      statusCode: 404,
      statusMessage: 'Hero not found',
    })
  }

  var hero = heroes[0];

  return hero;
})