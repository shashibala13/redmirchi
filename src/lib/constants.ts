// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Catalogue", href: "/catalogue" },
 /* { label: "Lilies", href: "/lilies" },*/
  { label: "Contact Us", href: "/contact" },
];

// ── Company Info ──────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "Red Mirchi Associates",
  tagline: "One Stop Solution For Horticulture",
  phone: "+91-7206317456",
  phone2: "+91-9812541200",
  email: "info@redmirchi.org",
  website: "www.redmirchi.org",
  website2: "redmirchiflowerbulbs.com",
  address: "A-4, Palika Bazaar, Jind, Haryana – 126102",
  city: "Jind, Haryana, India",
  established: "2009",
  partnerName: "Derck Schipper Bloembollen/Export B.V.",
  partnerAddress: "Stede Broecweg 10, 1611 HV Bovenkarspel, Holland",
};

// ── Stats ─────────────────────────────────────────────────────────────────────
export const STATS = [
  { label: "Years of Excellence", value: "15+", num: 15, suffix: "+" },
  { label: "Countries Served", value: "30+", num: 30, suffix: "+" },
  { label: "Orders Fulfilled", value: "100K+", num: 100, suffix: "K+" },
  { label: "Happy Clients", value: "1000+", num: 1000, suffix: "+" },
];

// ── Flower Varieties ──────────────────────────────────────────────────────────
export interface FlowerVariety {
  name: string;
  type: string;
  colorClass: string;
  emoji: string;
  bgGradient: string;
  /** Optional photo. Upload to public/images/catalogue/ and set path e.g. "/images/catalogue/orange-joy-pot-lily.jpg"
   *  Emoji shows as fallback when image is not yet uploaded. */
  image?: string;
}

export const POT_LILY_VARIETIES: FlowerVariety[] = [
  { name: "Orange Joy Pot Lily", type: "Pot Lily", colorClass: "orange", emoji: "🌺", bgGradient: "from-orange-100 to-orange-50", image: "/images/catalogue/orange-joy-pot-lily.jpg" },
  { name: "Tiny Glow Yellow",    type: "Pot Lily", colorClass: "yellow", emoji: "🌼", bgGradient: "from-yellow-100 to-yellow-50", image: "/images/catalogue/tiny-glow-yellow-pot-lily.jpg" },
  { name: "Rozalynn Pink",       type: "Pot Lily", colorClass: "pink",   emoji: "🌸", bgGradient: "from-pink-100 to-pink-50",   image: "/images/catalogue/rozalynn-pink-pot-lily.jpg" },
  { name: "Century Joy",         type: "Pot Lily", colorClass: "pink",   emoji: "🌷", bgGradient: "from-pink-100 to-rose-50",   image: "/images/catalogue/century-joy-pot-lily.jpg" },
  { name: "Red Matrix",          type: "Pot Lily", colorClass: "red",    emoji: "🔴", bgGradient: "from-red-100 to-red-50",     image: "/images/catalogue/red-matrix-pot-lily.jpg" },
  { name: "Golden Matrix",       type: "Pot Lily", colorClass: "yellow", emoji: "💛", bgGradient: "from-amber-100 to-yellow-50", image: "/images/catalogue/golden-matrix-pot-lily.jpg" },
  { name: "Orange Matrix",       type: "Pot Lily", colorClass: "orange", emoji: "🟠", bgGradient: "from-orange-100 to-amber-50", image: "/images/catalogue/orange-matrix-pot-lily.jpg" },
  { name: "White Romance",       type: "Pot Lily", colorClass: "white",  emoji: "🤍", bgGradient: "from-blue-50 to-slate-50",   image: "/images/catalogue/white-romance-pot-lily.jpg" },
  { name: "Trendy Dakota",       type: "Pot Lily", colorClass: "pink",   emoji: "💗", bgGradient: "from-fuchsia-100 to-pink-50", image: "/images/catalogue/trendy-dakota-pot-lily.jpg" },
];

