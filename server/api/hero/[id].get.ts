import { PrismaClient } from '@prisma/client'

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

  const prisma = new PrismaClient()

  const heroes = await prisma.hero.findUnique({
    where: {
      id: id
    }
  });

  return heroes;
})