import Link from "next/link";
import { Phone, Mail, Globe, MessageCircle, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const hours = [
  { day:"Monday", time:"9:00 AM – 6:00 PM", open:true },
  { day:"Tuesday", time:"9:00 AM – 6:00 PM", open:true },
  { day:"Wednesday", time:"9:00 AM – 6:00 PM", open:true },
  { day:"Thursday", time:"9:00 AM – 6:00 PM", open:true },
  { day:"Friday", time:"9:00 AM – 6:00 PM", open:true },
  { day:"Saturday", time:"9:00 AM – 2:00 PM", open:true },
  { day:"Sunday", time:"Closed", open:false },
];

function InfoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-[18px] border border-magenta/10 shadow-sm hover:-translate-y-1 hover:shadow-magenta transition-all duration-300 ${className}`}>{children}</div>;
}

export default function ContactInfoPanel() {
  return (
    <div className="flex flex-col gap-5 lg:sticky lg:top-20">
      {/* Contacts */}
      <InfoCard>
        <div className="p-6">
          <h3 className="font-cormorant text-[1.2rem] font-bold text-ink mb-4 flex items-center gap-2"><Phone size={17} className="text-magenta" /> Contact Details</h3>
          <div className="space-y-4">
            {[
              { icon:<Phone size={17} className="text-magenta"/>, label:"Helpline", content:<><Link href={`tel:${COMPANY.phone}`} className="text-magenta font-semibold text-[14px] block hover:text-magenta-deep">{COMPANY.phone}</Link><Link href={`tel:${COMPANY.phone2}`} className="text-magenta font-semibold text-[14px] block hover:text-magenta-deep">{COMPANY.phone2}</Link></> },
              { icon:<Mail size={17} className="text-magenta"/>, label:"Email", content:<><Link href={`mailto:${COMPANY.email}`} className="text-magenta font-semibold text-[14px] block hover:text-magenta-deep">{COMPANY.email}</Link><span className="text-[12px] text-[#7a6f65]">We respond within 24–48 hrs</span></> },
              { icon:<Globe size={17} className="text-magenta"/>, label:"Website", content:<><Link href="https://www.redmirchi.org" target="_blank" className="text-magenta font-semibold text-[14px] block hover:text-magenta-deep">{COMPANY.website}</Link><Link href="https://www.redmirchiflowerbulbs.in" target="_blank" className="text-magenta font-semibold text-[13px] block hover:text-magenta-deep">{COMPANY.website2}</Link></> },
              { icon:<MessageCircle size={17} className="text-magenta"/>, label:"WhatsApp", content:<><Link href={`https://wa.me/${COMPANY.phone.replace(/\D/g,"")}`} target="_blank" className="text-magenta font-semibold text-[14px] block hover:text-magenta-deep">Chat on WhatsApp</Link><span className="text-[12px] text-[#7a6f65]">Quick replies · Mon–Sat</span></> },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-magenta/8 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div><div className="text-[12px] font-bold text-ink mb-0.5">{item.label}</div>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </InfoCard>

      {/* Hours */}
      <InfoCard>
        <div className="p-6">
          <h3 className="font-cormorant text-[1.2rem] font-bold text-ink mb-4 flex items-center gap-2"><Clock size={17} className="text-magenta" /> Office Hours</h3>
          <div className="space-y-1.5">
            {hours.map(h => (
              <div key={h.day} className="flex items-center justify-between text-[13px] px-3 py-2 rounded-xl odd:bg-cream">
                <span className="font-semibold text-ink">{h.day}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#4a3f35]">{h.time}</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${h.open ? "bg-green-pale text-green" : "bg-red-50 text-red-500"}`}>{h.open ? "Open" : "Closed"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfoCard>

      {/* Map */}
      <div className="bg-white rounded-[18px] border border-magenta/10 shadow-sm overflow-hidden">
        <div className="aspect-[16/7] bg-gradient-to-br from-magenta-pale to-orange-50 flex flex-col items-center justify-center gap-2"
          style={{ backgroundImage: "radial-gradient(circle, rgba(176,37,126,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
          <span className="text-[3rem] animate-float">📍</span>
          <p className="text-[13px] font-semibold text-[#4a3f35]">Jind, Haryana, India</p>
        </div>
        <div className="flex items-center gap-3 px-5 py-4 border-t border-magenta/10">
          <MapPin size={18} className="text-magenta flex-shrink-0" />
          <div>
            <strong className="text-[13px] text-ink block">Registered & Corporate Office</strong>
            <span className="text-[12px] text-[#7a6f65]">{COMPANY.address}</span>
            <Link href="https://maps.google.com/?q=Jind+Haryana+India" target="_blank" className="text-[12px] text-magenta font-semibold block mt-1 hover:underline">📍 Open in Google Maps →</Link>
          </div>
        </div>
      </div>

      {/* Social */}
      <InfoCard>
        <div className="p-6">
          <h3 className="font-cormorant text-[1.2rem] font-bold text-ink mb-3">🌿 Follow Us</h3>
          <p className="text-[13px] text-[#7a6f65] mb-4 leading-relaxed">Stay updated with new varieties, growing tips, and offers.</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label:"Facebook", emoji:"📘", href:"#", color:"#1877f2" },
              { label:"Instagram", emoji:"📸", href:"#", color:"#e1306c" },
              { label:"YouTube", emoji:"▶️", href:"#", color:"#ff0000" },
              { label:"WhatsApp", emoji:"💬", href:`https://wa.me/${COMPANY.phone.replace(/\D/g,"")}`, color:"#25d366" },
            ].map(s => (
              <Link key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-bold border transition-all hover:-translate-y-0.5"
                style={{ color:s.color, borderColor:`${s.color}33`, background:`${s.color}0d` }}>
                {s.emoji} {s.label}
              </Link>
            ))}
          </div>
        </div>
      </InfoCard>

      {/* Holland Partner */}
      <InfoCard>
        <div className="p-5 bg-gradient-to-br from-magenta/4 to-green/3 rounded-[18px]">
          <h3 className="font-cormorant text-[1.1rem] font-bold text-ink mb-3">🇳🇱 Associate Partner</h3>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 min-w-12 rounded-xl bg-magenta/8 flex items-center justify-center text-xl flex-shrink-0">🌷</div>
            <div>
              <strong className="text-[13px] text-ink block mb-1">{COMPANY.partnerName}</strong>
              <span className="text-[12px] text-[#7a6f65] leading-relaxed">{COMPANY.partnerAddress}</span>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
