const whatsappUrl = "https://wa.me/37124945990?text=Sveiki%21%20V%C4%93los%20uzzin%C4%81t%20vair%C4%81k%20par%20F.L.G%20Motors%20servisa%20pakalpojumiem.";

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Sākt sarunu ar F.L.G Motors WhatsApp"><span>WA</span><b>Rakstīt WhatsApp</b></a>;
}
