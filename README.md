# F.L.G Motors mājaslapa

Latviešu valodas autoservisa mājaslapa ar pakalpojumu cenrādi, kontaktinformāciju, Facebook galeriju, Google Maps, WhatsApp saziņu un servisa pieteikuma formu.

## Lapas

- `/` — sākumlapa
- `/pakalpojumi` — pakalpojumi un cenas
- `/kontakti` — kontakti, darba laiks un karte
- `/pieteikties` — servisa pieteikums ar WhatsApp un Google Calendar testa plūsmu

## Izstrāde

Nepieciešams Node.js 22.13 vai jaunāks.

```bash
npm install
npm run dev
npm test
```

## Kalendāra integrācija

Testa versijā apmeklētājs izvēlas vienu no nākamajām 20 darba dienām un var:

- nosūtīt aizpildīto pieteikumu F.L.G Motors WhatsApp;
- izveidot iepriekš aizpildītu notikumu savā Google Calendar.

Pieraksts ir spēkā tikai pēc servisa apstiprinājuma. Lai pēc domēna pieslēgšanas rādītu reālo servisa kalendāra pieejamību, jāpievieno Google Appointment Schedule publiskā saite vai droša servera OAuth/API integrācija.

## Kontakts

- WhatsApp un tālrunis: +371 24 945 990
- Tālrunis: +371 26 778 334
- E-pasts: f.l.g-motors@inbox.lv
- Adrese: Biķernieku iela 121G, Rīga
