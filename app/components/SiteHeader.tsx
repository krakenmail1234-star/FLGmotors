"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [["/", "Sākums"], ["/pakalpojumi", "Pakalpojumi"], ["/kontakti", "Kontakti"]] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header"><div className="shell nav-wrap">
      <Link href="/" className="brand" aria-label="F.L.G Motors sākumlapa" onClick={() => setOpen(false)}><span className="brand-mark">FLG</span><span><strong>F.L.G MOTORS</strong><small>AUTOSERVISS RĪGĀ</small></span></Link>
      <button className="menu-button" aria-label="Atvērt izvēlni" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Galvenā navigācija">
        {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
        <a href="https://wa.me/37124945990" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp</a>
        <Link href="/pieteikties" className="button button-small" onClick={() => setOpen(false)}>Pieteikties servisam</Link>
      </nav>
    </div></header>
  );
}
