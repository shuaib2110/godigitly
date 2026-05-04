import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  ScanLine,
  Megaphone,
  MousePointerClick,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/whatsapp-funnel")({
  head: () => ({
    meta: [
      { title: "WhatsApp Funnel — Convert Ad Traffic into Closed Deals | GoDigitly" },
      {
        name: "description",
        content:
          "Click-to-WhatsApp ads + automated qualification + human handoff. The fastest path from ad spend to closed deal in India.",
      },
      { property: "og:title", content: "WhatsApp Funnels by GoDigitly" },
      {
        property: "og:description",
        content: "An interactive look at how we turn clicks into conversations into customers.",
      },
    ],
  }),
  component: WhatsappFunnelPage,
});

const chatScript = [
  { from: "bot", text: "👋 Hey! Welcome to GoDigitly. What brings you here today?" },
  { from: "user", text: "I run a D2C brand and want to scale my ads." },
  { from: "bot", text: "Awesome — what's your current monthly ad spend?" },
  { from: "user", text: "Around ₹3L/month, ROAS sitting at 1.8×." },
  {
    from: "bot",
    text: "Got it. We've taken 12 brands at your stage past 4× ROAS in 90 days. Want a free audit slot tomorrow?",
  },
  { from: "user", text: "Yes please 🙌" },
  { from: "bot", text: "Perfect — booking you with Arjun. Confirmation sent ✅" },
];

