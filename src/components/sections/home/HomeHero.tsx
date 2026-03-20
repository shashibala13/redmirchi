"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".hfc");
    cards?.forEach((c, i) => {
      setTimeout(() => (c as HTMLElement).style.opacity = "1", 300 + i * 120);
    });
  }, []);

  return (
    <section className="min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden" ref={ref}>
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 80% 30%, rgba(176,37,126,0.07), transparent 60%), radial-gradient(ellipse 60% 80% at 10% 80%, rgba(45,122,58,0.05), transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      {/* Left */}
      <div className="flex flex-col justify-center px-[7vw] py-16 z-10">
        <div className="inline-flex items-center gap-2 bg-magenta/10 text-magenta border border-magenta/25
          px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.06em] uppercase mb-5 w-fit">
          🌸 Established 2009 · Jind, Haryana, India
        </div>
        <h1 className="font-cormorant font-bold leading-[1.05] text-[clamp(2.4rem,5.5vw,4.5rem)] text-ink mb-4">
          One Stop Solution<br />
          <em className="text-magenta not-italic">For Horticulture</em>
        </h1>
        <p className="text-[15px] text-[#4a3f35] leading-relaxed max-w-lg mb-6">
          Empowering India&apos;s farming community with end-to-end agro-horti solutions — premium Holland flower bulbs, polyhouse infrastructure, irrigation, and expert consulting.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/contact"
            className="btn-magenta px-7 py-3.5 text-[15px]">
            🌸 Get Free Consultation
          </Link>
          <Link href="/catalogue"
            className="btn-ghost px-7 py-3.5 text-[15px]">
            🌱 Explore Catalogue
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {["🌷 Pot Lily","🌸 Asiatic Lily","🌺 Oriental Lily","🌻 Tulip","🌼 Hyacinthus"].map(t => (
            <span key={t} className="bg-cream-dark text-[#4a3f35] border border-magenta/10 px-3 py-1.5 rounded-full text-[12px] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* Right grid
          ─────────────────────────────────────────────────────────────
          IMAGES: upload photos to public/images/ and update src below.
          Card 1 (tall, left col):  public/images/hero-pot-lily.jpg
          Card 2 (top right):       public/images/hero-asiatic-lily.jpg
          Card 3 (bottom right):    public/images/hero-polyhouse.jpg
          Recommended size: 800×600px JPG or WebP
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-center px-[4vw] py-12 lg:pr-[7vw]">
        <div className="grid grid-cols-2 gap-3 w-full max-w-[500px]">

          {/* Card 1 — Pot Lily (tall, spans both rows) */}
         

           <div className="hfc rounded-2xl overflow-hidden border border-magenta/10
            shadow-[0_8px_32px_rgba(176,37,126,0.1)] opacity-0 relative
            transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ transition: "opacity 0.5s ease, transform 0.3s ease" }}>
            <div className="relative aspect-square w-full bg-gradient-to-br from-yellow-100 to-amber-50">
              <Image
                src="/images/1-h.jpg"
                alt="Asiatic Lily — Red Mirchi Associates"
                fill
                className="object-cover"
                sizes="240px"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none">🌼</div>
            </div>
           
          </div>

          {/* Card 2 — Asiatic Lily (top right) */}
          <div className="hfc rounded-2xl overflow-hidden border border-magenta/10
            shadow-[0_8px_32px_rgba(176,37,126,0.1)] opacity-0 relative
            transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ transition: "opacity 0.5s ease, transform 0.3s ease" }}>
            <div className="relative aspect-square w-full bg-gradient-to-br from-yellow-100 to-amber-50">
              <Image
                src="/images/hero-asiatic-lily.jpg"
                alt="Asiatic Lily — Red Mirchi Associates"
                fill
                className="object-cover"
                sizes="240px"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none">🌼</div>
            </div>
           
          
          </div>
 {/* Card 4 — Polyhouse (bottom right) */}
          <div className="hfc rounded-2xl overflow-hidden border border-magenta/10
            shadow-[0_8px_32px_rgba(176,37,126,0.1)] opacity-0 relative
            transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ transition: "opacity 0.5s ease, transform 0.3s ease" }}>
            <div className="relative aspect-square w-full bg-gradient-to-br from-green-100 to-emerald-50">
              <Image
                src="/images/2-1.jpg"
                alt="Polyhouse Facility — Red Mirchi Associates"
                fill
                className="object-cover"
                sizes="240px"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none">🌿</div>
            </div>
           
          </div>
          {/* Card 3 — Polyhouse (bottom right) */}
          <div className="hfc rounded-2xl overflow-hidden border border-magenta/10
            shadow-[0_8px_32px_rgba(176,37,126,0.1)] opacity-0 relative
            transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            style={{ transition: "opacity 0.5s ease, transform 0.3s ease" }}>
            <div className="relative aspect-square w-full bg-gradient-to-br from-green-100 to-emerald-50">
              <Image
                src="/images/hero-polyhouse.jpg"
                alt="Polyhouse Facility — Red Mirchi Associates"
                fill
                className="object-cover"
                sizes="240px"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none">🌿</div>
            </div>
           
          </div>
          

        </div>
      </div>
    </section>
  );
}
