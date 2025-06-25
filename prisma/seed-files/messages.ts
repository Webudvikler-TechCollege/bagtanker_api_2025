import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedMessages() {
  await prisma.message.createMany({
    data: [],
    skipDuplicates: true
  });
}
