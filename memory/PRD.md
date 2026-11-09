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
- Divisions page Philanthropy card image: `object-[50%_30%]` anchor so faces in phil-kids.jpg are not cropped (per-page override in `Divisions.jsx`).

## Backlog / Remaining
- P1: Final tea price from user to replace $25 placeholder (`backend/setup_stripe.py`, `Shop.jsx`)
- P1: Swap Restaurant Chains food photo when user provides new image
- P1: Real content swap (leadership bios, photos, exact stats, logo)
- P2: Booking/reservation flows for Car Rentals/Events/Restaurants
- P2: Resume upload on Careers (object storage)
- P2: Admin dashboard to view submissions
