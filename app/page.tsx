import Link from "next/link";
import { facebookUrl, googleMapsUrl, serviceGroups } from "./data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src="/images/facebook-engine.jpg" alt="F.L.G Motors publicēts dzinēja nodalījuma foto" />
        <div className="hero-overlay" />
        <div className="shell hero-content">
          <span className="eyebrow light">Autoserviss Biķernieku ielā</span>
          <h1>Salabosim. Izskaidrosim.<br /><em>Atgriezīsim uz ceļa.</em></h1>
          <p>No precīzas diagnostikas līdz dzinēja remontam — profesionāla auto apkope Rīgā ar saprotamu darbu un cenu.</p>
          <div className="hero-actions"><Link className="button" href="/pieteikties">Pieteikties servisam <span>→</span></Link><a className="button button-ghost" href="tel:+37124945990">Zvanīt +371 24 945 990</a></div>
          <div className="hero-meta"><span><b>9:00–18:00</b>Pirmdien–piektdien</span><span><b>Biķernieku 121G</b>Rīga</span><span><b>35+ pakalpojumi</b>Vienuviet</span></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split"><div><span className="eyebrow">Ko mēs darām</span><h2>Serviss visam auto</h2></div><p>Diagnostika, remonts un regulāra apkope bez liekas sarežģīšanas.</p></div>
        <div className="service-preview-grid">
          {serviceGroups.slice(0, 6).map((group, index) => <Link href="/pakalpojumi" className="service-preview-card" key={group.title}><span className="card-number">0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><span className="text-link">Skatīt cenas →</span></Link>)}
        </div>
        <div className="center-action"><Link className="button button-dark" href="/pakalpojumi">Visi pakalpojumi un cenas</Link></div>
      </section>

      <section className="section section-dark"><div className="shell process-grid">
        <div><span className="eyebrow light">Vienkāršs process</span><h2>Trīs soļi līdz braucošam auto.</h2></div>
        <ol><li><span>1</span><div><b>Piesaki servisu</b><p>Izvēlies pakalpojumu un sev ērtu laiku.</p></div></li><li><span>2</span><div><b>Saņem apstiprinājumu</b><p>Mēs sazināsimies, lai precizētu detaļas.</p></div></li><li><span>3</span><div><b>Atved auto</b><p>Pārbaudīsim, izskaidrosim un saskaņosim darbus.</p></div></li></ol>
      </div></section>

      <section className="section shell">
        <div className="section-heading split"><div><span className="eyebrow">No mūsu Facebook</span><h2>Auto ir mūsu lieta</h2></div><a className="text-link" href={facebookUrl} target="_blank" rel="noreferrer">Sekot Facebook →</a></div>
        <div className="gallery-grid">
          <a href="https://www.facebook.com/photo.php?fbid=970129621944703" target="_blank" rel="noreferrer" className="gallery-item gallery-wide"><img src="/images/facebook-corvette.jpg" alt="Dzeltens sporta auto no F.L.G Motors Facebook galerijas" /><span>F.L.G Motors galerija ↗</span></a>
          <a href="https://www.facebook.com/photo.php?fbid=970129521944713" target="_blank" rel="noreferrer" className="gallery-item"><img src="/images/facebook-porsche.jpg" alt="Klasisks Porsche no F.L.G Motors Facebook galerijas" /><span>Auto pasaule ↗</span></a>
          <a href="https://www.facebook.com/photo.php?fbid=970129495278049" target="_blank" rel="noreferrer" className="gallery-item"><img src="/images/facebook-lamborghini.jpg" alt="Oranžs sporta auto no F.L.G Motors Facebook galerijas" /><span>Mūsu aizraušanās ↗</span></a>
        </div>
      </section>

      <section className="section reviews-section"><div className="shell">
        <div className="section-heading split"><div><span className="eyebrow">Atsauksmes</span><h2>Pārbaudi mūs publiski</h2></div><p>Atvērtas saites uz aktuālajām klientu atsauksmēm.</p></div>
        <div className="review-grid">
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="review-card"><span className="review-source google">G</span><div><h3>Google atsauksmes</h3><p>Skati aktuālo vērtējumu, klientu komentārus un atrašanās vietu Google Maps.</p><b>Atvērt Google Maps →</b></div></a>
          <a href={`${facebookUrl}&sk=reviews`} target="_blank" rel="noreferrer" className="review-card"><span className="review-source facebook">f</span><div><h3>Facebook atsauksmes</h3><p>F.L.G Motors publiskajā Facebook profilā pašlaik redzama 1 atsauksme.</p><b>Skatīt Facebook →</b></div></a>
        </div>
      </div></section>

      <section className="cta-band"><div className="shell"><div><span className="eyebrow light">Auto prasa uzmanību?</span><h2>Piesaki servisu dažu minūšu laikā.</h2></div><Link className="button button-light" href="/pieteikties">Izvēlēties laiku →</Link></div></section>
    </>
  );
}
