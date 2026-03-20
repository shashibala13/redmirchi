"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TEAM_MEMBERS = [
  { emoji:"🌱", name:"Founder & Director", role:"Agro-Horti Specialist", bg:"from-pink-100 to-rose-50", loc:"Jind, Haryana" },
  { emoji:"🌿", name:"Head of Cultivation", role:"Floriculture Expert", bg:"from-green-50 to-emerald-50", loc:"Jind, Haryana" },
  { emoji:"🌻", name:"Import & Operations", role:"Quality Control", bg:"from-yellow-50 to-amber-50", loc:"Jind, Haryana" },
  { emoji:"🌺", name:"Agronomist", role:"Soil Health & Crop Advisory", bg:"from-rose-100 to-pink-50", loc:"Haryana & Punjab" },
  { emoji:"💧", name:"Infrastructure Specialist", role:"Polyhouse & Irrigation", bg:"from-blue-50 to-indigo-50", loc:"Haryana" },
  { emoji:"🤝", name:"Farmer Relations", role:"Partnerships & Markets", bg:"from-teal-50 to-cyan-50", loc:"Pan India" },
  { emoji:"📋", name:"Consulting Head", role:"Agri Advisory", bg:"from-violet-100 to-purple-50", loc:"Delhi NCR" },
  { emoji:"🎓", name:"Training Coordinator", role:"Skill Development", bg:"from-orange-50 to-amber-50", loc:"Pan India" },
];

