import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfoPanel from "@/components/sections/contact/ContactInfoPanel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Red Mirchi Associates. Enquire about flower bulbs, polyhouse setup, agri consulting, or any horticulture solutions. We respond within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden flex items-center justify-center min-h-[42vh] text-center pt-16"
        style={{ background: "linear-gradient(150deg, #12001e 0%, #7a1558 45%, #b0257e 80%, #e05ab0 100%)" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)", backgroundSize: "34px 34px" }} />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,200,66,0.1), transparent 65%)" }} />
        <div className="relative z-10 px-[5vw] py-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] uppercase mb-5 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.12)", color: "#f5c842", border: "1px solid rgba(245,200,66,0.3)" }}>
            📍 Jind, Haryana, India · Est. 2009
          </div>
          <h1 className="font-cormorant font-bold text-white text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] mb-3">
            Get in <em className="text-gold-light">Touch</em> With Us
          </h1>
          <p className="text-white/75 text-[14px] leading-[1.75] mb-6 max-w-lg mx-auto">
            Whether you&apos;re a farmer, trader, or flower enthusiast — we&apos;d love to hear from you. Fill the form or reach us directly.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {[
              { label: "+91-7206317456", href: "tel:+917206317456", emoji: "📞" },
              { label: "info@redmirchi.org", href: "mailto:info@redmirchi.org", emoji: "✉️" },
              { label: "WhatsApp", href: "https://wa.me/917206317456", emoji: "💬" },
              { label: "redmirchi.org", href: "https://www.redmirchi.org", emoji: "🌐" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-1.5 text-white text-[13px] font-semibold px-4 py-2 rounded-full backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                {link.emoji} {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-[1280px] mx-auto px-[5vw] py-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <ContactForm />
        <ContactInfoPanel />
      </main>

      <Footer />
    </>
  );
}
