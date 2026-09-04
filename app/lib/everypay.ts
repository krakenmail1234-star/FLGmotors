import { findService, getServicePriceRange } from "../data";

const DEFAULT_API_URL = "https://igw-demo.every-pay.com/api/v4";

type EveryPayConfig = { apiUrl: string; username: string; secret: string; accountName: string };

export type EveryPayPayment = {
  payment_reference: string;
  order_reference: string;
  payment_state: string;
  initial_amount: number;
  payment_link?: string;
};

function getConfig(): EveryPayConfig {
  const username = process.env.EVERYPAY_API_USERNAME;
  const secret = process.env.EVERYPAY_API_SECRET;
  const accountName = process.env.EVERYPAY_ACCOUNT_NAME;
  if (!username || !secret || !accountName) throw new Error("EveryPay demo vides mainīgie nav konfigurēti.");
  return { apiUrl: process.env.EVERYPAY_API_URL ?? DEFAULT_API_URL, username, secret, accountName };
}

function authorization(config: EveryPayConfig) {
  return `Basic ${Buffer.from(`${config.username}:${config.secret}`).toString("base64")}`;
}

export function validatePurchase(serviceName: string, amount: number) {
  const service = findService(serviceName);
  if (!service) throw new Error("Izvēlētais pakalpojums nav atrasts.");
  const range = getServicePriceRange(service.price);
  const roundedAmount = Math.round(amount * 100) / 100;
  if (!Number.isFinite(roundedAmount) || roundedAmount < range.min || roundedAmount > range.max) {
    throw new Error(`Summai jābūt no ${range.min.toFixed(2)} € līdz ${range.max.toFixed(2)} €.`);
  }
  return { service, amount: roundedAmount };
}

export async function createEveryPayPayment(input: { serviceName: string; amount: number; email: string; customerIp: string; customerUrl: string }) {
  const config = getConfig();
  const purchase = validatePurchase(input.serviceName, input.amount);
  const uniquePart = crypto.randomUUID().replaceAll("-", "").slice(0, 14);
  const response = await fetch(`${config.apiUrl}/payments/oneoff`, {
    method: "POST",
    headers: { Accept: "application/json", Authorization: authorization(config), "Content-Type": "application/json" },
    body: JSON.stringify({
      api_username: config.username,
      account_name: config.accountName,
      amount: purchase.amount,
      order_reference: `flg-${uniquePart}`,
      nonce: crypto.randomUUID(),
      timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"),
      customer_url: input.customerUrl,
      customer_ip: input.customerIp,
      email: input.email,
      locale: "lv",
      request_token: false,
      payment_description: `F.L.G Motors: ${purchase.service.name}`.slice(0, 255),
      integration_details: { software: "Next.js", version: "16", integration: "custom" },
    }),
    cache: "no-store",
  });
  const result = await response.json().catch(() => null) as (EveryPayPayment & { error?: string | { message?: string }; message?: string }) | null;
  const providerError = typeof result?.error === "string" ? result.error : result?.error?.message;
  if (!response.ok || !result?.payment_link) throw new Error(result?.message ?? providerError ?? "Maksājumu neizdevās izveidot.");
  return result;
}

export async function getEveryPayPayment(paymentReference: string) {
  const config = getConfig();
  const response = await fetch(`${config.apiUrl}/payments/${encodeURIComponent(paymentReference)}`, {
    headers: { Accept: "application/json", Authorization: authorization(config) },
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Maksājuma statusu neizdevās pārbaudīt.");
  return response.json() as Promise<EveryPayPayment>;
}
