import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedProductIngredients() {
  await prisma.productIngredient.createMany({
    data: [
    {
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "15",
        "ordernum": 1
    },
    {
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "4",
        "ordernum": 2
    },
    {
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "400",
        "ordernum": 3
    },
    {
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 4
    },
    {
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b95-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "\u00bd",
        "ordernum": 5
    },
    {
        "productId": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871d18-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 6
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871d7b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 1
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 2
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "25",
        "ordernum": 3
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 4
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8719a1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 5
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "450",
        "ordernum": 6
    },
    {
        "productId": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 7
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871d7b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "175",
        "ordernum": 1
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "175",
        "ordernum": 2
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e98-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 3
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871efb-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "\u00bc",
        "ordernum": 4
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871f57-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 5
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871fad-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 6
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8720f9-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 7
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872170-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 8
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8721c6-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "200",
        "ordernum": 9
    },
    {
        "productId": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8722c9-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670261-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 10
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 1
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 2
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8723db-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 3
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87242b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "25",
        "ordernum": 4
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872484-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "20",
        "ordernum": 5
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8724d3-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 6
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872523-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 7
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872573-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 8
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2\u00bd",
        "ordernum": 9
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8725c3-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 10
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "\u00bd",
        "ordernum": 11
    },
    {
        "productId": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872617-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 12
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 1
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 2
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872666-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 3
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8726b6-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 4
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8725c3-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 5
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872705-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 6
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 7
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872752-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 8
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8727a2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 9
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8727f2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 10
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872484-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "25",
        "ordernum": 11
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872842-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 12
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872890-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 13
    },
    {
        "productId": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "150",
        "ordernum": 14
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 1
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8728df-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 2
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 3
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 4
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872705-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 5
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87292f-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "200",
        "ordernum": 6
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872890-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "200",
        "ordernum": 7
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "400",
        "ordernum": 8
    },
    {
        "productId": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 9
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "10",
        "ordernum": 1
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "5",
        "ordernum": 2
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8723db-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 3
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872617-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 4
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 5
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "500",
        "ordernum": 6
    },
    {
        "productId": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87297b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 7
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 1
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871d7b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 2
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871bf6-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 3
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "40",
        "ordernum": 4
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 5
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "5",
        "ordernum": 6
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "450",
        "ordernum": 7
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8729c6-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 8
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8719a1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 9
    },
    {
        "productId": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872a11-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670261-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 10
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 1
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "25",
        "ordernum": 2
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871bf6-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 3
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8719a1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 4
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872a5c-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "\u00bd-1",
        "ordernum": 5
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "500",
        "ordernum": 6
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 7
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871d7b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 8
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b95-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 9
    },
    {
        "productId": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 10
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871d7b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "150",
        "ordernum": 1
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "5",
        "ordernum": 2
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "40",
        "ordernum": 3
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872aa9-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 4
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8719a1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 5
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872a5c-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 6
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "800",
        "ordernum": 7
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 8
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872af3-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "200",
        "ordernum": 9
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871cb8-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 10
    },
    {
        "productId": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872b3e-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 11
    },
    {
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1000",
        "ordernum": 1
    },
    {
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "12",
        "ordernum": 2
    },
    {
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670374-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 3
    },
    {
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872b8a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "500",
        "ordernum": 4
    },
    {
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872705-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 5
    },
    {
        "productId": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 6
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 1
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "4",
        "ordernum": 2
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8719a1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 3
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "\u00bd",
        "ordernum": 4
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872bd5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 5
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872c1e-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 6
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872b8a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 7
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "500",
        "ordernum": 8
    },
    {
        "productId": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 9
    },
    {
        "productId": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 1
    },
    {
        "productId": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "12",
        "ordernum": 2
    },
    {
        "productId": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b95-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 3
    },
    {
        "productId": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1\u00bd",
        "ordernum": 4
    },
    {
        "productId": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872c76-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "500",
        "ordernum": 5
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 1
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "30",
        "ordernum": 2
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872666-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "4",
        "ordernum": 3
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 4
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872617-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 5
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8727a2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "200",
        "ordernum": 6
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872842-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 7
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8727f2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 8
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872890-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 9
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 10
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "300",
        "ordernum": 11
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872cc2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 12
    },
    {
        "productId": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872d0d-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 13
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8727a2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "60",
        "ordernum": 1
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8727f2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 2
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872d55-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 3
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872da0-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "75",
        "ordernum": 4
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "4\"",
        "ordernum": 5
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670374-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "5",
        "ordernum": 6
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872bd5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "4",
        "ordernum": 7
    },
    {
        "productId": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872e33-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 8
    },
    {
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 1
    },
    {
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "25",
        "ordernum": 2
    },
    {
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b95-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 3
    },
    {
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1\u00bd",
        "ordernum": 4
    },
    {
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "450",
        "ordernum": 5
    },
    {
        "productId": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 6
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "5",
        "ordernum": 1
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872617-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "2",
        "ordernum": 2
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872e80-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 3
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872ecc-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1\u00bd",
        "ordernum": 4
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "150",
        "ordernum": 5
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872f18-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "200",
        "ordernum": 6
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "400",
        "ordernum": 7
    },
    {
        "productId": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872f65-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "100",
        "ordernum": 8
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "5",
        "ordernum": 1
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 2
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "50",
        "ordernum": 3
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "1",
        "ordernum": 4
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872617-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "\u00bd",
        "ordernum": 5
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d872fb2-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "250",
        "ordernum": 5
    },
    {
        "productId": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "ingredientId": "4d873189-33b8-11ef-a9aa-001dd8b71d59",
        "unitId": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "amount": "3",
        "ordernum": 6
    }
],
    skipDuplicates: true
  });
}