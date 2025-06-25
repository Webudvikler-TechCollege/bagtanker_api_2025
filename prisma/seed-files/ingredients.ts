import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedIngredients() {
  await prisma.ingredient.createMany({
    data: [
    {
        "id": "4d87161b-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Hvedemel"
    },
    {
        "id": "4d8718a5-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Vand"
    },
    {
        "id": "4d871933-33b8-11ef-a9aa-001dd8b71d59",
        "title": "M\u00e6lk"
    },
    {
        "id": "4d8719a1-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Sukker"
    },
    {
        "id": "4d871a09-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Salt"
    },
    {
        "id": "4d871a6e-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Citron"
    },
    {
        "id": "4d871ad1-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Groft rugmel"
    },
    {
        "id": "4d871b34-33b8-11ef-a9aa-001dd8b71d59",
        "title": "G\u00e6r"
    },
    {
        "id": "4d871b95-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Olie"
    },
    {
        "id": "4d871bf6-33b8-11ef-a9aa-001dd8b71d59",
        "title": "\u00c6g"
    },
    {
        "id": "4d871c57-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Brun Farin"
    },
    {
        "id": "4d871cb8-33b8-11ef-a9aa-001dd8b71d59",
        "title": "R\u00f8rsukker"
    },
    {
        "id": "4d871d18-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Vand til pensling"
    },
    {
        "id": "4d871d7b-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Sm\u00f8r"
    },
    {
        "id": "4d871dda-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Birkes"
    },
    {
        "id": "4d871e3a-33b8-11ef-a9aa-001dd8b71d59",
        "title": "\u00c6g til pensling"
    },
    {
        "id": "4d871e98-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Mandelmel el. smuttede mandler"
    },
    {
        "id": "4d871efb-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Hjortetaksalt"
    },
    {
        "id": "4d871f57-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Vaniljesukker"
    },
    {
        "id": "4d871fad-33b8-11ef-a9aa-001dd8b71d59",
        "title": "\u00c6ggeblommer"
    },
    {
        "id": "4d8720f9-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Flormelis"
    },
    {
        "id": "4d872170-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Bl\u00e5b\u00e6rmarmelade"
    },
    {
        "id": "4d8721c6-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Hvid chokolade"
    },
    {
        "id": "4d8722c9-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Friske bl\u00e5b\u00e6r"
    },
    {
        "id": "4d872383-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Lunkent vand"
    },
    {
        "id": "4d8723db-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Grovvalsede havregryn "
    },
    {
        "id": "4d87242b-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Speltflager"
    },
    {
        "id": "4d872484-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Solsikkekerner"
    },
    {
        "id": "4d8724d3-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Valn\u00f8dder"
    },
    {
        "id": "4d872523-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Rosiner"
    },
    {
        "id": "4d872573-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Hakkede dadler"
    },
    {
        "id": "4d8725c3-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Surdej"
    },
    {
        "id": "4d872617-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Flydende honning"
    },
    {
        "id": "4d872666-33b8-11ef-a9aa-001dd8b71d59",
        "title": "K\u00e6rnem\u00e6lk"
    },
    {
        "id": "4d8726b6-33b8-11ef-a9aa-001dd8b71d59",
        "title": "M\u00f8rk \u00f8l"
    },
    {
        "id": "4d872705-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Maltsirup"
    },
    {
        "id": "4d872752-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Kakaopulver"
    },
    {
        "id": "4d8727a2-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Sk\u00e5rne rugkerner"
    },
    {
        "id": "4d8727f2-33b8-11ef-a9aa-001dd8b71d59",
        "title": "H\u00f8rfr\u00f8"
    },
    {
        "id": "4d872842-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Chiafr\u00f8"
    },
    {
        "id": "4d872890-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Fuldkornshvedemel"
    },
    {
        "id": "4d8728df-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Yoghurt"
    },
    {
        "id": "4d87292f-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Revet \u00e6ble"
    },
    {
        "id": "4d87297b-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Blandede fr\u00f8"
    },
    {
        "id": "4d8729c6-33b8-11ef-a9aa-001dd8b71d59",
        "title": "R\u00e5 marcipan"
    },
    {
        "id": "4d872a11-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Tesukker til drys"
    },
    {
        "id": "4d872a5c-33b8-11ef-a9aa-001dd8b71d59",
        "title": "St\u00f8dt kardemomme"
    },
    {
        "id": "4d872aa9-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Sammenpisket \u00e6g"
    },
    {
        "id": "4d872af3-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Bl\u00f8dt sm\u00f8r"
    },
    {
        "id": "4d872b3e-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Kanel"
    },
    {
        "id": "4d872b8a-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Grahamsmel"
    },
    {
        "id": "4d872bd5-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Rapsolie"
    },
    {
        "id": "4d872c1e-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Fintrevet kv\u00e6de uden skr\u00e6l og kernehus"
    },
    {
        "id": "4d872c76-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Durummel"
    },
    {
        "id": "4d872cc2-33b8-11ef-a9aa-001dd8b71d59",
        "title": "M\u00f8rk chokolade"
    },
    {
        "id": "4d872d0d-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Hasseln\u00f8dder"
    },
    {
        "id": "4d872d55-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Kogende vand"
    },
    {
        "id": "4d872da0-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Cashewn\u00f8dder"
    },
    {
        "id": "4d872de9-33b8-11ef-a9aa-001dd8b71d59",
        "title": "T\u00f8rrede abrikoser"
    },
    {
        "id": "4d872e33-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Skyr"
    },
    {
        "id": "4d872e80-33b8-11ef-a9aa-001dd8b71d59",
        "title": "\u00c6blecidereddike"
    },
    {
        "id": "4d872ecc-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Fint himalayasalt "
    },
    {
        "id": "4d872f18-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Speltmel"
    },
    {
        "id": "4d872f65-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Krydderurtesm\u00f8r"
    },
    {
        "id": "4d872fb2-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Guler\u00f8dder"
    },
    {
        "id": "4d873189-33b8-11ef-a9aa-001dd8b71d59",
        "title": "Havregryn"
    }
],
    skipDuplicates: true
  });
}