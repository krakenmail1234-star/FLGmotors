"use client";

import { FormEvent, useMemo, useState } from "react";
import { allServices } from "../data";

type Booking = {
  name: string; surname: string; phone: string; email: string; service: string;
  date: string; time: string; numberplate: string; issue: string;
};

function calendarDate(date: string, time: string, addMinutes = 0) {
  const start = new Date(`${date}T${time}:00`);
  start.setMinutes(start.getMinutes() + addMinutes);
  return start.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function readBooking(form: HTMLFormElement): Booking {
  const data = new FormData(form);
  return Object.fromEntries(["name", "surname", "phone", "email", "service", "date", "time", "numberplate", "issue"].map((key) => [key, String(data.get(key) ?? "")])) as Booking;
}

function bookingText(data: Booking) {
  return [
    "Sveiki! Vēlos pieteikt auto F.L.G Motors servisam.", "",
    `Vārds, uzvārds: ${data.name} ${data.surname}`,
    `Tālrunis: ${data.phone}`,
    `E-pasts: ${data.email}`,
    `Auto numura zīme: ${data.numberplate}`,
    `Pakalpojums: ${data.service}`,
    `Vēlamais datums un laiks: ${data.date}, ${data.time}`,
    `Problēma: ${data.issue}`, "",
    "Lūdzu, apstipriniet, vai šis laiks ir pieejams.",
  ].join("\n");
}

export function BookingForm() {
  const [notice, setNotice] = useState<"whatsapp" | "calendar" | null>(null);
  const availableDates = useMemo(() => {
    const dates: { value: string; label: string }[] = [];
    const cursor = new Date();
    cursor.setDate(cursor.getDate() + 1);
    while (dates.length < 20) {
      if (cursor.getDay() !== 0 && cursor.getDay() !== 6) {
        const value = [cursor.getFullYear(), String(cursor.getMonth() + 1).padStart(2, "0"), String(cursor.getDate()).padStart(2, "0")].join("-");
        const label = new Intl.DateTimeFormat("lv-LV", { weekday: "long", day: "2-digit", month: "long" }).format(cursor);
        dates.push({ value, label: label.charAt(0).toUpperCase() + label.slice(1) });
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return dates;
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = readBooking(event.currentTarget);
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    if (submitter?.value === "calendar") {
      const params = new URLSearchParams({
        action: "TEMPLATE", text: `F.L.G Motors — ${data.numberplate} — ${data.service}`,
        dates: `${calendarDate(data.date, data.time)}/${calendarDate(data.date, data.time, 60)}`,
        location: "Biķernieku iela 121G, Rīga",
        details: `TESTA PIETEIKUMS — gaida servisa apstiprinājumu.\n\n${bookingText(data)}`,
      });
      setNotice("calendar");
      window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, "_blank", "noopener,noreferrer");
      return;
    }
    setNotice("whatsapp");
    window.open(`https://wa.me/37124945990?text=${encodeURIComponent(bookingText(data))}`, "_blank", "noopener,noreferrer");
  }

  return <form className="booking-form" onSubmit={submit}>
    <div className="test-badge"><span /> Pieejamo laiku testa režīms</div>
    <div className="form-grid">
      <label><span>Vārds *</span><input required name="name" autoComplete="given-name" placeholder="Jūsu vārds" /></label>
      <label><span>Uzvārds *</span><input required name="surname" autoComplete="family-name" placeholder="Jūsu uzvārds" /></label>
      <label><span>Tālrunis *</span><input required name="phone" type="tel" autoComplete="tel" defaultValue="+371 " pattern="[+0-9 ()-]{8,}" /></label>
      <label><span>E-pasts *</span><input required name="email" type="email" autoComplete="email" placeholder="vards@epasts.lv" /></label>
      <label className="full"><span>Pakalpojums *</span><select required name="service" defaultValue=""><option value="" disabled>Izvēlieties pakalpojumu</option>{allServices.map((service) => <option value={service} key={service}>{service}</option>)}</select></label>
      <label><span>Pieejamais datums *</span><select required name="date" defaultValue=""><option value="" disabled>Izvēlieties darba dienu</option>{availableDates.map((date) => <option value={date.value} key={date.value}>{date.label}</option>)}</select></label>
      <label><span>Pieejamais laiks *</span><select required name="time" defaultValue=""><option value="" disabled>Izvēlieties laiku</option>{["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"].map((time) => <option value={time} key={time}>{time}</option>)}</select></label>
      <label className="full"><span>Auto numura zīme *</span><input required name="numberplate" autoCapitalize="characters" placeholder="Piem., AB-1234" /></label>
      <label className="full"><span>Problēma, kas jānovērš *</span><textarea required name="issue" rows={5} placeholder="Aprakstiet problēmu, skaņas, brīdinājuma lampiņas vai citus simptomus" /></label>
    </div>
    <label className="consent"><input required type="checkbox" /><span>Piekrītu, ka norādītā informācija tiek nosūtīta F.L.G Motors WhatsApp vai ievietota manā Google Calendar testa notikumā.</span></label>
    <div className="booking-actions">
      <button className="button button-whatsapp" type="submit" name="action" value="whatsapp"><span className="wa-mini">WA</span> Nosūtīt WhatsApp</button>
      <button className="button button-calendar" type="submit" name="action" value="calendar">Pievienot Google Calendar →</button>
    </div>
    <p className="form-help">Izvēlētie laiki ir testa piedāvājums. Pieraksts ir spēkā tikai pēc servisa apstiprinājuma WhatsApp vai pa tālruni.</p>
    {notice && <div className="success-note" role="status"><strong>{notice === "whatsapp" ? "WhatsApp saruna atvērta." : "Google Calendar atvērts."}</strong>{notice === "whatsapp" ? " Pārbaudiet sagatavoto ziņu un nospiediet “Sūtīt”." : " Saglabājiet testa notikumu un sagaidiet servisa apstiprinājumu."}</div>}
  </form>;
}
