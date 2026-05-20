import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Car, Bus, AlertCircle, Truck, Printer, FileSignature } from "lucide-react";
import storefront1 from "@/assets/storefront1.jpg";
import storefront2 from "@/assets/storefront2.jpg";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pack & Print Multiservice LLC | 2728 Davie Blvd, Fort Lauderdale" },
      { name: "description", content: "Visit Pack & Print Multiservice LLC at 2728 Davie Blvd, Fort Lauderdale, FL 33312. Call, email, or walk in — Mon–Sat 9:30 AM–7 PM." },
      { property: "og:title", content: "Contact Pack & Print Multiservice LLC" },
      { property: "og:description", content: "Hours, address, phone, and directions to our Fort Lauderdale store on Davie Blvd." },
    ],
  }),
  component: ContactPage,
});

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      {text}
    </li>
  );
}

function ContactPage() {
  const { t } = useLang();
  return (
    <>
      {/* ── HERO ── */}
      <section className="border-b border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.contact.kicker}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {t.contact.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.contact.lede}
          </p>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed">
            We are located at <strong>2728 Davie Blvd, Fort Lauderdale, FL 33312</strong> — right in the heart of the neighborhood with easy street-level parking out front. No need to schedule anything or wait in a long line. Walk in any time during business hours and you'll be helped immediately.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+17862106832" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 cursor-pointer">
              <Phone className="h-4 w-4" /> Call (786) 210-6832
            </a>
            <a href="mailto:packprintmultiservice@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-secondary cursor-pointer">
              <Mail className="h-4 w-4 text-primary" /> Send an email
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS + MAP ── */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <Reveal className="space-y-5">
            <InfoCard icon={MapPin} title={t.contact.address} lines={["2728 Davie Blvd", "Fort Lauderdale, FL 33312"]} />
            <InfoCard icon={Phone} title={t.contact.phone} lines={["(786) 210-6832", "(786) 909-0250"]} href="tel:+17862106832" />
            <InfoCard icon={Mail} title={t.contact.email} lines={["packprintmultiservice@gmail.com"]} href="mailto:packprintmultiservice@gmail.com" />
            <InfoCard icon={Clock} title={t.contact.hours} lines={t.contact.hoursLines} />
          </Reveal>

          <Reveal delay={150} className="space-y-4">
            <div className="group overflow-hidden rounded-3xl border border-border shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40">
              <iframe
                title="Pack & Print Multiservice LLC map"
                src="https://www.google.com/maps?q=2728+Davie+Blvd,+Fort+Lauderdale,+FL+33312&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="min-h-[300px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={storefront1} alt="Pack & Print Multiservice LLC storefront — 2728 Davie Blvd" className="w-full rounded-2xl object-cover shadow-sm" style={{ maxHeight: 220 }} />
              <img src={storefront2} alt="Pack & Print Multiservice LLC — ENVIOS, Printing, UPS, FedEx, DHL" className="w-full rounded-2xl object-cover shadow-sm" style={{ maxHeight: 220 }} />
            </div>
            <p className="text-xs text-muted-foreground text-center">2728 Davie Blvd, Fort Lauderdale, FL 33312</p>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Your Visit</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What to expect when you walk in.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
              Whether it's your first time or your fiftieth, here's exactly what a visit to Pack &amp; Print Multiservice looks like — and why customers keep coming back.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "You're Greeted Immediately",
                body: "From the moment you walk in, someone is ready to help. No taking a number, no waiting for someone to look up from a screen. Our team is attentive and bilingual — if you prefer Spanish, just speak it and we'll switch. If you're not sure what service you need, that's totally fine — just tell us what you're trying to accomplish and we'll guide you.",
              },
              {
                step: "02",
                title: "We Explain All Your Options",
                body: "For shipping, we pull up rates from UPS, USPS, FedEx, and DHL side by side and walk you through the tradeoffs — cost vs. speed. We don't push the most expensive option. For printing, we ask about paper, finish, quantity, and turnaround. For notary or fax, we get straight to it. We work at your pace.",
              },
              {
                step: "03",
                title: "We Handle It On the Spot",
                body: "Shipping labels are created and attached right at the counter. Printing jobs are sent to the press immediately for most standard orders. Notary services happen in minutes with the right documents. You don't leave with a 'we'll call you.' You leave with your package shipped, your cards printed, or your document stamped.",
              },
              {
                step: "04",
                title: "You Get Confirmation & Tracking",
                body: "Every shipment gets a tracking number that you can monitor online. For printed orders, we review the proof with you before we run the full job on anything custom. For faxes, you'll receive a confirmation sheet. We make sure nothing goes out without your sign-off.",
              },
              {
                step: "05",
                title: "No Hidden Fees or Surprises",
                body: "What we quote is what you pay. We tell you the carrier rates, the printing costs, and the service fees upfront — no surprise charges at the end. If something changes mid-order (like a weight discrepancy on a package), we tell you before we proceed.",
              },
              {
                step: "06",
                title: "You'll Probably Come Back",
                body: "Not to brag, but our Google reviews say it all — 5.0 stars from dozens of Fort Lauderdale customers. Once people find us, they stop going to the USPS, stop hunting for a notary, stop running to multiple stores. It all happens here. We'll see you next time.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <div className="rounded-2xl border border-border bg-card p-7 h-full flex flex-col hover:border-primary/30 hover:shadow-md transition-all">
                  <span className="text-4xl font-black text-primary/20">{item.step}</span>
                  <h3 className="mt-2 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTIONS & PARKING ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Getting Here</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Directions, parking &amp; transit.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're on Davie Blvd between SW 27th Ave and SW 28th Ave in Fort Lauderdale. The store is easy to find — it's in a visible strip location with parking directly in front.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="h-5 w-5 text-primary" />
                    <h3 className="font-bold">By Car</h3>
                  </div>
                  <ul className="space-y-2">
                    <Check text="From I-95: Take the Davie Blvd exit heading east. We're about 0.5 miles east of I-95 on the north side of Davie Blvd." />
                    <Check text="From US-1 (Federal Hwy): Head west on Davie Blvd. We're about 1.5 miles west of US-1." />
                    <Check text="From I-595: Head north on I-95, take the Davie Blvd exit, then east as above." />
                    <Check text="Free parking directly in front of the store — no meter, no time limit." />
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Bus className="h-5 w-5 text-primary" />
                    <h3 className="font-bold">By Bus</h3>
                  </div>
                  <ul className="space-y-2">
                    <Check text="Broward County Transit Route 22 runs along Davie Blvd and stops near our location." />
                    <Check text="The nearest major transit hub is the Fort Lauderdale Tri-Rail station, reachable by connecting bus." />
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-bold">Good to Know</h3>
                  </div>
                  <ul className="space-y-2">
                    <Check text="We do not require appointments for any walk-in service including shipping, printing, and notary." />
                    <Check text="For very large print jobs or bulk apparel orders, calling ahead helps us prepare materials." />
                    <Check text="International cargo drop-offs may require more time — plan for 15–20 minutes if shipping overseas." />
                    <Check text="We accept cash and all major credit/debit cards." />
                    <Check text="Bring a valid ID for notary services." />
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-bold text-lg mb-4">Services available walk-in</h3>
                <div className="space-y-4">
                  {[
                    { icon: Truck, label: "Domestic Shipping", detail: "UPS, USPS, FedEx, DHL — rate comparison at the counter. Custom packing available." },
                    { icon: Truck, label: "International Cargo", detail: "Air and maritime shipping to Latin America, the Caribbean, and beyond." },
                    { icon: Printer, label: "Printing", detail: "Business cards, flyers, menus, stickers, magnets. Same-day on most standard jobs." },
                    { icon: Printer, label: "Apparel & DTF", detail: "T-shirts, hoodies, hats, bags. DTF with no minimums. Screen printing for bulk." },
                    { icon: FileSignature, label: "Notary & Fax", detail: "Certified notary on-site. Fax send/receive, scanning, and document copying." },
                    { icon: MapPin, label: "Private Mailboxes", detail: "Real street address, accepts all carriers. Monthly and annual options available." },
                  ].map((s) => (
                    <div key={s.label} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <s.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 cursor-pointer">
                  Full service details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-bold mb-2">Have a question before you come in?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Call us at <strong>(786) 210-6832</strong> or <strong>(786) 909-0250</strong>. We're happy to answer questions about pricing, turnaround times, what documents you need, or whether we handle a specific type of shipment — before you make the trip.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can also email us at <strong>packprintmultiservice@gmail.com</strong>. For general questions we typically respond the same business day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="border-t border-border/60 bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Message Us</p>
              <h2 className="mt-2 text-2xl font-bold">{t.contact.formTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.contact.formLede}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Fill out the form and we'll respond by email. For faster service, call us directly at <strong>(786) 210-6832</strong>. We're available Monday through Saturday, 9:30 AM to 7:00 PM.
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-sm font-semibold">Common reasons people reach out:</p>
                <ul className="space-y-2">
                  <Check text="Getting a quote for a bulk print or apparel order" />
                  <Check text="Asking about international cargo rates to a specific country" />
                  <Check text="Confirming whether we handle a specific document type for notary" />
                  <Check text="Checking turnaround times for large print jobs" />
                  <Check text="Inquiring about private mailbox availability and pricing" />
                  <Check text="Asking about custom DTF or screen printing for an event or business" />
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                className="grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
                  const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
                  window.location.href = `mailto:packprintmultiservice@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field name="name" label={t.contact.name} required />
                  <Field name="email" label={t.contact.emailLabel} type="email" required />
                </div>
                <Field name="phone" label="Phone (optional)" type="tel" />
                <div className="grid gap-2">
                  <label htmlFor="service" className="text-sm font-medium">Service you need</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select a service…</option>
                    <option>Domestic Shipping</option>
                    <option>International Cargo</option>
                    <option>A-Plus Printing</option>
                    <option>Apparel & DTF Printing</option>
                    <option>Notary & Fax</option>
                    <option>Private Mailbox</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">{t.contact.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you need and we'll get back to you as soon as possible…"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="justify-self-start rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
                >
                  {t.contact.send}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── QUICK FAQ ── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl font-bold">Quick answers.</h2>
            <p className="mt-2 text-muted-foreground">The most common questions before a first visit.</p>
          </Reveal>
          <div className="space-y-3">
            {[
              { q: "Do I need an appointment?", a: "No. All services at Pack & Print Multiservice are walk-in. Just show up during business hours (Mon–Sat 9:30 AM–7 PM) and you'll be helped right away. For complex notary needs or very large orders, a quick call ahead is helpful — but never required." },
              { q: "What do I need to bring for shipping?", a: "Just bring your item and we'll take care of the rest. We have boxes, bubble wrap, tape, and packing materials available. If you want to pack it yourself at home, bring it sealed. If you want us to pack it, bring it as-is. We'll weigh it, pull rates from all four carriers, and process the shipment right at the counter." },
              { q: "How fast can you print?", a: "Most standard orders — business cards, flyers, postcards — are same-day or next-day. If you're ordering a large quantity or have a specialty finish (lamination, thick cardstock, etc.), it may take a bit longer. Apparel orders vary by method: DTF is typically fast, screen printing for bulk orders takes more time. Call or stop by and we'll give you an honest timeline." },
              { q: "What documents do I need for notary?", a: "Bring a valid, government-issued photo ID (driver's license, passport, state ID) and the document that needs to be notarized. Do not sign it in advance — the notary must witness your signature. If you have questions about whether a specific document qualifies, call us at (786) 210-6832." },
              { q: "Do you ship to Cuba, Colombia, Dominican Republic, and other Caribbean / Latin American countries?", a: "Yes — this is one of our specialties. We offer air and maritime cargo to 13+ countries including Cuba, Colombia, Dominican Republic, Venezuela, Guatemala, Honduras, Mexico, Ecuador, El Salvador, Costa Rica, Nicaragua, and Puerto Rico. Ask us about barrel shipping for large or bulky cargo." },
              { q: "What forms of payment do you accept?", a: "We accept cash and all major credit and debit cards. There is no minimum for card payments." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-semibold list-none">
                    {item.q}
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary rotate-90 transition-transform group-open:rotate-[270deg]" />
                  </summary>
                  <p className="px-6 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, lines, href }: {
  icon: typeof MapPin; title: string; lines: string[]; href?: string;
}) {
  const inner = (
    <div className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-1 space-y-0.5 text-sm text-muted-foreground">
          {lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