function WhatsappFunnelPage() {
  const [scanned, setScanned] = useState(false);
  const [visibleMsgs, setVisibleMsgs] = useState(0);

  useEffect(() => {
    if (!scanned) return;
    setVisibleMsgs(0);
    const id = setInterval(() => {
      setVisibleMsgs((v) => {
        if (v >= chatScript.length) {
          clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, 900);
    return () => clearInterval(id);
  }, [scanned]);

  return (
    <>
      <section className="relative overflow-hidden grain">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="blob absolute top-10 -left-20 size-[400px] bg-[#25D366]/25" />
          <div className="blob absolute top-20 right-0 size-[340px] bg-violet/25" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide">
              <span className="size-1.5 rounded-full bg-[#25D366] animate-pulse" />
              India's highest-converting funnel
            </span>
            <h1 className="mt-6 font-display font-bold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-5xl">
              Turn clicks into <span className="gradient-text">conversations</span> into customers.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl text-pretty">
              Scan the QR below to see a live demo of our WhatsApp funnel in action.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scanner + Chat demo */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* QR scanner */}
          <Reveal>
            <div className="relative rounded-[2rem] bg-foreground text-background p-8 sm:p-12 overflow-hidden">
              <div className="text-xs uppercase tracking-widest text-background/60">Step 01</div>
              <h3 className="mt-2 font-display text-3xl font-bold">Scan to start</h3>
              <p className="mt-2 text-background/70">Click the QR — watch the demo unfold.</p>

              <button
                onClick={() => setScanned(true)}
                className="relative mx-auto mt-8 block size-64 sm:size-72 rounded-3xl bg-white p-4 group"
                aria-label="Simulate WhatsApp scan"
              >
                <QRCode />
                {!scanned && (
                  <motion.div
                    aria-hidden
                    className="absolute left-4 right-4 h-1 bg-[#25D366] rounded-full shadow-[0_0_18px_#25D366]"
                    initial={{ top: 16 }}
                    animate={{ top: ["16px", "calc(100% - 20px)", "16px"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {scanned && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 grid place-items-center bg-white/95 rounded-3xl"
                  >
                    <div className="text-center">
                      <div className="mx-auto size-14 rounded-full bg-[#25D366] grid place-items-center text-white">
                        <Check className="size-7" />
                      </div>
                      <div className="mt-3 font-display text-foreground font-semibold">
                        Connected!
                      </div>
                    </div>
                  </motion.div>
                )}
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-background/70">
                <ScanLine className="size-4" />
                {scanned ? "Scan complete — see chat →" : "Tap QR to simulate scan"}
              </div>
            </div>
          </Reveal>

          {/* Phone mock */}
          <Reveal delay={0.1}>
            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-[2.5rem] border-[10px] border-foreground bg-foreground p-2 shadow-2xl">
                <div className="rounded-[1.7rem] bg-[#ECE5DD] overflow-hidden h-[560px] flex flex-col">
                  <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                    <div className="size-9 rounded-full bg-white/20 grid place-items-center font-display font-bold">
                      G
                    </div>
                    <div>
                      <div className="font-semibold leading-tight">GoDigitly</div>
                      <div className="text-xs opacity-80">
                        {scanned ? "online" : "tap QR to start"}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    <AnimatePresence>
                      {chatScript.slice(0, visibleMsgs).map((m, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${m.from === "user" ? "ml-auto bg-[#DCF8C6] text-foreground" : "bg-white text-foreground"}`}
                        >
                          {m.text}
                        </motion.div>
                      ))}
                      {scanned && visibleMsgs < chatScript.length && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-white rounded-2xl px-3 py-2 w-16"
                        >
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.span
                                key={i}
                                className="size-1.5 rounded-full bg-foreground/40"
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!scanned && (
                      <div className="h-full grid place-items-center text-foreground/50 text-sm py-20 text-center">
                        Scan the QR to see the
                        <br />
                        chat automation in action ↗
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Funnel steps */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-violet font-semibold">The funnel</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
            Ad → Landing → WhatsApp → Conversion.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            { icon: Megaphone, t: "Ad", d: "Click-to-WhatsApp creative built for thumb-stops." },
            {
              icon: MousePointerClick,
              t: "Landing",
              d: "Optional landing or direct WhatsApp open.",
            },
            {
              icon: MessageCircle,
              t: "WhatsApp",
              d: "Auto-qualify, answer FAQs, route to humans.",
            },
            { icon: Trophy, t: "Conversion", d: "Booked call, paid order, signed deal." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="rounded-3xl border border-border bg-card p-6 h-full relative">
                <div className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded-full bg-foreground text-background font-semibold">
                  0{i + 1}
                </div>
                <s.icon className="size-7 text-violet mt-3" />
                <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <div className="rounded-[2rem] bg-[#075E54] text-white p-10 sm:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 blob size-72 bg-[#25D366]/40" />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-xl">
                Start your WhatsApp funnel.
              </h2>
              <p className="mt-3 text-white/80 max-w-md">
                Live in 14 days. Built for closing, not just chatting.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <a
                href="https://wa.me/919999999999"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-4 font-semibold"
              >
                <MessageCircle className="size-4" /> Message us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-4 font-semibold"
              >
                Book a call <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function QRCode() {
  // Simple decorative QR-like grid (not a real QR — for visual demo only)
  const cells = 21;
  const seed = (x: number, y: number) => ((x * 73856093) ^ (y * 19349663)) % 7 < 3;
  return (
    <svg viewBox={`0 0 ${cells} ${cells}`} className="w-full h-full">
      {Array.from({ length: cells }, (_, y) =>
        Array.from({ length: cells }, (_, x) => {
          const inFinder = (x < 7 && y < 7) || (x > cells - 8 && y < 7) || (x < 7 && y > cells - 8);
          const onFinder =
            (inFinder &&
              !(
                (x > 0 && x < 6 && y > 0 && y < 6) ||
                (x > cells - 7 && x < cells - 1 && y > 0 && y < 6) ||
                (x > 0 && x < 6 && y > cells - 7 && y < cells - 1)
              )) ||
            (inFinder &&
              ((x > 1 && x < 5 && y > 1 && y < 5) ||
                (x > cells - 6 && x < cells - 2 && y > 1 && y < 5) ||
                (x > 1 && x < 5 && y > cells - 6 && y < cells - 2)));
          const fill = inFinder ? onFinder : seed(x, y);
          return fill ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#0F172A" />
          ) : null;
        }),
      )}
      {/* WhatsApp icon center */}
      <circle cx={cells / 2} cy={cells / 2} r="3" fill="white" />
      <circle cx={cells / 2} cy={cells / 2} r="2.4" fill="#25D366" />
    </svg>
  );
}
