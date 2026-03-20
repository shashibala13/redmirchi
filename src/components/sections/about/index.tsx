"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

/* ── STORY ── */
export function AboutStory() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[7vw] bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-[-4rem] left-[-2rem] text-[28rem] font-cormorant font-bold text-magenta/4 leading-none pointer-events-none select-none">&ldquo;</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left relative z-10">
          <SectionHeader tag="Our Story" title={<>From a Seed of <em className="text-magenta not-italic">Passion</em></>} />
          <p className="text-[14px] text-[#4a3f35] leading-relaxed mb-4">Established in 2009 in Jind, Haryana, Red Mirchi Associates began with a singular vision — to bridge the gap between world-class floriculture expertise and India&apos;s vast farming community.</p>
          <blockquote className="font-cormorant text-[1.35rem] font-semibold italic text-magenta-deep border-l-4 border-magenta pl-5 my-5 leading-relaxed">
            &ldquo;To be the most preferred supplier in India as a Total Agro-Horti & Floriculture solution provider — improving soil health, crop production, and the quality of life of farmers.&rdquo;
          </blockquote>
          <p className="text-[14px] text-[#4a3f35] leading-relaxed">Our collaborations extend from the white hills of Lahaul Spiti to the green hilly landscapes of Ooty — and from Uttarakhand to the North East region, creating a network that transforms lives.</p>
        </div>
        <div className="reveal-right">
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm bg-gradient-to-br from-magenta-pale to-orange-50 flex items-center justify-center text-[9rem] shadow-[16px_16px_0_#f2ede4,16px_16px_0_1px_rgba(176,37,126,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(176,37,126,0.03) 0px, rgba(176,37,126,0.03) 1px, transparent 1px, transparent 12px)" }} />
              <span className="relative z-10">🌺</span>
              <div className="absolute bottom-[-20px] right-[-20px] w-[110px] h-[110px] rounded-full bg-green flex flex-col items-center justify-center text-white text-center shadow-green">
                <span className="font-cormorant font-bold text-[2rem] leading-none">15+</span>
                <span className="text-[9px] font-bold uppercase tracking-wider opacity-90">Years<br/>Growing</span>
              </div>
            </div>
          </div>
          {/* Timeline */}
          <div className="mt-8 space-y-0 border-l-[1.5px] border-magenta/18 pl-5">
            {[
              { year: "2009", text: "Founded in Jind, Haryana with a vision to transform India's floriculture landscape." },
              { year: "2012", text: "Holland Partnership established with Derck Schipper Bloembollen/Export B.V." },
              { year: "2015", text: "Pan-India Expansion — operations extended to Uttarakhand, Punjab, North East India." },
              { year: "2018", text: "1,00,000+ sq. mtr. PQ facility commissioned with strict SOP adherence." },
              { year: "2024", text: "Today — 1,000+ clients, 30+ countries, a thriving farming community ecosystem." },
            ].map((item, i) => (
              <div key={item.year} className="relative py-3"
                style={{ animationDelay: `${i * 150}ms` }}>
                <div className="absolute left-[-21px] top-4 w-[9px] h-[9px] rounded-full bg-magenta shadow-[0_0_0_3px_rgba(176,37,126,0.2)]" />
                <div className="font-bebas text-[1.3rem] text-magenta leading-none mb-1">{item.year}</div>
                <div className="text-[13px] text-[#4a3f35] leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── VISION ── */
export function AboutVision() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[7vw] relative overflow-hidden bg-ink" ref={ref}>
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(176,37,126,0.12), transparent 65%)" }} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] border border-white/6">
        {[
          { icon: "🔭", label: "Our Vision", color: "text-magenta-light", border: "border-t-magenta", title: "India's Most Preferred Agro-Horti Partner", text: "To be the most preferred supplier in India as a Total Agro-Horti & Floriculture solution provider — improving overall soil health, crop production, and the quality of life of the farming community." },
          { icon: "🎯", label: "Our Mission", color: "text-green-light", border: "border-t-green-light", title: "Empowering Every Farmer, Every Harvest", text: "To provide end-to-end agro solutions — from premium Holland bulbs and polyhouse infrastructure to expert consulting and contract farming — ensuring every farmer achieves their full potential." },
          { icon: "🌿", label: "Our Promise", color: "text-gold-light", border: "border-t-gold", title: "Quality, Knowledge & Growth — Together", text: "We are more than importers. We are collaborators, educators, and advocates for the growth and prosperity of the floriculture community. From cultivation to selling, we stand with our farmers." },
        ].map((card, i) => (
          <div key={card.label} className={`reveal p-12 border-t-[3px] ${card.border} border-r border-r-white/6 last:border-r-0 hover:bg-white/3 transition-colors`}
            style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="text-[2.6rem] block mb-5">{card.icon}</span>
            <div className={`font-bebas text-[0.85rem] tracking-[0.2em] mb-3 ${card.color}`}>{card.label}</div>
            <h3 className="font-cormorant text-[1.6rem] font-bold text-white leading-tight mb-4">{card.title}</h3>
            <p className="text-[13px] text-white/55 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── SERVICES ── */
export function AboutServices() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[7vw] bg-cream" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
        <SectionHeader tag="What We Do" title={<>A Complete <em className="text-magenta not-italic">360° Solution</em></>} />
        <p className="text-[14px] text-[#4a3f35] leading-relaxed self-end">From importing the finest Holland bulbs to setting up polyhouses and training farmers — our end-to-end approach ensures success at every stage of your floriculture journey.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-magenta/8 border border-magenta/8 rounded-2xl overflow-hidden">
        {[
          { n:"01", icon:"🌷", title:"Premium Bulb Import & Supply", desc:"Holland-certified flower bulbs — Lilies, Tulips, Calla Lily, Hyacinthus, and 15+ more varieties.", tag:"Import & Distribution" },
          { n:"02", icon:"🏡", title:"Polyhouse & Greenhouse", desc:"Complete design, build, and commission of state-of-the-art polyhouses and greenhouses.", tag:"Infrastructure" },
          { n:"03", icon:"💧", title:"Seeds, Irrigation & Fertilizers", desc:"Certified seeds, drip irrigation, and scientifically formulated fertilizers for optimal productivity.", tag:"Agri Inputs" },
          { n:"04", icon:"📋", title:"Consulting & Contract Farming", desc:"Expert agronomic consulting and contract farming arrangements connecting farmers with markets.", tag:"Advisory" },
          { n:"05", icon:"🎓", title:"Training & Skill Development", desc:"Empowering farmers through training programmes led by industry experts from India and abroad.", tag:"Education" },
          { n:"06", icon:"🔬", title:"Food Processing & Tissue Culture", desc:"Advanced tissue culture propagation and post-harvest processing for premium shelf life.", tag:"Technology" },
        ].map((s, i) => (
          <div key={s.n} className={`reveal bg-white p-8 hover:bg-magenta-pale transition-colors duration-250`}
            style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="font-bebas text-[3rem] text-magenta/10 leading-none mb-2">{s.n}</div>
            <span className="text-[1.8rem] block mb-3">{s.icon}</span>
            <h3 className="font-cormorant text-[1.2rem] font-bold text-ink mb-2">{s.title}</h3>
            <p className="text-[12px] text-[#7a6f65] leading-relaxed mb-3">{s.desc}</p>
            <span className="text-[10px] font-bold text-magenta bg-magenta/8 px-3 py-1 rounded-full uppercase tracking-wider">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── TEAM ── */
export function AboutTeam() {
  const ref = useScrollReveal();
  const members = [
    { emoji:"🌱", title:"Founder & Director", role:"Visionary · Agro-Horti Specialist", loc:"Jind, Haryana", desc:"15+ years of expertise in horticulture imports, farmer partnerships, and agri-business development across India.", bg:"from-pink-100 to-rose-50" },
    { emoji:"🌿", title:"Head of Cultivation", role:"Floriculture Expert · Growing Specialist", loc:"Jind, Haryana", desc:"Expert in floriculture cultivation, polyhouse management, and growing techniques for premium flower bulb varieties.", bg:"from-green-50 to-emerald-50" },
    { emoji:"🌻", title:"Import & Operations", role:"Import Manager · Quality Control", loc:"Jind, Haryana", desc:"Leading import operations, Holland partner coordination, and quality control for all incoming consignments.", bg:"from-yellow-50 to-amber-50" },
    { emoji:"🌺", title:"Agronomist & Advisor", role:"Soil Health · Crop Advisory", loc:"Haryana & Punjab", desc:"Specialising in soil health, fertilizer programmes, and crop advisory services for farmers across North India.", bg:"from-rose-100 to-pink-50" },
    { emoji:"💧", title:"Infrastructure Specialist", role:"Polyhouse · Irrigation Systems", loc:"Haryana", desc:"Specialist for polyhouse design, irrigation systems, and turnkey greenhouse solutions across India.", bg:"from-blue-50 to-indigo-50" },
    { emoji:"🤝", title:"Farmer Relations", role:"Partnerships · Market Linkage", loc:"Pan India", desc:"Building and maintaining farmer partnerships, market linkages, and contract farming networks.", bg:"from-teal-50 to-cyan-50" },
  ];
  return (
    <section className="py-20 px-[7vw] bg-white" ref={ref}>
      <SectionHeader tag="The People Behind" title={<>Our <em className="text-magenta not-italic">Expert Team</em></>} desc="A passionate group of horticulturists, agronomists, and farming advocates united by one goal." center />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {members.map((m, i) => (
          <div key={m.title} className="reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${m.bg} flex items-center justify-center text-[6rem] mb-4 relative overflow-hidden cursor-pointer`}>
              <span className="transition-transform duration-400 group-hover:scale-105">{m.emoji}</span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-350">
                <p className="text-white/85 text-[12px] leading-relaxed">{m.desc}</p>
              </div>
            </div>
            <h3 className="font-cormorant text-[1.25rem] font-bold text-ink mb-1">{m.title}</h3>
            <div className="text-[11px] text-magenta font-bold uppercase tracking-wider mb-0.5">{m.role}</div>
            <div className="text-[12px] text-[#7a6f65]">📍 {m.loc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PARTNER ── */
export function AboutPartner() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[7vw] bg-cream-dark relative overflow-hidden" ref={ref}>
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 text-[18rem] opacity-4 pointer-events-none select-none">🇳🇱</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left">
          <SectionHeader tag="International Partnership" title={<>Backed by <em className="text-magenta not-italic">Holland&apos;s</em> Best</>} />
          <p className="text-[14px] text-[#4a3f35] leading-relaxed mb-6">Our success is bolstered by a key collaboration with Derck Schipper from Holland — bringing invaluable global expertise and fulfilling our specialised requirements, enhancing our position as a leading player in premium flower bulb import and cultivation.</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon:"🌷", title:"Premium Bulb Sourcing", sub:"Direct from Holland's finest growers" },
              { icon:"🔬", title:"Quality Certified", sub:"Holland agricultural standards" },
              { icon:"🌍", title:"Global Expertise", sub:"International floriculture know-how" },
              { icon:"📦", title:"20+ Flower Varieties", sub:"Exclusive import access" },
            ].map((ps) => (
              <div key={ps.title} className="bg-white rounded-xl p-4 border border-magenta/10 flex gap-3 items-start hover:shadow-magenta transition-shadow">
                <span className="text-xl">{ps.icon}</span>
                <div><div className="text-[12px] font-bold text-ink">{ps.title}</div><div className="text-[11px] text-[#7a6f65] mt-0.5">{ps.sub}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-right">
          <div className="bg-ink rounded-2xl p-8 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10">
              <div className="text-[2.8rem] mb-4">🇳🇱</div>
              <h3 className="font-cormorant text-[1.6rem] font-bold text-white leading-tight mb-1">Derck Schipper<br />Bloembollen/Export B.V.</h3>
              <div className="text-[12px] text-white/50 mb-5">Associate Partner · Bovenkarspel, Holland</div>
              <div className="h-px bg-white/8 mb-5" />
              <div className="text-[12px] text-white/60 leading-relaxed space-y-2">
                <p><span className="text-white/85 font-semibold">Address:</span> Stede Broecweg 10, 1611 HV Bovenkarspel, Holland</p>
                <p><span className="text-white/85 font-semibold">Specialisation:</span> Premium flower bulb cultivation, export, and international distribution — decades of expertise in Lily, Tulip, Hyacinth, and specialty bulbs.</p>
                <p><span className="text-white/85 font-semibold">Partnership since:</span> 2012</p>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 bg-gold/15 border border-gold/25 px-4 py-2 rounded-full text-gold-light text-[12px] font-bold tracking-wider">
                ⭐ Official Associate Partner Since 2012
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── COVERAGE ── */
export function AboutCoverage() {
  const ref = useScrollReveal();
  const regions = [
    { dot:"#b0257e", name:"Haryana & Punjab", desc:"Headquarters & Primary Hub" },
    { dot:"#2d7a3a", name:"Himachal Pradesh", desc:"Mountain Floriculture" },
    { dot:"#e8a020", name:"Uttarakhand", desc:"Hill Station Cultivation" },
    { dot:"#1565c0", name:"North East India", desc:"Floriculture Expansion" },
    { dot:"#6a1b9a", name:"South India (Ooty)", desc:"Premium Flower Growing" },
    { dot:"#c62828", name:"Pan India Delivery", desc:"Nationwide Distribution" },
  ];
  return (
    <section className="py-20 px-[7vw] bg-white" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal-left">
          <SectionHeader tag="Our Reach" title={<>From Lahaul Spiti <em className="text-magenta not-italic">to Ooty</em></>} desc="Our operations span the full breadth of India — serving farmers in every agro-climatic zone of the country." />
          <div className="space-y-2 mt-4">
            {regions.map((r) => (
              <div key={r.name} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream border border-transparent hover:bg-magenta-pale hover:border-magenta/15 hover:translate-x-1 transition-all duration-250 cursor-default">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: r.dot }} />
                <span className="font-bold text-[13px] text-ink flex-1">{r.name}</span>
                <span className="text-[12px] text-[#7a6f65]">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-right bg-cream-dark rounded-2xl p-8 border border-magenta/10 shadow-sm space-y-5">
          <div className="text-center">
            <div className="text-[5rem] mb-3">🗺️</div>
            <h3 className="font-cormorant text-[1.4rem] font-bold text-ink">Pan-India Presence</h3>
            <p className="text-[12px] text-[#7a6f65] mt-1">Serving farmers from 20+ states across India</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[["30+","Countries"],["20+","States"],["100K+","Sq. Mtr. Facility"]].map(([val,lbl]) => (
              <div key={lbl} className="text-center bg-white rounded-xl p-4 border border-magenta/10">
                <div className="font-cormorant font-bold text-[2rem] text-magenta leading-none">{val}</div>
                <div className="text-[11px] text-[#7a6f65] mt-1">{lbl}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-4 border border-magenta/8">
            <div className="font-bold text-[13px] text-ink mb-1">🏗️ PQ Facility</div>
            <p className="text-[12px] text-[#7a6f65] leading-relaxed">More than <strong className="text-magenta">1,00,000 sq. mtr.</strong> of Post-Quality facilities maintaining strict Standard Operating Procedures for every product.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ACHIEVEMENTS ── */
export function AboutAchievements() {
  return (
    <section className="py-14 px-[7vw] relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #7a1558 0%, #b0257e 55%, #d4409e 100%)" }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative z-10 border border-white/10">
        {[
          { icon:"📅", val:"15+", label:"Years of Excellence" },
          { icon:"🌍", val:"30+", label:"Countries Served" },
          { icon:"📦", val:"100K+", label:"Orders Fulfilled" },
          { icon:"👨‍🌾", val:"1000+", label:"Happy Clients" },
        ].map((a, i) => (
          <div key={a.label} className={`text-center py-8 px-4 border-r border-r-white/10 last:border-r-0 hover:bg-white/7 transition-colors`}>
            <div className="text-[1.3rem] mb-2">{a.icon}</div>
            <div className="font-cormorant font-bold text-[3rem] text-white leading-none">{a.val}</div>
            <div className="text-[12px] text-white/60 mt-1">{a.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── VALUES ── */
export function AboutValues() {
  const ref = useScrollReveal();
  return (
    <section className="py-20 px-[7vw] bg-cream" ref={ref}>
      <SectionHeader tag="Our Core Values" title={<>What We <em className="text-magenta not-italic">Stand For</em></>} desc="The principles that guide every relationship, every product, and every partnership we build." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
        {[
          { icon:"🌱", bg:"bg-magenta/7", title:"Quality First, Always", desc:"Every bulb, every product, every service is held to the highest standard — backed by Holland certification and our 1,00,000+ sq. mtr. PQ facility with strict SOPs." },
          { icon:"🤝", bg:"bg-green/7", title:"Farmer at the Centre", desc:"We are not just suppliers — we are partners. From cultivation to market, we stand alongside every farmer ensuring their success is our success." },
          { icon:"🔬", bg:"bg-gold/10", title:"Innovation & Knowledge", desc:"We invest in training, tissue culture, and technology to stay ahead. Our partnerships with global experts bring cutting-edge floriculture knowledge to Indian farmers." },
          { icon:"🌍", bg:"bg-green-dark/7", title:"Sustainability & Community", desc:"Improving soil health and crop quality while building a thriving farming community — our work creates lasting positive impact on both land and livelihoods." },
        ].map((v, i) => (
          <div key={v.title} className="reveal flex gap-5 items-start bg-white p-6 rounded-2xl border border-magenta/8 hover:-translate-y-1 hover:shadow-magenta hover:border-magenta/20 transition-all duration-300"
            style={{ transitionDelay: `${i * 80}ms` }}>
            <div className={`w-12 h-12 min-w-12 rounded-xl flex items-center justify-center text-xl ${v.bg}`}>{v.icon}</div>
            <div>
              <h3 className="font-cormorant text-[1.2rem] font-bold text-ink mb-2">{v.title}</h3>
              <p className="text-[13px] text-[#7a6f65] leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CTA ── */
export function AboutCTA() {
  return (
    <section className="py-20 px-[7vw] bg-cream-dark text-center">
      <div className="max-w-[780px] mx-auto bg-ink rounded-[28px] px-[4rem] py-[5rem] relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10">
          <div className="text-[5rem] mb-5 animate-float">🌸</div>
          <h2 className="font-cormorant text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white mb-3">
            Ready to <em className="text-gold-light">Grow Together?</em>
          </h2>
          <p className="text-white/65 text-[14px] leading-relaxed mb-7 max-w-md mx-auto">
            Whether you&apos;re a farmer, trader, or business exploring agri-solutions — Red Mirchi Associates is your trusted partner from seed to success.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-magenta text-white font-bold text-[14px] px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(176,37,126,0.4)] hover:-translate-y-0.5 transition-transform">
              🌱 Get Free Consultation
            </Link>
            <Link href="tel:+917206317456" className="inline-flex items-center gap-2 bg-white/8 text-white border border-white/2 font-semibold text-[14px] px-6 py-3.5 rounded-full hover:bg-white/14 transition-colors">
              📞 +91-7206317456
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
