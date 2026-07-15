import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type NavLink = { label: string } & (
  | { to: "/"; hash?: string }
  | { to: "/menu" }
);

const links: NavLink[] = [
  { to: "/", hash: "restaurant", label: "Restaurant" },
  { to: "/menu", label: "Meniu" },
  { to: "/", hash: "events", label: "Salon" },
  { to: "/", hash: "rooms", label: "Camere" },
  { to: "/", hash: "contact", label: "Contact" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight">Ocaua</span>
          <span className="eyebrow text-muted-foreground group-hover:text-foreground transition-colors">
            lui Cuza
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              className="text-sm tracking-wide relative py-2 text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          hash="contact"
          className="hidden md:inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Rezervă
        </Link>


        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meniu"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background border-b border-border ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              onClick={() => setOpen(false)}
              className="text-lg font-display border-b border-border pb-3"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center border border-foreground px-5 py-3 text-xs tracking-[0.25em] uppercase"
          >
            Rezervă
          </Link>

        </nav>
      </div>
    </header>
  );
}
