import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck, Package, Printer, FileSignature, Mail, Globe2,
  Stamp, FileText, Boxes, ScrollText, Phone, ArrowRight,
} from "lucide-react";
import boxesImg from "@/assets/pack-and-ship.jpg";
import printingImg from "@/assets/storefront.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Riverland Postal | Shipping, Printing, Notary, Fax" },
      { name: "description", content: "Ship with UPS, USPS, FedEx, DHL. Color printing, business cards, flyers, notary, fax, packing, and mailboxes — all under one roof in Fort Lauderdale." },
      { property: "og:title", content: "Services — Riverland Postal" },
      { property: "og:description", content: "One counter, every service. Friendly bilingual staff in Fort Lauderdale." },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons = [Truck, Package, Globe2, Printer, ScrollText, FileSignature, Mail, Boxes, FileText];

function ServicesPage() {
  const { t } = useLang();
  const services = t.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.services.kicker}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {t.services.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.services.lede}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-tilt hover-shine"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Feature split */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-hero)] opacity-15 blur-2xl animate-float-slow" />
            <img
              src={boxesImg}
              alt="Riverland Postal storefront — Pack and Ship"
              width={1200}
              height={900}
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 hover:shadow-2xl"
            />
          </Reveal>
          <Reveal delay={150}>
            <Stamp className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {t.services.splitTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.services.splitText}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <Printer className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              {t.services.printTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.services.printText}
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[image:var(--gradient-hero)] px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover-shine hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t.services.quote} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={150} className="order-1 lg:order-2">
            <img
              src={printingImg}
              alt="Color printer producing flyers and prints"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)] transition-all duration-500 hover:scale-[1.03] hover:rotate-1 hover:shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-[image:var(--gradient-hero)] py-14 text-primary-foreground animate-gradient-x">
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">{t.services.ctaTitle}</h2>
            <p className="text-primary-foreground/80">{t.services.ctaLede}</p>
          </div>
          <a
            href="tel:+19543331234"
            className="group inline-flex items-center gap-2 overflow-hidden rounded-lg bg-background px-6 py-3 font-semibold text-foreground transition-all duration-300 hover-shine hover:-translate-y-1 hover:scale-105"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> (954) 333-1234
          </a>
        </div>
      </section>
    </>
  );
}