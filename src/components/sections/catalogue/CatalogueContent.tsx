"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import FlowerCard from "@/components/ui/FlowerCard";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCounter from "@/components/ui/StatCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlowerVariety, POT_LILY_VARIETIES, ASIATIC_VARIETIES, ORIENTAL_VARIETIES } from "@/lib/constants";

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * CATALOGUE IMAGES
 * ─────────────────────────────────────────────────────────────────────────────
 * Upload all flower photos to:  public/images/catalogue/
 * Recommended size:             600 × 600 px  |  JPG or WebP  |  Square crop
 * Emoji shows as fallback when image is not yet uploaded.
 * Image paths for Pot Lily, Asiatic & Oriental are in src/lib/constants.ts
 * ─────────────────────────────────────────────────────────────────────────────
 */
const MORE_VARIETIES: Record<string, FlowerVariety[]> = {
  calla: [
    { name:"Paco",              type:"Calla Lily", emoji:"💜", bgGradient:"from-purple-100 to-violet-50", colorClass:"purple", image:"/images/catalogue/paco-calla-lily.jpg" },
    { name:"Captain Fresco",    type:"Calla Lily", emoji:"🤍", bgGradient:"from-slate-100 to-blue-50",   colorClass:"white",  image:"/images/catalogue/captain-fresco-calla-lily.jpg" },
    { name:"Carrera",           type:"Calla Lily", emoji:"🖤", bgGradient:"from-gray-200 to-gray-100",   colorClass:"dark",   image:"/images/catalogue/carrera-calla-lily.jpg" },
    { name:"Captain Brunello",  type:"Calla Lily", emoji:"🟠", bgGradient:"from-orange-100 to-orange-50",colorClass:"orange", image:"/images/catalogue/captain-brunello-calla-lily.jpg" },
    { name:"Captain Solo",      type:"Calla Lily", emoji:"💛", bgGradient:"from-yellow-100 to-yellow-50",colorClass:"yellow", image:"/images/catalogue/captain-solo-calla-lily.jpg" },
    { name:"Captain Hollywood", type:"Calla Lily", emoji:"🌸", bgGradient:"from-pink-100 to-rose-50",    colorClass:"pink",   image:"/images/catalogue/captain-hollywood.jpg" },
  ],
  tulip: [
    { name:"Lech Walesa",       type:"Tulip", emoji:"🌷", bgGradient:"from-pink-100 to-rose-50",    colorClass:"pink",   image:"/images/catalogue/lech-walesa-tulip.jpg" },
    { name:"Flaming Flag",      type:"Tulip", emoji:"💜", bgGradient:"from-purple-100 to-violet-50",colorClass:"purple", image:"/images/catalogue/flaming-flag-tulip.jpg" },
    { name:"Verandi",           type:"Tulip", emoji:"❤️", bgGradient:"from-red-100 to-red-50",      colorClass:"red",    image:"/images/catalogue/verandi-tulip.jpg" },
    { name:"Dynasty",           type:"Tulip", emoji:"🩷", bgGradient:"from-pink-100 to-fuchsia-50", colorClass:"pink",   image:"/images/catalogue/dynasty-tulip.jpg" },
    { name:"Royal Virgin",      type:"Tulip", emoji:"🤍", bgGradient:"from-slate-100 to-blue-50",   colorClass:"white",  image:"/images/catalogue/royal-virgin-tulip.jpg" },
    { name:"Queen of Night",    type:"Tulip", emoji:"🖤", bgGradient:"from-gray-300 to-gray-200",   colorClass:"dark",   image:"/images/catalogue/queen-of-night-tulip.jpg" },
    { name:"Yellow Pomponette", type:"Tulip", emoji:"💛", bgGradient:"from-yellow-100 to-amber-50", colorClass:"yellow", image:"/images/catalogue/yellow-pomponette-tulip.jpg" },
    { name:"Miranda",           type:"Tulip", emoji:"🔴", bgGradient:"from-red-100 to-rose-50",     colorClass:"red",    image:"/images/catalogue/miranda-tulip.jpg" },
    { name:"Fringed",           type:"Tulip", emoji:"🔴", bgGradient:"from-red-100 to-rose-50",     colorClass:"red",    image:"/images/catalogue/fringed-tulip.jpg" },
    { name:"Purple Lady",           type:"Tulip", emoji:"🔴", bgGradient:"from-red-100 to-rose-50",     colorClass:"red",    image:"/images/catalogue/purple-lady-tulip.jpg" },
      { name:"Trick",           type:"Tulip", emoji:"🔴", bgGradient:"from-red-100 to-rose-50",     colorClass:"red",    image:"/images/catalogue/trick-tulip.jpg" },
    { name:"Triumph Tulip",           type:"Tulip", emoji:"🔴", bgGradient:"from-red-100 to-rose-50",     colorClass:"red",    image:"/images/catalogue/triumph-tulip.jpg" },
  ],
  hyacinthus: [
    { name:"Blue Pearl",    type:"Hyacinthus", emoji:"💙", bgGradient:"from-blue-100 to-indigo-50",   colorClass:"blue",   image:"/images/catalogue/blue-pearl-hyacinthus.jpg" },
    { name:"Gipsy Queen",   type:"Hyacinthus", emoji:"🟠", bgGradient:"from-orange-100 to-amber-50",  colorClass:"orange", image:"/images/catalogue/gipsy-queen-hyacinthus.jpg" },
    { name:"Jan Bos",       type:"Hyacinthus", emoji:"❤️", bgGradient:"from-red-100 to-rose-50",      colorClass:"red",    image:"/images/catalogue/jan-bos-hyacinthus.jpg" },
    { name:"Pink Pearl",    type:"Hyacinthus", emoji:"🩷", bgGradient:"from-pink-100 to-fuchsia-50",  colorClass:"pink",   image:"/images/catalogue/pink-pearl-hyacinthus.jpg" },
    { name:"White Pearl",   type:"Hyacinthus", emoji:"🤍", bgGradient:"from-slate-100 to-blue-50",    colorClass:"white",  image:"/images/catalogue/white-pearl-hyacinthus.jpg" },
    { name:"Yellowstone",   type:"Hyacinthus", emoji:"💛", bgGradient:"from-yellow-100 to-amber-50",  colorClass:"yellow", image:"/images/catalogue/yellowstone-hyacinthus.jpg" },
  ],
  other: [
    { name:"Freesia Orange",         type:"Freesia",      emoji:"🟣", bgGradient:"from-purple-100 to-violet-50",  colorClass:"purple", image:"/images/catalogue/freesia-orange.jpg" },
    { name:"Ffreesia Purple",   type:"Freesia",      emoji:"💜", bgGradient:"from-violet-100 to-purple-50",  colorClass:"purple", image:"/images/catalogue/freesia-purple.jpg" },
    { name:"Hollandica Tigereye (Iris)",type:"Iris",      emoji:"💛", bgGradient:"from-yellow-100 to-amber-50",   colorClass:"yellow", image:"/images/catalogue/hollandica-tigereye-iris.jpg" },
    { name:"Hollandica Strongold (Iris)",type:"Iris",      emoji:"💛", bgGradient:"from-yellow-100 to-amber-50",   colorClass:"yellow", image:"/images/catalogue/hollandica-strongold-iris.jpg" },
    { name:"Barret Browning (Narcissus)",type:"Narcissus", emoji:"🤍", bgGradient:"from-slate-50 to-blue-50",      colorClass:"white",  image:"/images/catalogue/barret-browning-narcissus.jpg" },
    { name:"Tahiti (Daffodil)",        type:"Narcissus",   emoji:"🌻", bgGradient:"from-yellow-100 to-amber-50",   colorClass:"yellow", image:"/images/catalogue/tahiti-daffodil.jpg" },
    { name:"Anemone Red",              type:"Anemone",     emoji:"🌺", bgGradient:"from-red-100 to-rose-50",       colorClass:"red",    image:"/images/catalogue/anemone-red.jpg" },
    { name:"Ixia Giant",               type:"Ixia",        emoji:"🩷", bgGradient:"from-pink-100 to-fuchsia-50",   colorClass:"pink",   image:"/images/catalogue/ixia-giant.jpg" },
 
  ],
};

