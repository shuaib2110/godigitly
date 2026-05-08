import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ExpertisePage from "./routes/expertise";
import CaseStudiesPage from "./routes/case-studies";
import WhatsappFunnelPage from "./routes/whatsapp-funnel";
import ContactPage from "./routes/contact";

import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";
import { WhatsAppFAB } from "./components/site/WhatsAppFAB";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/whatsapp-funnel" element={<WhatsappFunnelPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFAB />
      <Toaster />
    </div>
  );
}