export const ASIATIC_VARIETIES: FlowerVariety[] = [
  { name: "Brindisi",       type: "Asiatic Lily", colorClass: "pink",   emoji: "🌷", bgGradient: "from-pink-100 to-rose-50",   image: "/images/catalogue/brindisi-asiatic-lily.jpg" },
  { name: "Nashville",      type: "LA Lily",      colorClass: "yellow", emoji: "🌻", bgGradient: "from-yellow-100 to-amber-50", image: "/images/catalogue/nashville-la-lily.jpg" },
  { name: "Black Charm",    type: "LA Lily",      colorClass: "dark",   emoji: "🖤", bgGradient: "from-gray-200 to-gray-100",  image: "/images/catalogue/black-charm-la-lily.jpg" },
  { name: "Yellow Diamond", type: "Asiatic Lily", colorClass: "yellow", emoji: "💛", bgGradient: "from-yellow-100 to-yellow-50", image: "/images/catalogue/yellow-diamond-asiatic-lily.jpg" },
  { name: "Eyeliner",       type: "Asiatic Lily", colorClass: "white",  emoji: "🤍", bgGradient: "from-slate-100 to-blue-50",  image: "/images/catalogue/eyeliner-asiatic-lily.jpg" },
  { name: "Breakout",       type: "LA Lily",      colorClass: "red",    emoji: "❤️", bgGradient: "from-red-100 to-red-50",     image: "/images/catalogue/breakout-la-lily.jpg" },
  { name: "Pavia",          type: "Asiatic Lily", colorClass: "yellow", emoji: "🌟", bgGradient: "from-yellow-50 to-amber-50", image: "/images/catalogue/pavia-asiatic-lily.jpg" },
  { name: "Eremo",          type: "LA Lily",      colorClass: "orange", emoji: "🟠", bgGradient: "from-orange-100 to-orange-50", image: "/images/catalogue/eremo-la-lily.jpg" },
];

export const ORIENTAL_VARIETIES: FlowerVariety[] = [
  { name: "Labrador",       type: "Oriental Lily", colorClass: "pink",  emoji: "🌸", bgGradient: "from-pink-100 to-rose-50",   image: "/images/catalogue/labrador-oriental-lily.jpg" },
  { name: "Yelloween",      type: "OT Lily",       colorClass: "yellow",emoji: "🌼", bgGradient: "from-yellow-100 to-amber-50", image: "/images/catalogue/yelloween-ot-lily.jpg" },
  { name: "Profundo",       type: "OT Lily",       colorClass: "pink",  emoji: "💗", bgGradient: "from-fuchsia-100 to-pink-50", image: "/images/catalogue/profundo-ot-lily.jpg" },
  { name: "Zambesi",        type: "Oriental Lily", colorClass: "white", emoji: "🤍", bgGradient: "from-slate-100 to-blue-50",  image: "/images/catalogue/zambesi-oriental-lily.jpg" },
  { name: "Robina",         type: "Oriental Lily", colorClass: "pink",  emoji: "🌺", bgGradient: "from-rose-100 to-pink-50",   image: "/images/catalogue/robina-oriental-lily.jpg" },
  { name: "Tisento",        type: "OT Lily",       colorClass: "white", emoji: "⚪", bgGradient: "from-blue-50 to-slate-50",   image: "/images/catalogue/tisento-ot-lily.jpg" },
  { name: "Red Desire",     type: "Oriental Lily", colorClass: "red",   emoji: "🌹", bgGradient: "from-red-100 to-rose-50",    image: "/images/catalogue/red-desire-oriental-lily.jpg" },
  { name: "Santander",      type: "OT Lily",       colorClass: "white", emoji: "🌿", bgGradient: "from-green-50 to-slate-50",  image: "/images/catalogue/santander-ot-lily.jpg" },
  { name: "Bacardi",        type: "Oriental Lily", colorClass: "red",   emoji: "💝", bgGradient: "from-rose-100 to-red-50",    image: "/images/catalogue/bacardi-oriental-lily.jpg" },
  { name: "Moscow",         type: "OT Lily",       colorClass: "white", emoji: "❄️", bgGradient: "from-blue-50 to-indigo-50",  image: "/images/catalogue/moscow-ot-lily.jpg" },
  { name: "Tarrango",       type: "Oriental Lily", colorClass: "pink",  emoji: "🎀", bgGradient: "from-pink-100 to-fuchsia-50", image: "/images/catalogue/tarrango-oriental-lily.jpg" },
  { name: "Willke Alberty", type: "OT Lily",       colorClass: "white", emoji: "🌷", bgGradient: "from-purple-50 to-pink-50",  image: "/images/catalogue/willke-alberty-ot-lily.jpg" },
];

