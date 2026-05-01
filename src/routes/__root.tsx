import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GoDigitly — Performance Marketing & Lead Generation Agency" },
      { name: "description", content: "GoDigitly is a performance-driven digital advertising agency. Facebook Ads, Google Ads, lead generation, funnels and WhatsApp marketing that scale revenue." },
      { name: "author", content: "GoDigitly" },
      { name: "keywords", content: "Digital Marketing Agency, Lead Generation Agency, Ads Agency India, Performance Marketing, Facebook Ads, Google Ads, WhatsApp Marketing" },
      { property: "og:title", content: "GoDigitly — We Don't Just Market, We Scale Businesses" },
      { property: "og:description", content: "Performance marketing, lead generation and WhatsApp funnels engineered for ROI." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GoDigitly" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@GoDigitly" },
      { name: "theme-color", content: "#FBFAF4" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
      { rel: "canonical", href: "https://godigitly.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "GoDigitly",
          url: "https://godigitly.com",
          description: "Performance marketing and lead generation agency.",
          sameAs: ["https://instagram.com/godigitly", "https://linkedin.com/company/godigitly"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <Toaster />
    </div>
  );
}
