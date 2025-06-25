import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedNews() {
  await prisma.news.createMany({
    data: [
      {
        id: '7134e529-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Moderne Surdejsbrød: En Kulinarisk Favorit',
        slug: 'moderne-surdejsbrød-en-kulinarisk-favorit',
        teaser: 'Surdejsbrød har gennem de seneste år oplevet en bemærkelsesværdig renæssance...',
        content: 'Surdejsbrød har gennem de seneste år oplevet...',
        imageId: '31acd188-f181-4f17-bb53-ffb2cce7b64d',
        created_at: '2023-12-18T16:39:21+00:00',
        is_active: true
      },
      {
        id: '7134e72e-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Veganske Kanelsnegle: En Moderne Klassiker',
        slug: 'veganske-kanelsnegle-en-moderne-klassiker',
        teaser: 'Veganske kanelsnegle er blevet en moderne klassiker...',
        content: 'Veganske kanelsnegle er blevet en moderne klassiker...',
        imageId: '3866a65c-a582-49f3-b7b7-9a66ee2026c5',
        created_at: '2024-05-18T12:36:22+00:00',
        is_active: true
      },
      {
        id: '7134e893-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Kageordning i fitnesscenteret',
        slug: 'kageordning-i-fitnesscenteret',
        teaser: 'I fitnesscenterets bageri er kageordningen en perfekt kombination...',
        content: 'I fitnesscenterets bageri er kageordningen en perfekt kombination...',
        imageId: '418f451a-2405-4b56-841e-06dafb4d7f40',
        created_at: '2024-05-30T19:14:12+00:00',
        is_active: true
      },
      {
        id: '7134e952-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Miljø- og fødevareministeren forbyder rosiner i bagværk',
        slug: 'miljoe-og-foedevareministeren-forbyder-rosiner-i-bagvaerk',
        teaser: 'Det skal være slut med rosiner i boller...',
        content: 'De fleste kender følelsen af at sætte tænderne i det...',
        imageId: '31acd188-f181-4f17-bb53-ffb2cce7b64d',
        created_at: '2024-06-08T14:06:16+00:00',
        is_active: true
      },
      {
        id: '7134e9d1-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Kage-koks: EU truer kanelsneglen',
        slug: 'kage-koks-eu-truer-kanelsneglen',
        teaser: 'Dræber-snegl: EU-forordning kan begrænse mængden af kanel i snegle...',
        content: 'EU-debatten om lakridspiben gik op i røg...',
        imageId: '3866a65c-a582-49f3-b7b7-9a66ee2026c5',
        created_at: '2024-06-19T06:46:03+00:00',
        is_active: true
      },
      {
        id: '7134eada-33b8-11ef-a9aa-001dd8b71d59',
        title: 'Othellolagkagen er indbegrebet af dansk lagkagekultur',
        slug: 'othellolagkagen-er-indbegrebet-af-dansk-lagkagekultur',
        teaser: 'Bagedystdeltagerne skulle i sæsonpremieren lave lagkagen over alle lagkager...',
        content: 'Det er kagen, der altid vækker begejstring...',
        imageId: '418f451a-2405-4b56-841e-06dafb4d7f40',
        created_at: '2024-08-15T09:03:58+00:00',
        is_active: true
      }
    ],
    skipDuplicates: true
  });
}
