import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutVision from "@/components/sections/about/AboutVision";
import AboutServices from "@/components/sections/about/AboutServices";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutPartner from "@/components/sections/about/AboutPartner";
import AboutCoverage from "@/components/sections/about/AboutCoverage";
import AboutAchievements from "@/components/sections/about/AboutAchievements";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Established in 2009 in Jind, Haryana — Red Mirchi Associates is India's trusted agro-horti floriculture solution provider. Learn our story, vision, and team.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutServices />
      <AboutTeam />
      <AboutPartner />
      <AboutCoverage />
      <AboutAchievements />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </>
  );
}
