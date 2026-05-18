import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Printer, FileSignature, Truck, Clock, Heart, Globe2, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/store-interior.jpg";
import { useLang } from "@/i18n/LanguageContext";

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

const highlightIcons = [Truck, Clock, Heart, Globe2];
const serviceIcons = [Truck, Package, Printer, FileSignature];

function Index() {
  const { t } = useLang();
  const highlights = t.home.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i] }));
  const services = t.home.services.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-[0.04]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary animate-pulse-glow">
              <Star className="h-3 w-3 fill-current" /> {t.home.badge}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.home.h1a}{" "}
              <span className="bg-[image:var(--gradient-hero)] bg-clip-text text-transparent">
                {t.home.h1b}
              </span>{" "}
              {t.home.h1c}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {t.home.lede}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-hero)] px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
              >
                {t.home.seeServices}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:border-primary/40"
              >
                {t.home.visitStore}
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  style={{ animationDelay: `${300 + i * 100}ms` }}
                  className="group flex flex-col gap-1 animate-fade-in-up cursor-default"
                >
                  <h.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
                  <p className="font-semibold">{h.title}</p>
                  <p className="text-xs text-muted-foreground">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-6 rounded-3xl bg-[image:var(--gradient-hero)] opacity-20 blur-2xl animate-float-slow" />
            <img
              src={heroImg}
              alt="Friendly staff helping a customer at Riverland Postal counter"
              width={1600}
              height={1100}
              className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-card)] transition-transform duration-700 hover:scale-[1.02]"
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
                {t.home.servicesTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {t.home.servicesLede}
              </p>
            </div>
            <Link
              to="/services"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              {t.home.allServices}
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                style={{ animationDelay: `${i * 90}ms` }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-glow animate-fade-in-up"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
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
            {t.home.quote}
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">{t.home.quoteBy}</p>
          <Link
            to="/reviews"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary story-link"
          >
            {t.home.readAll}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-[image:var(--gradient-hero)] py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{t.home.ctaTitle}</h2>
            <p className="mt-1 text-primary-foreground/80">
              {t.home.ctaLede}
            </p>
          </div>
          <Link
            to="/contact"
            className="rounded-lg bg-background px-6 py-3 font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            {t.home.directions}
          </Link>
        </div>
      </section>
    </>
  );
}
