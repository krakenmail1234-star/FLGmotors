import { PageHero } from "../components/PageHero";
import { facebookUrl, googleMapsUrl } from "../data";

export default function ContactsPage() {
  return <><PageHero eyebrow="Kontakti" title="Atrodi mūs Biķernieku ielā." text="Piezvani, uzraksti vai brauc ciemos darba laikā. Atbildēsim un palīdzēsim saprast nākamo soli." /><section className="section shell contact-layout">
    <div className="contact-cards">
      <a className="contact-card" href="https://www.google.com/maps/dir/?api=1&destination=Biķernieku+iela+121G,+Rīga" target="_blank" rel="noreferrer"><span>Adrese</span><h3>Biķernieku iela 121G, Rīga</h3><b>Saņemt norādes →</b></a>
      <div className="contact-card"><span>Tālruņi un WhatsApp</span><h3><a href="tel:+37124945990">+371 24 945 990</a><br /><a href="tel:+37126778334">+371 26 778 334</a></h3><a className="contact-whatsapp" href="https://wa.me/37124945990?text=Sveiki%21%20V%C4%93los%20pieteikt%20auto%20servisam." target="_blank" rel="noreferrer">Rakstīt WhatsApp →</a></div>
      <a className="contact-card" href="mailto:f.l.g-motors@inbox.lv"><span>E-pasts</span><h3>f.l.g-motors@inbox.lv</h3><b>Rakstīt e-pastu →</b></a>
      <div className="contact-card"><span>Darba laiks</span><h3>Pirmdien–piektdien<br />9:00–18:00</h3><b>Sestdien, svētdien — slēgts</b></div>
    </div>
    <div className="map-wrap"><iframe title="F.L.G Motors atrašanās vieta" src="https://www.google.com/maps?q=Bi%C4%B7ernieku%20iela%20121G%2C%20R%C4%ABga&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-actions"><a href={googleMapsUrl} target="_blank" rel="noreferrer">Atvērt Google Maps ↗</a><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook ↗</a></div></div>
  </section></>;
}
