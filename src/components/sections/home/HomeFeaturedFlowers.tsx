"use client";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import FlowerCard from "@/components/ui/FlowerCard";

const featured = [
  { name: "Orange Joy Pot Lily", type: "Pot Lily", emoji: "🌺", bgGradient: "from-orange-100 to-orange-50", colorBarClass: "bg-gradient-to-r from-orange-400 to-orange-300" },
  { name: "Brindisi", type: "Asiatic Lily", emoji: "🌷", bgGradient: "from-pink-100 to-rose-50", colorBarClass: "bg-gradient-to-r from-pink-400 to-rose-300" },
  { name: "Nashville", type: "LA Lily", emoji: "🌻", bgGradient: "from-yellow-100 to-amber-50", colorBarClass: "bg-gradient-to-r from-yellow-400 to-amber-300" },
  { name: "Labrador", type: "Oriental Lily", emoji: "🌸", bgGradient: "from-pink-100 to-fuchsia-50", colorBarClass: "bg-gradient-to-r from-fuchsia-400 to-pink-300" },
  { name: "Captain Fresco", type: "Calla Lily", emoji: "🤍", bgGradient: "from-slate-100 to-blue-50", colorBarClass: "bg-gradient-to-r from-slate-400 to-blue-300" },
  { name: "Royal Virgin", type: "Tulip", emoji: "🌷", bgGradient: "from-purple-100 to-violet-50", colorBarClass: "bg-gradient-to-r from-purple-400 to-violet-300" },
  { name: "Blue Pearl", type: "Hyacinthus", emoji: "💙", bgGradient: "from-blue-100 to-indigo-50", colorBarClass: "bg-gradient-to-r from-blue-400 to-indigo-300" },
  { name: "Tricolour Mix", type: "Sparaxis", emoji: "🎨", bgGradient: "from-rose-100 to-yellow-50", colorBarClass: "bg-gradient-to-r from-rose-400 via-yellow-300 to-green-300" },
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
