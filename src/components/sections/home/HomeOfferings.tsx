"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const offerings = [
  { icon: "🏗️", title: "Polyhouse & Greenhouse", desc: "Complete design-build-commission of controlled-environment infrastructure.", tag: "Infrastructure", color: "bg-magenta/7" },
  { icon: "🌱", title: "Seeds & Plantation", desc: "Premium certified seeds and expert plantation services for floriculture and specialty crops.", tag: "Agriculture", color: "bg-green/7" },
  { icon: "💧", title: "Irrigation Systems", desc: "Drip, sprinkler and automated irrigation solutions optimised for water and nutrient delivery.", tag: "Water Mgmt", color: "bg-gold/10" },
  { icon: "🧪", title: "Fertilizers & Nutrients", desc: "Scientifically formulated fertilizers to improve crop quality, output and soil health.", tag: "Soil Health", color: "bg-green/7" },
  { icon: "📊", title: "Consulting & Contract Farming", desc: "Expert agronomic consulting and contract farming to connect farmers with markets.", tag: "Consulting", color: "bg-magenta/7" },
  { icon: "🔬", title: "Tissue Culture & Processing", desc: "Advanced tissue culture propagation and post-harvest food processing services.", tag: "Technology", color: "bg-gold/10" },
];

export default function HomeOfferings() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[5vw] bg-cream" ref={ref}>
      <SectionHeader tag="Core Offerings" title={<>End-to-End <em className="text-green-DEFAULT not-italic">Agro Solutions</em></>} desc="A complete ecosystem for farmers — from seeds and infrastructure to consulting and processing." center />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {offerings.map((o, i) => (
          <div key={o.title} className={`reveal bg-white rounded-2xl p-6 border border-magenta/8 shadow-sm hover:shadow-magenta hover:-translate-y-1.5 transition-all duration-300`}
            style={{ transitionDelay: `${i * 60}ms` }}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${o.color}`}>{o.icon}</div>
            <h3 className="font-cormorant text-[1.15rem] font-bold text-ink mb-2">{o.title}</h3>
            <p className="text-[13px] text-[#7a6f65] leading-relaxed mb-3">{o.desc}</p>
            <span className="text-[11px] font-bold text-magenta bg-magenta/8 px-3 py-1 rounded-full uppercase tracking-wider">{o.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
