import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Red Mirchi Associates — One Stop Solution For Horticulture",
    template: "%s | Red Mirchi Associates",
  },
  description:
    "India's leading importer, grower & supplier of premium Holland-certified flower bulbs. Specialising in Lily bulbs, polyhouse infrastructure, seeds, irrigation, fertilizers & agri consulting.",
  keywords: [
    "Red Mirchi Associates", "flower bulbs India", "lily bulbs", "horticulture India",
    "floriculture", "polyhouse", "asiatic lily", "oriental lily", "Jind Haryana",
    "agri consulting", "Holland bulbs", "tulip bulbs India",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Red Mirchi Associates — One Stop Solution For Horticulture",
    description: "Premium Holland-certified flower bulbs, polyhouse setup & agri consulting across India.",
    url: "https://www.redmirchi.org",
    siteName: "Red Mirchi Associates",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${bebas.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
