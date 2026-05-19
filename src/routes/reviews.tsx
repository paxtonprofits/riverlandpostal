import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Riverland Postal | 5.0 ★ on Google" },
      { name: "description", content: "Read what Fort Lauderdale neighbors are saying about Riverland Postal — 84 reviews, 5.0 average. Friendly, fast, helpful staff." },
      { property: "og:title", content: "Reviews — Riverland Postal" },
      { property: "og:description", content: "5.0 stars · 84 Google reviews from happy neighbors." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Tanner Slutzky", text: "Went to see Josh because I had to mail a chainsaw. Thought it was going to be a production… but he made it so easy. Hooked me up with a box and packed it up right on the counter! Great service, friendly, and affordable!" },
  { name: "Mary Ellen Roman", text: "This was my first visit, and Troy was amazing — explaining in detail pricing, weight and shipping. He was very patient with me as I suffer from severe anxiety, and he also made me laugh. Kudos to Troy." },
  { name: "Elizabeth Clay", text: "I unknowingly met one of the owners in the parking lot and blocked him in with my truck by accident. He was very polite and patient. I went into FedEx to print and he walked in to help — above and beyond." },
  { name: "Carey Smith (DJ AC)", text: "I came in with shoe boxes to ship and Troy had no issue assisting me — he even went above & beyond packaging the shoes up for me. Definitely will keep coming back. 😁" },
  { name: "Yolna Augustin", text: "The service was magnificent. I love how welcoming and neat the environment is. Plus, there's no hustle, no waiting in line. Thank you so much Josh and Bailey!" },
  { name: "George Lorenzo", text: "Best place to ship packages in Fort Lauderdale. Helped me figure out which shipping option was the best and was very knowledgeable. Saved me the hassle of going all the way to USPS." },
  { name: "Donya Braddock", text: "Bailey was so helpful and made sure I sent my items in the most economical way!" },
  { name: "Latania Richardson", text: "We are a notary business and we ship client documents all the time. This was our first time using Riverland Postal. Josh made the process seamless and stress free. We will be back!" },
  { name: "Marlene Medina", text: "Friendly, fast service! Troy was a delight to speak with and was kind enough to print me an extra copy of my document just for good measure. Thank you again Troy!" },
  { name: "Ernesto Campana", text: "Excellent service, good staff, bilingual (English and Spanish). 👍" },
  { name: "David Ewan", text: "I am new to the area and Riverland Postal is conveniently located where no US Post Offices are. Troy was knowledgeable and very helpful. I would recommend helping local businesses — A+." },
  { name: "Barbie Wilson", text: "Amazing customer service. Nothing but smiles. Quick in/out service. Highly recommend." },
  { name: "Wadline Georges", text: "The workers are very funny, great to talk to, and very kind. It smells great there and they're very understanding." },
  { name: "Shannon Botha", text: "Troy was very friendly and extremely helpful with my packages to go to my family for Christmas. Highly recommend this postal service." },
  { name: "S Alexis", text: "Troy was so helpful and very nice! Genuinely appreciate him helping me and will be back! Everything was printed and faxed great!" },
  { name: "Jos", text: "First time at Riverland Postal — at any postal actually. Great customer service by Bailey. She's knowledgeable, and patient." },
];

function ReviewsPage() {
  const { t } = useLang();
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm">
            <span className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="font-semibold">5.0</span>
            <span className="text-muted-foreground">· {t.reviews.badge}</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            {t.reviews.h1}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.reviews.lede}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
            {reviews.map((r, i) => (
              <Reveal
                as="article"
                key={r.name}
                delay={(i % 6) * 80}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-tilt hover-shine"
              >
                <Quote className="h-6 w-6 text-primary/40 transition-all duration-300 group-hover:text-primary group-hover:scale-125 group-hover:-rotate-6" />
                <p className="mt-3 text-sm leading-relaxed text-foreground">“{r.text}”</p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="text-sm font-semibold">{r.name}</span>
                  <span className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-125" style={{ transitionDelay: `${i * 30}ms` }} />
                    ))}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-[image:var(--gradient-hero)] py-14 text-primary-foreground animate-gradient-x">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">{t.reviews.ctaTitle}</h2>
          <p className="mt-2 text-primary-foreground/80">{t.reviews.ctaLede}</p>
          <a
            href="https://www.google.com/search?q=Riverland+Postal+Fort+Lauderdale"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex overflow-hidden rounded-lg bg-background px-6 py-3 font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover-shine hover:-translate-y-1 hover:scale-105"
          >
            {t.reviews.ctaBtn}
          </a>
        </div>
      </section>
    </>
  );
}