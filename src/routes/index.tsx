import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Printer, FileSignature, Truck, Clock, Heart, Globe2, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-store.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riverland Postal — Friendly Shipping, Printing & Notary in Fort Lauderdale" },
      { name: "description", content: "Local pack & ship store on Davie Blvd. UPS, USPS, FedEx, DHL, printing, faxing, notary. Friendly bilingual staff, no waiting in line." },
      { property: "og:title", content: "Riverland Postal — Fort Lauderdale" },
      { property: "og:description", content: "Shipping, printing, faxing, and notary from your friendly neighborhood store." },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Truck, title: "All Carriers", text: "UPS, USPS, FedEx, DHL — one stop." },
  { icon: Clock, title: "No Long Lines", text: "Quick in-and-out service." },
  { icon: Heart, title: "We Go The Extra Mile", text: "Friendly staff who actually help." },
  { icon: Globe2, title: "Bilingual", text: "English & Español, siempre." },
];

const services = [
  { icon: Truck, title: "Shipping", text: "Compare carriers and find the most affordable option for your package." },
  { icon: Package, title: "Packing", text: "Bring it as-is — we'll box it, pad it, and tape it up at the counter." },
  { icon: Printer, title: "Printing & Copies", text: "Flyers, business cards, brochures, color copies, full-service print." },
  { icon: FileSignature, title: "Notary & Fax", text: "Notarize documents and send faxes without leaving the store." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-[0.04]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Star className="h-3 w-3 fill-current" /> 5.0 · 84 Google reviews
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your friendly{" "}
              <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
                pack &amp; ship
              </span>{" "}
              shop on Davie Blvd.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Shipping, printing, faxing, notary, and packaging — done quickly by people who
              actually want to help. No long lines. Bilingual staff. We've got you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-hero)] px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                See our services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Visit the store
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.title} className="flex flex-col gap-1">
                  <h.icon className="h-5 w-5 text-primary" />
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-xs text-muted-foreground">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[image:var(--gradient-hero)] opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Friendly staff helping a customer at Riverland Postal counter"
              width={1600}
              height={1100}
              className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you came for — and a smile.
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                A real local alternative to the post office. One counter, every service.
              </p>
            </div>
            <Link
              to="/services"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              All services →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 text-2xl font-medium leading-snug sm:text-3xl">
            “Troy was amazing… he was very patient with me as I suffer from severe anxiety, and
            he also made me laugh.”
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">— Mary Ellen Roman, Google review</p>
          <Link
            to="/reviews"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read all 84 reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-[image:var(--gradient-hero)] py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Stop by and say hi.</h2>
            <p className="mt-1 text-primary-foreground/80">
              2728 Davie Blvd, Fort Lauderdale · Open today
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-lg bg-background px-6 py-3 font-semibold text-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            Get directions
          </Link>
        </div>
      </section>
    </>
  );
}
