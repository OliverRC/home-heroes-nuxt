import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  
  const prisma = new PrismaClient()

  const heroes = await prisma.hero.findMany();

  return heroes;
})