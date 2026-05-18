import { Link, Outlet } from "@tanstack/react-router";
import { Package, Phone, MapPin, Mail } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="group flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Package className="h-5 w-5" />
            </span>
            <span className="tracking-tight transition-colors group-hover:text-primary">Riverland Postal</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+19543331234"
            className="group hidden items-center gap-2 rounded-md bg-[image:var(--gradient-hero)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 sm:inline-flex"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> Call Store
          </a>
        </div>
        <nav className="flex items-center justify-center gap-1 border-t border-border/60 px-4 py-2 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
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
            <div className="flex items-center gap-2 font-bold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[image:var(--gradient-hero)] text-primary-foreground">
                <Package className="h-4 w-4" />
              </span>
              Riverland Postal
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Your friendly neighborhood pack &amp; ship store on Davie Blvd. Hablamos Español.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="mb-3 font-semibold">Visit Us</h4>
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              2728 Davie Blvd<br />Fort Lauderdale, FL 33312
            </p>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" /> (954) 333-1234
            </p>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>hello@riverlandpostal.com</span>
            </p>
          </div>
          <div className="text-sm">
            <h4 className="mb-3 font-semibold">Hours</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>Mon–Fri · 9:30 AM – 7:00 PM</li>
              <li>Saturday · 10:00 AM – 6:00 PM</li>
              <li>Sunday · Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Riverland Postal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}