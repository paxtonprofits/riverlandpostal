import { useState, useRef } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Languages, ChevronDown, Truck, Globe2, Printer, FileSignature, MailOpen, Shirt } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const serviceDropdown = [
  { href: "/services#shipping",     icon: Truck,          label: "Domestic Shipping",       desc: "UPS, USPS, FedEx, DHL" },
  { href: "/services#international",icon: Globe2,         label: "International Cargo",      desc: "Air & maritime worldwide" },
  { href: "/services#printing",     icon: Printer,        label: "A-Plus Printing",          desc: "Cards, flyers, brochures & more" },
  { href: "/services#apparel",      icon: Shirt,          label: "Apparel & DTF",            desc: "Screen print, DTF textile" },
  { href: "/services#notary",       icon: FileSignature,  label: "Notary & Fax",             desc: "Documents & fax services" },
  { href: "/services#mailbox",      icon: MailOpen,       label: "Private Mailboxes",        desc: "Your own street address" },
];

export function SiteLayout() {
  const { t, toggle, lang } = useLang();
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/reviews", label: t.nav.reviews },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="group flex items-center gap-2">
            <img src="/logo.png" alt="Pack & Print Multiservice LLC" className="h-12 w-auto transition-transform duration-200 group-hover:scale-105" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {t.nav.home}
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground cursor-pointer"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {t.nav.services}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </Link>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-80 rounded-xl border border-border bg-background shadow-xl p-2 z-50"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                  style={{ marginTop: 0 }}
                >
                  <div className="grid grid-cols-1 gap-0.5">
                    {serviceDropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-secondary cursor-pointer"
                      >
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-150 group-hover:bg-primary group-hover:text-primary-foreground">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={t.cta.switchLabel}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary cursor-pointer"
            >
              <Languages className="h-4 w-4 shrink-0" />
              <span>{lang === "en" ? "🇪🇸 Español" : "🇺🇸 English"}</span>
            </button>
            <a
              href="tel:+17862106832"
              className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90 cursor-pointer sm:inline-flex"
            >
              <Phone className="h-4 w-4" /> {t.cta.call}
            </a>
          </div>
        </div>

        {/* Mobile nav */}
        <nav className="flex items-center justify-center gap-1 border-t border-border/60 px-4 py-2 md:hidden">
          <Link to="/" className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            {t.nav.home}
          </Link>
          <Link to="/services" className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            {t.nav.services}
          </Link>
          {navLinks.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt="Pack & Print Multiservice LLC" className="h-10 w-auto" />
            <p className="mt-3 text-sm italic text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="text-sm">
            <h4 className="mb-3 font-semibold">{t.footer.visit}</h4>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              2728 Davie Blvd<br />Fort Lauderdale, FL 33312
            </p>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> (786) 210-6832
            </p>
            <p className="mt-1 flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> (786) 909-0250
            </p>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              packprintmultiservice@gmail.com
            </p>
          </div>
          <div className="text-sm">
            <h4 className="mb-3 font-semibold">{t.footer.hours}</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>{t.footer.mon}</li>
              <li>{t.footer.sat}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pack & Print Multiservice LLC. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}
