import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import seedUsers from './seed-files/users';
import seedProducts from './seed-files/products';
import seedCategories from './seed-files/categories';
import seedImages from './seed-files/images';
import seedUnits from './seed-files/units';
import seedNews from './seed-files/news';
import seedIngredients from './seed-files/ingredients';
import seedProductIngredients from './seed-files/product_ingredient';
import seedCategoryProduct from './seed-files/category_product';
import seedMessages from './seed-files/messages';
import seedNewsletterEmails from './seed-files/newsletter_emails';
import seedComments from './seed-files/comments';

async function main() {
  await seedCategories()
  await seedImages()
  await seedIngredients()
  await seedMessages()
  await seedNews()
  await seedNewsletterEmails()
  await seedProducts()
  await seedUnits()
  await seedComments()
  await seedUsers()
  await seedCategoryProduct()
  await seedProductIngredients()
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
