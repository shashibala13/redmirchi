import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0d0b09] text-[rgba(255,255,255,0.45)]">
      <div className="max-w-[1280px] mx-auto px-[5vw] py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="relative h-16 w-52 mb-4">
            <Image src="/logo-redmirchi.png" alt="Red Mirchi Associates" fill className="object-contain object-left" />
          </div>
          <p className="text-[13px] leading-relaxed max-w-xs">
            {COMPANY.tagline}. Empowering India&apos;s farmers since 2009 with premium agro-horti solutions from Jind, Haryana.
          </p>
          <div className="flex gap-2 mt-4">
            {[
              { emoji: "📘", label: "Facebook", href: "https://www.facebook.com/share/1AQr8W8nK7/?mibextid=wwXIfr" },
              { emoji: "📸", label: "Instagram", href: "https://www.instagram.com/redmirchi_associates?igsh=MW5ibjB6NHU3OGx0eA==" },
              { emoji: "💬", label: "WhatsApp", href: `https://wa.me/${COMPANY.phone.replace(/\D/g, "")}` },
            ].map((s) => (
              <Link key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center
                  text-base hover:bg-magenta transition-colors duration-200"
                aria-label={s.label}>
                {s.emoji}
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-[13px] font-bold mb-3 tracking-wide">Navigation</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] hover:text-magenta-light transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-[13px] font-bold mb-3 tracking-wide">Contact</h4>
          <div className="space-y-2 text-[13px]">
            <div><Link href={`tel:${COMPANY.phone}`} className="hover:text-magenta-light transition-colors">{COMPANY.phone}</Link></div>
            <div><Link href={`tel:${COMPANY.phone2}`} className="hover:text-magenta-light transition-colors">{COMPANY.phone2}</Link></div>
            <div><Link href={`mailto:${COMPANY.email}`} className="hover:text-magenta-light transition-colors">{COMPANY.email}</Link></div>
            <div className="pt-1 text-[12px] leading-relaxed">{COMPANY.address}</div>
            <div className="text-[12px] text-[rgba(255,255,255,0.35)]">🇳🇱 Holland Partner: {COMPANY.partnerName}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 px-[5vw] text-center text-[12px]">
        © {new Date().getFullYear()} {COMPANY.name} · Jind, Haryana, India · Est. {COMPANY.established}
      </div>
    </footer>
  );
}
