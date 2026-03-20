import StatCounter from "@/components/ui/StatCounter";

const stats = [
  { target: 15, suffix: "+", label: "Years of Excellence" },
  { target: 100, suffix: "K+", label: "Sq. Mtr. PQ Facility" },
  { target: 1000, suffix: "+", label: "Farmers Served" },
  { target: 30, suffix: "+", label: "Countries" },
];

export default function HomeStats() {
  return (
    <div className="relative overflow-hidden py-10"
      style={{ background: "linear-gradient(135deg, #7a1558 0%, #b0257e 50%, #d4409e 100%)" }}>
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {stats.map((s) => (
          <StatCounter
            key={s.label}
            target={s.target}
            suffix={s.suffix}
            label={s.label}
            className="text-center"
            numClass="text-[clamp(2rem,4vw,3rem)] text-gold-light"
          />
        ))}
      </div>
    </div>
  );
}
