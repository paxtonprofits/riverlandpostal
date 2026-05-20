import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Package, Printer, FileSignature, Truck, Clock, Heart, Globe2, Star,
  ArrowRight, CheckCircle2, Phone, MapPin, Shield, Zap, Users, Mail,
  Plane, Ship, Shirt,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Gallery4 } from "@/components/ui/gallery4";

const IMGS = {
  heroBg:   "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80",
  heroMain: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  whyUs:    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  gPlane:   "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  gShip:    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  gApparel: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  gNotary:  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pack & Print Multiservice LLC — Shipping, Printing & Notary in Fort Lauderdale" },
      { name: "description", content: "Local pack & ship store on Davie Blvd. UPS, USPS, FedEx, DHL, printing, faxing, notary. Friendly bilingual staff, no waiting in line." },
      { property: "og:title", content: "Pack & Print Multiservice LLC — Fort Lauderdale" },
      { property: "og:description", content: "Shipping, printing, faxing, and notary from your friendly neighborhood store." },
    ],
  }),
  component: Index,
});

const highlightIcons = [Truck, Clock, Heart, Globe2];
const serviceIcons = [Truck, Package, Printer, FileSignature];

function StarRow() {
  const reduced = useReducedMotion();
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.25, ease: "easeOut" }}
        >
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        </motion.div>
      ))}
    </div>
  );
}

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-white/70">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
      {text}
    </li>
  );
}