function TeamSection() {
  return (
    <div id="team-section" className="mb-16 scroll-mt-[130px]">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="section-tag mb-1">The People</div>
          <h2 className="section-title-serif">Meet the <em className="text-magenta not-italic">Team</em></h2>
        </div>
        <span className="text-[13px] text-[#7a6f65] font-semibold">{TEAM_MEMBERS.length} Members</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {TEAM_MEMBERS.map((m, i) => (
          <div key={m.name}
            className="bg-white rounded-2xl border border-magenta/8 overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-magenta transition-all duration-300 group cursor-pointer"
            style={{ animation: `fadeUp 0.5s ease forwards`, animationDelay: `${i * 80}ms`, opacity: 0 }}>
            <div className={`aspect-square bg-gradient-to-br ${m.bg} flex items-center justify-center text-[3.5rem] relative overflow-hidden`}>
              <span className="group-hover:scale-110 transition-transform duration-300">{m.emoji}</span>
              <div className="absolute inset-0 bg-magenta/0 group-hover:bg-magenta/10 transition-colors duration-300 flex items-end justify-center pb-2">
                <span className="text-white font-bold text-[10px] uppercase tracking-wider bg-magenta/80 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile
                </span>
              </div>
            </div>
            <div className="p-3.5">
              <div className="font-bold text-[13px] text-ink mb-0.5">{m.name}</div>
              <div className="text-[11px] text-magenta font-bold uppercase tracking-wider mb-0.5">{m.role}</div>
              <div className="text-[11px] text-[#7a6f65]">📍 {m.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const GALLERY_ITEMS = [
  { id:1, cat:"lilies", label:"Asiatic Lily — Pink", emoji:"🌸", bg:"from-pink-100 to-rose-50", wide:false, tall:true },
  { id:2, cat:"farm", label:"Polyhouse Facility", emoji:"🏡", bg:"from-green-100 to-emerald-50", wide:true, tall:false },
  { id:3, cat:"lilies", label:"Oriental Lily — White", emoji:"🤍", bg:"from-slate-100 to-blue-50", wide:false, tall:false },
  { id:4, cat:"tulips", label:"Tulip Collection", emoji:"🌷", bg:"from-purple-100 to-violet-50", wide:false, tall:false },
  { id:5, cat:"farm", label:"Farmer Training", emoji:"🎓", bg:"from-amber-100 to-yellow-50", wide:false, tall:false },
  { id:6, cat:"lilies", label:"Calla Lily — Orange", emoji:"🟠", bg:"from-orange-100 to-amber-50", wide:true, tall:false },
  { id:7, cat:"bulbs", label:"Holland Bulbs", emoji:"🌱", bg:"from-lime-100 to-green-50", wide:false, tall:false },
  { id:8, cat:"tulips", label:"Tulip — Queen of Night", emoji:"🖤", bg:"from-gray-200 to-slate-100", wide:false, tall:false },
  { id:9, cat:"farm", label:"Contract Farming", emoji:"🤝", bg:"from-teal-100 to-cyan-50", wide:false, tall:false },
  { id:10, cat:"lilies", label:"Pot Lily — Yellow", emoji:"💛", bg:"from-yellow-100 to-amber-50", wide:false, tall:false },
  { id:11, cat:"bulbs", label:"Bulb Quality Check", emoji:"🔬", bg:"from-blue-100 to-indigo-50", wide:true, tall:false },
  { id:12, cat:"tulips", label:"Tulip — Mixed", emoji:"🌈", bg:"from-rose-100 to-yellow-50", wide:false, tall:false },
];

const PROJECTS = [
  { emoji:"🌸", title:"Asiatic Lily Cultivation — Uttarakhand", loc:"Uttarakhand, India", year:"2023", tag:"Floriculture", desc:"Large-scale Asiatic Lily cultivation project across 5 hectares in the Uttarakhand hills, producing premium cut flowers for metro markets.", stats:[["5 Ha","Area"],["12","Farmers"],["8 Tons","Yield"]] },
  { emoji:"🏡", title:"Polyhouse Setup — Haryana", loc:"Jind, Haryana", year:"2023", tag:"Infrastructure", desc:"Turnkey polyhouse installation for a progressive farmer — climate-controlled growing facility producing year-round lily and tulip crops.", stats:[["2000 Sq.M","Area"],["All-Season","Growing"],["40%","Yield Boost"]] },
  { emoji:"🌷", title:"Holland Tulip Import & Distribution", loc:"Pan India", year:"2024", tag:"Import & Distribution", desc:"Importing and distributing 15+ tulip varieties from Holland partner Derck Schipper to 200+ farmers across 8 Indian states.", stats:[["15+","Varieties"],["200+","Farmers"],["8","States"]] },
  { emoji:"🎓", title:"Farmer Training Programme — Punjab", loc:"Punjab, India", year:"2023", tag:"Training", desc:"Three-day intensive training programme for 60+ farmers on lily bulb cultivation, care practices, and market linkage.", stats:[["60+","Farmers"],["3 Days","Duration"],["Holland","Expert-led"]] },
  { emoji:"🌺", title:"Oriental Lily Project — North East", loc:"Manipur & Meghalaya", year:"2024", tag:"Floriculture", desc:"Pioneering Oriental Lily cultivation in North East India, working with local farming communities to establish a new floriculture corridor.", stats:[["2 States","Covered"],["30+","Farmers"],["New Market","Opened"]] },
  { emoji:"💧", title:"Drip Irrigation — Contract Farming", loc:"Haryana & Punjab", year:"2023", tag:"Agri Infrastructure", desc:"Installing modern drip irrigation systems for contract farmers, reducing water usage by 35% while improving flower quality and yield.", stats:[["35%","Water Saved"],["50 Farms","Covered"],["100K+","Sq.M"]] },
];

const EVENTS = [
  { year:"2024", title:"Holland Bulb Expo Participation", loc:"Amsterdam, Netherlands", desc:"Red Mirchi Associates participated in the international Holland Bulb Expo, strengthening ties with Derck Schipper B.V. and exploring new varieties for the Indian market." },
  { year:"2024", title:"Agri-Horti Conclave — New Delhi", loc:"New Delhi, India", desc:"Presented at the National Agri-Horti Conclave, showcasing polyhouse floriculture innovations and contract farming model for Indian farmers." },
  { year:"2023", title:"Farmer Training Camp — Jind", loc:"Jind, Haryana", desc:"Hosted a three-day farmer training camp with 100+ attendees. Covered lily cultivation, irrigation best practices, and market linkage strategies." },
  { year:"2023", title:"Floriculture Exhibition — Chandigarh", loc:"Chandigarh, India", desc:"Showcased Holland-certified flower bulbs including Lily, Tulip, Hyacinthus, and Calla varieties. Attracted over 200 prospective farmer partners." },
  { year:"2022", title:"North East Floriculture Mission", loc:"Manipur & Meghalaya", desc:"Launched a floriculture mission in collaboration with state governments to introduce premium lily cultivation in North East India." },
];

const CLIENTS = [
  { name:"Haryana Floriculture Board", type:"Government", emoji:"🏛️", bg:"from-blue-100 to-indigo-50" },
  { name:"Progressive Farmers Network", type:"Farmer Group", emoji:"👨‍🌾", bg:"from-green-100 to-emerald-50" },
  { name:"Punjab Agri Co-op", type:"Cooperative", emoji:"🤝", bg:"from-yellow-100 to-amber-50" },
  { name:"Uttarakhand Horticulture Dept.", type:"Government", emoji:"🏔️", bg:"from-teal-100 to-cyan-50" },
  { name:"North East Growers Assoc.", type:"Association", emoji:"🌿", bg:"from-lime-100 to-green-50" },
  { name:"Premium Florists India", type:"Trade Client", emoji:"💐", bg:"from-pink-100 to-rose-50" },
  { name:"Manipur Farmers Club", type:"Farmer Group", emoji:"🌸", bg:"from-fuchsia-100 to-pink-50" },
  { name:"Chandigarh Horticulture Expo", type:"Exhibition", emoji:"🌷", bg:"from-purple-100 to-violet-50" },
];

// ── Gallery ──────────────────────────────────────────────────────────────────
function GallerySection({ filter }: { filter: string }) {
  const ref = useScrollReveal();
  const items = filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === filter);

  return (
    <div id="gallery-section" className="mb-16 scroll-mt-[130px]" ref={ref}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
        {items.map((item, i) => (
          <div key={item.id}
            className={`reveal rounded-2xl bg-gradient-to-br ${item.bg} flex flex-col items-center justify-end pb-3 relative overflow-hidden cursor-pointer group border border-white/60 shadow-sm hover:shadow-magenta hover:-translate-y-1 transition-all duration-300
              ${item.wide ? "col-span-2" : ""} ${item.tall ? "row-span-2" : ""}`}
            style={{ transitionDelay: `${i * 40}ms` }}>
            <div className="absolute inset-0 flex items-center justify-center text-[4rem] group-hover:scale-110 transition-transform duration-400">
              {item.emoji}
            </div>
            <div className="relative z-10 w-full px-3">
              <div className="bg-black/55 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-white/20 border border-white/30 rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[12px]">
              ⬛
            </div>
          </div>
        ))}
        {/* Add photo placeholder */}
        <div className="reveal rounded-2xl border-2 border-dashed border-magenta/25 bg-magenta/3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-magenta/50 hover:bg-magenta/6 transition-all duration-200">
          <div className="text-[2rem] text-magenta/40">📷</div>
          <p className="text-[12px] font-bold text-magenta/50 text-center px-3">Add Your Photo</p>
        </div>
      </div>
    </div>
  );
}

// ── Projects ─────────────────────────────────────────────────────────────────
function ProjectsSection() {
  const ref = useScrollReveal();
  return (
    <div id="projects" className="mb-16 scroll-mt-[130px]" ref={ref}>
      <div className="section-hdr flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="section-tag mb-1">Featured Work</div>
          <h2 className="section-title-serif">Our <em className="text-magenta not-italic">Projects</em></h2>
        </div>
        <span className="text-[13px] text-[#7a6f65] font-semibold">{PROJECTS.length} Projects</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => (
          <div key={p.title} className="reveal bg-white rounded-2xl border border-magenta/8 overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-magenta transition-all duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="aspect-[16/9] bg-gradient-to-br from-magenta-pale to-green-pale flex items-center justify-center text-[4rem]">
              {p.emoji}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-magenta bg-magenta/8 px-2.5 py-0.5 rounded-full uppercase tracking-wider">{p.tag}</span>
                <span className="text-[11px] text-[#7a6f65]">{p.year}</span>
              </div>
              <h3 className="font-cormorant font-bold text-[1.1rem] text-ink mb-1 leading-tight">{p.title}</h3>
              <div className="text-[12px] text-[#7a6f65] mb-3 flex items-center gap-1">📍 {p.loc}</div>
              <p className="text-[12px] text-[#4a3f35] leading-relaxed mb-4">{p.desc}</p>
              <div className="grid grid-cols-3 gap-2 border-t border-magenta/8 pt-3">
                {p.stats.map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-cormorant font-bold text-[1.1rem] text-magenta leading-none">{v}</div>
                    <div className="text-[10px] text-[#7a6f65] mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Events ───────────────────────────────────────────────────────────────────
function EventsSection() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();
  return (
    <div id="events-section" className="mb-16 scroll-mt-[130px]" ref={ref}>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="section-tag mb-1">Events & Activities</div>
          <h2 className="section-title-serif">News & <em className="text-magenta not-italic">Events</em></h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6">
        {/* Event list */}
        <div className="space-y-0.5">
          {EVENTS.map((e, i) => (
            <button key={e.title} onClick={() => setActive(i)}
              className={`w-full text-left flex gap-4 items-start p-4 rounded-xl transition-all duration-200 border-l-[3px]
                ${active === i ? "bg-magenta-pale border-magenta" : "bg-cream border-transparent hover:bg-magenta/4 hover:border-magenta/30"}`}>
              <div className={`font-bebas text-[1.2rem] min-w-[50px] transition-colors ${active === i ? "text-magenta" : "text-[#7a6f65]"}`}>{e.year}</div>
              <div>
                <div className={`font-bold text-[13px] leading-tight mb-0.5 ${active === i ? "text-magenta-deep" : "text-ink"}`}>{e.title}</div>
                <div className="text-[12px] text-[#7a6f65]">📍 {e.loc}</div>
              </div>
            </button>
          ))}
        </div>
        {/* Event preview */}
        <div className="bg-gradient-to-br from-magenta-pale to-cream rounded-2xl p-7 border border-magenta/12 hidden lg:block">
          <div className="text-[3.5rem] mb-4">{["🏛️","🎤","🎓","🌷","🌿"][active]}</div>
          <div className="font-bebas text-[1rem] text-magenta tracking-[0.15em] mb-2">{EVENTS[active].year}</div>
          <h3 className="font-cormorant font-bold text-[1.5rem] text-ink mb-2 leading-tight">{EVENTS[active].title}</h3>
          <div className="text-[13px] text-magenta font-semibold mb-4">📍 {EVENTS[active].loc}</div>
          <p className="text-[13px] text-[#4a3f35] leading-relaxed">{EVENTS[active].desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── Clients ──────────────────────────────────────────────────────────────────
function ClientsSection() {
  const ref = useScrollReveal();
  return (
    <div id="clients-section" className="mb-16 scroll-mt-[130px]" ref={ref}>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="section-tag mb-1">Trusted Partners</div>
          <h2 className="section-title-serif">Our <em className="text-magenta not-italic">Clients</em></h2>
        </div>
        <span className="text-[13px] text-[#7a6f65] font-semibold">{CLIENTS.length} Partners shown</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {CLIENTS.map((c, i) => (
          <div key={c.name} className="reveal bg-white rounded-2xl border border-magenta/8 p-5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-magenta transition-all duration-300 shadow-sm"
            style={{ transitionDelay: `${i * 50}ms` }}>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.bg} flex items-center justify-center text-[2rem] mb-3`}>{c.emoji}</div>
            <div className="font-bold text-[13px] text-ink mb-1 leading-tight">{c.name}</div>
            <div className="text-[11px] text-magenta font-bold uppercase tracking-wider">{c.type}</div>
          </div>
        ))}
        {/* Add client placeholder */}
        <div className="reveal bg-magenta/3 rounded-2xl border-2 border-dashed border-magenta/20 p-5 flex flex-col items-center text-center hover:bg-magenta/6 transition-colors cursor-pointer">
          <div className="w-16 h-16 rounded-2xl bg-magenta/10 flex items-center justify-center text-[2rem] mb-3">➕</div>
          <div className="text-[13px] text-magenta font-bold mb-1">Become a Partner</div>
          <div className="text-[11px] text-[#7a6f65]">Join our network</div>
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
const FILTER_TABS = [
  { id:"all", label:"All" },
  { id:"lilies", label:"🌸 Lilies" },
  { id:"tulips", label:"🌷 Tulips" },
  { id:"farm", label:"🌿 Farm" },
  { id:"bulbs", label:"🌱 Bulbs" },
];

export default function MediaContent() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      {/* Hero */}
      <section className="pt-16 relative overflow-hidden min-h-[55vh] flex items-center"
        style={{ background: "linear-gradient(160deg, #0d0b09 0%, #1a160e 40%, #12100e 100%)" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        {/* Hero bento grid background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 grid grid-cols-2 grid-rows-2 opacity-15 pointer-events-none overflow-hidden">
          {[
            { emoji:"🌸", bg:"from-magenta to-magenta-deep" },
            { emoji:"🌿", bg:"from-green to-green-dark" },
            { emoji:"🌷", bg:"from-purple to-purple-deep" },
            { emoji:"📅", bg:"from-gold-dark to-earth" },
          ].map((cell) => (
            <div key={cell.emoji} className={`flex items-center justify-center text-[5rem] bg-gradient-to-br ${cell.bg}`}>{cell.emoji}</div>
          ))}
        </div>
        <div className="relative z-10 px-[7vw] py-20 max-w-2xl">
          <div className="font-bebas text-[0.85rem] tracking-[0.25em] text-gold-light mb-3">—— Red Mirchi Associates</div>
          <h1 className="font-cormorant font-bold text-white leading-[0.95] text-[clamp(3.5rem,8vw,7rem)] mb-5">
            Media<br /><span className="text-magenta-light">Centre</span>
          </h1>
          <p className="text-white/60 text-[14px] leading-relaxed mb-6 max-w-md">
            A visual journey through our projects, team, events, and the farmers we serve. Explore India&apos;s leading agro-horti floriculture company in action.
          </p>
          <div className="flex flex-wrap gap-3">
            {[["📸","Gallery"],["🏗️","Projects"],["👥","Team"],["📅","Events"],["🤝","Clients"]].map(([e,l]) => (
              <a key={l} href={`#${l.toLowerCase()}-section`}
                className="flex items-center gap-1.5 bg-white/8 border border-white/14 text-white/75 text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-white/14 hover:-translate-y-0.5 transition-all duration-200">
                {e} {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div id="filter-bar" className="sticky top-16 z-[90] bg-white border-b border-magenta/10 shadow-sm">
        <div className="flex px-[5vw] overflow-x-auto scrollbar-none">
          {FILTER_TABS.map(tab => (
            <button key={tab.id} onClick={() => setFilter(tab.id)}
              className={`px-5 py-3.5 text-[13px] font-semibold whitespace-nowrap border-b-[3px] transition-all duration-200
                ${filter === tab.id ? "text-magenta border-magenta" : "text-[#7a6f65] border-transparent hover:text-ink"}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1280px] mx-auto px-[5vw] py-12">
        {/* Gallery section header */}
        <div id="gallery-section" className="flex items-end justify-between mb-6 flex-wrap gap-3 scroll-mt-[130px]">
          <div>
            <div className="section-tag mb-1">Visual Story</div>
            <h2 className="section-title-serif">Our <em className="text-magenta not-italic">Gallery</em></h2>
          </div>
          <div className="flex gap-2">
            <span className="text-[13px] text-[#7a6f65] font-semibold">{filter === "all" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.cat === filter).length} photos</span>
          </div>
        </div>

        <GallerySection filter={filter} />
        <ProjectsSection />

        {/* Team section */}
        <TeamSection />

        <EventsSection />
        <ClientsSection />

        {/* CTA */}
        <div className="mt-8 bg-ink rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10">
            <div className="text-[3.5rem] mb-3 animate-float">🌸</div>
            <h2 className="font-cormorant font-bold text-white text-[2rem] mb-2">Want to be Part of Our Story?</h2>
            <p className="text-white/60 text-[13px] mb-5 max-w-sm mx-auto leading-relaxed">Join our growing network of farmers, partners, and clients. Let&apos;s grow together.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link href="/contact" className="btn-magenta text-[13px] px-6 py-3">🌱 Get In Touch</Link>
              <Link href="/about" className="inline-flex items-center gap-2 bg-white/8 text-white border border-white/2 font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-white/14 transition-colors">
                Learn Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