// ── Asiatic Lily Product Packs ────────────────────────────────────────────────
export interface LilyPack {
  id: string;
  color: string;
  emoji: string;
  type: "asiatic" | "oriental";
  bgGradient: string;
  accentColor: string;
  qty: number;
  price: number;
  tagline: string;
  desc: string;
  usages: string[];
  premiumNote?: { icon: string; title: string; text: string };
}

export const ASIATIC_PACKS: LilyPack[] = [
  {
    id: "a-pink", color: "Pink", emoji: "🌸", type: "asiatic", qty: 6, price: 350,
    bgGradient: "from-pink-100 via-pink-50 to-rose-200",
    accentColor: "#e91e63",
    tagline: "Enjoy the beauty of Exotic Lilies in your garden or floral arrangements.",
    desc: "Asiatic Lily Pink brings a burst of romantic charm with upward-facing blooms. Holland-certified bulbs perfect for cutting gardens, perennial beds, and decorative pots. Grows up to 40 CM.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "✂️ Cut Flower", "🌿 Perennial Bed"],
  },
  {
    id: "a-white", color: "White", emoji: "🤍", type: "asiatic", qty: 6, price: 350,
    bgGradient: "from-blue-50 via-slate-50 to-blue-100",
    accentColor: "#1976d2",
    tagline: "Pure elegance — perfect for weddings, gifting & garden borders.",
    desc: "Snow-white blooms with remarkable fragrance and multi-flowered stems. Ideal for wedding arrangements, corporate interiors, and elegant garden displays.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "💒 Weddings", "🎁 Gift"],
  },
  {
    id: "a-yellow", color: "Yellow", emoji: "🌻", type: "asiatic", qty: 6, price: 350,
    bgGradient: "from-yellow-100 via-yellow-50 to-amber-100",
    accentColor: "#f9a825",
    tagline: "Sunshine in a bulb — brighten every garden and arrangement.",
    desc: "Bold golden-yellow blooms with red-spotted centres. Among the most vibrant in the Asiatic range — perfect for cutting arrangements and commercial displays.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "✂️ Cut Flower", "🏢 Commercial"],
  },
  {
    id: "a-orange", color: "Orange", emoji: "🌺", type: "asiatic", qty: 6, price: 350,
    bgGradient: "from-orange-100 via-orange-50 to-amber-100",
    accentColor: "#ff6d00",
    tagline: "Bold, fiery blooms that command attention in any setting.",
    desc: "Vibrant flame-orange petals with distinctive dark spots. A showstopper that thrives outdoors and makes a dramatic statement in cut flower arrangements.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "✂️ Cut Flower", "🌿 Landscaping"],
  },
  {
    id: "a-red", color: "Red", emoji: "❤️", type: "asiatic", qty: 6, price: 350,
    bgGradient: "from-red-100 via-red-50 to-rose-100",
    accentColor: "#d32f2f",
    tagline: "Passionate, bold, and dramatically beautiful in every bloom.",
    desc: "Deep crimson-red blooms with lush green foliage. Perfect for corporate environments, retail displays, special events, and cutting gardens.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "✂️ Cut Flower", "🎉 Events"],
  },
  {
    id: "a-mix", color: "Mix", emoji: "💐", type: "asiatic", qty: 6, price: 350,
    bgGradient: "from-green-50 via-yellow-50 to-pink-50",
    accentColor: "#388e3c",
    tagline: "A celebration of colours — the most popular pack for gifting & gardens.",
    desc: "Our most versatile pack. 6 Holland-certified bulbs in a beautiful assortment of pinks, yellows, oranges, reds and whites — creating a stunning multi-coloured display.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "🎁 Best Gift", "🏡 Garden Bed"],
  },
];

