import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, MessageCircle, Calendar, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GoDigitly — Book a Free Strategy Call" },
      {
        name: "description",
        content:
          "Book a free 30-minute strategy call with GoDigitly. Performance marketing, lead generation and WhatsApp funnels for ambitious brands.",
      },
      { property: "og:title", content: "Contact GoDigitly" },
      {
        property: "og:description",
        content: "Free 30-min strategy call. No fluff, just actionable growth ideas.",
      },
    ],
  }),
  component: ContactPage,
});

const slots = ["10:00", "11:30", "14:00", "15:30", "17:00"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function ContactPage() {
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Booking confirmed!", {
      description: `We'll see you ${days[day]} at ${slots[slot]}.`,
    });
  };

  return (
    <>
      <section className="relative overflow-hidden grain">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="blob absolute top-10 -left-20 size-[400px] bg-violet/25" />
          <div className="blob absolute top-20 right-0 size-[340px] bg-electric/25" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 sm:pt-24">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-violet font-semibold">
              Let's talk
            </p>
            <h1 className="mt-4 font-display font-bold tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-4xl">
              Book a free <span className="gradient-text">strategy call.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl text-pretty">
              30 minutes. Real strategy. We'll audit your funnel and ship 3 ideas you can use this
              week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Form + booking */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] bg-card border border-border p-8 sm:p-10"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto size-14 rounded-full gradient-bg grid place-items-center text-white">
                    <Check className="size-7" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold">You're booked!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We'll see you{" "}
                    <span className="font-semibold text-foreground">
                      {days[day]} at {slots[slot]}
                    </span>
                    . A confirmation is on its way.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" placeholder="Your name" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@brand.com"
                      required
                    />
                    <Field label="Brand / Company" name="brand" placeholder="Your brand" />
                    <Field label="Monthly ad spend" name="spend" placeholder="₹1L–5L" />
                  </div>
                  <div className="mt-4">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      What do you want to scale?
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us a bit about your brand and goals..."
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition"
                    />
                  </div>

                  {/* Calendar */}
                  <div className="mt-8 rounded-2xl border border-border p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Calendar className="size-4 text-violet" /> Pick a slot
                    </div>
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {days.map((d, i) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setDay(i)}
                          className={`py-3 rounded-xl text-sm font-semibold transition ${i === day ? "bg-foreground text-background" : "bg-background border border-border hover:border-foreground/30"}`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 grid grid-cols-5 gap-2">
                      {slots.map((s, i) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setSlot(i)}
                          className={`py-2.5 rounded-xl text-sm font-medium transition ${i === slot ? "gradient-bg text-white" : "bg-background border border-border hover:border-foreground/30"}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold hover:opacity-90 transition"
                  >
                    Confirm my call <ArrowUpRight className="size-4" />
                  </button>
                  <p className="mt-3 text-xs text-muted-foreground text-center">
                    By booking, you agree to our terms. We never spam.
                  </p>
                </>
              )}
            </form>
          </Reveal>

          {/* Side info */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <a
                href="https://wa.me/917065993749"
                className="block rounded-[2rem] bg-[#25D366] text-white p-8 hover:scale-[1.01] transition"
              >
                <MessageCircle className="size-7" />
                <h3 className="mt-4 font-display text-2xl font-bold">Prefer WhatsApp?</h3>
                <p className="mt-1 text-white/85">
                  Message us — we usually reply in under 10 minutes.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  Open chat <ArrowUpRight className="size-4" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[2rem] bg-card border border-border p-8 space-y-5">
                <Info icon={Mail} label="Email" value="hello@godigitly.com" />
                <Info icon={Phone} label="Phone" value="+91 70659 93749" />
                <Info icon={MapPin} label="HQ" value="Bengaluru, India" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2rem] overflow-hidden border border-border h-56 relative">
                <iframe
                  title="GoDigitly HQ"
                  loading="lazy"
                  className="w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.92%2C77.65%2C13.00&layer=mapnik&marker=12.97%2C77.59"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-foreground transition"
      />
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-11 rounded-2xl bg-foreground/5 grid place-items-center">
        <Icon className="size-5 text-violet" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          {label}
        </div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
