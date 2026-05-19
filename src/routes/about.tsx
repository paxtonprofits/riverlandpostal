import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Globe2, Clock, Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/storefront.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

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
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-hero)] opacity-15 blur-2xl animate-float-slow" />
            <img
              src={heroImg}
              alt="Inside Riverland Postal"
              width={1600}
              height={1100}
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-card)] transition-all duration-700 hover:scale-[1.03] hover:-rotate-1 hover:shadow-2xl"
            />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl font-bold tracking-tight">{t.about.storyTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.about.story1}</p>
            <p className="mt-3 text-muted-foreground">{t.about.story2}</p>
            <p className="mt-3 text-muted-foreground">{t.about.story3}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">{t.about.valuesTitle}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 90}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-tilt hover-shine"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <Reveal className="group rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover-tilt">
            <Users className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <h3 className="mt-4 text-2xl font-bold">{t.about.teamTitle}</h3>
            <p className="mt-2 text-muted-foreground">{t.about.teamText}</p>
          </Reveal>
          <Reveal delay={120} className="group rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover-tilt">
            <MapPin className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
            <h3 className="mt-4 text-2xl font-bold">{t.about.whereTitle}</h3>
            <p className="mt-2 text-muted-foreground">{t.about.whereText}</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex overflow-hidden rounded-lg bg-[image:var(--gradient-hero)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover-shine hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t.about.directions}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}