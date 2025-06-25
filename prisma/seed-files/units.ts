import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedUnits() {
  await prisma.unit.createMany({
    data: [
    {
        "id": "d866fdc1-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Gram",
        "abbreviation": "g"
    },
    {
        "id": "d866ffe9-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Spiseskefuld",
        "abbreviation": "spsk"
    },
    {
        "id": "d8670075-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Liter",
        "abbreviation": "l"
    },
    {
        "id": "d86700e6-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Deciliter",
        "abbreviation": "dl"
    },
    {
        "id": "d867014c-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Milliliter",
        "abbreviation": "ml"
    },
    {
        "id": "d86701aa-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Kilo",
        "abbreviation": "kg"
    },
    {
        "id": "d8670206-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Knivspids",
        "abbreviation": "knivspids"
    },
    {
        "id": "d8670261-33b8-11ef-a9aa-001dd8b71d59",
        "name": "H\u00e5ndfuld",
        "abbreviation": "h\u00e5ndfuld"
    },
    {
        "id": "d86702bb-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Teskefuld",
        "abbreviation": "tsk"
    },
    {
        "id": "d8670317-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Styk",
        "abbreviation": "stk"
    },
    {
        "id": "d8670374-33b8-11ef-a9aa-001dd8b71d59",
        "name": "Pakker",
        "abbreviation": "pk"
    }
],
    skipDuplicates: true
  });
}