export const ORIENTAL_PACKS: LilyPack[] = [
  {
    id: "o-pink", color: "Pink", emoji: "🌸", type: "oriental", qty: 3, price: 350,
    bgGradient: "from-pink-200 via-rose-100 to-fuchsia-100",
    accentColor: "#ad1457",
    tagline: "Majestic pink blooms with an intoxicating exotic fragrance.",
    desc: "Oriental Lily Pink produces extraordinarily large, deeply fragrant blooms. Premium Holland variety — the top choice for wedding floristry, luxury interiors, and gifting.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "💒 Weddings", "🎁 Premium Gift"],
    premiumNote: { icon: "⭐", title: "Why 3 Bulbs? — Premium Sizing", text: "Oriental bulbs are significantly larger, producing bigger, more fragrant blooms. 3 premium bulbs deliver the same wow-factor as 6 standard ones." },
  },
  {
    id: "o-white", color: "White", emoji: "🤍", type: "oriental", qty: 3, price: 350,
    bgGradient: "from-purple-100 via-fuchsia-50 to-pink-50",
    accentColor: "#7b1fa2",
    tagline: "Regal purity — the most sought-after variety for weddings.",
    desc: "Large, trumpet-shaped, pure white blooms with an intensely sweet fragrance. The ultimate statement for luxury hotels, upscale events, and premium gifting.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "💒 Weddings", "🏨 Luxury Hotels"],
    premiumNote: { icon: "🌿", title: "Famous Fragrance", text: "Oriental lilies are celebrated worldwide for their rich, sweet scent — far more intense than Asiatic varieties. A single bloom can fill an entire room." },
  },
  {
    id: "o-red", color: "Red", emoji: "🌹", type: "oriental", qty: 3, price: 350,
    bgGradient: "from-red-200 via-rose-100 to-pink-50",
    accentColor: "#b71c1c",
    tagline: "Deeply dramatic — rich crimson with signature white-edged petals.",
    desc: "Deep crimson blooms with distinctive white petal edges create a dramatic bicolour effect. An unforgettable choice for premium events and luxury floral arrangements.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "🎉 Events", "🏨 Luxury Spaces"],
    premiumNote: { icon: "💎", title: "Bicolour Excellence", text: "The signature white-edged petals of Oriental Red make it unlike any other lily — a rare, luxurious look highly sought after for high-end décor." },
  },
  {
    id: "o-yellow", color: "Yellow", emoji: "🌼", type: "oriental", qty: 3, price: 350,
    bgGradient: "from-lime-100 via-yellow-50 to-green-100",
    accentColor: "#558b2f",
    tagline: "A rare Oriental in golden hues — exotic, fragrant, and breathtaking.",
    desc: "Oriental Lily Yellow is among the rarest varieties — warm, luminous golden blooms with the characteristic sweet fragrance. A true garden treasure and collector's prized possession.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "✂️ Cut Flower", "🌿 Collector's Pick"],
    premiumNote: { icon: "🌟", title: "Rare Yellow Oriental", text: "Yellow Oriental lilies combine the large exotic blooms of Oriental varieties with a cheerful golden hue — one of the rarest colour expressions in the lily world." },
  },
  {
    id: "o-mix", color: "Mix", emoji: "💐", type: "oriental", qty: 3, price: 350,
    bgGradient: "from-fuchsia-100 via-purple-50 to-yellow-50",
    accentColor: "#6a1b9a",
    tagline: "The ultimate Oriental experience — a luxurious multi-variety fragrant collection.",
    desc: "3 premium Holland-certified bulbs from different colour families. Each produces large, dramatically beautiful, intensely fragrant blooms. The perfect luxury gift.",
    usages: ["🏡 Indoor", "☀️ Outdoor", "👑 Luxury Gift", "🏨 Premium Spaces"],
    premiumNote: { icon: "👑", title: "The Ultimate Lily Gift", text: "3 curated Oriental varieties that bloom at slightly different times — filling your garden with months of fragrant, luxury blooms from a single pack." },
  },
];

// ── Contact form ──────────────────────────────────────────────────────────────
export const PURPOSES = [
  { value: "Bulk Flower Bulb Order", emoji: "🌷" },
  { value: "Retail Purchase", emoji: "🛒" },
  { value: "Polyhouse / Greenhouse", emoji: "🏡" },
  { value: "Agri Consulting", emoji: "📋" },
  { value: "Contract Farming", emoji: "🤝" },
  { value: "Seeds & Irrigation", emoji: "💧" },
  { value: "Training & Workshops", emoji: "🎓" },
  { value: "General Enquiry", emoji: "💬" },
  { value: "Partnership / Trade", emoji: "🌐" },
  { value: "Other", emoji: "📌" },
] as const;

export const INDIAN_STATES = [
  "Haryana","Punjab","Himachal Pradesh","Uttarakhand","Uttar Pradesh",
  "Rajasthan","Delhi","Maharashtra","Karnataka","Tamil Nadu","Kerala",
  "West Bengal","Assam","Manipur","Nagaland","Meghalaya","Sikkim",
  "Andhra Pradesh","Telangana","Odisha","Bihar","Jharkhand","Gujarat",
  "Madhya Pradesh","Chhattisgarh","Other",
];
