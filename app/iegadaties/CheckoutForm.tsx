"use client";

import { FormEvent, useState } from "react";

type Props = { serviceName: string; price: string; min: number; max: number };

export function CheckoutForm({ serviceName, price, min, max }: Props) {
  const [amount, setAmount] = useState(min.toFixed(2));
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/payments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceName, amount: Number(amount), email }),
      });
      const result = await response.json() as { paymentLink?: string; error?: string };
      if (!response.ok || !result.paymentLink) throw new Error(result.error ?? "Maksājumu neizdevās sākt.");
      window.location.assign(result.paymentLink);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Maksājumu neizdevās sākt.");
      setLoading(false);
    }
  }

  return <form className="checkout-card" onSubmit={submit}>
    <span className="test-badge"><span /> EveryPay testa vide</span>
    <div className="checkout-product"><small>Izvēlētais pakalpojums</small><h2>{serviceName}</h2><strong>{price}</strong></div>
    <label><span>Saskaņotā summa (€)</span><input type="number" min={min} max={max} step="0.01" value={amount} onChange={(event) => setAmount(event.target.value)} required /></label>
    <p className="field-hint">Ievadiet ar servisu saskaņoto summu norādītajā cenu diapazonā.</p>
    <label><span>E-pasts</span><input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="vards@epasts.lv" required /></label>
    <label className="consent"><input type="checkbox" required /><span>Apstiprinu izvēlēto pakalpojumu un testa maksājuma summu.</span></label>
    {error && <div className="payment-error" role="alert">{error}</div>}
    <button className="button checkout-submit" type="submit" disabled={loading}>{loading ? "Savienojam ar EveryPay…" : "Turpināt uz apmaksu →"}</button>
    <p className="form-help">Šī ir demo vide — reāla nauda netiek pārskaitīta.</p>
  </form>;
}
