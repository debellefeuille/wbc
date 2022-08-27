import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

import years from './year';

async function generator() {
  await generateYears();
}

async function generateYears() {
  for(const year of years) {
    const createYear = await prisma.year.create({
      data: {
        name: year.name,
        conventions: {
          createMany: {data: year.conventions }
        }
      }
    })
  }
  console.log('Years generated');
}

export default generator;
