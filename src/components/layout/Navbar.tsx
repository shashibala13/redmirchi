"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] flex items-center justify-between
      px-[5vw] h-20 transition-all duration-300
      bg-[rgba(253,248,242,0.96)] backdrop-blur-[16px]
      border-b border-magenta/10 ${scrolled ? "shadow-md" : ""}`}>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="relative h-20 w-48">
          <Image src="/logo-redmirchi.png" alt="Red Mirchi Associates" fill className="object-contain object-left" priority />
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-5 list-none">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <li key={link.href}>
              <Link href={link.href}
                className={`text-[13px] font-medium transition-colors duration-200 relative
                  after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:bg-magenta
                  after:transition-all after:duration-250
                  ${isActive ? "text-magenta after:right-0" : "text-[#4a3f35] hover:text-magenta after:right-full hover:after:right-0"}`}>
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="tel:+917206317456"
            className="flex items-center gap-1.5 text-[13px] font-bold text-white bg-magenta
              px-4 py-2 rounded-full shadow-[0_4px_16px_rgba(176,37,126,0.3)]
              hover:bg-magenta-deep transition-colors duration-200">
            <Phone size={13} /> Call Us
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} className="text-magenta" /> : <Menu size={22} className="text-magenta" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-0 right-0 bg-cream border-b border-magenta/10
          shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col gap-2 px-[5vw] py-5 lg:hidden z-[998]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-sm font-medium py-1 transition-colors
                ${pathname === link.href ? "text-magenta" : "text-[#4a3f35] hover:text-magenta"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="tel:+917206317456"
            className="flex items-center gap-1.5 text-sm font-bold text-white bg-magenta
              px-4 py-2 rounded-full w-fit mt-1">
            <Phone size={13} /> +91-7206317456
          </Link>
        </div>
      )}
    </nav>
  );
}
