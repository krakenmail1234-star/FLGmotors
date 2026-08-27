import Link from "next/link";
import { facebookUrl } from "../data";

export function SiteFooter() {
  return (
    <footer className="site-footer"><div className="shell footer-grid">
      <div><div className="brand footer-brand"><span className="brand-mark">FLG</span><span><strong>F.L.G MOTORS</strong><small>AUTOSERVISS RĪGĀ</small></span></div><p>Godīgs autoserviss ar skaidrām cenām un praktisku pieeju.</p></div>
      <div><strong>Kontakti</strong><a href="tel:+37124945990">+371 24 945 990</a><a href="tel:+37126778334">+371 26 778 334</a><a href="mailto:f.l.g-motors@inbox.lv">f.l.g-motors@inbox.lv</a></div>
      <div><strong>Adrese</strong><a href="https://www.google.com/maps/dir/?api=1&destination=Biķernieku+iela+121G,+Rīga" target="_blank" rel="noreferrer">Biķernieku iela 121G, Rīga</a><span>Pirmdien–piektdien: 9:00–18:00</span></div>
      <div><strong>Saites</strong><Link href="/pakalpojumi">Pakalpojumi</Link><Link href="/pieteikties">Pieteikties servisam</Link><a href="https://wa.me/37124945990" target="_blank" rel="noreferrer">WhatsApp</a><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a></div>
    </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} F.L.G Motors</span><span>Norādītās cenas ir informatīvas un var mainīties pēc diagnostikas.</span></div></footer>
  );
}
