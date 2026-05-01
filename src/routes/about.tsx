import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Heart, Rocket, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GoDigitly — Performance Marketing for Ambitious Brands" },
      { name: "description", content: "GoDigitly is a team of strategists, media buyers and creators obsessed with scaling brands through performance marketing." },
      { property: "og:title", content: "About GoDigitly" },
      { property: "og:description", content: "Our story, mission and the team behind your growth." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2020", title: "Started in a garage", desc: "Two founders, one laptop, and a shared obsession with ROI." },
  { year: "2021", title: "First ₹1Cr campaign", desc: "Scaled a D2C beauty brand from ₹2L to ₹1Cr/month in 6 months." },
  { year: "2023", title: "30-person studio", desc: "Built a team of media buyers, creators and funnel architects." },
  { year: "2025", title: "150+ brands scaled", desc: "₹240Cr+ in revenue generated for clients across 4 continents." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden grain">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="blob absolute top-10 -left-20 size-[380px] bg-violet/25" />
          <div className="blob absolute top-20 right-0 size-[320px] bg-electric/25" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-violet font-semibold">About us</p>
            <h1 className="mt-4 font-display font-bold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-4xl">
              Built by operators, <span className="gradient-text">obsessed with growth.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl text-pretty">
              GoDigitly was born from a simple frustration — most agencies optimize for retainers, not results. We built the studio we wished existed: senior, lean and ROI-obsessed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Rocket, t: "Mission", d: "Make world-class performance marketing accessible to founders who care about every rupee of ad spend." },
            { icon: Eye, t: "Vision", d: "Be the growth engine behind 1,000 category-defining brands by 2030." },
            { icon: Heart, t: "Values", d: "Radical transparency, senior craft, and metrics that move boardroom needles." },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="rounded-3xl border border-border bg-card p-8 h-full">
                <b.icon className="size-7 text-violet" />
                <h3 className="mt-5 font-display text-2xl font-semibold">{b.t}</h3>
                <p className="mt-2 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] rounded-[2rem] gradient-bg relative overflow-hidden">
              <div className="absolute inset-0 grain" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="font-display text-xl font-semibold">Arjun Kapoor</div>
                <div className="text-sm text-muted-foreground">Founder & CEO</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-violet font-semibold">Founder note</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              "We're allergic to vanity metrics."
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              I started GoDigitly after a decade of running growth at venture-backed brands. The pattern was clear — agencies promised the moon and delivered dashboards. We built GoDigitly to do the opposite: ship fewer, sharper campaigns and obsess over the only metrics that matter — pipeline, payback and profit.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Today our team of 30 ships across India, the UAE and the US. Same standard, same obsession.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-2xl text-balance">
            From garage to global growth studio.
          </h2>
        </Reveal>
        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className={`relative grid sm:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                  <div className="pl-12 sm:pl-0 sm:pr-12 sm:text-right">
                    <div className="font-display text-5xl font-bold gradient-text">{t.year}</div>
                  </div>
                  <div className="pl-12 sm:pl-12 relative">
                    <div className="absolute left-4 sm:-left-2 top-2 size-4 rounded-full gradient-bg ring-4 ring-background -translate-x-1/2" />
                    <h3 className="font-display text-2xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="rounded-[2rem] bg-foreground text-background p-10 sm:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-xl">
              Want this team building your growth engine?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 font-semibold w-fit">
              Book a call <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