const navItems = [
  { id:"pot-lily", label:"🌺 Pot Lily" },
  { id:"asiatic-lily", label:"🌷 Asiatic/LA" },
  { id:"oriental-lily", label:"🌸 Oriental/OT" },
  { id:"calla-lily", label:"🌺 Calla Lily" },
  { id:"tulip", label:"🌷 Tulip" },
  { id:"hyacinthus", label:"💜 Hyacinthus" },
  { id:"other-flowers", label:"🌿 More" },
  { id:"what-we-do", label:"📋 What We Do" },
];

function CategorySection({ id, title, desc, varieties, className = "" }: { id: string; title: React.ReactNode; desc?: string; varieties: FlowerVariety[]; className?: string }) {
  const ref = useScrollReveal();
  return (
    <section id={id} className={`py-16 px-[5vw] scroll-mt-[130px] ${className}`} ref={ref}>
      <SectionHeader tag="Flower Bulbs" title={title} desc={desc} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {varieties.map((v, i) => (
          <div key={v.name} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
            <FlowerCard {...v} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CatalogueContent() {
  const [activeSection, setActiveSection] = useState("pot-lily");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-140px 0px -60% 0px" }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center text-center pt-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #7a1558 0%, #b0257e 50%, #ce93d8 100%)" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)", backgroundSize: "34px 34px" }} />
        <div className="relative z-10 px-[5vw] py-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/3 text-gold-light text-[11px] font-bold uppercase tracking-[0.08em] px-4 py-1.5 rounded-full mb-5">
            🇳🇱 Product of Holland · Premium Bulb Collection
          </div>
          <h1 className="font-cormorant font-bold text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-3">
            Premium Flower Bulb<br /><em className="text-gold-light">Catalogue 2026</em>
          </h1>
          <p className="text-white/75 text-[14px] leading-relaxed mb-6 max-w-xl mx-auto">
            India&apos;s leading importer and distributor of Holland-certified flower bulbs. Explore our complete range across 15+ varieties.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {["🌺 Pot Lily","🌷 Asiatic","🌸 Oriental","🌺 Calla","🌷 Tulip","💜 Hyacinthus","🟣 Crocus","🌿 Muscari"].map(t => (
              <span key={t} className="bg-white/12 border border-white/2 text-white text-[12px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">{t}</span>
            ))}
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            {[["30+","Countries"],["100K+","Orders"],["1000+","Clients"],["15+","Years"]].map(([v,l]) => (
              <div key={l} className="text-center">
                <div className="font-cormorant font-bold text-[2rem] text-gold-light leading-none">{v}</div>
                <div className="text-[11px] text-white/60 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-20 z-[90] bg-white border-b border-magenta/10 shadow-sm overflow-x-auto scrollbar-none" ref={navRef}>
        <div className="flex px-[5vw] min-w-max">
          {navItems.map((item) => (
            <button key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-3.5 text-[13px] font-semibold whitespace-nowrap border-b-[3px] transition-all duration-200
                ${activeSection === item.id ? "text-magenta border-magenta" : "text-[#7a6f65] border-transparent hover:text-ink"}`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pot Lily */}
      <CategorySection id="pot-lily" title={<><em className="text-magenta not-italic">Pot Lily</em> Collection</>}
        desc="Pot lilies with graceful petals and vibrant hues — enchanting elegance for homes, offices, and commercial spaces."
        varieties={POT_LILY_VARIETIES} className="bg-cream" />

      {/* Asiatic / LA */}
      <CategorySection id="asiatic-lily" title={<><em className="text-magenta not-italic">Asiatic / LA Lily</em></>}
        desc="Exquisite blooms of unparalleled beauty — vibrant hues and delicate petals, poetry in motion for gardens and arrangements."
        varieties={ASIATIC_VARIETIES} className="bg-white" />

      {/* Oriental / OT */}
      <CategorySection id="oriental-lily" title={<><em className="text-magenta not-italic">Oriental / OT Lily</em></>}
        desc="Majestic blooms with an intoxicating exotic fragrance — opulence and luxury for premium floral applications."
        varieties={ORIENTAL_VARIETIES} className="bg-cream" />

      {/* Calla Lily */}
      <CategorySection id="calla-lily" title={<><em className="text-magenta not-italic">Calla Lily</em></>}
        desc="Living sculptures with iconic trumpet-shaped blossoms — symbolizing purity and new beginnings."
        varieties={MORE_VARIETIES.calla} className="bg-white" />

      {/* Tulip */}
      <CategorySection id="tulip" title={<><em className="text-magenta not-italic">Tulip</em> Varieties</>}
        desc="Nature's delicate works of art — enchanting the world for centuries with timeless beauty."
        varieties={MORE_VARIETIES.tulip} className="bg-cream" />

      {/* Hyacinthus */}
      <CategorySection id="hyacinthus" title={<><em className="text-magenta not-italic">Hyacinthus</em></>}
        desc="Heralds of spring — announcing winter's end with vivid colors and sweet, lingering fragrance."
        varieties={MORE_VARIETIES.hyacinthus} className="bg-white" />

       {/* More flowers */}
      <CategorySection
        id="other-flowers"
        title={<>More <em className="text-green not-italic">Flower</em> Collections</>}
        desc="From delicate Crocus and fragrant Freesia to vibrant Muscari, Iris, Anemone, Ranunculus and more."
        varieties={MORE_VARIETIES.other}
        className="bg-cream"
      />

      {/* What We Do */}
      <WhatWeDo />

      {/* Contact */}
      <CatalogueContact />
    </>
  );
}

function WhatWeDo() {
  const ref = useScrollReveal();
  return (
    <section id="what-we-do" className="py-16 px-[5vw] bg-white scroll-mt-[130px]" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionHeader tag="Our Approach" title={<>What We <em className="text-magenta not-italic">Do</em></>}
            desc="More than importers — we are collaborators, educators, and advocates for the growth of the floriculture community across India." />
          <div className="space-y-4">
            {[
              { n:"1", color:"bg-magenta", title:"Import Expertise", text:"15+ years sourcing and distributing high-quality floral and horticulture products — from the white hills of Lahaul Spiti to the green landscape of Ooty." },
              { n:"2", color:"bg-green", title:"Cultivation & Collaboration", text:"Actively participating in flower cultivation — collaborating with farmers in Uttarakhand, North East India, and beyond. Sharing expertise and contributing to farmer growth." },
              { n:"3", color:"bg-gold", title:"Training & Skill Development", text:"Conducting training programmes by inviting industry experts from India and abroad — empowering farmers through professional knowledge-sharing." },
              { n:"4", color:"bg-purple", title:"Assistance in Selling Cut Flowers", text:"Supporting farmers from cultivation to market — facilitating the selling of cut flowers and contributing to the economic well-being of the farming community." },
            ].map((step) => (
              <div key={step.n} className="reveal flex gap-4 items-start">
                <div className={`w-9 h-9 min-w-9 rounded-full ${step.color} text-white flex items-center justify-center font-cormorant font-bold text-[1rem] flex-shrink-0`}>{step.n}</div>
                <div>
                  <h4 className="font-bold text-[14px] text-ink mb-1">{step.title}</h4>
                  <p className="text-[13px] text-[#4a3f35] leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-right bg-magenta-gradient rounded-2xl p-8 relative overflow-hidden shadow-magenta-lg self-start">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="relative z-10">
            <h3 className="font-cormorant text-[1.8rem] font-bold text-white mb-6">Our <em>Achievements</em></h3>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {[["30+","Countries Served"],["100K+","Orders Fulfilled"],["1000+","Happy Clients"],["15+","Years Excellence"]].map(([v,l]) => (
                <div key={l} className="text-center">
                  <div className="font-cormorant font-bold text-[2.4rem] text-gold-light leading-none">{v}</div>
                  <div className="text-[12px] text-white/70 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/12 border border-white/2 rounded-xl p-4 text-[12px] text-white/75 leading-relaxed">
              <strong className="text-gold-light">Pan-India Reach:</strong> From Lahaul Spiti to Ooty, from Uttarakhand valleys to North East India — Red Mirchi Associates has established a nationwide network.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogueContact() {
  return (
    <section className="py-16 px-[5vw] bg-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          { icon:"📞", title:"Call for Info", lines:["Helpline: +91-7206317456","Help Desk: +91-9812541200"], href:"tel:+917206317456" },
          { icon:"✉️", title:"Email", lines:["info@redmirchi.org","Response within 24hrs"], href:"mailto:info@redmirchi.org" },
          { icon:"🌐", title:"Website", lines:["redmirchiflowerbulbs.in","www.redmirchi.org"], href:"https://www.redmirchi.org" },
        ].map((c) => (
          <Link key={c.title} href={c.href}
            className="bg-white/8 border border-white/14 rounded-2xl p-6 text-center hover:bg-white/13 hover:-translate-y-1 transition-all duration-300">
            <div className="text-[2rem] mb-2">{c.icon}</div>
            <div className="text-gold-light font-bold text-[11px] uppercase tracking-wider mb-3">{c.title}</div>
            {c.lines.map(l => <div key={l} className="text-white/80 text-[13px] font-medium">{l}</div>)}
          </Link>
        ))}
      </div>
      <div className="text-center relative z-10">
        <p className="font-cormorant text-white/80 text-[1.8rem] font-bold italic mb-5">
          &ldquo;The only commandment I ever obeyed — <span className="text-gold-light">Consider the Lilies</span>&rdquo;
        </p>
        <Link href="/contact" className="btn-magenta px-8 py-3.5 text-[14px]">🌸 Get Free Consultation</Link>
      </div>
    </section>
  );
}
