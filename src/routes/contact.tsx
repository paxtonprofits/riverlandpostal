import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Riverland Postal | 2728 Davie Blvd, Fort Lauderdale" },
      { name: "description", content: "Visit Riverland Postal at 2728 Davie Blvd, Fort Lauderdale, FL 33312. Call us, email us, or stop by — we're happy to help." },
      { property: "og:title", content: "Contact Riverland Postal" },
      { property: "og:description", content: "Hours, address, phone, and directions to our Fort Lauderdale shop." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Stop by, call, or send us a note.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We're right on Davie Blvd with easy parking. Walk in any time during open hours —
            no appointment needed.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="space-y-5">
            <InfoCard icon={MapPin} title="Address" lines={["2728 Davie Blvd", "Fort Lauderdale, FL 33312"]} />
            <InfoCard
              icon={Phone}
              title="Phone"
              lines={["(954) 333-1234"]}
              href="tel:+19543331234"
            />
            <InfoCard
              icon={Mail}
              title="Email"
              lines={["hello@riverlandpostal.com"]}
              href="mailto:hello@riverlandpostal.com"
            />
            <InfoCard
              icon={Clock}
              title="Hours"
              lines={[
                "Monday – Friday · 9:30 AM – 7:00 PM",
                "Saturday · 10:00 AM – 6:00 PM",
                "Sunday · Closed",
              ]}
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Riverland Postal map"
              src="https://www.google.com/maps?q=2728+Davie+Blvd,+Fort+Lauderdale,+FL+33312&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="min-h-[420px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Have a printing question or a custom shipping need? Drop us a line.
          </p>
          <form
            className="mt-8 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Website inquiry from ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:hello@riverlandpostal.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Your name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="justify-self-start rounded-lg bg-[image:var(--gradient-hero)] px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon, title, lines, href,
}: {
  icon: typeof MapPin; title: string; lines: string[]; href?: string;
}) {
  const inner = (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:bg-secondary/40">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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

function Field({
  name, label, type = "text", required,
}: { name: string; label: string; type?: string; required?: boolean }) {
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