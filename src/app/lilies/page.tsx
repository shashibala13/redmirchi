import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiliesContent from "@/components/sections/lilies/LiliesContent";

export const metadata: Metadata = {
  title: "Lily Bulb Collection",
  description: "Beautiful Lilies for your loved ones — Asiatic Lily (6 bulbs/₹350) and Oriental Lily (3 premium bulbs/₹350). Holland-certified, available in Pink, White, Yellow, Orange, Red & Mix.",
};

export default function LiliesPage() {
  return (
    <>
      <Navbar />
      <LiliesContent />
      <Footer />
    </>
  );
}
