import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function WhatsAppFAB() {
  return (
    <Link
      to="https://wa.me/917065993749?text=Hi%20GoDigitly%2C%20I%27d%20like%20to%20scale%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
      <span className="relative flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-lg shadow-[#25D366]/30 hover:scale-105 transition">
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
      </span>
    </Link>
  );
}
