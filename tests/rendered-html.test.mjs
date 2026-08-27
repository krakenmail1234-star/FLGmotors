import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(path) {
  return readFile(new URL(path, import.meta.url), "utf8");
}

test("contains every public route and the main FLG Motors content", async () => {
  const [home, services, contacts, booking] = await Promise.all([
    source("../app/page.tsx"),
    source("../app/pakalpojumi/page.tsx"),
    source("../app/kontakti/page.tsx"),
    source("../app/pieteikties/page.tsx"),
  ]);
  assert.match(home, /Salabosim\. Izskaidrosim\./);
  assert.match(services, /serviceGroups/);
  assert.match(contacts, /Biķernieku iela 121G/);
  assert.match(booking, /Testa vidē piedāvājam tuvākās darba dienas/);
});

test("includes WhatsApp and the complete Latvian appointment form", async () => {
  const bookingForm = await source("../app/pieteikties/BookingForm.tsx");
  assert.match(bookingForm, /Nosūtīt WhatsApp/);
  assert.match(bookingForm, /Uzvārds/);
  assert.match(bookingForm, /Auto numura zīme/);
  assert.match(bookingForm, /Problēma, kas jānovērš/);
  assert.match(bookingForm, /37124945990/);
});
