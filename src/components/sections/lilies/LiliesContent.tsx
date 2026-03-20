"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ASIATIC_PACKS, ORIENTAL_PACKS, LilyPack } from "@/lib/constants";

const CARE_TIPS = [
  { icon:"🌱", title:"Planting", text:"Plant bulbs immediately after purchase in a sunny spot in deep, well-aerated moist and adequately porous humus soil. Plant with tips facing upwards." },
  { icon:"💧", title:"Watering", text:"Maintain moist but not waterlogged conditions. In a dry environment, fleshy scales dry out quickly; in too much moisture they soon rot." },
  { icon:"☀️", title:"Sunlight", text:"Lilies thrive in full sunlight. In summer, protect the base with low perennials while keeping blooms in the light." },
  { icon:"❄️", title:"Winter Care", text:"If bulbs remain in ground over winter, use peat mulch or evergreens to protect from frost. Ensures healthy regrowth in spring." },
  { icon:"✂️", title:"Harvesting", text:"Harvest when vegetation turns yellow and bulbs retract naturally — the bulb has stored enough energy for the next season." },
  { icon:"📦", title:"Storage", text:"Keep bulbs in a cool, dry place until planting time. Avoid extreme temperatures and excess moisture. Product of Holland — quality certified." },
];

function ProductCard({ pack }: { pack: LilyPack }) {
  return (
    <div className="bg-white rounded-[20px] border border-magenta/10 shadow-sm hover:shadow-magenta hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Image area */}
      <div className={`aspect-square relative flex items-center justify-center text-[6rem] bg-gradient-to-br ${pack.bgGradient}`}>
        <span className="transition-transform duration-300 hover:scale-110">{pack.emoji}</span>
        <div className="absolute top-3 right-3 bg-white/90 text-[11px] font-bold px-2.5 py-1 rounded-full text-ink">🇳🇱 Holland</div>
        <div className="absolute bottom-3 left-3 text-white font-bold text-[12px] px-3 py-1.5 rounded-full" style={{ background: pack.accentColor }}>
          📦 {pack.qty} Bulbs
        </div>
        <div className="absolute bottom-3 right-3 bg-gold text-earth font-bold text-[13px] px-3 py-1.5 rounded-full font-sans">₹ {pack.price}/-</div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.07em] mb-1" style={{ color: pack.accentColor }}>
          {pack.type === "oriental" ? "🌸 Oriental Lily" : "🌷 Asiatic Lily"} · {pack.qty} Bulbs
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-4 h-4 rounded-full shadow-sm" style={{ background: pack.accentColor }} />
          <span className="font-cormorant font-bold text-[1.3rem] text-ink">{pack.color}</span>
        </div>
        <p className="text-[12px] italic text-[#7a6f65] mb-3 font-cormorant leading-relaxed">&ldquo;{pack.tagline}&rdquo;</p>
        <p className="text-[12px] text-[#4a3f35] leading-relaxed mb-4">{pack.desc}</p>

        {/* Premium note */}
        {pack.premiumNote && (
          <div className="bg-purple-pale border border-purple/15 rounded-xl p-3 mb-4 flex gap-2.5 items-start">
            <span className="text-lg flex-shrink-0">{pack.premiumNote.icon}</span>
            <div>
              <div className="font-bold text-[12px] text-purple-deep mb-1">{pack.premiumNote.title}</div>
              <p className="text-[11px] text-[#4a3f35] leading-relaxed">{pack.premiumNote.text}</p>
            </div>
          </div>
        )}

        {/* Specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {["📏 10 CM","🌱 12 CM","🌸 7–8 CM","📏 40 CM Height","💡 Full Sun"].map(s => (
            <span key={s} className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${pack.accentColor}15`, color: pack.accentColor }}>{s}</span>
          ))}
        </div>

        {/* Usage tags */}
        <div className="flex flex-wrap gap-1.5">
          {pack.usages.map(u => (
            <span key={u} className="text-[11px] text-white font-bold px-2.5 py-1 rounded-full" style={{ background: pack.accentColor }}>{u}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CareGuide() {
  const ref = useScrollReveal();
  return (
    <section id="care-guide" className="py-16 px-[5vw] bg-white scroll-mt-[130px]" ref={ref}>
      <div className="text-center mb-10">
        <div className="section-tag justify-center mb-2">— Growing Guide —</div>
        <h2 className="section-title-serif">How to Grow <em className="text-magenta not-italic">Your Lilies</em></h2>
        <p className="text-[14px] text-[#4a3f35] mt-2 max-w-lg mx-auto leading-relaxed">Applies to both Asiatic and Oriental varieties — simple steps for beautiful, healthy blooms every season.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CARE_TIPS.map((tip, i) => (
          <div key={tip.title} className="reveal bg-cream rounded-2xl p-6 border border-magenta/10 hover:-translate-y-1 hover:shadow-magenta transition-all duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="text-[2rem] mb-3">{tip.icon}</div>
            <h3 className="font-cormorant text-[1.1rem] font-bold text-ink mb-2">{tip.title}</h3>
            <p className="text-[13px] text-[#7a6f65] leading-relaxed">{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function LiliesContent() {
  const [activeType, setActiveType] = useState<"asiatic" | "oriental">("asiatic");
  const packs = activeType === "asiatic" ? ASIATIC_PACKS : ORIENTAL_PACKS;

  return (
    <>
      {/* Hero */}
      <section className="min-h-[92vh] pt-16 flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #12001e 0%, #4a0072 35%, #7a1558 65%, #c84fa8 100%)" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)", backgroundSize: "34px 34px" }} />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,200,66,0.1), transparent 65%)" }} />
        <div className="relative z-10 px-[5vw] py-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/3 text-gold-light text-[11px] font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-5">
            🇳🇱 Product of Holland · Premium Flower Bulb Collection
          </div>
          <h1 className="font-cormorant font-bold text-white text-[clamp(2.6rem,6vw,5rem)] leading-[1.05] mb-3">
            Beautiful Lilies<br /><em className="text-gold-light">for Your Loved Ones</em>
          </h1>
          <p className="text-white/75 text-[14px] leading-relaxed mb-7 max-w-lg mx-auto">
            Enjoy the beauty of exotic lilies in your garden or floral arrangements. Two magnificent collections — choose your lily type.
          </p>

          {/* Type switcher */}
          <div className="inline-flex bg-white/10 rounded-full p-1.5 border border-white/18 backdrop-blur-[10px] mb-7 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <button onClick={() => setActiveType("asiatic")}
              className={`px-6 py-3 rounded-full font-bold text-[14px] transition-all duration-300 flex items-center gap-2 ${activeType === "asiatic" ? "bg-pink-600 text-white shadow-[0_4px_20px_rgba(233,30,99,0.45)]" : "text-white/60 hover:text-white"}`}>
              🌷 Asiatic Lily <span className="text-[12px] opacity-80">6 bulbs · ₹350</span>
            </button>
            <button onClick={() => setActiveType("oriental")}
              className={`px-6 py-3 rounded-full font-bold text-[14px] transition-all duration-300 flex items-center gap-2 ${activeType === "oriental" ? "bg-purple text-white shadow-[0_4px_20px_rgba(123,31,162,0.45)]" : "text-white/60 hover:text-white"}`}>
              🌸 Oriental Lily <span className="text-[12px] opacity-80">3 bulbs · ₹350</span>
            </button>
          </div>

          {/* Comparison strip */}
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { emoji:"🌷", title:"Asiatic Lily", sub:"6 Bulbs/Pack · Vibrant upward blooms" },
              { emoji:"🌸", title:"Oriental Lily", sub:"3 Premium Bulbs · Exotic fragrance" },
            ].map((pill) => (
              <div key={pill.title} className="flex items-center gap-2 bg-white/10 border border-white/2 backdrop-blur-sm rounded-full px-4 py-2.5">
                <span className="text-xl">{pill.emoji}</span>
                <div className="text-left"><div className="text-white font-bold text-[13px]">{pill.title}</div><div className="text-white/55 text-[11px]">{pill.sub}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison bar */}
      <div className="py-5 px-[5vw] relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #12001e, #7a1558)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="flex items-center justify-center gap-4 flex-wrap relative z-10">
          <div className="bg-white/10 border border-white/18 rounded-2xl px-5 py-3 text-center cursor-pointer hover:border-gold/40 transition-colors" onClick={() => setActiveType("asiatic")}>
            <div className="text-white/55 text-[11px] mb-0.5">Asiatic Lily</div>
            <div className="text-white font-bold text-[16px]">6 Bulbs · <span className="text-gold-light">₹350</span></div>
            <div className="text-white/40 text-[11px] mt-0.5">≈ ₹58 per bulb · 6 colours</div>
          </div>
          <div className="text-white/40 font-bold text-[1.2rem]">VS</div>
          <div className="bg-gold/15 border-2 border-gold/4 rounded-2xl px-5 py-3 text-center relative cursor-pointer hover:border-gold/60 transition-colors" onClick={() => setActiveType("oriental")}>
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gold text-earth text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">⭐ PREMIUM</div>
            <div className="text-white/55 text-[11px] mb-0.5">Oriental Lily</div>
            <div className="text-white font-bold text-[16px]">3 Bulbs · <span className="text-gold-light">₹350</span></div>
            <div className="text-white/40 text-[11px] mt-0.5">Exotic fragrance · Larger blooms</div>
          </div>
          <p className="text-white/40 text-[12px] max-w-[200px] leading-relaxed hidden md:block">
            Oriental lilies bloom <strong className="text-gold-light">larger</strong> with deeper fragrance — a premium experience at the same price.
          </p>
        </div>
      </div>

      {/* Sticky type tabs */}
      <div className="sticky top-16 z-[90] bg-white border-b border-magenta/10 shadow-sm">
        <div className="flex px-[5vw] items-stretch">
          <button onClick={() => setActiveType("asiatic")}
            className={`px-5 py-3.5 font-bold text-[14px] border-b-[3px] transition-all duration-200 flex items-center gap-2 ${activeType === "asiatic" ? "text-pink-600 border-pink-600 bg-pink-50/50" : "text-[#7a6f65] border-transparent hover:text-ink"}`}>
            🌷 Asiatic Lily
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${activeType === "asiatic" ? "bg-pink-100 text-pink-700" : "bg-gray-100 text-gray-500"}`}>6 pcs</span>
          </button>
          <div className="w-px bg-gray-100 my-2" />
          <button onClick={() => setActiveType("oriental")}
            className={`px-5 py-3.5 font-bold text-[14px] border-b-[3px] transition-all duration-200 flex items-center gap-2 ${activeType === "oriental" ? "text-purple border-purple bg-purple-pale/30" : "text-[#7a6f65] border-transparent hover:text-ink"}`}>
            🌸 Oriental Lily
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${activeType === "oriental" ? "bg-purple-pale text-purple" : "bg-gray-100 text-gray-500"}`}>3 pcs · Premium</span>
          </button>
          <div className="flex-1" />
          <a href="#care-guide" className="hidden md:flex items-center text-[13px] font-semibold text-[#7a6f65] px-4 hover:text-magenta transition-colors">
            🌿 Care Guide
          </a>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-16 px-[5vw] bg-cream">
        {activeType === "oriental" && (
          <div className="bg-purple py-3 px-5 rounded-xl mb-8 flex items-center gap-3">
            <span className="bg-gold text-earth text-[10px] font-bold px-3 py-1 rounded-full">⭐ PREMIUM VARIETY</span>
            <span className="text-white text-[13px]">Oriental Lily — Larger blooms · Deeper fragrance · <strong className="text-gold-light">3 premium bulbs</strong> per pack at ₹350/-</span>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack) => <ProductCard key={pack.id} pack={pack} />)}
        </div>
      </section>

      {/* Variants bar */}
      <div className="py-10 px-[5vw] relative overflow-hidden"
        style={{ background: activeType === "oriental" ? "linear-gradient(135deg, #4a148c, #7b1fa2)" : "linear-gradient(135deg, #880e4f, #e91e63)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
        <h2 className="font-cormorant text-white text-[1.8rem] font-bold text-center mb-6 relative z-10">
          {activeType === "asiatic" ? "Asiatic Lily" : "Oriental Lily"} — All <em>Colour Variations</em>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3 relative z-10">
          {packs.map((p) => (
            <div key={p.id} className="rounded-2xl p-3 text-center bg-white/10 border-2 border-white/15 hover:-translate-y-1.5 hover:border-gold-light/60 hover:shadow-[0_12px_36px_rgba(0,0,0,0.25)] transition-all duration-250 cursor-pointer">
              <div className="text-[2.5rem] mb-1">{p.emoji}</div>
              <div className="text-white font-bold text-[12px]">{p.color}</div>
              <div className="text-gold-light text-[11px] mt-0.5">₹{p.price}/{p.qty}pcs</div>
            </div>
          ))}
        </div>
      </div>

      <CareGuide />

      {/* Contact strip */}
      <section className="py-14 px-[5vw] relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #12001e, #7a1558)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
          <div>
            <h2 className="font-cormorant text-white text-[clamp(1.4rem,3vw,2.2rem)] font-bold mb-2">
              Order Your <em className="text-gold-light">Lily Bulbs</em> Today
            </h2>
            <p className="text-white/65 text-[13px] mb-5">Holland-certified bulbs · Delivered across India · ₹350/- per pack · All colour variations available.</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label:"+91-7206317456", href:"tel:+917206317456", emoji:"📞" },
                { label:"+91-9812541200", href:"tel:+919812541200", emoji:"📞" },
                { label:"info@redmirchi.org", href:"mailto:info@redmirchi.org", emoji:"✉️" },
                { label:"www.redmirchi.org", href:"https://www.redmirchi.org", emoji:"🌐", gold:true },
              ].map(c => (
                <Link key={c.href} href={c.href}
                  className={`flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full transition-all hover:-translate-y-0.5 ${c.gold ? "bg-gold text-earth" : "bg-white/10 text-white border border-white/2 backdrop-blur-sm"}`}>
                  {c.emoji} {c.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center hidden md:block">
            <div className="text-[11px] text-white/45 mb-2">📍 Registered Office</div>
            <div className="text-white/70 text-[12px] leading-relaxed">A-4, Palika Bazaar<br />Jind, Haryana 126102<br /><span className="text-gold-light font-semibold">🇳🇱 Product of Holland</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