function Index() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const highlights = t.home.highlights.map((h, i) => ({ ...h, icon: highlightIcons[i] }));
  const services = t.home.services.map((s, i) => ({ ...s, icon: serviceIcons[i] }));

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0a0f1e]">
        <div className="absolute inset-0">
          <img src={IMGS.heroBg} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/85 to-[#0a0f1e]/50" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-36">
          <motion.div
            initial={{ opacity: 0, x: reduced ? 0 : -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
            >
              <Star className="h-3 w-3 fill-white text-white" /> {t.home.badge}
            </motion.span>

            <h1 className="mt-4 leading-none tracking-tight">
              <span className="block text-3xl font-bold text-white/60 sm:text-4xl">Pack &amp; Print</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent text-5xl font-black sm:text-6xl lg:text-7xl">Multiservice</span>
              <span className="block mt-1.5 text-base font-semibold tracking-widest text-white/40 uppercase">LLC · Fort Lauderdale, FL</span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-white">
              {t.home.h1a} <span className="text-blue-400">{t.home.h1b}</span> {t.home.h1c}
            </p>
            <p className="mt-3 max-w-xl text-base text-white/70 leading-relaxed">
              {t.home.lede}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-600 cursor-pointer">
                {t.home.seeServices}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/20 cursor-pointer">
                {t.home.visitStore}
              </Link>
              <a href="tel:+17862106832" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white/80 transition-colors duration-200 hover:bg-white/10 cursor-pointer">
                <Phone className="h-4 w-4 text-blue-400" /> (786) 210-6832
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  className="flex flex-col gap-1"
                >
                  <h.icon className="h-5 w-5 text-blue-400" />
                  <p className="font-semibold text-white">{h.title}</p>
                  <p className="text-xs text-white/60">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-3xl" />
            <img
              src={IMGS.heroMain}
              alt="Packages and boxes ready for shipping"
              width={900}
              height={650}
              className="relative w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="border-y border-white/10 bg-blue-600/90">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/20 px-6 lg:grid-cols-4">
          {[
            { value: "4", label: "Major Carriers", sub: "UPS · USPS · FedEx · DHL" },
            { value: "13+", label: "Countries We Ship To", sub: "Air & Maritime Cargo" },
            { value: "6", label: "Service Categories", sub: "Under One Roof" },
            { value: "5.0★", label: "Google Rating", sub: "Trusted by the Community" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center py-6 text-center text-white">
              <span className="text-3xl font-black">{s.value}</span>
              <span className="mt-0.5 text-sm font-bold">{s.label}</span>
              <span className="mt-0.5 text-xs text-white/70">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="border-t border-border/60 bg-[#0d1117] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">What We Do</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.home.servicesTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-white/60 leading-relaxed">
                {t.home.servicesLede}
              </p>
            </div>
            <Link to="/services" className="group hidden items-center gap-1 text-sm font-semibold text-blue-400 sm:inline-flex cursor-pointer hover:text-blue-300 whitespace-nowrap">
              {t.home.allServices}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6 cursor-default h-full hover:border-blue-500/40 hover:bg-white/10 flex flex-col"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 transition-colors duration-200 group-hover:bg-blue-500 group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed flex-1">{s.text}</p>
                  <Link to="/services" className="mt-4 text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#0a0f1e] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <Reveal className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-blue-500/10 blur-2xl pointer-events-none" />
              <img
                src={IMGS.whyUs}
                alt="Airplane in flight — we ship everywhere"
                className="relative w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
                style={{ maxHeight: 520 }}
              />
            </Reveal>

            <Reveal delay={100}>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Why Pack &amp; Print</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Fort Lauderdale's most complete pack &amp; ship store.
              </h2>

              <p className="mt-5 text-white/70 leading-relaxed">
                Pack &amp; Print Multiservice LLC was built to solve a real problem: having to drive to a UPS store, then a printing shop, then a notary, then back across town for packing supplies. We opened at 2728 Davie Blvd so you could do all of that in one trip — and save money doing it.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Unlike big-box shipping chains, we aren't locked into one carrier. We compare rates across UPS, USPS, FedEx, and DHL in real time and always tell you the cheapest option for your package size, weight, and destination. Most customers save money on every shipment just by walking in.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                We serve a bilingual community and we're proud of it. Our team speaks English and Spanish fluently — and we take the time to actually explain your options so you're never guessing. Whether you're shipping to someone across Florida or sending a care package to family in Colombia, we treat every shipment like it matters. Because it does.
              </p>

              <ul className="mt-6 space-y-3">
                <Check text="Side-by-side carrier comparison — UPS, USPS, FedEx & DHL every time" />
                <Check text="Custom packing at the counter — bring your item as-is, we'll box and pad it" />
                <Check text="International air & maritime cargo to 13+ countries in Latin America & the Caribbean" />
                <Check text="Full-color A-Plus printing — same-day on most orders" />
                <Check text="DTF & screen printing on apparel, no minimums on DTF" />
                <Check text="On-site notary public — no appointment needed" />
                <Check text="Private mailboxes with real street address, accepts all carrier packages" />
                <Check text="Bilingual staff — English & Spanish always available" />
                <Check text="Walk in any time Mon–Sat 9:30 AM–7:00 PM — no appointment, no long lines" />
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 cursor-pointer">
                  See all services <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+17862106832" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 cursor-pointer">
                  <Phone className="h-4 w-4 text-blue-400" /> Call us now
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0d1117] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Simple Process</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Getting started is easy.</h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/60 leading-relaxed">
              Whether you're a first-time customer or a regular, the experience is the same — fast, friendly, and straightforward. Here's how a typical visit works:
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: MapPin,
                title: "Walk In — No Appointment Needed",
                body: "Find us at 2728 Davie Blvd, Fort Lauderdale. There's easy parking right out front. We're open Monday through Saturday, 9:30 AM to 7:00 PM. No need to call ahead, schedule anything, or wait in line. Just walk in.",
              },
              {
                step: "02",
                icon: Users,
                title: "Tell Us What You Need",
                body: "Our team will help you figure out the fastest and most affordable option — whether you're shipping a package, printing marketing materials, getting documents notarized, or ordering custom apparel. We compare rates and walk you through every option in plain language.",
              },
              {
                step: "03",
                icon: Zap,
                title: "Done — Fast and Affordable",
                body: "Most services are completed on the spot. Shipping labels are generated immediately. Printing is often same-day. Notary services usually take just minutes. You leave with exactly what you came for — and a receipt in hand.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 h-full hover:border-blue-500/30 hover:bg-white/8"
                >
                  <span className="text-5xl font-black text-blue-500/30">{item.step}</span>
                  <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DEEP DIVE ── */}
      <section className="bg-[#0a0f1e] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Everything Under One Roof</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">More than just shipping.</h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/60 leading-relaxed">
              Most people come in to ship a package and leave realizing we do a lot more. Here's a closer look at what we offer:
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Truck,
                color: "blue",
                title: "Domestic Shipping",
                body: "We carry all four major carriers — UPS, USPS, FedEx, and DHL — at one counter. We compare rates on every shipment so you're not overpaying. Overnight, 2-day, ground, and economy options available. We also do custom packing: bring your item loose or in a bag and we'll box it, bubble-wrap it, and tape it up properly. Fragile? Oversized? Awkward shape? We've seen it all. Packing supplies — boxes, envelopes, mailers, tape, bubble wrap — are sold in-store.",
                tags: ["UPS", "USPS", "FedEx", "DHL", "Custom Packing", "Packing Supplies"],
              },
              {
                icon: Globe2,
                color: "cyan",
                title: "International Cargo",
                body: "We ship to 13+ countries in Latin America, the Caribbean, and beyond by air and by sea. Air shipping is fast — typically days — and ideal for documents, electronics, or time-sensitive items. Maritime shipping is more affordable for large or heavy cargo like barrels, furniture, or appliances. We work with trusted freight partners and provide door-to-door delivery options. Countries include Colombia, Cuba, Dominican Republic, Venezuela, Guatemala, Honduras, Mexico, Ecuador, El Salvador, Costa Rica, Nicaragua, Puerto Rico, and more.",
                tags: ["Air Freight", "Maritime", "Door-to-Door", "13+ Countries"],
              },
              {
                icon: Printer,
                color: "blue",
                title: "A-Plus Printing",
                body: "Full-service color printing for businesses, restaurants, and individuals. We print business cards, postcards, flyers, brochures, menus, magnets, and adhesive vinyl stickers. Paper options include glossy, matte, and specialty finishes. We can work from your design file or help you design something from scratch. Same-day turnaround available on most print jobs. Bulk orders welcome. We also print on fabric through DTF and screen printing — read more below.",
                tags: ["Business Cards", "Flyers", "Menus", "Stickers", "Same-Day"],
              },
              {
                icon: Shirt,
                color: "purple",
                title: "Apparel & DTF Textile",
                body: "Direct-to-Film (DTF) printing lets us put full-color, photographic-quality designs on virtually any fabric — t-shirts, hoodies, hats, polo shirts, tote bags, tank tops, uniforms, jackets, and more. No minimums on DTF, so you can order just one custom shirt. Screen printing is available for bulk orders that need vibrant, long-lasting solid-color prints. Perfect for businesses, sports teams, events, family reunions, or anyone who needs a custom look.",
                tags: ["DTF Printing", "Screen Printing", "No Minimums", "T-Shirts", "Hats", "Uniforms"],
              },
              {
                icon: FileSignature,
                color: "green",
                title: "Notary & Fax",
                body: "We have a certified notary public on-site during business hours. Walk in and get documents notarized without an appointment for most standard services — affidavits, real estate documents, power of attorney, contracts, and more. Fax send and receive is also available, which is especially useful for legal, medical, government, and tax documents. Fast, professional, and confidential.",
                tags: ["Notary Public", "Fax Send & Receive", "No Appointment", "Walk-In"],
              },
              {
                icon: Mail,
                color: "blue",
                title: "Private Mailboxes",
                body: "Get your own real street address — not a P.O. Box — with a private mailbox at our store. This is ideal for businesses that need a professional mailing address, freelancers, or anyone who needs secure package acceptance. We accept deliveries from all carriers on your behalf. You'll receive notification when packages arrive, and you can pick them up at your convenience during business hours.",
                tags: ["Street Address", "Business Mail", "Package Acceptance", "All Carriers"],
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 h-full hover:border-blue-500/30 hover:bg-white/8 flex flex-col"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed flex-1">{item.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-xs text-blue-300">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 cursor-pointer">
              View full services page <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <Gallery4
        title="A Closer Look at What We Do"
        description="From packing and shipping to printing and apparel — here's a glimpse of the services we offer every day at 2728 Davie Blvd."
        items={[
          { id: "air",     title: "Domestic & Air Shipping",      description: "UPS, USPS, FedEx, DHL — we compare all carriers so you always get the best rate. Overnight, 2-day, and ground available.",     href: "/services#shipping",      image: IMGS.gPlane   },
          { id: "cargo",   title: "International Cargo",          description: "Air & maritime freight to 13+ countries in Latin America and the Caribbean. Barrel shipping, door-to-door delivery available.", href: "/services#international", image: IMGS.gShip    },
          { id: "apparel", title: "Custom Apparel & DTF",         description: "T-shirts, hoodies, hats, uniforms — DTF printing with no minimums. Screen printing available for bulk orders.",                href: "/services#apparel",       image: IMGS.gApparel },
          { id: "notary",  title: "Notary, Fax & More",           description: "On-site notary public, fax send and receive, scanning, private mailboxes — all available walk-in.",                            href: "/services#notary",        image: IMGS.gNotary  },
        ]}
      />

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#0d1117] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Real Reviews</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">What our customers are saying.</h2>
            <p className="mt-3 text-white/50">Rated 5.0 stars on Google by Fort Lauderdale customers.</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Tanner Slutzky", text: "Went to see Josh because I had to mail a chainsaw. Thought it was going to be a production… but he made it so easy. Hooked me up with a box and packed it up right on the counter! Great service, friendly, and affordable!" },
              { name: "Yolna Augustin", text: "The service was magnificent. I love how welcoming and neat the environment is. Plus, there's no hustle, no waiting in line. Thank you so much Josh and Bailey!" },
              { name: "George Lorenzo", text: "Best place to ship packages in Fort Lauderdale. Helped me figure out which shipping option was the best and was very knowledgeable. Saved me the hassle of going all the way to USPS." },
              { name: "Mary Ellen Roman", text: "This was my first visit, and Troy was amazing — explaining in detail pricing, weight and shipping. He was very patient with me as I suffer from severe anxiety, and he also made me laugh. Kudos to Troy." },
              { name: "Ernesto Campana", text: "Excellent service, good staff, bilingual (English and Spanish). 👍" },
              { name: "Barbie Wilson", text: "Amazing customer service. Nothing but smiles. Quick in/out service. Highly recommend." },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full flex flex-col">
                  <StarRow />
                  <blockquote className="mt-3 text-sm text-white/80 leading-relaxed flex-1">"{r.text}"</blockquote>
                  <p className="mt-4 text-xs font-semibold text-white/40">— {r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link to="/reviews" className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400 cursor-pointer hover:text-blue-300">
              {t.home.readAll}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0a0f1e] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Common questions.</h2>
          </Reveal>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to bring a box or packing materials?",
                a: "No — you can bring your item loose, in a bag, or however you have it. We sell boxes, bubble wrap, tape, envelopes, and mailers in-store and we'll pack it for you right at the counter. No extra charge for basic packing assistance.",
              },
              {
                q: "Which carrier is cheapest for my package?",
                a: "It depends on the size, weight, and destination. That's exactly why we compare all four carriers — UPS, USPS, FedEx, and DHL — for every single shipment. Just bring your package in and we'll tell you the cheapest option immediately. No guessing, no surprises.",
              },
              {
                q: "Do you ship to Latin America and the Caribbean?",
                a: "Yes — we specialize in it. We offer both air and maritime cargo to 13+ countries including Colombia, Cuba, Dominican Republic, Venezuela, Guatemala, Honduras, Mexico, Ecuador, El Salvador, Costa Rica, Nicaragua, Puerto Rico, and more. Ask us about barrel shipping for large or heavy items.",
              },
              {
                q: "How fast is your printing turnaround?",
                a: "Most standard print jobs — business cards, flyers, brochures — are same-day or next-day. Large orders or specialty finishes may take a bit longer. Call us or stop by and we'll give you an accurate time estimate based on what you need.",
              },
              {
                q: "Do I need an appointment for the notary?",
                a: "For most standard notary services, no appointment is needed. Walk in during business hours (Mon–Sat 9:30 AM–7 PM) and we'll take care of you. If you have a large or complex document job, calling ahead helps us prepare.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <details className="group rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/20 transition-colors">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-white list-none">
                    {item.q}
                    <ArrowRight className="h-4 w-4 shrink-0 text-blue-400 rotate-90 transition-transform group-open:rotate-[270deg]" />
                  </summary>
                  <p className="px-6 pb-5 pt-0 text-sm text-white/60 leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-blue-600 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1d4ed8,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t.home.ctaTitle}</h2>
              <p className="mt-3 text-white/80 leading-relaxed">
                Stop in any time during business hours — no appointment needed. Our bilingual team is ready to help you ship, print, notarize, and more. We're conveniently located on Davie Blvd with easy parking right out front.
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/80">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-white/60 shrink-0" /> 2728 Davie Blvd, Fort Lauderdale, FL 33312</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-white/60 shrink-0" /> (786) 210-6832 · (786) 909-0250</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-white/60 shrink-0" /> Mon–Sat 9:30 AM–7:00 PM · Sunday Closed</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-white/60 shrink-0" /> packprintmultiservice@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/contact" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-50 cursor-pointer text-center whitespace-nowrap">
                {t.home.directions}
              </Link>
              <a href="tel:+17862106832" className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/20 cursor-pointer text-center whitespace-nowrap">
                <Phone className="inline h-4 w-4 mr-2" />Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
