import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Globe2, Clock, Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/storefront.jpg";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Riverland Postal | Fort Lauderdale" },
      { name: "description", content: "We're a small, family-run shipping and printing shop on Davie Blvd. Bilingual, fast, and known for going the extra mile for every customer." },
      { property: "og:title", content: "About Riverland Postal" },
      { property: "og:description", content: "A friendly neighborhood pack & ship shop in Fort Lauderdale." },
    ],
  }),
  component: AboutPage,
});

const valueIcons = [Heart, Clock, Globe2, Sparkles];

function AboutPage() {
  const { t } = useLang();
  const values = t.about.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.about.kicker}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {t.about.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.about.lede}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <img
            src={heroImg}
            alt="Inside Riverland Postal"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)] transition-transform duration-700 hover:scale-[1.02] animate-scale-in"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{t.about.storyTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.about.story1}</p>
            <p className="mt-3 text-muted-foreground">{t.about.story2}</p>
            <p className="mt-3 text-muted-foreground">{t.about.story3}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">{t.about.valuesTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{ animationDelay: `${i * 90}ms` }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-glow animate-fade-in-up"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <Users className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">{t.about.teamTitle}</h3>
            <p className="mt-2 text-muted-foreground">{t.about.teamText}</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <MapPin className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">{t.about.whereTitle}</h3>
            <p className="mt-2 text-muted-foreground">{t.about.whereText}</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-lg bg-[image:var(--gradient-hero)] px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {t.about.directions}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}