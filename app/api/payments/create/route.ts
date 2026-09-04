import { NextRequest, NextResponse } from "next/server";
import { createEveryPayPayment } from "../../../lib/everypay";

function siteOrigin(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return new URL(process.env.NEXT_PUBLIC_SITE_URL).origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    try {
      if (new URL(requestOrigin).host !== request.nextUrl.host) return NextResponse.json({ error: "Nederīgs pieprasījuma avots." }, { status: 403 });
    } catch {
      return NextResponse.json({ error: "Nederīgs pieprasījuma avots." }, { status: 403 });
    }
  }
  try {
    const body = await request.json() as { serviceName?: string; amount?: number; email?: string };
    const email = body.email?.trim() ?? "";
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Ievadiet derīgu e-pasta adresi." }, { status: 400 });
    const payment = await createEveryPayPayment({
      serviceName: body.serviceName ?? "",
      amount: Number(body.amount),
      email,
      customerIp: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1",
      customerUrl: `${siteOrigin(request)}/maksajums`,
    });
    return NextResponse.json({ paymentLink: payment.payment_link });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Maksājumu neizdevās izveidot.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
