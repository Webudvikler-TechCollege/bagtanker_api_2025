import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedImages() {
  await prisma.image.createMany({
    data: [
    {
        "id": "31acd188-f181-4f17-bb53-ffb2cce7b64d",
        "filename": "https://api.mediehuset.net/images/bakeonline/bread-full07.jpg"
    },
    {
        "id": "3866a65c-a582-49f3-b7b7-9a66ee2026c5",
        "filename": "https://api.mediehuset.net/images/bakeonline/bread-full08.jpg"
    },
    {
        "id": "418f451a-2405-4b56-841e-06dafb4d7f40",
        "filename": "https://api.mediehuset.net/images/bakeonline/bread-full06.jpg"
    },
    {
        "id": "c03500b0-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/haandvaerkere.jpg"
    },
    {
        "id": "c03502f7-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/morgenhorn.jpg"
    },
    {
        "id": "c0350375-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/blaabaersnitter.jpg"
    },
    {
        "id": "c03503da-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/mysliboller.jpg"
    },
    {
        "id": "c035043b-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/rugbroedsboller.jpg"
    },
    {
        "id": "c0350498-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/aeblestykker.jpg"
    },
    {
        "id": "c03504f3-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/glutenfri_havrebroed.jpeg"
    },
    {
        "id": "c0350555-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/morgenhorn_med_marcipan.jpeg"
    },
    {
        "id": "c03505b1-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/hjemmebagte-krydderboller.jpeg"
    },
    {
        "id": "c035060a-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/svenske-snegle.jpg"
    },
    {
        "id": "c0350662-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/hjemmebagt-soenderjysk-rugbroed.jpeg"
    },
    {
        "id": "c03506bb-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/hjemmebagt-broed-med-kvaeder.jpeg"
    },
    {
        "id": "c0350713-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/stor-durumbolle.jpeg"
    },
    {
        "id": "c0350769-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/rugbroedsboller-med-chokolade.jpeg"
    },
    {
        "id": "c03507c2-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/rugkernebroed-med-abrikos-og-mandler.jpeg"
    },
    {
        "id": "c035081c-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/lette-flutes.jpeg"
    },
    {
        "id": "c0350870-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/hvidloegsflutes-med-krydderurter.jpeg"
    },
    {
        "id": "c03508c8-33bb-11ef-a9aa-001dd8b71d59",
        "filename": "https://api.mediehuset.net/images/bakeonline/saftige-gulerodsboller.jpeg"
    }
],
    skipDuplicates: true
  });
}