import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { serviceGroups } from "../data";

export default function ServicesPage() {
  return <><PageHero eyebrow="Pakalpojumi un cenas" title="Skaidrs darbs. Skaidra cena." text="Atrodi vajadzīgo pakalpojumu. Gala cenu apstiprinām pēc auto apskates un darbu apjoma saskaņošanas." /><section className="section shell services-list">
    {serviceGroups.map((group, index) => <article className="service-group" key={group.title}><div className="service-group-heading"><span className="card-number">{String(index + 1).padStart(2, "0")}</span><div><h2>{group.title}</h2><p>{group.description}</p></div></div><div className="price-list">{group.services.map((service) => <div className="price-row" key={service.name}><span>{service.name}</span><strong>{service.price}</strong></div>)}</div></article>)}
    <div className="price-note"><span>i</span><p><strong>Svarīgi:</strong> cenas ir informatīvas un var mainīties atkarībā no auto markas, modeļa, detaļām un faktiskā darbu apjoma. Precīzu cenu saskaņosim pirms remonta.</p></div>
    <div className="center-action"><Link className="button button-dark" href="/pieteikties">Pieteikties servisam</Link></div>
  </section></>;
}

