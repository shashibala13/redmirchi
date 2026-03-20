# 🌸 Red Mirchi Associates — Complete Next.js Website
1
A full-stack **Next.js 14** corporate website for Red Mirchi Associates, India's leading agro-horti floriculture solution provider. Converted from 7 standalone HTML pages into a unified, production-ready Next.js application with **AWS SES** email integration.

---

## 📁 Page Structure

| Route | Page | Source HTML |
|-------|------|-------------|
| `/` | Home — Hero, Stats, Offerings, Flowers, About, Testimonials, CTA | `red-mirchi-associates.html` |
| `/about` | About Us — Story, Vision, Services, Team, Partner, Coverage | `about-us.html` |
| `/catalogue` | Full Flower Bulb Catalogue — All 15+ varieties | `red-mirchi-catalogue.html` |
| `/lilies` | Lily Hub — Asiatic + Oriental with tab switcher | `lily-bulbs-complete.html` |
| `/lilies/asiatic` | → Redirects to `/lilies` | `asiatic-oriental-lily-products.html` |
| `/lilies/oriental` | → Redirects to `/lilies` | `oriental-lily-products.html` |
| `/media` | Media Centre — Gallery, Projects, Team, Events, Clients | `media-centre.html` |
| `/contact` | Contact Us — Full form with AWS SES | `contact-us.html` |
| `POST /api/contact` | Contact form API — validates, rate-limits, sends emails | — |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your AWS credentials and email addresses
```

### 3. Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (fonts + metadata)
│   ├── globals.css              # Tailwind + custom CSS
│   ├── page.tsx                 # Home page /
│   ├── about/page.tsx           # About Us /about
│   ├── catalogue/page.tsx       # Catalogue /catalogue
│   ├── lilies/
│   │   ├── page.tsx             # Lily Hub /lilies
│   │   ├── asiatic/page.tsx     # Redirect → /lilies
│   │   └── oriental/page.tsx    # Redirect → /lilies
│   ├── media/page.tsx           # Media Centre /media
│   ├── contact/page.tsx         # Contact /contact
│   └── api/contact/route.ts     # POST /api/contact (SES)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky responsive nav (active route aware)
│   │   └── Footer.tsx           # Footer with links + social
│   ├── sections/
│   │   ├── home/                # HomeHero, HomeStats, HomeOfferings, etc.
│   │   ├── about/               # All about sections (index.tsx + barrel exports)
│   │   ├── catalogue/           # CatalogueContent with sticky nav
│   │   ├── lilies/              # LiliesContent with type switcher
│   │   ├── media/               # MediaContent with gallery + filter
│   │   └── contact/             # ContactForm + ContactInfoPanel
│   └── ui/
│       ├── StatCounter.tsx      # Animated counter (IntersectionObserver)
│       ├── SectionHeader.tsx    # Reusable section heading
│       └── FlowerCard.tsx       # Reusable flower variety card
│
├── hooks/
│   ├── useScrollReveal.ts       # Scroll-triggered reveal animations
│   └── useCountUp.ts            # Number counter animation
│
├── lib/
│   ├── constants.ts             # All data: varieties, packs, nav, company info
│   └── ses.ts                   # AWS SES client + email HTML builders
│
└── types/
    └── contact.ts               # Zod schema + TypeScript types
```

---

## ⚙️ AWS SES Setup

### Step 1: Create IAM User
1. Go to **AWS Console → IAM → Users → Create User**
2. Name: `redmirchi-ses-user`
3. Attach this minimal policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["ses:SendEmail", "ses:SendRawEmail"],
    "Resource": "*"
  }]
}
```
4. Create **Access Key** and copy to `.env.local`

### Step 2: Verify Email Identities in SES
1. **AWS Console → Amazon SES → Verified Identities**
2. Verify:
   - `noreply@redmirchi.org` — sender address
   - `info@redmirchi.org` — admin inbox
   - Or verify the entire domain `redmirchi.org` for production

### Step 3: Move Out of Sandbox (Production)
- **SES Console → Account Dashboard → Request Production Access**
- Required to send to unverified email addresses
- Usually approved within 1–2 business days

### Step 4: Region
- Use `AWS_REGION=ap-south-1` (Mumbai) for India users for lowest latency

---

## 📧 Email Flow

```
User submits /contact form
     ↓
