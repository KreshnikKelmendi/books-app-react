import image1 from "../images/gjenerali.jpg";
import image2 from "../images/toke-e-premtuar.jpg";
import image3 from "../images/agjenti-anglez.jpg";
import image4 from "../images/kodet-magjike.jpg";
import image5 from "../images/keshtjella.jpg";
import image6 from "../images/kiyosaki.jpg";
import image7 from "../images/download.jfif";
import image8 from "../images/forca-e-faktit.jpg";
import image9 from "../images/show_logo.jfif";
import image10 from "../images/darka-e-gabuar.jpg";
import image11 from "../images/kodi-i-da-vincit.jpg";
import image12 from "../images/procesi.jpg";

import image13 from "../images/f1.jfif";
import image14 from "../images/f2.jpg";
import image15 from "../images/f3.jpg";
import image16 from "../images/f4.jpg";
import image17 from "../images/f5.jpg";
import image18 from "../images/f6.jpg";

import image19 from "../images/r1.jpg";
import image20 from "../images/r2.jpg";
import image21 from "../images/r3.jpg";
import image22 from "../images/r4.jpg";
import image23 from "../images/r5.jpg";
import image24 from "../images/r6.jpg";

const data = [
    
    {
        id: 1,
        author: "Ismail Kadare",
        title: "Gjenerali i ushtrisë së vdekur",
        img: image1,
        description: "Gjenerali i ushtrisë së vdekur është një roman i shkrimtarit Ismail Kadare i cili u botua më 1963 në Tiranë. Së pari doli në shtyp si një tregim në vitin 1962 dhe më pas u përpunua dhe erdhi si roman vitin pasues po në Tiranë. Vepra u përkthye në disa gjuhë tjera dhe i dha autorit njohje ndërkombëtare. U vlerësua nga gazeta e njohur e Parisit Le Monde si një ndër 100 librat e shekullit XX.",
        price: 10
    },{

        id: 2,
        author: "Barack Obama",
        title: "Tokë e premtuar",
        img: image2,
        description: "Ky libër kaq i fuqishëm e i shkruar me mjeshtëri, pasqyron më së miri bindjen e Barak Obamës se demokracia nuk është një dhuratë nga lart, por një frymë që bazohet tek ndjeshmëria dhe mirëkuptimi, e cila duhet të ndërtohet ditë pas dite",
        price: 18
    },{
        id: 3,
        author: "Daniel Silva",
        title: "Agjenti Anglez",
        img: image3,
        description: "Një pjesëtare e rëndësishme e familjes mbretërore britanike vritet në një sulm me bombë. Shërbimet Sekrete Britanike i drejtohen të vetmit person, i cili mund ta gjejë vrasësin: agjentit legjendar, Gabriel Alon.Në shënjestrën e Gabrielit është Ejmon Kuin, mjeshtër në prodhimin e bombave dhe vrasës me pagesë.",
        price: 10.80
    },{
        id: 4,
        author: "Texe Marrs",
        title: "Kodet Magjike",
        img: image4,
        description: "A ishte 11 shtatori i sajuar nga brenda? A po shterojnë rezervat e naftës? Pse e ndryshoi Air Force historinë e saj për Stefenvillin? A përmbajnë shenjat rrugore kode të fshehtë?",
        price: 15
    },{
        id: 5,
        author: "Ismail Kadare",
        title: "Kështjella",
        img: image5,
        description: "Romani fillon me vendosjen e trupave osmane përreth kështjellës. Hapësira aty shndërrohet në një kamp me plot tenda, reparte e pajisje të tjera. Ushtria, në fillim bën përpjekje që ti bindë kështjellarët të dorëzoheshin. Mirëpo, meqë kjo përpjekje dështon, në Këshillin e saj të luftës kjo ushtri bën organizimin dhe planet që qëllimi ta arrijë me luftë.",
        price: 7
    },{
        id: 6,
        author: "Robert T. Kiyosaki",
        title: "Babai i pasur, babai i varfër",
        img: image6,
        description: "Libri më i mirë për financat personale per me shume se dy dekada e gjysem vjen me një botim të ri pas suksesit 25-vjeçar që ka pasur, duke formuar dhe ndihmuar me miliona njerëz që të çlirohen nga prangat e mungesës së parasë. Në këtë botim të ri kemi 9 kapituj sesionesh studimi që ju udhëzojnë gjatë kohës që lexoni, ri-lexoni, diskutoni dhe studioni këtë libër me miqtë dhe familjen tuaj.",
        price: 11
    },{
        id: 7,
        author: "Yuval Noah Harari",
        title: "21 leksione për shekullin e 21",
        img: image7,
        description: "21 leksione për shekullin e 21 i Yuval Noah Harari-it është një hulumtim zhbirues dhe largpamës në problematikat më të nxehta të ditëve të sotme ndërkohë që lëvizim drejt hapësirave të panjohura të së ardhmes.",
        price: 12
    },{
        id: 8,
        author: "Hans Rosling",
        title: "Forca e Faktit",
        img: image8,
        description: "Në librin “Forca e Faktit” profesori i Shëndetësisë Botërore dhe ligjëruesi me famë ndërkombëtare, Hans Rosling, me ndihmën e bashkëpunëtorëve të tij besnikë, Anna dhe Ola, na jep një shpjegim të padëgjuar, rrënjësisht të ndryshëm nga të tjerët, të arsyeve pse kjo ndodh. Ai na zbulon dhjetë instinktet që na çojnë drejt përfundimeve të gabuara.",
        price: 9
    },{
        id: 9,
        author: "Michelle Obama",
        title: "Becoming - Të bëhesh",
        img: image9,
        description: "",
        price: 17.50
    },{
        id: 10,
        author: "Ismail Kadare",
        title: "Darka e gabuar",
        img: image10,
        description: "Një darkë krejtësisht e pazakontë, me një mister midis, është subjekti i romanit “Darka e gabuar” e Ismail Kadaresë. Ndonëse i bazuar mbi një ngjarje të vërtetë, që ka trazuar vite më parë një qytet të tërë, e vërteta e darkës ka mbetur ende sot e pashpjeguar plotësisht.",
        price: 6
    },{
        id: 11,
        author: "Dan Brown",
        title: "Kodi i Da Vinçit",
        img: image11,
        description: "Gjatë kohës që është me shërbim në Paris, simbolistit të diplomuar në Havard, Robert Langdon, i bëjnë një telefonatë urgjente në orët e vona të natës. Brenda në muze kanë vrarë restauruesin e moshuar të Luvrit. Pranë trupit të tij është gjetur një kod i habitshëm.",
        price: 10.90
    },{
        id: 12,
        author: "Franc Kafka",
        title: "Procesi",
        img: image12,
        description: "Libri i tij i shmanget çdo shpjegimi racional; realizimi i tabllove të tij e zotëron tërë fushën e përfytyrimit dhe nuk di ç 'të admirosh më shumë: përshkrimin natyralist të një universi fantastik ravijëzimi i hollësishëm e bën të vërtetë në sytë tonë apo guximi bindës i devijimeve deri në çudi.",
        price: 7.90
    }
  ];


  const notebookData = [
    {
        id: 13,
        title: "Fletore me ngjyrë ari",
        img: image13,
        price: 3
    },{
        id: 14,
        title: "Fletore e kaltërt",
        img: image14,
        price: 1.50
    },{
        id: 15,
        title: "Fletore dhe kimik",
        img: image15,
        price: 2.90
    },{
        id: 16,
        title: "Fletore mbretërore + kimik",
        img: image16,
        price: 11
    },{
        id: 17,
        title: "Fletore me ngjyra",
        img: image17,
        price: 2
    },{
        id: 18,
        title: "Fletore - Composition",
        img: image18,
        price: 3.3
    }
  ];

  
  const recommendation = [
    {
        id: 19,
        author: "Alexandre Dumas",
        title: "Tre Musketerët",
        img: image19,
        description: "Romani tregon aventurat e një gaskonati trim të çartur 18 vjeçar me emrin D'Artanjan, që vjen në Paris të bëjë karrierë në trupën e muskëterëve. ",
        price: 8
    },{
        id: 20,
        author: "Grup Autorësh",
        title: "100 letra dashurie",
        img: image20,
        description: "Të gjithë i njohim këta emra të rëndësishëm për gjurmët e pashlyeshme e veprat e lëna pas, por pak dimë për ndjenjat e tyre intime. Plot stil, sublime, të shprehura bukur dhe me një ndjeshmëri të madhe, jua sjellim të përmbledhura disa prej letrave më të famshme të tyre, drejtuar më të dashurve të jetës.",
        price: 10
    },{
        id: 21,
        author: "Tom Kuka",
        title: "Gurët e vetmisë",
        img: image21,
        description: "E shkuara, e sotmja dhe e ardhmja gërshetohen dhe rrjedhin lirshëm nga njëra te tjetra si të ishin enë komunikuese, retrospektiva dhe kujtimet herë pas here bëhen njësh, dhe vetë personazhet gjenden në një kohë të pakohë.Boshti i romanit përsillet rreth masakrës së Paramithisë, ku 72 burra, bujarë të dyerve më të mëdha çame u thirrën nga mitropoliti grek kinse për të vendosur paqen mes palëve, por u prenë në besë dhe u vranë të gjithë në përroin e Selanit.",
        price: 9
    },{
        id: 22,
        author: "Ermal Mamaqi",
        title: "Në garë me veten",
        img: image22,
        description: "“Në garë me veten” vjen në formën e një udhërrëfyesi që mban plot mësime jete, të nxjerra nga një përvojë e gjatë dhe përballje sfiduese.  Në këtë libër do të zbuloni sekretet e mendjes që di të përballet me çdo vështirësi, dhe që çdo gur e përdor për të ngritur mure suksesi.",
        price: 12
    },{
        id: 23,
        author: "Matt Burgess",
        title: "Inteligjenca artificiale",
        img: image23,
        description: "Ky libër, botuar në mars të vitit 2021, është një udhërrëfyes i jashtëzakonshëm për inteligjencën artificiale nga WIRED",
        price: 7.50
    },{
        id: 24,
        author: "Heather Morris",
        title: "Tatuisti i Aushvicit",
        img: image24,
        description: "Një roman i bazuar në një histori të vërtetë, nga Heather Morris! Një histori dashurie në një kamp përqendrimi, ajo e Lejli dhe Gita Sokolovit, jo vetëm që do t'i mbijetonte ditëve të vështira, por do të dokumentohej me detaje shumë vite më pas. Një histori e mbetur peng për shtatëdhjetë vjet me radhë, e cila do t'ju bëjë për të qarë, por edhe do t'ju falë optimizëm. ",
        price: 9
    }
  ]


  

export { data, notebookData, recommendation};
    
