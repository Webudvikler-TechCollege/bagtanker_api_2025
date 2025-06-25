import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedNewsletterEmails() {
  await prisma.newsletterSubscriber.createMany({
    data: [],
    skipDuplicates: true
  });
}
