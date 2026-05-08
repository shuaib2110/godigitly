import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="font-display text-3xl font-bold tracking-tight">
            GoDigitly<span className="text-violet">.</span>
          </Link>
          <p className="mt-4 text-muted-foreground max-w-sm">
            A performance-marketing agency helping ambitious brands turn ad spend into predictable
            revenue.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <Link
                key={i}
                to="#"
                aria-label="Social"
                className="size-10 grid place-items-center rounded-full border border-border hover:bg-foreground hover:text-background transition"
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-violet">
                About
              </Link>
            </li>
            <li>
              <Link to="/expertise" className="hover:text-violet">
                Expertise
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-violet">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/whatsapp-funnel" className="hover:text-violet">
                WhatsApp Funnel
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-violet">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Get in touch
          </h4>
          <p className="text-sm">hello@godigitly.com</p>
          <p className="text-sm text-muted-foreground">Delhi · Remote</p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold"
          >
            Book a strategy call →
          </Link>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} GoDigitly. All rights reserved.</p>
          <p>Crafted for brands that scale.</p>
        </div>
      </div>
    </footer>
  );
}
