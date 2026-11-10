# JPNS Enterprise LLC — Luxury Corporate Website

## Original Problem Statement
High-end, responsive luxury marketing website for JPNS Enterprise LLC showcasing the parent brand, five DBAs/divisions, impact metrics, careers, and partnership opportunities. Dark luxury aesthetic: deep purple, black, gold. Tagline: "Strength. Vision. Legacy." / "One Enterprise. Unlimited Impact."

## Architecture
- **Frontend**: React 19 (JS), Tailwind, framer-motion (scroll reveals, masked hero, animated counters, parallax), lenis (smooth momentum scroll), react-fast-marquee, lucide-react icons, sonner toasts.
- **Backend**: FastAPI, all routes `/api` prefixed. Endpoints: `/contact`, `/partner`, `/careers`, `/newsletter`, `/impact`.
- **Database**: MongoDB — `submissions` (contact/partner/career) and `subscribers` (newsletter).
- **Email**: Resend via Emergent-managed proxy. Owner notifications → info@jpnsenterprise.com; newsletter welcome email → subscriber. Sender display name "JPNS Enterprise LLC".

## User Personas
Prospective partners/investors, DBA clients, job seekers, media/community, women seeking inspiration.

## Core Requirements (static)
Pages: Home, About, Divisions overview, 5 Division detail pages, Impact, Careers, Contact, Partner With Us. Responsive, animated, SEO meta tags, accessible dark theme.

## Implemented (2026-06)
- Kinetic hero with masked line-by-line reveal + parallax background
- Editorial marquee, numbered manifesto pillars, "One Enterprise" section
- Asymmetric DBA bento grid + 5 division detail pages (parallax hero template)
- Impact page with framer-motion animated counters
- Careers listing + application form (saves to DB + email)
- Contact + Partner forms (DB + Resend email)
- Newsletter subscription (footer, DB + welcome email)
- Sticky glass navbar, mobile menu, luxury footer, SEO/OG meta
- All backend endpoints verified via curl; frontend verified via screenshots
- Shop the Tea (2026): "Shop" nav tab + /shop page selling Jewells Herbal Magic Blend via Stripe Checkout (Flow A claimable sandbox, test mode) — Apple Pay / card / Cash App Pay, shipping address collection, quantity selector. Backend payments_router: /api/shop/product, /api/payments/checkout, /api/payments/status/{id}, /api/stripe/webhook; orders stored in Mongo payment_transactions. Price is a placeholder $25.00 (lookup_key herbal_blend_tin) pending real price. /payment/success polls status; /payment/cancel. Verified by testing_agent (backend+frontend 100%).

## Design Tokens
void #0B0B0B, deep purple #2B0B3D, vivid purple #6B1FAF, gold #D4AF37. Playfair Display (serif headings) + Montserrat (body). Sharp 0px radius edges, gold line borders, grain overlay.

## Implemented (2026-07)
- Division order changed site-wide (single source: `DIVISIONS` in `frontend/src/data.js`): 01 Events & Entertainment, 02 Self-Care, 03 Restaurant Chains, 04 Luxury Car Rentals, 05 Philanthropy. Applies to Home "Five worlds. One standard." cards, Divisions page rows, footer links, and DivisionDetail next/prev nav.

## Implemented (2026-07-09, batch 2)
- Self-Care page: "Enquire to Order" replaced with **Buy Now** button (hero + bottom CTA) that creates a Stripe Checkout session directly (`POST /api/payments/checkout`, qty 1, `herbal_blend_tin`) and redirects. Added "Looking for larger or wholesale orders? Click here to enquire to order" link → /contact under both buttons.
- Self-Care page: new Reviews/Testimonials section ("Loved by every sip.") with 3 sample 5-star testimonial cards (placeholder content — swap with real reviews when provided).
- Shop page: "Secure checkout by Stripe" moved to its own line beneath "Ships within the US · Caffeine free".
- Contact page: removed Headquarters and Hours rows (online-only business); Email + Phone remain.
- Face cropping: added per-division `focus` (object-position) field in `data.js`; Home cards and Divisions rows consume it. Events flyer = `object-[20%_15%]` (full face visible), Philanthropy = `object-[50%_30%]`.
## Implemented (2026-07-10, batch 6 — Homepage rebuilt to reference mockup v2)
- Home.jsx hero rebuilt to user's exact reference: giant serif headline (text-6xl→8xl) "Strength. Vision. Legacy." with gold italic Legacy, gold ring arc accents on far left, rectangular gold EXPLORE DIVISIONS / outline PARTNER WITH US buttons, founder photo full-bleed on right 52% (absolute, blends into purple bg via left gradient), script signature block (Great Vibes font) "Jewell Proby Shine / Founder & CEO" with crown, bottom-right over photo on purple glass patch.
- Division cards directly below hero in reference order: Wellness (shows "Jewell's Herbal Magic Blend"), Luxury Car Rentals, Restaurant Chains, Events & Entertainment, Philanthropy — rounded-2xl, thick gold borders, centered gold icon + serif title, image, caption line (e.g. "Herbal Teas · Self-Care · Restoration"). Mobile: snap-scroll swipeable row; desktop lg:grid-cols-5. Cards link to existing division pages. Old "Five worlds" header block removed; marquee now follows cards.
- index.css: added Great Vibes font import.
- Verified: desktop 1366 + mobile 375 screenshots match reference; all 5 cards/link testids intact.

