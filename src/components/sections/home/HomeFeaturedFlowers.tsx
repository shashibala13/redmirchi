"use client";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import FlowerCard from "@/components/ui/FlowerCard";

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO ADD IMAGES
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Upload your photos to:  public/images/flowers/
 * 2. Set the `image` field below to match your filename, e.g.:
 *      image: "/images/flowers/orange-joy-pot-lily.jpg"
 * 3. Leave `image` as `undefined` (or remove the field) to show the emoji fallback.
 *
 * Recommended image size: 600×600px, square crop, JPG or WebP.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const featured = [
  {
    name: "Yellow Pomponette",
    type: "Tulip",
    emoji: "🌺",
    bgGradient: "from-orange-100 to-orange-50",
    colorBarClass: "bg-gradient-to-r from-orange-400 to-orange-300",
    image: "/images/flowers/orange-joy-pot-lily.JPG",
    // Upload: public/images/flowers/orange-joy-pot-lily.jpg
  },
  {
    name: "Yellow",
    type: "Asiatic Lily",
    emoji: "🌷",
    bgGradient: "from-pink-100 to-rose-50",
    colorBarClass: "bg-gradient-to-r from-pink-400 to-rose-300",
    image: "/images/flowers/brindisi-asiatic-lily.JPG",
    // Upload: public/images/flowers/brindisi-asiatic-lily.jpg
  },
  {
    name: "Verandi",
    type: "Tulip",
    emoji: "🌻",
    bgGradient: "from-yellow-100 to-amber-50",
    colorBarClass: "bg-gradient-to-r from-yellow-400 to-amber-300",
    image: "/images/flowers/nashville-la-lily.JPG",
    // Upload: public/images/flowers/nashville-la-lily.jpg
  },
  {
    name: "Yelloween",
    type: "Oriental Lily",
    emoji: "🌸",
    bgGradient: "from-pink-100 to-fuchsia-50",
    colorBarClass: "bg-gradient-to-r from-fuchsia-400 to-pink-300",
    image: "/images/flowers/labrador-oriental-lily.JPG",
    // Upload: public/images/flowers/labrador-oriental-lily.jpg
  }
];

export default function HomeFeaturedFlowers() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[5vw] bg-white" ref={ref}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <SectionHeader tag="Specialists In" title={<>Growing & Harvesting <em className="text-magenta not-italic">Premium Varieties</em></>} />
        <Link href="/catalogue" className="btn-ghost text-sm px-5 py-2.5 whitespace-nowrap">View Full Catalogue →</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {featured.map((f, i) => (
          <div key={f.name} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
            <FlowerCard {...f} />
          </div>
        ))}
      </div>
    </section>
  );
}
