import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck, Package, Printer, FileSignature, Mail, Globe2,
  Stamp, FileText, Boxes, ScrollText, Phone, ArrowRight,
} from "lucide-react";
import boxesImg from "@/assets/pack-and-ship.jpg";
import printingImg from "@/assets/storefront.jpg";

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

const services = [
  {
    icon: Truck,
    title: "Shipping — All Major Carriers",
    text: "UPS, USPS, FedEx, and DHL all from one counter. We'll compare options and find you the most affordable rate for your package, every time.",
  },
  {
    icon: Package,
    title: "Custom Packing",
    text: "Bring it as-is. We'll box, pad, and tape it up at the counter — fragile items, awkward shapes, even chainsaws. (Yes, really.)",
  },
  {
    icon: Globe2,
    title: "International Shipping",
    text: "Envíos a Centro y Sur América, El Caribe y Europa. Door-to-door delivery and air or maritime options available.",
  },
  {
    icon: Printer,
    title: "Printing & Copies",
    text: "Full-service color and B&W printing. Flyers, brochures, business cards, postcards, menus, stickers, banners, and more — for less.",
  },
  {
    icon: ScrollText,
    title: "Fax Services",
    text: "Send and receive faxes quickly. Great for legal, medical, and tax documents when you need a paper trail.",
  },
  {
    icon: FileSignature,
    title: "Notary Public",
    text: "On-site notary for documents, affidavits, and forms. Quick, professional, and trusted by local businesses.",
  },
  {
    icon: Mail,
    title: "Private Mailboxes",
    text: "A real street address for your business or personal mail. Package acceptance from all carriers included.",
  },
  {
    icon: Boxes,
    title: "Office & Packing Supplies",
    text: "Boxes, envelopes, tape, bubble wrap, mailers, labels — everything you need to ship, all in stock.",
  },
  {
    icon: FileText,
    title: "Scanning & Document Help",
    text: "Scan to email, shred sensitive papers, or get help filling out forms. We're here to make it easy.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            One counter. Every service you need.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            From a single envelope to international freight, business cards to notarized
            documents — we handle it all, quickly and with a smile.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: `${i * 70}ms` }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-glow animate-fade-in-up"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature split */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <img
            src={boxesImg}
            alt="Riverland Postal storefront — Pack and Ship"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)] transition-transform duration-500 hover:scale-[1.02] animate-scale-in"
          />
          <div>
            <Stamp className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              The friendly alternative to the post office.
            </h2>
            <p className="mt-3 text-muted-foreground">
              No wandering between counters. No long waits. Just a small team that knows
              shipping, knows the neighborhood, and will help you find the cheapest, fastest
              way to get your package where it's going.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Printer className="h-8 w-8 text-primary" />
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Full-service printing for less.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Flyers, business cards, brochures, menus, postcards, stickers, vinyl, banners,
              printed t-shirts, cups & tumblers, car wraps, channel letter signs — bring us
              your idea, we'll print it.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-hero)] px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={printingImg}
            alt="Color printer producing flyers and prints"
            width={1200}
            height={900}
            loading="lazy"
            className="order-1 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:order-2"
          />
        </div>
      </section>

      <section className="border-t border-border/60 bg-[image:var(--gradient-hero)] py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold">Not sure which service you need?</h2>
            <p className="text-primary-foreground/80">Call us — we'll figure it out together.</p>
          </div>
          <a
            href="tel:+19543331234"
            className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 font-semibold text-foreground"
          >
            <Phone className="h-4 w-4" /> (954) 333-1234
          </a>
        </div>
      </section>
    </>
  );
}