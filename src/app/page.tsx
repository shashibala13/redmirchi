import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeStats from "@/components/sections/home/HomeStats";
import HomeOfferings from "@/components/sections/home/HomeOfferings";
import HomeFeaturedFlowers from "@/components/sections/home/HomeFeaturedFlowers";
import HomeAboutAndTestimonials from "@/components/sections/home/HomeAboutAndTestimonials";

export const metadata: Metadata = {
  title: "Red Mirchi Associates — One Stop Solution For Horticulture",
  description: "India's leading importer, grower & supplier of premium Holland-certified flower bulbs. Polyhouse, irrigation, seeds, fertilizers & agri consulting across India.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeStats />
      <HomeOfferings />
      <HomeFeaturedFlowers />
      <HomeAboutAndTestimonials />
      <Footer />
    </>
  );
}
