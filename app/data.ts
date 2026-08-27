export type ServiceGroup = {
  title: string;
  description: string;
  services: { name: string; price: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Datordiagnostika un elektronika",
    description: "Precīza kļūmju noteikšana un auto elektrosistēmu remonts.",
    services: [
      { name: "Standarta datordiagnostika (kļūdu nolasīšana un dzēšana)", price: "16,50 € – 38,50 €" },
      { name: "Padziļināta dzinēja vai elektrosistēmas diagnostika", price: "38,50 € – 110 €" },
      { name: "Auto pilna pārbaude pirms pirkšanas", price: "38,50 € – 110 €" },
      { name: "Lukturu pulēšana un regulēšana", price: "27,50 € – 55 €" },
      { name: "Akumulatora nomaiņa un reģistrācija vadības blokā", price: "16,50 € – 38,50 €" },
      { name: "Ģeneratora vai startera restaurācija / maiņa", price: "44 € – 121 €" },
    ],
  },
  {
    title: "Riepu serviss un riteņu ģeometrija",
    description: "Drošai, vienmērīgai un paredzamai braukšanai jebkurā sezonā.",
    services: [
      { name: "Riepu montāža un balansēšana (4 riteņu komplekts, R13–R22)", price: "38,50 € – 77 €" },
      { name: "Riepas remonts (cauruma lāpīšana ar diegu vai ielāpu)", price: "11 € – 27,50 €" },
      { name: "Riteņu savirzes (ģeometrijas) regulēšana", price: "33 € – 66 €" },
      { name: "Riepu komplekta sezonas uzglabāšana", price: "38,50 € – 44 €" },
    ],
  },
  {
    title: "Dzinēja remonts un restaurācija",
    description: "No mezglu maiņas līdz pilnai dzinēja restaurācijai.",
    services: [
      { name: "Zobsiksnas komplekta vai dzinēja ķēdes maiņa", price: "132 € – 385 €" },
      { name: "Dzinēja galvas remonts un blīves nomaiņa", price: "165 € – 495 €" },
      { name: "Dzinēja kapitālais remonts vai restaurācija", price: "550 € – 2750+ €" },
      { name: "Turbokompresora (turbīnas) nomaiņa vai restaurācija", price: "165 € – 440 €" },
    ],
  },
  {
    title: "Transmisija un ātrumkārba",
    description: "Sajūga, pusasu un pārnesumkārbu apkope un remonts.",
    services: [
      { name: "Sajūga komplekta nomaiņa (pārnesumkārbas demontāža)", price: "165 € – 385 €" },
      { name: "Automātiskās ātrumkārbas eļļas dinamiskā maiņa", price: "165 € – 330 €" },
      { name: "Pusass vai homokinētiskā šarnīra (granātas) nomaiņa", price: "38,50 € – 82,50 €" },
    ],
  },
  {
    title: "Ritošās daļas un balstiekārtas remonts",
    description: "Stabilitātei, komfortam un drošai auto vadāmībai.",
    services: [
      { name: "Amortizatoru maiņa (1 gab.)", price: "33 € – 66 €" },
      { name: "Riteņa gultņa maiņa (1 gab.)", price: "38,50 € – 88 €" },
      { name: "Svira / sailentbloku (bukšu) nomaiņa", price: "27,50 € – 66 €" },
    ],
  },
  {
    title: "Stūres un dzesēšanas sistēmas",
    description: "Droša vadāmība un stabila dzinēja darba temperatūra.",
    services: [
      { name: "Stūres stieņa vai uzgaļa nomaiņa", price: "22 € – 49,50 €" },
      { name: "Stūres reikas restaurācija vai nomaiņa", price: "198 € – 440 €" },
      { name: "Ūdens sūkņa vai termostata nomaiņa", price: "44 € – 110 €" },
      { name: "Dzesēšanas sistēmas radiatora nomaiņa", price: "55 € – 132 €" },
    ],
  },
  {
    title: "Bremžu sistēma",
    description: "Bremžu sistēmas pārbaude, apkope un detaļu nomaiņa.",
    services: [
      { name: "Bremžu kluču maiņa vienai asij", price: "27,50 € – 55 €" },
      { name: "Bremžu disku un kluču komplekta maiņa vienai asij", price: "49,50 € – 99 €" },
      { name: "Bremžu suportu restaurācija vai nomaiņa", price: "38,50 € – 82,50 €" },
    ],
  },
  {
    title: "Izplūdes sistēma",
    description: "Izplūdes sistēmas remonts un DPF filtra apkope.",
    services: [
      { name: "Izpūtēja posma metināšana vai nomaiņa", price: "27,50 € – 77 €" },
      { name: "DPF (kvēpu filtra) reģenerācija vai tīrīšana", price: "110 € – 275 €" },
    ],
  },
  {
    title: "Klimata sistēma un regulārā apkope",
    description: "Regulāra apkope auto ilgmūžībai un komfortam salonā.",
    services: [
      { name: "Dzinēja eļļas un filtra nomaiņa", price: "16,50 € – 38,50 €" },
      { name: "Visu filtru nomaiņa (gaisa, salona, degvielas, eļļas)", price: "33 € – 66 €" },
      { name: "Kondicioniera sistēmas noplūžu pārbaude", price: "16,50 € – 33 €" },
      { name: "Kondicioniera uzpildīšana ar freonu (R134a vai R1234yf)", price: "55 € – 154 €" },
    ],
  },
];

export const allServices = serviceGroups.flatMap((group) => group.services.map((service) => service.name));
export const facebookUrl = "https://www.facebook.com/profile.php?id=100068430232724&locale=lv_LV";
export const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=F.L.G+Motors+Biķernieku+iela+121G+Rīga";

