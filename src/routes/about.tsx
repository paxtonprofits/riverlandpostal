import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Globe2, Clock, Sparkles, MapPin, CheckCircle2, Phone, ArrowRight, Star, Truck, Printer, FileSignature, Shield, Zap, Award } from "lucide-react";
import { motion } from "motion/react";
import storefront1 from "@/assets/storefront1.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

const IMGS = {
  story:     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  community: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pack & Print Multiservice LLC | Fort Lauderdale" },
      { name: "description", content: "Pack & Print Multiservice LLC is a bilingual shipping, printing, and cargo store on Davie Blvd. Fast service, friendly staff, no long lines." },
      { property: "og:title", content: "About Pack & Print Multiservice LLC" },
      { property: "og:description", content: "A friendly neighborhood pack & ship store in Fort Lauderdale, FL." },
    ],
  }),
  component: AboutPage,
});

const valueIcons = [Heart, Clock, Globe2, Sparkles];

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      {text}
    </li>
  );
}

function AboutPage() {
  const { t } = useLang();
  const values = t.about.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));

  return (
    <>
      {/* ── HERO ── */}
      <section className="border-b border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.about.kicker}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {t.about.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.about.lede}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Our services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary cursor-pointer">
              <MapPin className="h-4 w-4 text-primary" /> Find us
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/20 px-6 lg:grid-cols-4">
          {[
            { value: "4",   label: "Major Carriers",      sub: "UPS · USPS · FedEx · DHL" },
            { value: "13+", label: "Countries We Ship To", sub: "Air & Maritime Cargo" },
            { value: "5.0★", label: "Google Rating",       sub: "Community Trusted" },
            { value: "100%", label: "Bilingual Service",   sub: "English & Español" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center py-6 text-center">
              <span className="text-3xl font-black">{s.value}</span>
              <span className="mt-0.5 text-sm font-bold">{s.label}</span>
              <span className="mt-0.5 text-xs opacity-70">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={IMGS.story}
              alt="Pack & Print Multiservice team at work"
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl"
              style={{ maxHeight: 560 }}
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl font-bold tracking-tight">{t.about.storyTitle}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.about.story1}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.about.story2}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.about.story3}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.about.story4}</p>

            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-foreground">What sets us apart:</p>
              <ul className="space-y-2">
                <Check text="We compare all four major carriers for every shipment — you always get the best rate" />
                <Check text="Full packing service at the counter — no need to come prepared" />
                <Check text="Air and maritime international cargo to 13+ countries" />
                <Check text="A-Plus printing with same-day turnaround on most orders" />
                <Check text="DTF and screen printing on apparel with no minimums on DTF" />
                <Check text="On-site notary public — walk in, no appointment needed" />
                <Check text="Bilingual staff serving Fort Lauderdale's diverse community" />
                <Check text="Private mailboxes with a real street address, not a P.O. Box" />
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY WE'RE DIFFERENT ── */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">The Pack &amp; Print Difference</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              We're not a big-box chain. We're your neighbors.
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
              Big shipping chains are locked into one carrier and focused on volume. We're focused on you. Here's what that actually looks like:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Truck,
                title: "We Compare — You Save",
                body: "Walk-in at a UPS Store and you're paying UPS rates. Walk in here and we pull quotes from UPS, USPS, FedEx, and DHL side by side. We tell you the cheapest and fastest option for your specific package, and you decide. Most customers save money on the very first shipment.",
              },
              {
                icon: Users,
                title: "Bilingual, Every Day",
                body: "Fort Lauderdale is a bilingual city and our store reflects that. Every staff member speaks both English and Spanish fluently. There's no language barrier, no frustration, no miscommunications about where your package is going or what you need. We're comfortable in both languages — and so is your service.",
              },
              {
                icon: Printer,
                title: "Printing That Goes Beyond Copies",
                body: "We don't just run copies. We print business cards, postcards, full-color brochures, restaurant menus, vinyl stickers, and magnets. We do DTF textile printing on t-shirts and hoodies with no minimum order. We help design when needed. This isn't a copy machine — it's a full-service print shop.",
              },
              {
                icon: Globe2,
                title: "Real International Cargo",
                body: "Sending a barrel to Cuba or Colombia? Shipping furniture to Honduras? Need fast air freight to Venezuela? We handle all of it. We've built relationships with reliable cargo partners for air and maritime freight to 13+ countries. This isn't just USPS First Class International — this is real cargo logistics for the Latin American and Caribbean community.",
              },
              {
                icon: Shield,
                title: "Notary Without the Runaround",
                body: "Finding a notary when you need one is a headache. Banks require appointments. Law offices charge a lot. We have a notary on-site during business hours, and for most standard documents, you walk in and get it done in minutes. Affidavits, real estate docs, power of attorney, immigration forms — all handled here.",
              },
              {
                icon: Zap,
                title: "One Stop, No More Running Around",
                body: "The number one thing our customers tell us is how much time they save. Before they found us, they were driving to a UPS store, then a print shop, then hunting for a notary, then going to Office Depot for packing supplies. Now they do everything in one stop, in one parking lot, in one visit. That's the whole point.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl border border-border bg-card p-7 h-full hover:border-primary/30 hover:shadow-lg flex flex-col"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{item.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">{t.about.valuesTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              These aren't slogans on a wall. They're how we actually show up every day for the people who walk through our door.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-2xl border border-border bg-card p-7 shadow-sm hover:border-primary/30 hover:shadow-md h-full flex flex-col"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{v.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Community</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Rooted in Fort Lauderdale. Serving the whole community.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Davie Blvd is one of Fort Lauderdale's most diverse corridors — and our customer base reflects that. We serve families who are shipping care packages to relatives in Colombia, Cuba, the Dominican Republic, and Honduras. We serve small business owners who need business cards printed on a budget. We serve professionals who need a document notarized and faxed the same afternoon. We serve students, landlords, restaurant owners, and everyone in between.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When we say bilingual service, we mean every day, every customer, every transaction. You will never walk in and get blank stares because you prefer Spanish. Half of our conversations happen in Spanish, and that's something we're proud of. This community deserves a store that speaks its language — literally and figuratively.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We sponsor local events, support neighborhood businesses, and try to be more than just a place to drop off packages. When you come in, you're not a transaction — you're a neighbor. Manager Jose S. Vilchez has built the team around that principle from day one, and it shows in every Google review we've received.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/reviews" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer">
                  <Star className="h-4 w-4 fill-current" /> Read our reviews
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary cursor-pointer">
                  <MapPin className="h-4 w-4 text-primary" /> Visit us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={IMGS.community}
                alt="Serving the Fort Lauderdale community"
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-xl"
                style={{ maxHeight: 480 }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TEAM & LOCATION ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">The people behind the counter.</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              No bots. No kiosks. Just real people who know their stuff and actually care.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="group rounded-3xl border border-border bg-card p-8 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all h-full">
                <Users className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">{t.about.teamTitle}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t.about.teamText}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Led by manager Jose S. Vilchez, our staff brings genuine expertise to every interaction. They know the difference between UPS Ground and USPS Priority. They know which paper stock works for restaurant menus. They know how to ship a barrel to Colombia and what documentation is needed. This isn't just a job for them — it's a service they take seriously.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Whether you're in a rush or need someone to walk you through every option, the team adjusts. If you need help in Spanish, you'll have it. If you just want to drop off a package and leave in 60 seconds, that works too. The experience fits you — not the other way around.
                </p>
                <a href="tel:+17862106832" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer">
                  <Phone className="h-4 w-4" /> Call us: (786) 210-6832
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="group rounded-3xl border border-border bg-card p-8 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all h-full flex flex-col">
                <MapPin className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">{t.about.whereTitle}</h3>
                <img src={storefront1} alt="Pack & Print Multiservice LLC — 2728 Davie Blvd, Fort Lauderdale" className="mt-4 w-full rounded-2xl object-cover shadow-sm" style={{ maxHeight: 200 }} />
                <p className="mt-3 text-muted-foreground leading-relaxed">{t.about.whereText}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We're on Davie Blvd between I-95 and US-1, in a strip where easy access and free parking make stopping in a no-brainer. You won't have to circle the block or feed a meter. There's dedicated parking directly in front of the store.
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Our hours are Monday through Saturday, 9:30 AM to 7:00 PM. We are closed on Sundays. Most services are available right up until closing, so you don't have to rush to get there early. We're reachable at <strong>(786) 210-6832</strong> or <strong>(786) 909-0250</strong>, and by email at packprintmultiservice@gmail.com.
                </p>
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer">
                    {t.about.directions}
                  </Link>
                  <a href="mailto:packprintmultiservice@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary cursor-pointer">
                    Email us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border/60 bg-primary text-primary-foreground py-16">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <Award className="mx-auto h-10 w-10 opacity-80 mb-4" />
          <h2 className="text-2xl font-bold sm:text-3xl">Come see what everyone's talking about.</h2>
          <p className="mt-3 opacity-80 max-w-xl mx-auto leading-relaxed">
            Five stars on Google, a tight-knit team, and more services than you probably expect from a neighborhood store. 2728 Davie Blvd — open Monday through Saturday, 9:30 AM to 7 PM.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-lg bg-white px-6 py-3 font-semibold text-primary hover:bg-white/90 cursor-pointer">
              Get directions
            </Link>
            <a href="tel:+17862106832" className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 cursor-pointer">
              Call (786) 210-6832
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
