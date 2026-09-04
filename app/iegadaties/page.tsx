import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { findService, getServicePriceRange } from "../data";
import { CheckoutForm } from "./CheckoutForm";

export default async function PurchasePage({ searchParams }: { searchParams: Promise<{ pakalpojums?: string }> }) {
  const { pakalpojums = "" } = await searchParams;
  const service = findService(pakalpojums);
  if (!service) {
    return <><PageHero eyebrow="Iegādāties" title="Izvēlies pakalpojumu." text="Lai sāktu demo maksājumu, vispirms izvēlies kādu no pakalpojumu sarakstā norādītajiem darbiem." /><section className="section shell narrow center-action"><Link className="button button-dark" href="/pakalpojumi">Skatīt pakalpojumus</Link></section></>;
  }
  const range = getServicePriceRange(service.price);
  return <><PageHero eyebrow="Droša apmaksa" title="Pakalpojuma apmaksa." text="Norādi ar servisu saskaņoto summu un turpini uz EveryPay aizsargāto demo maksājumu lapu." /><section className="section shell checkout-layout"><CheckoutForm serviceName={service.name} price={service.price} min={range.min} max={range.max} /><aside className="checkout-aside"><span className="eyebrow">Testa maksājums</span><h2>Droša pāreja uz EveryPay</h2><p>Kartes vai internetbankas datus ievadīsi EveryPay aizsargātajā maksājumu lapā. F.L.G Motors mājaslapa šos datus nesaņem un neuzglabā.</p><ul><li>Summa tiek pārbaudīta serverī</li><li>API parole nav pieejama pārlūkā</li><li>Pēc maksājuma atgriezīsies šajā vietnē</li></ul></aside></section></>;
}
