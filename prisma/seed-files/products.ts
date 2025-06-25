import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function seedRecipes() {
  await prisma.product.createMany({
    data: [
    {
        "id": "b3f15229-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03500b0-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Håndværker",
        "slug": "haandvaerker",
        "teaser": "Når vi en sjælden gang køber morgenbrød hos bageren, så skal jeg altid have en håndværker, fordi jeg elsker det tykke lag med blå birkes ovenpå. Jeg har faktisk aldrig tænkt på at bage håndværkere selv. Havde ligesom en forventning om, at det aldrig ville kunne blive ligeså godt som dem fra bageren. Til jul fik jeg Mette Blomsterberg nye bog \u201cBlomsterbergs skønne klassikere\u201d og den byder på flere opskrifter på morgenbrød. Så sidste weekend tænkte jeg, nu skal det være. Nu vil jeg prøve at bage håndværkere selv, og det blev en succes!\n",
        "description": "Ingredienserne er ikke ligefrem noget, der vil ruinere dig. Tværtimod! Tænk på, at en håndværker koster ca 5 kr hos bageren, og det er egentlig en skandale, fordi de indeholder en bitte smule gær, vand, salt, mel og olie. Det kan højst koste dig en flad tier, at lave denne portion på 12-15 stk. Når de ovenikøbet bliver så gode, så er der ingen undskyldning for at servere hjemmebragt brød mere.\n\nVær opmærksom på at dejen skal koldthæve i køleskab i ca 8-10 timer.\n\nSmuldr gæren i en skålen \u2013 brug gerne en røremaskine \u2013 Tilsæt det kolde vand og opløs gæren. Start med at tilsætte salt og KUN 350 g hvedemel i første omgang. Her vil du sikkert opleve, at dejen er meget flydende. Rør olien i og tilsæt forsigtigt lidt mere mel. Jeg gjorde faktisk det, at jeg hældte dejen ud på køkkenbordet, for at være sikker på at dejen ikke fik for meget mel. Det er meget vigtigt, at dejen er let og smidig. Ellers risikerer man at få nogle hårde og tørre håndværkere. Så jeg æltede videre med hånden indtil dejen lige præcis var mættet. Den var stadig en smule klistret, og meget let. Der på smed jeg den ned i røremaskinen igen, og den æltede den i ca 5 min. Nu stiller du dejen i køleskabet, og lader den dejen hæve til næste morgen.\n\nNu tager du dejen ud af køleskabet, ælter den og tilsætter måske lidt mere mel, så den kan slippe bordet.  Nu ruller du den ud til en kvadrat med en tykkelse på 1\u00bd-2 cm. (Her stiller Blomsterberg så kvadraten i fryseren! Det gjorde jeg ikke. Det havde jeg ikke tid til, og forstod heller ikke hvorfor jeg skulle gøre det? Måske er der nogen af jer læsere, der kan lære mig hvorfor det er en god ide?) Jeg fik 13 stk. håndværkere ud af denne portion, og jeg synes de havde en perfekt størrelse. Pensl kvadraten godt med vand og drys en masse blå birkes på og skær med en skarp kniv håndværkerne ud. Stil dem til hævning på en bageplade tildækket i 1-1\u00bd time. Bag dem på 200 grader varmluft eller 220 alm. ovn i 15-20 min.\n\nJeg havde et par stykker tilovers næste dag, og de var super gode efter en lille tur på brødristeren.\n\nSjovt nok, så jeg \u201cBagedysten\u201d for første gang nogensinde i onsdags, og så var temaet brød. Det største problem for alle deltagerne var ifølge Blomsterberg, at de ikke havde brugt nok salt og for meget mel! Det er svært at bage, fordi der er så mange faktorer man ikke kan forudse. Nogen gange lykkes det overmåde godt, og andre gange står man med et usselt fladt og kedeligt brød. Men det er jo lige netop det der er sjovt og udfordrende, synes jeg. Når det så lykkes så godt, som de her håndværkere gjorde, så sværger jeg aldrig at købe bagerbrød mere (lige indtil næste gang jeg står i Lagkagehuset\u2026).",
        "duration": 75,
        "amount": 20,
        "price": 12.99
    },
    {
        "id": "b3f1547a-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03502f7-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Morgenhorn",
        "slug": "morgenhorn",
        "teaser": "Det er sød musik for smagsløgene at bage hjemmelavede horn, prøv disse lækre morgenhorn.",
        "description": "Smelt smørret i en kasserolle eller i mikroovn. Tilsæt mælk, og hæld væsken over smuldret gær, salt og sukker. Tilsæt det meste af melet, og ælt dejen igennem. Lad den hæve ca. 40 min.\n\n\u00c6lt dejen let, og tril den til en kugle. Sigt mel ud over bordet og dejen, og tryk og rul den ud i en cirkel, der måler 50-55 cm i diameter. Tjek jævnligt, om den slipper bordet, eller om der skal mere mel til.\n\nDel dejen i 16 kiler, og rul dem sammen. Sæt dem til efterhævning i ca. 40 min. på bagepapir på en bageplade. Pensl med sammenpisket æg, kom evt. lidt drys på, og bag hornene ved 220 gr. i ca. 13 min.",
        "duration": 60,
        "amount": 16,
        "price": 12.0
    },
    {
        "id": "b3f154d5-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350375-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Blåbærsnitter med mandler og hvid chokolade",
        "slug": "blaabaersnitter",
        "teaser": "Snitter behøver ikke altid være med hindbær! Prøv bare dette bud på blåbærsnitter med mandler og hvid chokolade.",
        "description": "Smuldr smørret i hvedemel og mandelmel. Tilsæt hjortetaksalt, vaniljesukker, æggeblommer og flormelis. Saml dejen, og pak den ind i plastfilm. Lad den hvile 30 min. i køleskab.\n\nDel dejen i to stykker. Hvert stykke udruller du til en rektangel 8 cm bred og 35 cm lang, dejen skal være ca. \u00bd cm tyk.\n\nLæg den ene dejplade over på en plade med bagepapir. Fordel blåbærmarmelade over. Læg den anden dejplade over.\n\nBag kagen ved 180 gr. i ca. 20 min. på midterste ovnribbe.\n\nSmelt chokolade og smør over vandbad, og pensl det på kagen.\n\nSkær kagen i snitter.\n\nPynt med friske, skyllede og afdryppede blåbær. Afkøl snitterne.\n",
        "duration": 45,
        "amount": 16,
        "price": 12.0
    },
    {
        "id": "b3f1551a-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03503da-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Mysliboller",
        "slug": "mysliboller",
        "teaser": "Grove og søde på samme tid - her får du opskriften på lækre og saftige mysliboller med nødder, rosiner, dadler, havregryn og solsikkekerner.",
        "description": "Rør vand og mel sammen, og lad det stå tildækket på køkkenbordet 3-4 dage. Surdejen er derefter klar til brug.\n\nBland havregryn med speltflager, solsikkekerner, hakkede valnødder, rosiner og dadler.\n\nKom vand og surdej i en skål, og tilsæt salt, honning og mysliblandingen, og rør godt rundt.\n\n\u00c6lt nu hvedemel i lidt ad gangen, til dejen er glat og smidig. Stil dejen til hævning et lunt sted i ca. 2 timer.\n\nDel dejen i 12 stykker, og form til boller. Læg dem på et stykke bagepapir, og lad dem efterhæve i ca. 1 time. 6.\n\nTænd ovnen på 225 gr., og lad en bageplade blive i ovnen. Træk forsigtigt boller og bagepapir over på den varme bageplade, og bag i ca. 20 min.\n\nAfkøl bollerne på en bagerist.",
        "duration": 20,
        "amount": 12,
        "price": 12.0
    },
    {
        "id": "b3f1555e-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c035043b-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Rugbrødsbolle",
        "slug": "rugbroedsbolle",
        "teaser": "Lækre bløde rugbrødsboller med masser af gode frø og kerner.",
        "description": "Rør vand og mel sammen, og lad det stå tildækket på køkkenbordet 3-4 dage.\n\nRør kærnemælk med øl, surdej og sirup. Tilsæt salt, kakaopulver, kerner, frø og fuldkornsmel. Rør dejen godt \u2013 helst på en røremaskine, og tilsæt gradvist rugmel.\n\nFordel dejen i muffinforme, og stil på køl til næste dag.\n\nTag formen ud, og lad den stå på bordet ca. 1 time, inden bollerne bages ved 180 gr. i ca. 30 min.",
        "duration": 30,
        "amount": 14,
        "price": 12.0
    },
    {
        "id": "b3f155a3-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350498-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Grove æblestykker",
        "slug": "aeblestykker",
        "teaser": "Perfekte til morgenbordet, i madpakken eller bare til at stille den lille sult. Her får du opskriften på lækre grovboller med æble, sirup og fuldkornsmel.",
        "description": "Hæld vand og yoghurt i en stor skål, og opløs gæren heri. Tilsæt salt, sirup og revet æble.\n\nRør først fuldkornsmel og dernæst hvedemel i dejen lidt ad gangen. \u00c6lt dejen længe \u2013 gerne på en røremaskine.\n\nStil dejen tildækket et lunt sted, og lad den hæve til dobbelt størrelse.\n\nDyp en stor spiseske i koldt vand, og form dejen skødesløst til boller.\n\nFordel bollerne på to bageplader med bagepapir, og lad dem efterhæve ca. 30 min.\n\nTænd ovnen på 225 gr. Pensl overfladen med sammenpisket æg, og drys med birkes, frø etc.\n\nBag bollerne i ca. 15 min., til de er sprøde. Afkøl bollerne på en bagerist.",
        "duration": 50,
        "amount": 10,
        "price": 12.0
    },
    {
        "id": "b3f155e6-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03504f3-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Glutenfrit brød med havre",
        "slug": "glutenfri",
        "teaser": "Det er anderledes at bage glutenfrit, for det er normalt melets gluten, der holder sammen på brødet og giver krummen struktur. Her bruger vi loppefrøskaller til at holde på luft og fugt i brødet.",
        "description": "Rør gæren ud i lunkent vand, tilsæt de øvrige ingredienser, og rør dejen godt sammen i 1-2 min. Dæk skålen løst med film, og lad dejen hvile ved stuetemperatur i 15 min.\n\nRør dejen godt igennem igen, og lad den igen hvile i 15 min. Sæt derefter dejen på køl indtil brug \u2013 eller brug den med det samme.\n\nForm dejen til et brød. Brug våde hænder, og glat overfladen. Vend evt. brødet i havregryn eller frø og kerner, og læg det i en smurt form (2 liter).\n\nLad det hæve tildækket i ca. 1 time ved stuetemperatur \u2013 ca. 2 timer, hvis dejen er kold fra køleskabet.\n\nSæt en bageplade midt i ovnen, og en bradepande på nederste rille. Varm ovnen op til 250 grader/225 grader varmluft.\n\nSæt brødet i ovnen, og kast en kop vand i den varme bradepande. Luk ovnlågen, og bag i 15 min. Skru ned til 200 grader/180 grader varmluft, til skorpen er gyldenbrun og brødet er gennembagt (98 grader) ca. 30 min.\n\nVend brødet ud på en rist, og lad det køle helt af, før du skærer i det.\n\nTIP: Skær evt. det afkølede brød i skiver, og frys det i små \u201ddagsportioner\u201d. \n",
        "duration": 60,
        "amount": 1,
        "price": 12.0
    },
    {
        "id": "b3f15626-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350555-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Morgenhorn med marcipan",
        "slug": "morgenhorn",
        "teaser": "Søde, lette og luftige er disse horn. De egner sig fint til frysning og kan derfor nemt lunes til morgenbordet.",
        "description": "Smelt smørret, tilsæt mælken, og tag gryden fra varmen. Når væsken er fingervarm, hældes den i dejskålen sammen med 1 æg og 1 æggeblomme (gem hviden).\n\nSmuldret gær, sukker og salt tilsættes, og blandingen røres jævn.\n\nMelet tilsættes gradvis, og dejen, der skal være temmelig lind, æltes igennem. Den hæver ca. 45 min, vendes ud på bordet og æltes let.\n\nRul dejen ud i en cirkel så stor som muligt, gerne i køkkenbordets bredde (55-60 cm).\n\nLad den hvile 5-10 min., inden den skæres i 16 kiler.\n\nMarcipanen røres blød med halvdelen af den tiloversblevne æggehvide og røres jævn med sukkeret. En klat lægges på hver kile og de rulles sammen og lægges på pladen.\n\nHornene efterhæver ca. 30 min., pensles med resten af æggehviden, drysses med tesukker og bages ved 210 gr. i 12-14 min.",
        "duration": 70,
        "amount": 16,
        "price": 12.0
    },
    {
        "id": "b3f15661-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03505b1-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Hjemmebagte krydderboller",
        "slug": "krydderboller",
        "teaser": "Velduftende hjemmebagte krydderboller smager bare rigtig godt og er perfekte på søndagsmorgenbordet.",
        "description": "Lun mælken, til den er fingervarm. Kom mælken i en skål, og udrør gæren heri. Rør æg, sukker og kardemomme i. Kom halvdelen af hvedemelet i, og ælt dejen godt, gerne på en køkkenmaskine 4-5 min. Lad dejen hvile 15. min.\n\nRør salt og det bløde smør i dejen. Tilsæt nu resten af hvedemelet, til dejen lige slipper skålens sider.\n\nKom 1 spsk. olie i en skål, og læg dejen heri. Vend dejen rundt, så den er dækket af et tyndt lag olie.\n\nDæk skålen med husholdningsfilm. Lad dejen hæve ca. 1 time.\n\nForm 15 boller. Lad dem efterhæve tildækket med et rent klæde ca. 40 min.\n\nPensl med sammenpisket æg. Bag bollerne ca. 18 min. ved 200 gr.",
        "duration": 18,
        "amount": 15,
        "price": 12.0
    },
    {
        "id": "b3f156a2-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c035060a-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Svenske snegle med kanel og kardemomme",
        "slug": "svenske-snegle",
        "teaser": "Skønne kanelsnegle med masser af kanel og kardemomme - de lækre snaskede snegle smager næsten lige som de svenske kanelbullar.",
        "description": "Smelt smørret i en kasserolle, tilsæt mælken, og varm det op, til det er lunkent, ca. 37 grader. Tilsæt gæren og rør, til den er opløst.\n\nTilsæt ægget sammen med sukker, salt, kardemomme og to tredjedele af melet, og rør dejen glat. Arbejd det resterende mel i lidt ad gangen, og ælt grundigt, til du har en smidig og blank dej. Pas på med ikke at tilsætte yderligere mel \u2013 dejen vil samle sig og begynde at slippe kanterne, når du får æltet den godt.\n\nSæt dejen til hævning til dobbelt størrelse (det tager ca. 1\u00bd time) i en skål med et fugtigt klæde over, og lav imens remoncen ved at røre smør, sukker og kanel sammen, til det er cremet i konsistensen.\n\nNår dejen er færdighævet, tages den ud på bordet til endnu en hurtig omgang æltning. Dejen er færdigæltet, når den slipper både bord og hænder.\n\nTænd ovnen for 225 grader. Rul den derefter ud til et rektangel på ca. 25 x 40 cm og smør remoncen ud over. Rul dejen sammen på den lange side, og skær sneglene ud i ca. 3 cm tykkelse.\n\nLæg dem med 2-3 cm imellem på en bradepande med bagepapir, og lad dem hæve under et klæde i 45 min, til de næsten rører hinanden. Pensl med et sammenpisket æg, og bag sneglene i 12-15 minutter, eller til de er gyldne og flotte at se på.\n\nLad dem køle ned til stuetemperatur, før du pynter dem med glasur eller bare serverer, dem helt som de er.",
        "duration": 60,
        "amount": 20,
        "price": 12.0
    },
    {
        "id": "b3f156e3-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350662-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Hjemmebagt sønderjysk rugbrød",
        "slug": "soenderjysk",
        "teaser": "Bag et lækkert lyst rugbrød uden kerner. Brødet er bagt med surdej, men det kan også laves i en lynversion med kærnemælk og gær.",
        "description": "Dag 1:\nRør 2\u00bd dl rugmel sammen med 3 dl lunkent vand (maks. 37 grader) i et patentglas el. lign. (1 liter). Læg låget løst på (uden gummiring), og stil det et lunt sted i 2 dage \u2013 rør i det af og til.\n\nDag 3:\nRør surdejen igennem, og tilsæt 1 dl rugmel og 1 dl vand. Dæk løst til, og lad det stå i 1 døgn.\n\nDag 4: Gentag dag 3.\n\nDag 5: Surdejen har fine bobler i overfladen og dufter syrligt, og du er klar til at bage.\n\nTIP: Den hurtige version Bag uden surdej: Du kan erstatte surdej og vand i opskriften med 1 liter kærnemælk, 2-3 dl vand og 25 g gær\n\nRugbrød:\nHæld 5 dl surdej i en røreskål, og gem resten (se tip). Tilsæt de øvrige ingredienser, og rør dejen grundigt i 8-10 min. \u2013 gerne på maskine. Dejen skal være fast, men lidt klistret.\n\nDæk skålen med et fugtigt viskestykke, og lad den hæve et lunt sted i 1\u00bd-2 timer.\n\nVend dejen ud på et meldrysset bord, og del den i 2 portioner. \u00c6lt dem igennem, og form dem til cylinderformede brød. Læg dem på en bageplade med bagepapir, og prik dem jævnt med en strikkepind eller et træspyd. Pensl dem med vand, og lad dem hæve tildækket i 45-60 min.\n\nVarm ovnen op til 250 grader.\n\nPensl brødene med vand, og sæt dem midt i ovnen. Skru straks ned til 200 grader, og bag dem i ca. 1 time. Tjek centrumstemperaturen med et stegetermometer, der skal vise 99 grader.\n\nSæt brødene til afkøling på en rist, og pak dem ind i et rent, hårdt opvredet viskestykke, hvis du ønsker en blød skorpe. \n\nOpbevar brødet i fryseposer \u2013 og frys evt. brødene i passende portioner.",
        "duration": 3600,
        "amount": 2,
        "price": 12.0
    },
    {
        "id": "b3f1571f-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03506bb-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Hjemmebagt brød med kvæder",
        "slug": "kvaedebroed",
        "teaser": "Kvæder er måske ikke lige det første, man forbinder med bagværk, men du kan faktisk sagtens tilsætte fintrevet kvæde til denne dej og bage et lækkert grahamsbrød med kvæde.",
        "description": "1. Opløs gæren i det lune vand. Tilsæt salt, sukker, olie og kvæde. Rør grahamsmelet i. Rør hvedemelet i lidt ad gangen.\n\n2. \u00c6lt dejen, til den er fast og glat, og lad den hæve under et klæde 15-20 min.\n\n3. Slå dejen ned, ælt den let, og del den i to stykker, der formes til brød. Læg dejen i brødforme (950 ml). Lad brødene hæve i formene 15-20 min. under et klæde.\n\n4. Klip tre små hak i toppen af hvert brød, og pensl med sammenpisket æg. Bag brødene ved 200 gr. i ca. 20 min. Lad de færdige brød køle af på en bagerist.",
        "duration": 90,
        "amount": 2,
        "price": 12.0
    },
    {
        "id": "b3f1576b-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350713-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Stor durumbolle",
        "slug": "durumbolle",
        "teaser": "Godt brunchbrød, der bages som en stor, flad bolle, og som passer både til ost, skinke, pølse og marmelade. Den flade form nedsætter både bage- og afkølingstid, så brødet er hurtigt at servere friskbagt.",
        "description": "Fordejen røres sammen aftenen før, sådan at den står 6-10 timer, inden den gøres færdig.\n\nNæste morgen tilsættes pizzamel gradvist, og dejen æltes færdig. Dejen drysses med rigeligt durummel og vendes ud på bordet, hvor den deles i to, formes til kugler og klappes ud i ca. 2 cm tykkelse, der lægges til hævning, mens ovnen varmer op til 175 gr.\n\nBrødene bages ca. 25 min.",
        "duration": 50,
        "amount": 2,
        "price": 12.0
    },
    {
        "id": "b3f157ad-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350769-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Rugbrødsboller med chokolade",
        "slug": "rugbroedsboller-chokolade",
        "teaser": "Er du typen, der altid bager rugbrød, er det nemt at tage en klat dej fra og forvandle dem til rugbrødsboller. Har du ikke surdej på køl, kan du bruge denne opskrift. Er du totalt til hurtige løsninger, så vælg en anstændig rugbrødsblanding, og knald chokolade og nødder i den.",
        "description": "\n\n\n\n1. Lun vandet i din elkoger eller på komfuret til cirka 37 grader. Rør gæren ud i det lune vand, og tilsæt kærnemælk, salt og honning.\n\n2. Kom rugkerner, hørfrø og chiafrø i. Kom melet i lidt ad gangen \u2013 det er ikke sikkert, du har behov for det hele. Hak chokolade og nødder, og vend dem i dejen. Lad dejen hæve lunt i \u00bd time.\n\n GraphicInTextBlock\n3. Form dejen med våde hænder til aflange rugboller. Vend dem i en blanding af hørfrø og chiafrø, og sæt dem på bagepapir på en bageplade.\n\n4. Lad dem hæve i yderligere \u00bd time, og bag dem bagefter ved 175 grader i cirka 30 minutter. Lad dem køle og nyd dem.",
        "duration": 100,
        "amount": 25,
        "price": 12.0
    },
    {
        "id": "b3f157e8-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03507c2-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Rugkernebrød med abrikos og mandler",
        "slug": "rugkernebroed",
        "teaser": "Groft og knasende fuld af nødder, kerner og smag.",
        "description": "1/ Stil rugkerner og hørfrø i blød i det kogende vand i 15 minutter.\n\n2/ Hak cashewnødderne, og snit abrikoserne i strimler.\n\n GraphicInTextBlock\n3/ Rør gæren helt ud i vandet, og tilsæt olie, skyr, salt, mandelmel og rugmel.\n\n4/ Hæld vandet fra rugkerner og hørfrø, og tilsæt dem til dejen. Rør dejen godt i igennem.\n\n5/ Fordel dejen i formen, og glat den ud med en våd hånd. Prik med en gaffel i overfladen, og stil den til hævning i rugbrødsformen i ca. 3 timer.\n\n6/ Bag rugbrødet midt i ovnen ved 200 grader i først 1 time, dæk så brødet med stanniol, og lad det bage 1 time mere.\n\n7/ Når brødet er færdigt, pakkes det ind i et vådt viskestykke med et tørt håndklæde omkring. Stil det på køl eller til side til dagen efter. På den måde bevarer det sin saftighed og er nemt at skære ud.",
        "duration": 120,
        "amount": 1,
        "price": 12.0
    },
    {
        "id": "b3f1581e-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c035081c-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Lette flutes",
        "slug": "lette-flutes",
        "teaser": "De lækre flutes mætter ikke for voldsomt og passer derfor godt til de fleste hovedretter, supper og buffetter.",
        "description": "1. Hæld den lunede mælk over smuldret gær, olie og salt i dejskålen. Pisk omkring halvdelen af melet i væsken, og ælt derefter så meget mel i dejen, som den kan tage. Den skal være smidig, men ikke klistret. Lad den hæve en god halv time.\n\n2. Slå dejen ned og del den. Vil du have brødene meget akkurate, kan du veje dejen, så de bliver lige store. Form dejen til flute ved at klappe den ud i en firkant, der rulles stramt sammen, glattes og lægges til efterhævning. Fortsæt til al dejen er brugt, dæk brødene til, og lad dem efterhæve ca. 25 min.\n\n3. Pensl dem med æg, og drys efter smag. Giv hvert brød 2 dybe, lange snit med en hobbykniv eller en anden superskarp kniv, og stil dem straks i ovnen på øverste rille. Bages ca. 13 min. ved 210 gr.",
        "duration": 60,
        "amount": 8,
        "price": 12.0
    },
    {
        "id": "b3f15935-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c0350870-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Hvidløgsflutes med krydderurter",
        "slug": "hvidloegsflutes",
        "teaser": "Uhm, hvidløgsbrød er det perfekte tilbehør til det meste.",
        "description": "Kryddersmør: Alt efter humør og udvalg bruger jeg fx persille/oregano/basilikum/timian, estrago /persille/hvidløg, kørvel/dild, citronmelisse/citronverbena og/eller mynte. Skyl og slyng krydderurterne, og finthak dem. Bland dem i det bløde smør, fintriv hvidløg og citronskal i. Smag til med salt og peber.\n\nBrød: Rør gær og honning ud i vandet, og lad det stå 10 minutter, så gæren vågner. Bland derefter eddike, olie, salt og mel i, og ælt dejen igennem i 5-10 minutter, allerhelst på en røremaskine. Hold lidt igen med hvedemelet, og tilsæt lidt mere mel til sidst om nødvendigt. Lad dejen stå i 10 minutter, og rør/ælt den så kraftigt igennem igen et halvt minuts tid. Dæk skålen til med et fugtigt viskestykke, og lad dejen hæve 2-3 timer til minimum dobbelt størrelse.\n\nDel dejen i 3 stykker, og form dem til lange flutes. Læg dem på en bageplade beklædt med bagepapir. Snit flutene på skrå med en skarp kniv, ca. \u00bd centimeter dybt. Lad brødene hæve tildækket i 30-45 minutter. Lige inden du bager flutene, skær da krydderurtesmørret i skiver, så du har det antal, der passer til de snit, du har lavet. Bag flutene i en 220 \u00b0C varm ovn i ca. 10 minutter, tag dem ud, skær dybere ned i de snit, du har lavet \u2013 dog uden at skære helt igennem \u2013 og kom smørret ned i hullerne. Kom dem tilbage i ovnen, og bag dem færdige i ca. 5 minutter. Brødet smager klart bedst friskt og lunt, men kan fint holde sig et par dage og lunes i ovnen.\n\nTip! Brug aldrig lunkent vand fra vandhanen, idet det indeholder en masse bakterier. Bland kogt vand med koldt vand fra hanen. Den mest optimale temperatur er omkring 37 \u00b0C.\n\nTip! Brødet bliver mest luftigt og originalt, hvis du bruger ren hvedemel, det italienske tipo 00. Det er ikke det sundeste og mest fordøjelige valg, så derfor bruger jeg en blanding af rug-, spelt- og hvedemel.",
        "duration": 80,
        "amount": 3,
        "price": 12.0
    },
    {
        "id": "b3f159aa-33b8-11ef-a9aa-001dd8b71d59",
        "imageId": "c03508c8-33bb-11ef-a9aa-001dd8b71d59",
        "title": "Saftige gulerodsboller",
        "slug": "gulerodsboller",
        "teaser": "I disse saftige gulerodsboller er gulerødderne med til at give en svampet konsistens og en flot orange farve. Bollerne kan bruges til f.eks. morgenmad, til madpakken eller som en lille snack.",
        "description": "Varm mælk og vand i en gryde, til det er fingervarmt (ca. 37 grader).\n\nSmuldr gæren i en skål, og tilsæt det lune mælk og vand. Rør rundt til gæren er opløst. Bland salt og honning i.\n\nSkræl gulerødderne, og riv dem groft på et rivejern. Bland det sammen med væsken. \n\nKom havregryn og fuldkornshvedemel i, og kom derefter hvedemelet i lidt efter lidt. \u00c6lt dejen godt igennem i hånden eller med en røremaskine. Tilpas mængden af mel, så dejen forbliver let klistret \u2013 den bliver mindre klistret efter hævning.\n\nLæg et viskestykke over dejen, og lad den hæve til dobbelt størrelse i ca. 1 times tid.\n\nDel dejen i 16 lige store stykker, og form dem til boller. Brug lidt ekstra mel, hvis dejen er for klistret \u2013 brug dog ikke for meget, da bollerne så bliver tørre.\n\nLæg bollerne på en bradepande med bagepapir, og lad dem hæve tildækket i ca. 30 minutter.\n\nPensl bollerne med et pisket æg, og bag dem i ca. 15 minutter ved 220 grader.",
        "duration": 35,
        "amount": 16,
        "price": 12.0
    }
],
    skipDuplicates: true
  });
}