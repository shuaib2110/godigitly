import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Megaphone,
  MessageSquare,
  Quote,
  Star,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import qr from "../assets/qrcode.png";

const services = [
  {
    icon: Megaphone,
    title: "Paid Ads & Lead Funnels",
    desc: "Meta and Instagram ad systems designed to generate quality leads, bookings and measurable business growth.",
  },
  {
    icon: Sparkles,
    title: "AI Content Creation",
    desc: "Scroll-stopping AI reels, cinematic edits and branded content crafted to increase reach and engagement.",
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    desc: "Modern high-converting websites and landing pages optimized for speed, SEO and customer conversion.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    desc: "Automated WhatsApp funnels that turn inquiries into qualified, ready-to-buy customers.",
  },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "120K+", label: "Leads generated" },
  { value: "30+", label: "Businesses supported" },
  { value: "4x+", label: "Average engagement growth" },
];

const testimonials = [
  {
    quote:
      "GoDigitly completely transformed our gym's online presence. We started getting daily inquiries through Instagram and WhatsApp.",
    name: "Arjun Malik",
    role: "Owner, Alpha Fitness",
  },
  {
    quote:
      "The AI reels and landing page brought us more customers in one month than traditional promotions ever did.",
    name: "Sana Verma",
    role: "Founder, Brew Avenue Café",
  },
  {
    quote:
      "Fast delivery, modern creative work and strong communication. GoDigitly helped us look like a premium brand online.",
    name: "Rahul Khanna",
    role: "Director, Urban Salon Studio",
  },
];

const logos = [
  "Dominate",
  "Visible",
  "Found",
  "Viral",
  "Automated",
  "Reputation",
  "Ranked",
  "Effortless",
  "Noticed",
  "Trust",
  "Scale",
  "Own",
  "Results",
];

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

        <motion.div
          style={{ y, opacity }}
          className="mx-auto max-w-7xl px-6 pt-16 pb-28 sm:pt-24 sm:pb-36 text-center"
        >
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
              We build the online presence your business deserves — strategy, websites, apps, reels
              and AI video. Because your competitor is already online. It's time you owned the
              space.{" "}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold shadow-lg shadow-foreground/10 hover:shadow-xl transition"
              >
                Book a strategy call
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-semibold hover:bg-foreground hover:text-background transition"
              >
                See the results
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-14 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current text-violet" />
                ))}
              </div>
              <span>4.9/5 from 80+ founders</span>
            </div>
          </Reveal>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative border-y border-border/60 bg-foreground/2 overflow-hidden">
          <div className="flex marquee-track gap-16 py-6 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl font-semibold text-foreground/40 tracking-tight"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS HERE*/}
      {/* <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 hover:-translate-y-1 transition">
                <div className="font-display text-4xl sm:text-5xl font-bold tabular-nums">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-violet font-semibold">
                What we do
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-2xl text-balance">
                A full growth stack — built for ROI.
              </h2>
            </div>
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-sm font-semibold underline-grow w-fit"
            >
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
            Turning businesses into customer magnets.
          </h2>

          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            From content creation to WhatsApp funnels, we build complete growth systems that help
            businesses attract, convert and retain more customers.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Research & Strategy",
              d: "We analyze your business, competitors and audience to create a growth strategy focused on leads and visibility.",
            },
            {
              n: "02",
              t: "Content & Funnel Setup",
              d: "We create AI-powered reels, websites and WhatsApp funnels designed to turn attention into real customer inquiries.",
            },
            {
              n: "03",
              t: "Launch & Growth",
              d: "We optimize content, improve conversion systems and scale your online presence for consistent business growth.",
            },
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
          <p className="text-sm uppercase tracking-widest text-violet font-semibold">
            Why GoDigitly
          </p>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl">
            Helping local businesses look modern, go viral and get more customers.
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            From gyms and cafés to home businesses, GoDigitly creates reels, websites, WhatsApp
            systems and growth ideas that help local brands stand out online and attract real
            customers.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Gym Growth System",
              desc: "Planned a modern gym experience with a custom app for workout tracking, diet timing, membership updates and WhatsApp support to keep members active and connected.",
            },
            {
              title: "Pizza Stall Viral Campaign",
              desc: "Created reel concepts and offer campaigns like unlimited pizza with garlic bread deals designed to grab attention and increase local walk-ins fast.",
            },
            {
              title: "Jewellery Business Setup",
              desc: "Built a WhatsApp selling system, social content ideas and online product setup for a home-based artificial jewellery business to help generate daily customer inquiries.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="rounded-3xl bg-card border border-border p-7 h-full">
                <div className="size-12 rounded-2xl bg-violet/10 flex items-center justify-center">
                  <ArrowUpRight className="size-5 text-violet" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              GoDigitly
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-[4rem] font-black tracking-tight leading-tight">
              Scan. Connect. <span className="text-gradient">Grow</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Viral reels, websites and WhatsApp systems designed to help local businesses get more
              customers.
            </p>

            {/* QR Card */}
            {/* QR + Buttons Row */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
              {/* QR Card */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 18,
                  delay: 0.2,
                }}
                className="relative inline-block"
              >
                {/* Glow */}
                <div className="absolute -inset-4 bg-primary/15 blur-2xl rounded-full" />

                {/* Card */}
                <div className="relative glass rounded-[1.7rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl">
                  {/* Animated Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-[1.7rem] border border-primary/20"
                  />

                  {/* QR Container */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl flex items-center justify-center">
                    <img
                      src={qr}
                      alt="WhatsApp QR"
                      className="w-40 h-40 sm:w-44 sm:h-44 object-cover rounded-xl"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold">Scan to Chat on WhatsApp</h3>

                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-[260px] mx-auto leading-relaxed">
                      Connect instantly and let's discuss how GoDigitly can help grow your business
                      online.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Side Buttons */}
              <div className="flex flex-col gap-3 ml-0 mt-7 md:gap-6 md:ml-16 ">
                <motion.a
                  href="https://wa.me/917065993749"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 bg-[hsl(142_70%_45%)] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all min-w-[180px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-card/50 backdrop-blur-xl px-6 py-3 rounded-full font-semibold text-sm hover:bg-card transition-all min-w-[180px]"
                >
                  Start Growth
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
