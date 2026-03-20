"use client";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  { stars: 5, quote: "Red Mirchi Associates transformed our farm with their polyhouse setup and lily bulb supply. Our production quality has improved dramatically and we're now exporting to metro markets.", name: "Rajendra Singh", role: "Floriculture Farmer, Haryana", initial: "RS", bg: "from-magenta to-magenta-deep" },
  { stars: 5, quote: "Their consulting services helped us transition to contract farming. The team's knowledge of lily varieties and growing conditions is unmatched in North India.", name: "Meena Kumari", role: "Progressive Farmer, Punjab", initial: "MK", bg: "from-green to-green-dark" },
  { stars: 5, quote: "The irrigation and fertilizer solutions increased our yield by over 40%. Excellent post-sale support and technical guidance throughout the season.", name: "Amarjit Sharma", role: "Agri Entrepreneur, Uttarakhand", initial: "AS", bg: "from-gold to-gold-dark" },
];

export default function HomeAboutAndTestimonials() {
  const ref = useScrollReveal();
  return (
    <div ref={ref}>
      {/* About snapshot */}
      <section className="py-20 px-[5vw] bg-cream grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="reveal-left">
          <SectionHeader tag="About Us" title={<>India&apos;s Trusted <em className="text-magenta not-italic">Agro-Horti</em> Partner</>} />
          <p className="text-[14px] text-[#4a3f35] leading-relaxed mb-4">
            Established in 2009 in Jind, Haryana, Red Mirchi Associates has positioned itself as a leading importer, grower, and service provider specialising in horticulture and floriculture. We bring world-class expertise to ensure the availability of high-quality floral and horticulture products across India.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { icon: "🎯", text: "To be the most preferred Agro-Horti & Floriculture solution provider in India." },
              { icon: "🌍", text: "Importing premium Holland flower bulbs and distributing to farmers nationwide." },
              { icon: "🏗️", text: "1,00,000+ sq. mtr. PQ facility maintaining strict SOPs for quality assurance." },
            ].map((p) => (
              <div key={p.text} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-magenta/8">
                <span className="text-xl flex-shrink-0">{p.icon}</span>
                <p className="text-[13px] text-[#4a3f35] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-ghost text-sm">Learn Our Full Story →</Link>
        </div>
        <div className="reveal-right grid grid-cols-2 gap-4">
          {[
            { emoji: "🌸", label: "Est. 2009", sub: "Jind, Haryana", bg: "from-pink-100 to-rose-50" },
            { emoji: "🇳🇱", label: "Holland Partner", sub: "Derck Schipper B.V.", bg: "from-blue-50 to-indigo-50" },
            { emoji: "🏗️", label: "100K+ Sq. Mtr.", sub: "PQ Facility", bg: "from-green-50 to-emerald-50" },
            { emoji: "🌍", label: "30+ Countries", sub: "Global Reach", bg: "from-amber-50 to-yellow-50" },
          ].map((card) => (
            <div key={card.label} className={`bg-gradient-to-br ${card.bg} rounded-2xl p-5 border border-magenta/8`}>
              <div className="text-3xl mb-2">{card.emoji}</div>
              <div className="font-cormorant font-bold text-[1.1rem] text-ink">{card.label}</div>
              <div className="text-[12px] text-[#7a6f65] mt-0.5">{card.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials 
      <section className="py-20 px-[5vw] relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #2d7a3a 0%, #1a4d24 100%)" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10">
          <SectionHeader tag="Client Stories" title={<>Trusted by <em className="text-gold-light not-italic">Farmers & Partners</em></>} center light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            {testimonials.map((t) => (
              <div key={t.name} className="reveal bg-white/8 backdrop-blur-[10px] border border-white/15 rounded-2xl p-6 hover:bg-white/13 hover:-translate-y-1 transition-all duration-300">
                <div className="text-gold-light text-lg mb-3">{"★".repeat(t.stars)}</div>
                <p className="text-white/85 text-[13px] leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{t.initial}</div>
                  <div>
                    <div className="text-white font-bold text-[13px]">{t.name}</div>
                    <div className="text-white/55 text-[11px]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-20 px-[5vw] bg-cream-dark text-center">
        <div className="max-w-2xl mx-auto reveal"
          style={{ background: "linear-gradient(135deg, #7a1558, #b0257e, #c84fa8)", borderRadius: "28px", padding: "4rem 3rem", boxShadow: "0 20px 80px rgba(176,37,126,0.4)", position: "relative", overflow: "hidden" }}>
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10">
            <div className="text-5xl mb-4 animate-float">🌸</div>
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white mb-3">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-white/75 text-[14px] leading-relaxed mb-6 max-w-md mx-auto">
              Talk to our agri-horticulture experts today. Free consultation for new inquiries.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-earth font-bold text-[14px] px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(232,160,32,0.4)] hover:-translate-y-0.5 transition-transform">
                🌱 Get Free Consultation
              </Link>
              <Link href="tel:+917206317456"
                className="inline-flex items-center gap-2 bg-white/12 text-white border border-white/25 font-semibold text-[14px] px-6 py-3.5 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
                📞 +91-7206317456
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