## Implemented (2026-07-10, batch 5 — Correct tea photo + subscriptions)
- Replaced `/tea-jar.jpg` with user's corrected photo (label reads "Jewell's Herbal Magic Blend", not "Tea"). Used on Shop, SelfCare hero, division cards.
- Added optional subscriptions: Stripe recurring prices `herbal_blend_weekly_sub` ($30/week) and `herbal_blend_monthly_sub` ($100/month) created via setup_stripe.py (idempotent, handles recurring interval).
- Backend: `/api/shop/product` options now include `sub` object (lookup_key, interval, amount) for weekly/monthly; checkout auto-selects `mode="subscription"` when the price is recurring (trial stays one-time).
- Shop page: "Purchase Type" toggle (One-Time vs Subscribe) appears for Weekly/Monthly sizes, hidden for Trial; price line shows "every week/month"; recurring note shown when subscribed.
- Verified: API returns sub objects; subscription checkout session curl OK; UI toggles prices correctly; toggle hidden on trial.

## Implemented (2026-07-10, batch 4 — Tea pricing + Homepage restyle)
- Tea pricing live (one-time purchases): Trial 1.25 oz $15 (`herbal_blend_trial`), Weekly Supply 2.5 oz $30 (`herbal_blend_weekly`), Monthly Supply 10 oz $100 (`herbal_blend_monthly`). Created in Stripe sandbox via `setup_stripe.py`; old $25 placeholder price (`herbal_blend_tin`) deactivated.
- Backend `/api/shop/product` now returns `{name, currency, options[]}`; checkout accepts any of the 3 lookup_keys (server.py).
- Shop page: size selector (3 gold cards), price/size display updates per selection, default = Weekly Supply; new user-uploaded photo `/tea-jar.jpg` as main product image.
- SelfCare page: Buy Now buttons now link to /shop (size selection happens there); hero image → tea-jar.jpg; spec strip shows "Sizes 1.25 · 2.5 · 10 oz". data.js self-care card image → tea-jar.jpg.
- Homepage restyled to user's reference mockup (design blueprint: /app/design_guidelines.json): vivid royal purple gradient hero (from #2B0B3D via #6B1FAF to #140321, no stock photo bg), bold serif headline ≤text-6xl with gold italic Legacy, mockup description copy, pill-shaped gold/outline CTAs, founder photo in rounded-2xl gold-bordered frame with glass signature bar ("Jewell Proby Shine / Founder & CEO"), five rounded gold-bordered division cards in one row (lg:grid-cols-5) with gold lucide icons (Leaf/Mic/UtensilsCrossed/Car/Heart), images with focus anchors. Mobile stacks cleanly.
- Verified: screenshots desktop 1366 + mobile 375; /api/shop/product returns 3 options; checkout curl per size returns Stripe URL; price switches $15/$30/$100 in UI.

## Implemented (2026-07-09, batch 3 — SEO + rename + About)
- Division order changed site-wide per user: 01 Self-Care, 02 Events & Entertainment, 03 Restaurant Chains, 04 Luxury Car Rentals, 05 Philanthropy (`DIVISIONS` in `data.js`; propagates to Home, Divisions, Footer, DivisionDetail nav).
- Product renamed site-wide to **Jewell's Herbal Magic Blend** (SelfCare, Shop, PaymentSuccess, data.js, setup_stripe.py; Stripe product `prod_Vb7qdmKbYPWjkR` renamed via API).
- Home hero description updated to brief copy: "An enterprise built on ambition, elevated by exceptional experiences…"
- About: fixed "Enterprisess" typo; founder bio expanded (Athi River Kenya, women's empowerment); new "The Creed" section explaining Strength / Vision / Legacy.
- SEO pack (farm-seo-setup): static head completed in `public/index.html` (robots meta, og:site_name/locale/image, Twitter card, Organization JSON-LD with founder Person — all confirmed facts only, no ratings/prices); real `<noscript>` content fallback; `public/robots.txt` (AI crawler group + Disallow /api/), `public/sitemap.xml` (12 routes, gojpns.net), `public/llms.txt`; new `src/components/Seo.jsx` (dependency-free per-route title/description) added to all 10 pages.
- Verified: per-route titles in DOM, card order, JSON-LD parses, robots/sitemap/llms serve as real files, no preview-host leaks. Live site needs redeploy + "Search Engine Crawling" toggle ON for SEO to take effect.

## Backlog / Remaining
- P1: Swap Restaurant Chains food photo when user provides new image
- P1: Real content swap (leadership bios, photos, exact stats, logo)
- P2: Booking/reservation flows for Car Rentals/Events/Restaurants
- P2: Resume upload on Careers (object storage)
- P2: Admin dashboard to view submissions