POST /api/contact
     ↓ Zod validation + rate limiting (5 req/15min per IP)
     ↓ Generate Reference ID (e.g. RMA-LK2MX4-AB3C)
     ↓
Promise.allSettled([
  Admin email → info@redmirchi.org
    Subject: [Purpose] Subject — Name (RefID)
    Body: Full details + Reply/Call/WhatsApp buttons
  ,
  Confirmation email → user@example.com
    Subject: ✅ We've received your message — Ref: RefID
    Body: Next steps + submission summary
])
     ↓
{ success: true, referenceId: "RMA-..." }
```

---

## 🎨 Design System

### Fonts (Google Fonts via next/font)
| Font | Variable | Usage |
|------|----------|-------|
| Cormorant Garamond | `--font-cormorant` | All headings, display text |
| DM Sans | `--font-dm-sans` | Body text, UI elements |
| Bebas Neue | `--font-bebas` | Labels, overlines, numbers |

### Color Palette
```css
--magenta: #b0257e      /* Primary brand */
--magenta-deep: #7a1558  /* Dark variant */
--magenta-light: #d4409e /* Light variant */
--green: #2d7a3a         /* Success, nature */
--gold: #e8a020          /* Accents, premium */
--cream: #fdf8f2         /* Background */
--ink: #12100e           /* Dark sections */
```

### CSS Classes
```css
.btn-magenta      /* Primary CTA button */
.btn-ghost        /* Secondary outline button */
.form-input       /* Form field base style */
.form-input-error /* Error state */
.form-input-valid /* Valid state */
.chip-label       /* Radio chip labels */
.chip-checked     /* Selected chip */
.flower-card      /* Flower variety card */
.section-tag      /* Section label (e.g. "Our Story") */
.section-title-serif /* Cormorant serif heading */
.reveal           /* Scroll-triggered fade-up */
.reveal-left      /* Scroll-triggered slide-left */
.reveal-right     /* Scroll-triggered slide-right */
```

---

## 🔒 Security Features

| Feature | Implementation |
|---------|----------------|
| Server-side validation | Zod schema on API route |
| Client-side validation | React Hook Form + zodResolver |
| Rate limiting | 5 req / 15 min per IP (in-memory) |
| CSRF protection | Built-in via Next.js App Router |
| Environment secrets | `.env.local` — never committed |

### Production Rate Limiting (Recommended)
Replace in-memory rate limit with Upstash Redis:
```bash
npm install @upstash/ratelimit @upstash/redis
```
Add to `.env.local`:
```
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy

# Add env vars:
vercel env add AWS_ACCESS_KEY_ID
vercel env add AWS_SECRET_ACCESS_KEY
vercel env add AWS_REGION
vercel env add SES_FROM_EMAIL
vercel env add ADMIN_EMAIL
```

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next@14` | React framework with App Router |
| `react-hook-form` | Form state management |
| `zod` | Schema validation (shared client + server) |
| `@hookform/resolvers` | Connects Zod to RHF |
| `@aws-sdk/client-ses` | AWS SES email sending |
| `tailwindcss` | Utility-first CSS |
| `lucide-react` | Icon library |
| `clsx` | Conditional classNames |
| `framer-motion` | Optional animation enhancement |

---

## 🔧 Adding New Pages

1. Create `src/app/new-page/page.tsx`
2. Add route to `NAV_LINKS` in `src/lib/constants.ts`
3. Build section components in `src/components/sections/new-page/`

## 🌸 Adding New Flower Varieties

Edit `src/lib/constants.ts` — add entries to `POT_LILY_VARIETIES`, `ASIATIC_VARIETIES`, `ORIENTAL_VARIETIES`, or the relevant pack arrays. The UI automatically renders them.

---

*Built for Red Mirchi Associates · Jind, Haryana, India · Est. 2009 · redmirchi.org*
