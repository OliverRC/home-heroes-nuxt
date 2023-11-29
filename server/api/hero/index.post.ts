import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const hero = await prisma.hero.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      cellPhone: body.cellPhone,
      email: body.email,
    },
  })

  return hero;
})