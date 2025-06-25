import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedComments() {
  await prisma.comment.createMany({
    data: [],
    skipDuplicates: true
  });
}
