import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MediaContent from "@/components/sections/media/MediaContent";

export const metadata: Metadata = {
  title: "Media Centre",
  description: "Explore Red Mirchi Associates' gallery, projects, team, events, and client stories. A visual journey through India's leading agro-horti floriculture company.",
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <MediaContent />
      <Footer />
    </>
  );
}
