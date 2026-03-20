import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CatalogueContent from "@/components/sections/catalogue/CatalogueContent";

export const metadata: Metadata = {
  title: "Flower Bulb Catalogue",
  description: "Browse our complete range of Holland-certified flower bulbs — Pot Lily, Asiatic Lily, Oriental Lily, Calla Lily, Tulip, Hyacinthus, Crocus, Muscari, Iris, Freesia and more.",
};

export default function CataloguePage() {
  return (
    <>
      <Navbar />
      <CatalogueContent />
      <Footer />
    </>
  );
}
