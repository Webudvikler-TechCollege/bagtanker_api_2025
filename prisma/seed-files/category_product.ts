import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const categoryProductData = [
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2c7e5-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cb0b-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cb0b-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cb8f-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cb8f-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cbec-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cbec-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc4a-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc4a-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc4a-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2cc9c-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2ccee-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2ccee-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2ccee-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2ccee-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2ccee-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59"
    },
    {
        "categoryId": "1fc2ccee-33b8-11ef-a9aa-001dd8b71d59",
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59"
    }];

export default async function seedCategoryProduct() {
    let successCount = 0;
    let failCount = 0;

    for (const { categoryId, productId } of categoryProductData) {
        try {
            await prisma.categoryProduct.create({
                data: { categoryId, productId }
            });
            successCount++;
        } catch (error: any) {
            if (error.code === 'P2002') {
                console.info(`Duplicate skipped: (${categoryId}, ${productId})`);
            } else {
                console.error(`Failed to insert (${categoryId}, ${productId}):`, error.message);
            }
            failCount++;
        }
    }

    console.log(`✅ Done seeding category_product. Inserted: ${successCount}, Skipped/Failed: ${failCount}`);
    await prisma.$disconnect();
}


