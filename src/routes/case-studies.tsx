import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Growth, Real ROI | GoDigitly" },
      {
        name: "description",
        content:
          "See how GoDigitly scaled D2C, SaaS and service brands with performance marketing — real ROAS, real revenue, real campaigns.",
      },
      { property: "og:title", content: "GoDigitly Case Studies" },
      { property: "og:description", content: "Before & after results from real client campaigns." },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    brand: "Lumeo Beauty",
    industry: "D2C · Skincare",
    headline: "From ₹4L to ₹1.2Cr/month in 5 months",
    before: { roas: 1.4, cac: 1280, rev: 4 },
    after: { roas: 5.8, cac: 540, rev: 120 },
    chart: [12, 18, 22, 30, 45, 60, 80, 95, 105, 118, 122],
    summary:
      "Rebuilt the creative system around UGC + founder content, restructured Meta into ASC+ scaling and added click-to-WhatsApp for high-intent retargeting.",
  },
  {
    brand: "FitForge",
    industry: "Fitness · App",
    headline: "3.2× signups at 41% lower CAC",
    before: { roas: 2.1, cac: 480, rev: 22 },
    after: { roas: 4.6, cac: 285, rev: 78 },
    chart: [22, 28, 34, 40, 46, 55, 62, 68, 71, 75, 78],
    summary:
      "Launched a 7-day creative testing cadence, built a free trial → WhatsApp nurture funnel and added Performance Max for capture demand.",
  },
  {
    brand: "Aurora Living",
    industry: "Furniture · D2C",
    headline: "₹0 to ₹3.4Cr in first 8 months",
    before: { roas: 0, cac: 0, rev: 0 },
    after: { roas: 4.2, cac: 920, rev: 340 },
    chart: [4, 12, 28, 55, 95, 150, 220, 270, 300, 320, 340],
    summary:
      "Built launch funnel from scratch — landing page, offer, ads system, email/WhatsApp flows. Hit ₹1Cr/month by month 6.",
  },
];

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
        {inView ? <CountUp end={to} decimals={decimals} /> : (0).toFixed(decimals)}
      </motion.span>
      {suffix}
    </span>
  );
}

function CountUp({
  end,
  decimals = 0,
  duration = 1.4,
}: {
  end: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  if (!startedRef.current && typeof window !== "undefined") {
    startedRef.current = true;
    requestAnimationFrame(function step(t0?: number) {
      const start = performance.now();
      function frame(now: number) {
        const p = Math.min(1, (now - start) / (duration * 1000));
        const eased = 1 - Math.pow(1 - p, 3);
        if (ref.current) ref.current.textContent = (end * eased).toFixed(decimals);
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }
  return <span ref={ref}>{(0).toFixed(decimals)}</span>;
}

function GrowthChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const w = 320,
    h = 120,
    pad = 8;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - (v / max) * (h - pad * 2);
    return [x, y] as const;
  });
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const area = `${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="w-full h-32">
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.22 285)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 285)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#lg)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="oklch(0.55 0.22 285)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden grain">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="blob absolute top-10 -left-20 size-[400px] bg-violet/25" />
          <div className="blob absolute top-20 right-0 size-[340px] bg-electric/25" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-violet font-semibold">
              Case studies
            </p>
            <h1 className="mt-4 font-display font-bold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-5xl">
              Receipts, <span className="gradient-text">not promises.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl text-pretty">
              Real campaigns, real numbers. Here's what compounding ROI looks like.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        {cases.map((c, i) => (
          <Reveal key={c.brand}>
            <article className="rounded-[2rem] border border-border bg-card overflow-hidden">
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-5 p-8 sm:p-10 border-b md:border-b-0 md:border-r border-border">
                  <div className="text-xs uppercase tracking-widest text-violet font-semibold">
                    {c.industry}
                  </div>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                    {c.brand}
                  </h2>
                  <p className="mt-4 text-2xl font-display font-semibold text-balance">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-muted-foreground">{c.summary}</p>
                </div>

                <div className="md:col-span-7 p-8 sm:p-10 bg-foreground/[0.02]">
                  <div className="grid grid-cols-3 gap-4">
                    {(["roas", "cac", "rev"] as const).map((k) => {
                      const labels = { roas: "ROAS", cac: "CAC (₹)", rev: "Revenue (₹L)" };
                      const before = c.before[k];
                      const after = c.after[k];
                      return (
                        <div key={k}>
                          <div className="text-xs uppercase tracking-widest text-muted-foreground">
                            {labels[k]}
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-1">
                            <div>
                              <div className="text-xs text-muted-foreground">Before</div>
                              <div className="font-display text-xl font-semibold opacity-50">
                                {before}
                                {k === "roas" ? "×" : ""}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-violet font-semibold">After</div>
                              <div className="font-display text-2xl font-bold">
                                <Counter
                                  to={after}
                                  decimals={k === "roas" ? 1 : 0}
                                  suffix={k === "roas" ? "×" : ""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-2xl bg-background border border-border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        Monthly revenue (₹L)
                      </div>
                      <div className="flex items-center gap-1 text-xs text-violet font-semibold">
                        <TrendingUp className="size-3" /> +
                        {Math.round((c.after.rev / Math.max(1, c.before.rev) - 1) * 100) || 100}%
                      </div>
                    </div>
                    <GrowthChart data={c.chart} />
                  </div>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-grow"
                  >
                    Want results like this? <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="rounded-[2rem] bg-foreground text-background p-10 sm:p-16 text-center">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance max-w-3xl mx-auto">
              Your case study is the next one.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 font-semibold"
            >
              Book a strategy call <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
