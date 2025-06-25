import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedCategories() {
  await prisma.category.createMany({
    data: [
      {
        id: '1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Morgenbrød',
        slug: 'morgenbroed',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
      {
        id: '1fc2cb0b-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Baguettes',
        slug: 'baguettes',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
      {
        id: '1fc2cb8f-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Franskbrød',
        slug: 'franskbroed',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
      {
        id: '1fc2cbec-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Kager',
        slug: 'kager',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
      {
        id: '1fc2cc4a-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Rugbrød',
        slug: 'rugbroed',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
      {
        id: '1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Grovbrød',
        slug: 'grovbroed',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
      {
        id: '1fc2ccee-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Boller',
        slug: 'boller',
        is_active: true,
        created: new Date('2022-11-30T20:00:00'),
      },
    ],
    skipDuplicates: true,
  });
}
