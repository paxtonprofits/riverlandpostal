import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Globe2, Printer, FileSignature, MailOpen, Shirt, CheckCircle2, Phone, ArrowRight, Package, Plane, Ship, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pack & Print Multiservice LLC | Shipping, Printing, Notary" },
      { name: "description", content: "Air & maritime shipping worldwide, A-Plus printing, DTF apparel, notary, fax, and private mailboxes. Fort Lauderdale, FL." },
    ],
  }),
  component: ServicesPage,
});

const sectionNav = [
  { href: "#shipping",     icon: Truck,         label: "Shipping" },
  { href: "#international",icon: Globe2,        label: "International" },
  { href: "#printing",     icon: Printer,       label: "Printing" },
  { href: "#apparel",      icon: Shirt,         label: "Apparel & DTF" },
  { href: "#notary",       icon: FileSignature, label: "Notary & Fax" },
  { href: "#mailbox",      icon: MailOpen,      label: "Mailboxes" },
];

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      {text}
    </li>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <Reveal>
      <span className="text-xs font-bold uppercase tracking-widest text-primary">{kicker}</span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground leading-relaxed">{desc}</p>
    </Reveal>
  );
}

function ServicesPage() {
  const { t } = useLang();
  const reduced = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <motion.div
          className="mx-auto max-w-7xl px-6"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.services.kicker}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{t.services.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t.services.lede}</p>
        </motion.div>
      </section>

      {/* Sticky section nav */}
      <div className="sticky top-[73px] z-40 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-2 scrollbar-hide">
          {sectionNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground cursor-pointer"
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ─── DOMESTIC SHIPPING ─── */}
      <section id="shipping" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Domestic Shipping"
            title="All major carriers. Best rates. One counter."
            desc="Stop running between UPS stores and post offices. We carry all major carriers under one roof — and we compare rates so you always get the best deal."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
                alt="Airplane in flight representing fast domestic shipping"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 420 }}
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["UPS", "USPS", "FedEx", "DHL"].map((carrier) => (
                  <div key={carrier} className="flex items-center justify-center rounded-xl border border-border bg-card px-4 py-3 font-bold text-foreground text-sm">
                    {carrier}
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                <Check text="Side-by-side carrier rate comparison — we find the cheapest option for your package every time" />
                <Check text="Custom packing at the counter — bring it as-is and we'll box, pad, and tape it up" />
                <Check text="Overnight, 2-day, ground, and economy shipping available" />
                <Check text="Fragile items, odd shapes, oversized packages — we handle it all" />
                <Check text="Tracking numbers provided for every shipment" />
                <Check text="Insurance options available for high-value packages" />
                <Check text="Drop-off and pickup services" />
                <Check text="Packing supplies in stock: boxes, bubble wrap, tape, envelopes, mailers" />
              </ul>
              <a href="tel:+17862106832" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer">
                <Phone className="h-4 w-4" /> Call for a quote
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── INTERNATIONAL CARGO ─── */}
      <section id="international" className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="International Cargo"
            title="We ship to 13+ countries — by air and by sea."
            desc="Sending a package to family in Latin America or the Caribbean? We've got you covered with affordable air and maritime shipping options, door-to-door delivery, and trusted cargo partners."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal delay={100} className="space-y-6">
              {/* Air Shipping */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Plane className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">Air Shipping</h3>
                    <p className="text-xs text-muted-foreground">Fast delivery — days, not weeks</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <Check text="Express air freight to Latin America and the Caribbean" />
                  <Check text="Door-to-door delivery available" />
                  <Check text="Ideal for documents, electronics, and time-sensitive items" />
                  <Check text="Tracking and insurance available" />
                  <Check text="Competitive rates — we compare freight partners for you" />
                </ul>
              </div>

              {/* Maritime Shipping */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Ship className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">Maritime Shipping</h3>
                    <p className="text-xs text-muted-foreground">Affordable for large or heavy cargo</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <Check text="Sea freight for large or heavy shipments — barrels, furniture, appliances" />
                  <Check text="Most affordable option for bulky cargo" />
                  <Check text="Container and LCL (less than container load) available" />
                  <Check text="Reliable scheduled sailings with trusted cargo partners" />
                  <Check text="Import and export assistance" />
                </ul>
              </div>
            </Reveal>

            <Reveal className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80"
                alt="Cargo ship at port with shipping containers"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 280 }}
              />
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80"
                alt="Airplane in flight for air freight"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 180 }}
              />
            </Reveal>
          </div>

          {/* Countries grid */}
          <Reveal className="mt-14">
            <h3 className="text-xl font-bold mb-2">{t.services.intlTitle}</h3>
            <p className="text-muted-foreground mb-6">{t.services.intlLede}</p>
            <div className="flex flex-wrap gap-3">
              {t.services.countries.map((country) => (
                <span key={country} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  {country}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">Don't see your country? Call us — we may still be able to help.</p>
          </Reveal>
        </div>
      </section>

      {/* ─── A-PLUS PRINTING ─── */}
      <section id="printing" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="A-Plus Printing"
            title="Professional printing for every need."
            desc="From business cards to full-color brochures, vinyl stickers to restaurant menus — we print it all fast and affordable. Bring your design or we'll help you create one."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=900&q=80"
                alt="Full-color printing materials and design samples"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 420 }}
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Business Cards", icon: "🪪" },
                  { label: "Postcards & Flyers", icon: "📄" },
                  { label: "Brochures & Menus", icon: "📋" },
                  { label: "Magnets", icon: "🧲" },
                  { label: "Vinyl Stickers", icon: "🏷️" },
                  { label: "Personalized Items", icon: "🎁" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-medium">
                    <span className="mr-1.5">{item.icon}</span>{item.label}
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                <Check text="Full-color and black & white printing" />
                <Check text="Same-day and next-day turnaround available" />
                <Check text="Glossy, matte, and specialty paper finishes" />
                <Check text="Any quantity — small runs to bulk orders" />
                <Check text="Design assistance available — bring your idea, we'll make it look great" />
                <Check text="Business cards on premium cardstock, multiple thickness options" />
                <Check text="Restaurant menus — waterproof and laminated options" />
                <Check text="Adhesive vinyl stickers — any shape, any size, cut-to-order" />
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer">
                {t.services.quote} <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── APPAREL & DTF ─── */}
      <section id="apparel" className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Apparel & DTF Textile Printing"
            title="Custom apparel — shirts, hats, bags & more."
            desc="We offer Direct-to-Film (DTF) printing and screen printing on virtually any fabric item. No minimums on DTF. Perfect for businesses, events, teams, and promotions."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal delay={100} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h4 className="font-bold mb-2">DTF Printing</h4>
                  <ul className="space-y-1.5">
                    <Check text="No minimums — order 1 or 1,000" />
                    <Check text="Full-color, photographic quality" />
                    <Check text="Works on cotton, polyester, blends" />
                    <Check text="Soft feel, wash-resistant" />
                    <Check text="Fast turnaround" />
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <h4 className="font-bold mb-2">Screen Printing</h4>
                  <ul className="space-y-1.5">
                    <Check text="Best for bulk orders" />
                    <Check text="Vibrant, durable ink" />
                    <Check text="Up to 6 colors" />
                    <Check text="Most cost-effective at scale" />
                    <Check text="Ideal for uniforms & events" />
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 font-semibold">We print on:</p>
              <div className="flex flex-wrap gap-2">
                {["T-Shirts", "Hoodies", "Hats & Caps", "Tote Bags", "Polo Shirts", "Uniforms", "Jackets", "Tank Tops", "Face Masks"].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium">{item}</span>
                ))}
              </div>
              <a href="tel:+17862106832" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer">
                <Phone className="h-4 w-4" /> Get an apparel quote
              </a>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
                alt="Custom printed apparel and t-shirts"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 480 }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── NOTARY & FAX ─── */}
      <section id="notary" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Notary & Document Services"
            title="Get it notarized. Get it faxed. Done."
            desc="No need to hunt down a notary or look for a fax machine. We have both on-site. Walk in during business hours — no appointment needed for most notary services."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
                alt="Signing an official notarized document"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 420 }}
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <FileSignature className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Notary Public</h4>
                  <ul className="space-y-2">
                    <Check text="Affidavits and sworn statements" />
                    <Check text="Real estate documents" />
                    <Check text="Power of attorney" />
                    <Check text="Contracts and agreements" />
                    <Check text="Legal and court documents" />
                    <Check text="Immigration forms" />
                    <Check text="Medical authorizations" />
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <Package className="h-6 w-6 text-primary mb-3" />
                  <h4 className="font-bold mb-2">Fax & Scanning</h4>
                  <ul className="space-y-2">
                    <Check text="Send faxes domestically and internationally" />
                    <Check text="Receive incoming faxes" />
                    <Check text="Scan to email or USB" />
                    <Check text="Shred sensitive documents" />
                    <Check text="Document copying (color & B&W)" />
                    <Check text="Form filling assistance" />
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg px-4 py-3 border border-border">
                <strong>Walk-ins welcome</strong> during business hours. For complex notary needs, call ahead to confirm availability.
              </p>
              <a href="tel:+17862106832" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer">
                <Phone className="h-4 w-4" /> (786) 210-6832
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRIVATE MAILBOXES ─── */}
      <section id="mailbox" className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            kicker="Private Mailboxes"
            title="Your own real street address in Fort Lauderdale."
            desc="A private mailbox gives you a real street address (not a P.O. Box) that accepts packages from any carrier — UPS, FedEx, USPS, DHL, and Amazon. Perfect for businesses and individuals."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal delay={100} className="order-2 lg:order-1">
              <ul className="space-y-3 mb-8">
                <Check text="Real street address at 2728 Davie Blvd — not a P.O. Box" />
                <Check text="Accepts packages from ALL carriers including Amazon" />
                <Check text="Package notification when your mail arrives" />
                <Check text="Safe, secure, locked mailbox" />
                <Check text="Business or personal use" />
                <Check text="Ideal for home-based businesses needing a professional address" />
                <Check text="Mail forwarding available" />
                <Check text="Available in multiple sizes" />
                <Check text="Flexible monthly and annual rental options" />
              </ul>
              <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold">Why a street address matters</span>
                </div>
                <p className="text-sm text-muted-foreground">Many carriers (especially FedEx and UPS) won't deliver to P.O. Boxes. With a mailbox at our store, you get a real address that accepts everything.</p>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer">
                Ask about mailbox pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1557428894-56bcc97113fe?auto=format&fit=crop&w=900&q=80"
                alt="Private mailboxes and package receiving"
                className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
                style={{ maxHeight: 460 }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{t.services.ctaTitle}</h2>
            <p className="mt-1 text-primary-foreground/80">{t.services.ctaLede}</p>
          </div>
          <a
            href="tel:+17862106832"
            className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 font-semibold text-foreground transition-colors duration-200 hover:bg-secondary cursor-pointer whitespace-nowrap"
          >
            <Phone className="h-4 w-4" /> (786) 210-6832
          </a>
        </Reveal>
      </section>
    </>
  );
}
