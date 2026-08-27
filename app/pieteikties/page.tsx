import { PageHero } from "../components/PageHero";
import { BookingForm } from "./BookingForm";

export default function BookingPage() {
  return <><PageHero eyebrow="Pieteikties servisam" title="Izvēlies vēlamo laiku." text="Aizpildi pieteikumu un nosūti to servisam WhatsApp vai saglabā savā Google Calendar. Visu informāciju vari ievadīt latviešu valodā." /><section className="section shell booking-layout"><BookingForm /><aside className="booking-aside"><div><span className="eyebrow">Kā tas strādā</span><h2>Ātri un saprotami</h2><p>Testa vidē piedāvājam tuvākās darba dienas un laikus. Tieša WhatsApp saruna atveras ar jau sagatavotu pieteikumu.</p></div><ul><li><span>1</span>Ievadiet kontaktus un auto informāciju</li><li><span>2</span>Izvēlieties darba dienu un laiku</li><li><span>3</span>Nosūtiet WhatsApp un sagaidiet apstiprinājumu</li></ul><div className="aside-contact"><small>WhatsApp un tālrunis</small><a href="https://wa.me/37124945990" target="_blank" rel="noreferrer">+371 24 945 990</a></div></aside></section></>;
}
