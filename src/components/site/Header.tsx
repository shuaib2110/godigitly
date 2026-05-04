import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/whatsapp-funnel", label: "WhatsApp Funnel" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-sm" : "bg-transparent"}`}
        >
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-xl tracking-tight"
          >
            <span className="inline-block size-2.5 rounded-full gradient-bg" />
            GoDigitly<span className="text-violet">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="underline-grow hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition"
            >
              Book a call →
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-3xl glass p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-3 py-2.5 rounded-xl hover:bg-foreground/5 text-base font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-center px-5 py-3 rounded-full bg-foreground text-background font-semibold"
              >
                Book a call →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
