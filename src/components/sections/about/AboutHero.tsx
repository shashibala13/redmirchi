"use client";
import Image from "next/image";
import StatCounter from "@/components/ui/StatCounter";

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * ABOUT HERO IMAGE
 * ─────────────────────────────────────────────────────────────────────────────
 * Upload your image to:  public/images/about-hero.jpg
 * Recommended size:      900 × 700px  |  JPG or WebP
 * Crop:                  Landscape — flowers, polyhouse, or team in the field
 *
 * The 🌸 emoji shows automatically until the image file is uploaded.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export default function AboutHero() {
  return (
    <section className="min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">

      {/* ── Dark left panel ── */}
      <div className="relative flex flex-col justify-center px-[7vw] py-20 overflow-hidden"
        style={{ background: "linear-gradient(170deg, #12100e 0%, #3d2b1f 40%, #7a1558 100%)" }}>
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute bottom-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(176,37,126,0.2), transparent 65%)" }} />
        <div className="relative z-10">
          <div className="font-bebas text-[13px] tracking-[0.25em] text-gold-light mb-4">
            —— Red Mirchi Associates
          </div>
          <h1 className="font-cormorant font-bold leading-[0.95] text-[clamp(3.5rem,7vw,6.5rem)] text-white mb-5">
            Growing<br />India&apos;s<br /><em className="text-gold-light">Floral Future</em>
          </h1>
          <div className="w-14 h-[2px] bg-gradient-to-r from-gold to-transparent mb-5" />
          <p className="text-white/70 text-[14px] leading-relaxed max-w-md mb-7">
            From the heartland of Haryana to the hills of Lahaul Spiti, Uttarakhand and the
            landscapes of Ooty — India&apos;s trusted partner in agro-horticulture and
            floriculture since 2009.
          </p>
          <div className="inline-flex items-center gap-4 bg-white/7 border border-white/15 backdrop-blur-sm rounded-full px-5 py-3">
            <div className="font-bebas text-[2rem] text-gold-light leading-none">2009</div>
            <div className="text-[12px] text-white/65 leading-snug">
              <span className="text-white font-bold block">Est. Jind, Haryana</span>
              India&apos;s leading horti-flori solution provider
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel: image + stats grid ── */}
      <div className="bg-cream grid grid-rows-[1fr_auto]">

        {/* Image area */}
        <div className="relative bg-gradient-to-br from-magenta-pale to-orange-50 border-b border-magenta/10 overflow-hidden min-h-[280px]">
          <Image
            src="/images/about-hero.JPG"
            alt="Red Mirchi Associates — Horticulture & Floriculture"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          {/* Emoji fallback — visible until image is uploaded */}
          <div className="absolute inset-0 flex items-center justify-center text-[9rem] pointer-events-none select-none">
            
          </div>
        </div>

        {/* Stats grid — 2×2 below the image */}
        <div className="grid grid-cols-2">
          {[
            { target: 15,   suffix: "+",  label: "Years of Excellence" },
            { target: 30,   suffix: "+",  label: "Countries Served"    },
            { target: 100,  suffix: "K+", label: "Orders Fulfilled"    },
            { target: 1000, suffix: "+",  label: "Happy Clients"       },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`p-7 border-magenta/8 hover:bg-magenta/3 transition-colors duration-200 cursor-default
                ${i % 2 === 0 ? "border-r" : ""}
                ${i < 2      ? "border-b" : ""}`}
            >
              <StatCounter target={s.target} suffix={s.suffix} label={s.label} numClass="text-[2.6rem]" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
