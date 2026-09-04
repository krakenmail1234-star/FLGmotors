import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { getEveryPayPayment } from "../lib/everypay";

const stateLabels: Record<string, string> = {
  settled: "Maksājums ir veiksmīgi pabeigts.",
  authorised: "Maksājums ir autorizēts.",
  initial: "Maksājums vēl nav pabeigts.",
  sent_for_processing: "Maksājums tiek apstrādāts.",
  failed: "Maksājums neizdevās.",
  abandoned: "Maksājums tika pārtraukts.",
  voided: "Maksājums ir atcelts.",
};

export default async function PaymentResultPage({ searchParams }: { searchParams: Promise<{ payment_reference?: string; order_reference?: string }> }) {
  const { payment_reference: reference, order_reference: orderReference } = await searchParams;
  let state = "unknown";
  let amount: number | null = null;
  if (reference) {
    try {
      const payment = await getEveryPayPayment(reference);
      state = payment.payment_state;
      amount = payment.initial_amount;
    } catch {
      state = "error";
    }
  }
  const successful = state === "settled" || state === "authorised";
  const title = successful ? "Maksājums saņemts." : stateLabels[state] ?? "Maksājuma statuss nav pieejams.";
  return <><PageHero eyebrow="EveryPay demo" title={title} text={successful ? "Paldies! Demo maksājums ir pārbaudīts EveryPay sistēmā." : "Ja maksājums netika pabeigts, vari atgriezties pakalpojumu lapā un mēģināt vēlreiz."} /><section className="section shell narrow"><div className={`payment-result ${successful ? "is-success" : ""}`}><span className="payment-result-icon">{successful ? "✓" : "i"}</span><div><h2>{stateLabels[state] ?? title}</h2>{amount !== null && <p>Summa: <strong>{amount.toFixed(2)} €</strong></p>}{orderReference && <p>Pasūtījums: <code>{orderReference}</code></p>}<div className="result-actions"><Link className="button button-dark" href="/pakalpojumi">Atpakaļ uz pakalpojumiem</Link><Link className="text-link" href="/kontakti">Sazināties ar servisu →</Link></div></div></div></section></>;
}
