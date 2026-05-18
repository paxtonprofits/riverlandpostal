import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Globe2, Clock, Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/storefront.jpg";

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

const values = [
  { icon: Heart, title: "Treat people right", text: "Our customers are neighbors. We act like it." },
  { icon: Clock, title: "Respect your time", text: "Fast in, fast out — without cutting corners." },
  { icon: Globe2, title: "Hablamos Español", text: "Bilingual service so everyone feels at home." },
  { icon: Sparkles, title: "Go the extra mile", text: "Free packing help, the cheapest shipping option, and a laugh on the way out." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A small Fort Lauderdale shop with a big heart.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Riverland Postal has been serving the Davie Blvd neighborhood for years — packing,
            shipping, printing, and notarizing for everyone who walks through the door.
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
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our story</h2>
            <p className="mt-4 text-muted-foreground">
              We opened our doors to give the neighborhood a real alternative to the post
              office — somewhere you could ship a package, print a flyer, fax a document, or
              get something notarized without driving across town or waiting in a long line.
            </p>
            <p className="mt-3 text-muted-foreground">
              Over the years, our customers have told us the same thing in dozens of reviews:
              it's the people that make it. Josh, Troy, Bailey, Noah, Noel — the team takes
              the time to help, jokes around, and treats every package like it's their own.
            </p>
            <p className="mt-3 text-muted-foreground">
              Whether you're sending shoes across the country, mailing a chainsaw (yes,
              really), or printing flyers for your business, we'll make it easy.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">What we stand for</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
            <h3 className="mt-4 text-2xl font-bold">The team</h3>
            <p className="mt-2 text-muted-foreground">
              Friendly, knowledgeable, bilingual — and yes, a little funny. Stop in and you'll
              probably leave on a first-name basis.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <MapPin className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">Where to find us</h3>
            <p className="mt-2 text-muted-foreground">
              2728 Davie Blvd, Fort Lauderdale, FL 33312 — right in the heart of the
              neighborhood, with easy parking out front.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-lg bg-[image:var(--gradient-hero)] px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}