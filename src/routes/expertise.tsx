import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Facebook,
  Search,
  Magnet,
  GitBranch,
  MessageSquare,
  Plus,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Our Expertise — Facebook Ads, Google Ads, WhatsApp Funnels | GoDigitly" },
      {
        name: "description",
        content:
          "Performance marketing services: Facebook Ads, Google Ads, lead generation, funnel building and WhatsApp marketing — all built for ROI.",
      },
      { property: "og:title", content: "GoDigitly Expertise" },
      {
        property: "og:description",
        content: "The growth services we ship — engineered for measurable ROI.",
      },
    ],
  }),
  component: ExpertisePage,
});

const services = [
  {
    icon: Facebook,
    title: "Facebook & Instagram Ads",
    short: "Meta media buying that compounds.",
    long: "Creative testing frameworks, ASC+ scaling, hook iteration and CBO/ABO blending. We build Meta ad accounts that ship 40+ creatives a month and hit predictable CAC at scale.",
    bullets: ["Creative testing systems", "Audience & offer iteration", "Pixel & CAPI tracking"],
  },
  {
    icon: Search,
    title: "Google Ads & Performance Max",
    short: "Search, Shopping, PMax & YouTube.",
    long: "Bottom-funnel intent dialed in. We build Search + PMax structures that protect brand, capture demand, and feed cold traffic into retargeting funnels.",
    bullets: ["Search + PMax architecture", "Shopping feed optimization", "YouTube demand gen"],
  },
  {
    icon: Magnet,
    title: "Lead Generation",
    short: "Pipeline that closes — not just clicks.",
    long: "B2B and high-ticket B2C lead funnels. We optimize for SQLs and revenue, not vanity form-fills, with CRM-aligned scoring and nurture automations.",
    bullets: ["Qualified lead funnels", "CRM + scoring", "Nurture automations"],
  },
  {
    icon: GitBranch,
    title: "Funnel Building",
    short: "Landing pages that convert at 8–14%.",
    long: "Conversion-engineered landing pages, offers and checkout flows. Built fast, tested faster — every funnel ships with proper analytics and CRO loops.",
    bullets: ["High-converting landers", "Offer engineering", "CRO experimentation"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Marketing",
    short: "Conversational funnels that close.",
    long: "Click-to-WhatsApp ads, automated qualification flows, broadcast campaigns and human handoff. The fastest path from ad spend to closed deal in India.",
    bullets: ["Click-to-WhatsApp ads", "Automated qualification", "Broadcast & retargeting"],
  },
];

function ExpertisePage() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBlob = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <>
      <section className="relative overflow-hidden grain">
        <div aria-hidden className="absolute inset-0 -z-10">
          <motion.div
            style={{ y: yBlob }}
            className="blob absolute top-10 -left-20 size-[400px] bg-violet/30"
          />
          <div className="blob absolute top-40 right-0 size-[340px] bg-electric/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-violet font-semibold">
              Our expertise
            </p>
            <h1 className="mt-4 font-display font-bold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-5xl">
              Five disciplines. <span className="gradient-text">One growth engine.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl text-pretty">
              Performance marketing isn't one channel — it's a system. Here's what we ship to make
              yours compound.
            </p>
          </Reveal>
        </div>
      </section>

      <section ref={ref} className="mx-auto max-w-7xl px-6 py-12 space-y-6">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={s.title}>
              <div
                className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? "bg-foreground text-background border-foreground" : "bg-card border-border hover:border-foreground/30"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-8 sm:p-10 flex items-center gap-6"
                >
                  <div
                    className={`shrink-0 size-14 sm:size-16 rounded-2xl grid place-items-center ${isOpen ? "bg-white/15 text-white" : "gradient-bg text-white"}`}
                  >
                    <s.icon className="size-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs font-semibold tracking-widest uppercase ${isOpen ? "text-background/60" : "text-violet"}`}
                    >
                      0{i + 1}
                    </div>
                    <h3 className="mt-1 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                      {s.title}
                    </h3>
                    <p
                      className={`mt-1 text-base sm:text-lg ${isOpen ? "text-background/70" : "text-muted-foreground"}`}
                    >
                      {s.short}
                    </p>
                  </div>
                  <div
                    className={`shrink-0 size-12 rounded-full grid place-items-center transition-transform ${isOpen ? "bg-white/15 rotate-45" : "border border-border"}`}
                  >
                    <Plus className="size-5" />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 sm:px-10 pb-10 grid md:grid-cols-12 gap-8">
                    <p className="md:col-span-7 text-lg text-background/80">{s.long}</p>
                    <ul className="md:col-span-5 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-background/90">
                          <span className="size-1.5 rounded-full bg-violet" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="rounded-[2rem] gradient-bg p-10 sm:p-16 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-xl">
              Let's build your growth engine.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-4 font-semibold w-fit"
            >
              Book a strategy call <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
