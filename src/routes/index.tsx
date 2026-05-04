import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, Target, TrendingUp, Zap, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoDigitly — Performance Marketing Agency that Scales Brands" },
      { name: "description", content: "We don't just market — we scale businesses. Facebook Ads, Google Ads, lead generation and WhatsApp funnels engineered for measurable ROI." },
      { property: "og:title", content: "GoDigitly — Performance Marketing Agency" },
      { property: "og:description", content: "Performance marketing & lead generation that delivers predictable revenue." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Target, title: "Performance Ads", desc: "Meta & Google ad systems that hit predictable CAC and scale profitably." },
  { icon: Sparkles, title: "Creative Studio", desc: "Scroll-stopping ad creatives produced weekly to keep CTR & ROAS climbing." },
  { icon: TrendingUp, title: "Funnel Building", desc: "Landing pages, offers and automations that convert clicks into customers." },
  { icon: Zap, title: "WhatsApp Marketing", desc: "Conversational funnels turning ad traffic into qualified, ready-to-buy leads." },
];

const stats = [
  { value: "₹240Cr+", label: "Revenue generated" },
  { value: "320%", label: "Avg. ROAS uplift" },
  { value: "150+", label: "Brands scaled" },
  { value: "12M+", label: "Leads captured" },
];

const testimonials = [
  { quote: "GoDigitly cut our CAC by 38% in two months and tripled our qualified pipeline. They actually move the number.", name: "Aisha Rao", role: "CMO, Lumeo Beauty" },
  { quote: "Best agency we've worked with — strategic, fast, and obsessed with ROI. Our WhatsApp funnel converts at 11%.", name: "Rohan Mehta", role: "Founder, FitForge" },
  { quote: "From 2x to 6x ROAS in one quarter. The creative + media buying combo is genuinely elite.", name: "Priya Shah", role: "Growth Lead, Aurora Living" },
];

const logos = ["Dominate", "Visible", "Found", "Viral", "Automated", "Reputation", "Ranked", "Effortless", "Noticed","Trust","Scale","Own","Results"];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden grain">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="blob absolute top-20 -left-24 size-105 bg-violet/30" />
          <div className="blob absolute -top-10 right-0 size-90 bg-electric/30" />
          <div className="blob absolute bottom-0 left-1/3 size-75 bg-lime/40" />
        </div>

        <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl px-6 pt-16 pb-28 sm:pt-24 sm:pb-36 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide">
              <span className="size-1.5 rounded-full bg-violet animate-pulse" />
              Kill Your Competitors — 4 slots left
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 font-display font-bold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95]">
              Stop being invisible. —<br className="hidden sm:block" />
              <span className="relative inline-block align-baseline">
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left center" }}
                  className="absolute inset-x-[-0.15em] inset-y-[0.05em] -z-10 rounded-[0.2em] bg-highlight"
                />
                <span className="relative"> Start being unforgettable.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
We build the online presence your business deserves — strategy, websites, apps, reels and AI video.  Because your competitor is already online. It's time you owned the space.            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold shadow-lg shadow-foreground/10 hover:shadow-xl transition">
                Book a strategy call
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-semibold hover:bg-foreground hover:text-background transition">
                See the results
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-14 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current text-violet" />)}</div>
              <span>4.9/5 from 80+ founders</span>
            </div>
          </Reveal>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative border-y border-border/60 bg-foreground/2 overflow-hidden">
          <div className="flex marquee-track gap-16 py-6 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl font-semibold text-foreground/40 tracking-tight">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 hover:-translate-y-1 transition">
                <div className="font-display text-4xl sm:text-5xl font-bold tabular-nums">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-violet font-semibold">What we do</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-2xl text-balance">
                A full growth stack — built for ROI.
              </h2>
            </div>
            <Link to="/expertise" className="inline-flex items-center gap-2 text-sm font-semibold underline-grow w-fit">
              Explore expertise <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 hover:border-foreground hover:-translate-y-1 transition-all duration-300">
                <div className="size-12 rounded-2xl gradient-bg grid place-items-center text-white">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  Learn more <ArrowUpRight className="size-4 ml-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-violet font-semibold">Our process</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
            From audit to scale, in 30 days.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Audit & Strategy", d: "Deep audit of your funnel, ads and offers. We map a 90-day growth plan." },
            { n: "02", t: "Build & Launch", d: "Creatives, landing pages and tracking shipped. Campaigns live in 14 days." },
            { n: "03", t: "Scale & Compound", d: "Daily optimization, weekly creative, monthly compounding ROI." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="rounded-3xl bg-foreground text-background p-8 h-full">
                <div className="font-display text-5xl font-bold opacity-30">{s.n}</div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-background/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance max-w-3xl">
            Founders who scaled with us.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="rounded-3xl bg-card border border-border p-7 h-full flex flex-col">
                <Quote className="size-6 text-violet" />
                <blockquote className="mt-4 text-lg leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-bg p-10 sm:p-16 text-white text-center">
            <div className="blob absolute -top-10 -right-10 size-72 bg-white/30" />
            <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance max-w-3xl mx-auto">
              Ready to make your ad spend work harder?
            </h2>
            <p className="relative mt-5 text-white/80 max-w-xl mx-auto">
              Free 30-min strategy call. No fluff — actionable insights you can apply this week.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-4 font-semibold hover:scale-[1.02] transition">
                Book your free call <ArrowUpRight className="size-4" />
              </Link>
              <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold hover:bg-white/10 transition">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
