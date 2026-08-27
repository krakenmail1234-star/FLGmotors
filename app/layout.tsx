import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./globals.css";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "F.L.G Motors — autoserviss Rīgā", template: "%s | F.L.G Motors" },
  description: "Auto diagnostika, remonts, riepu serviss un regulārā apkope Biķernieku ielā 121G, Rīgā.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: { title: "F.L.G Motors — autoserviss Rīgā", description: "Salabosim. Izskaidrosim. Atgriezīsim uz ceļa.", url: "/", siteName: "F.L.G Motors", locale: "lv_LV", type: "website", images: [{ url: "/og.png", width: 1731, height: 909, alt: "F.L.G Motors — autoserviss Rīgā" }] },
  twitter: { card: "summary_large_image", title: "F.L.G Motors — autoserviss Rīgā", description: "Salabosim. Izskaidrosim. Atgriezīsim uz ceļa.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="lv"><body><SiteHeader /><main>{children}</main><WhatsAppButton /><SiteFooter /></body></html>;
}
